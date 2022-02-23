import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import css from "styled-jsx/css";

import { repositoryName, linkResolver } from "../prismicio";

import "../reset.css";

const NextLinkShim = ({ href, ...props }) => (
  <Link href={href}>
    <a {...props} />
  </Link>
);

const App = ({ Component, pageProps }) => {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
    >
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
      <style jsx global>
        {styles}
      </style>
    </PrismicProvider>
  );
};

export default App;

const styles = css.global`
  html {
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: #fff7c7; /* WebKit/Blink Browsers */
  }

  body {
    font-family: "Lato", sans-serif;
    font-size: 16px;
  }
`;
