import Head from "next/head";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { NextUIProvider } from "@nextui-org/react";

import { repositoryName, linkResolver } from "../prismicio";

import "../styles.css";
import { AppProps } from "next/app";
import theme from "../theme/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </PrismicProvider>
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
};

export default App;
