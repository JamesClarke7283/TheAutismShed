import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const formData = JSON.parse(await req.text()); // Parse JSON data

    // Instead of ctx.render, return JSON directly
    return new Response(JSON.stringify({ success: true, params: formData }));
  },
};

export default function AssessmentRequest(props: PageProps) {
  const { params }: { params: Record<string, string> } = props.data;
  return (
    // This can also be changed to return JSON if you like
    <div>
      <h1>Data Received</h1>
      <ul>
        {Object.entries(params).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
