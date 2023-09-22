import { h } from "preact";
import { useState } from "preact/hooks";

interface Message {
  name: string;
  email: string;
  birthDate: string;
  message: string;
}
export default function AssessmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    message: "",
  });
  const [serverResponse, setServerResponse] = useState<Message>({
    name: "",
    email: "",
    birthDate: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log("Form data:", formData);

    try {
      const response = await fetch("/api/assesment-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response_json = await response.json();
      console.log(response_json);

      if (response.ok) {
        console.log("Form data submitted successfully");
        setServerResponse(response_json);
        setIsSubmitted(true);
      } else {
        console.log("Failed to submit form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="w-full md:w-1/2 p-8">
      {isSubmitted
        ? (
          <div class="py-4 px-4 bg-green-200 items-centre">
            <div class="py-4 px-4">
              <div class="border-0 rounded border-primary">
                <div class="border-b-2">
                  <div class="w-full">
                    <div class="w-full overflow-y-auto">
                      <p class="text-center">
                        Thanks for contacting us!{" "}
                        <strong>{serverResponse.name}</strong>{" "}
                        We will be in touch with you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <form
            id="request-form"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
                onInput={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
                onInput={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-gray-600"
              >
                Birth Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                required
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
                onInput={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Reason for Request for Assessment{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
                onInput={handleChange}
              >
              </textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#6b625f] text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
    </div>
  );
}
