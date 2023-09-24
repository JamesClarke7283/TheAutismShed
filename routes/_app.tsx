import { AppProps } from "$fresh/server.ts";
import Accreditations from "../components/Accreditations.tsx";
import Header from "../components/Header.tsx";

export default function App({ Component, url }: AppProps) {
  const pathname = url.pathname;
  const acc_props = [
    {
      img: "/images/accreditations/BPS.webp",
      alt: "British Psychological Society",
      url: "https://www.bps.org.uk/",
    },
    {
      img: "/images/accreditations/UKCP.webp",
      alt: "United Kingdom Council for Psychotherapy",
      url: "https://www.psychotherapy.org.uk/",
    },
    {
      img: "/images/accreditations/HCPC.webp",
      alt: "Health and Care Professions Council",
      url: "https://www.hcpc-uk.org/",
    },
    {
      img: "/images/accreditations/KAT.webp",
      alt: "Kent Autistic Trust",
      url: "https://www.kentautistictrust.org/",
    },
  ];
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
        <Accreditations accreditations_props={acc_props} />
        <Header active={pathname} />
      </body>
      <footer>
        © The Autism Shed 2015 All Rights Reserved.
      </footer>
    </html>
  );
}
