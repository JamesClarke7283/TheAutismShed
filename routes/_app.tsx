import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component, url }: AppProps) {
  const pathname = url.pathname;
  const current_year = new Date().getFullYear();
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
        <Header active={pathname} />
      </body>
      <footer>
        © The Autism Shed {current_year} All Rights Reserved.
      </footer>
    </html>
  );
}
