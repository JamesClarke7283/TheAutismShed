import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component, url }: AppProps) {
  const pathname = url.pathname;
  const current_year = new Date().getFullYear();
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="autism, diagnosis, assessment, assesments, Kent"
        />
        <meta
          name="description"
          content="The Autism Shed offers a compassionate, multi-disciplinary approach to autism assessment and support. Guided by lived experience and backed by gold standard measures, we are committed to empowering individuals and families to understand and navigate autism."
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="user-scalable=yes, width=device-width, initial-scale=1.0"
        />
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
