import { Handlers, PageProps } from "$fresh/server.ts";
import { dev } from "$fresh/src/dev/dev_command.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.4.0/mod.ts";
import { EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_TO } from "../../env.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const formData = JSON.parse(await req.text()); // Parse JSON data
    console.log("Form data:", formData);

    // Split the EMAIL_ADDRESS into username and hostname
    const [username, hostname] = EMAIL_ADDRESS.split("@");
    console.log("Email username:", username);
    console.log("Email hostname:", hostname);
    console.log("Email password:", EMAIL_PASSWORD);
    console.log("Email to:", EMAIL_TO);

    // Initialize the SMTP client
    const client = new SMTPClient({
      connection: {
        hostname,
        port: 587,
        tls: false, // Assuming you want to use TLS
        auth: {
          username,
          password: EMAIL_PASSWORD,
        },
      },
    });

    // Send the email
    /*
    await client.send({
      from: EMAIL_ADDRESS,
      to: EMAIL_TO,
      subject: "Inquiry from " + formData.name,
      content: "auto",
      html:
        `<h1>Email from: <a href="mailto://${formData.email}">${formData.email}</a></h1><br/><h2>Birth Date: ${formData.birthDate}</h2><br/><h3>Message:</h3><p>${formData.message}</p>`,
    });
    */

    // Close the client
    await client.close();

    // Instead of ctx.render, return JSON directly
    return new Response(JSON.stringify({ success: true, params: formData }));
  },
};

export default function AssessmentRequest(props: PageProps) {
  const { params }: { params: Record<string, string> } = props.data;
  return (
    // This can also be changed to return JSON if you like
    <div class="p-4 border-b border-gray-300">
      <p class="text-center">
        Thanks for contacting us! We will be in touch with you shortly.
      </p>
    </div>
  );
}
