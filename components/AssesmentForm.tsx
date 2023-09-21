export default function AssessmentForm() {
  // Calculate the current date
  const currentDate = new Date();

  // Calculate 8 years ago and 80 years ago
  const minDate = new Date(currentDate);
  minDate.setFullYear(minDate.getFullYear() - 8);

  const maxDate = new Date(currentDate);
  maxDate.setFullYear(maxDate.getFullYear() - 80);

  // Convert the dates to YYYY-MM-DD format
  const minDateStr = minDate.toISOString().split("T")[0];
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <div className="w-full md:w-1/2 p-8">
      <form
        id="request-form"
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 w-full border"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email <span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 w-full border"
          />
        </div>

        <div>
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-600"
          >
            Birth Date <span class="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            min={maxDateStr}
            max={minDateStr}
            required
            className="mt-1 p-2 w-full border"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Reason for Request for Assessment{" "}
            <span class="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 p-2 w-full border"
          >
          </textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#6b625f] text-white px-4 py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
