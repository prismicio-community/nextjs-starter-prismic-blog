import Head from "next/head";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";

import "../src/styles/styles.scss";
import 'react-tooltip/dist/react-tooltip.css'
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href} legacyBehavior>
            <a {...props} />
          </Link>
        )}
      >
        <Component {...pageProps} />
      </PrismicProvider>
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
};

export default App;
