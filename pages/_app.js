import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "../prismicio";
import { reset, globals } from "../styles/general";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </PrismicProvider>
    </>
  );
};

export default App;
