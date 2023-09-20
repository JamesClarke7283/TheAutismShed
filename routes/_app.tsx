import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component, url }: AppProps) {
  const pathname = url.pathname;
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <title>The Autism Shed</title>
      </head>
      <body>
        <Header active={pathname} />
        <Component />
      </body>
    </html>
  );
}
