import { Handlers, PageProps } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.4.0/mod.ts";
import * as renderToString from "npm:preact-render-to-string";

import { EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_TO } from "../../env.ts";

interface Message {
  name: string;
  email: string;
  birthDate: string;
  message: string;
}

export const handler: Handlers<Message> = {
  async POST(req, ctx) {
    const formData = JSON.parse(await req.text()); // Parse JSON data
    console.log("Form data backend:", formData);

    // Split the EMAIL_ADDRESS into username and hostname
    const [username, hostname] = EMAIL_ADDRESS.split("@");

    // Initialize the SMTP client
    const client = new SMTPClient({
      connection: {
        hostname,
        port: 587,
        tls: false, // Assuming you don't want to use TLS
        auth: {
          username,
          password: EMAIL_PASSWORD,
        },
      },
    });

    // Send the email
    await client.send({
      from: EMAIL_ADDRESS,
      to: EMAIL_TO,
      subject: "Inquiry from " + formData.name,
      content: "auto",
      html:
        `<h1>Email from: <a href="mailto://${formData.email}">${formData.email}</a></h1><br/><h2>Birth Date: ${formData.birthDate}</h2><br/><h3>Message:</h3><p>${formData.message}</p>`,
    });

    // Close the client
    await client.close();

    const htmlElement = (
      <div class="py-4 px-4 bg-green-200">
        <div class="py-4 px-4">
          <div class="border-0 rounded border-primary">
            <div class="border-b-2">
              <div class="w-full">
                <div class="w-full overflow-y-auto">
                  <p class="text-center">
                    Thanks for contacting us! We will be in touch with you
                    shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    const html = renderToString.render(htmlElement, ctx);
    // Return JSON directly
    return new Response(html);
  },
};

export default function AssessmentRequest(props: PageProps<Message>) {
  const params: Message = props.data;
  return (
    <div className="p-4 border-b border-gray-300">
      <p className="text-center">
        Thanks for contacting us! We will be in touch with you shortly.
      </p>
    </div>
  );
}
