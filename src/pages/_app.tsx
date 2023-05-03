import Head from "next/head";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { ThemeProvider } from "styled-components";

import { repositoryName } from "../../prismicio";

import "../styles/styles.scss";
import "react-tooltip/dist/react-tooltip.css";
import { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <GlobalStyles />
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href} legacyBehavior>
            <a {...props} />
          </Link>
        )}
      >
        <ThemeProvider theme={{}}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PrismicProvider>
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
};

export default App;
