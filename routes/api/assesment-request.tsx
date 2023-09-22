import { Handlers, PageProps } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.4.0/mod.ts";

import { EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_TO } from "../../env.ts";

export const handler: Handlers = {
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
    return new Response(JSON.stringify(formData));
  },
};
