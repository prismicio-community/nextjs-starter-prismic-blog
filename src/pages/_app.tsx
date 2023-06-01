import Head from "next/head";
import Link from "next/link";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import { ThemeProvider } from "styled-components";

import { repositoryName } from "../../prismicio";
import "../styles/styles.scss";
import { AppProps } from "next/app";

import cn from "../lib/utils/cn";
import { montserrat, openSans, secularOne } from "../styles/fontLoad";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
      </Head>
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href} legacyBehavior>
            <a {...props} />
          </Link>
        )}
      >
        <ThemeProvider theme={{}}>
          <PrismicPreview repositoryName={repositoryName}>
            <main className={cn(montserrat.className, secularOne.variable)}>
              <Component {...pageProps} />
            </main>
          </PrismicPreview>
        </ThemeProvider>
      </PrismicProvider>
    </>
  );
};

export default App;
