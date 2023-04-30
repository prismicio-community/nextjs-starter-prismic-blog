import Head from "next/head";
import { PrismicLink } from "@prismicio/react";

const NotFoundPage = () => {
  return (
    <div>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="grid gap-8 py-10">
        <h1 className="text-center text-4xl font-black md:text-5xl">
          Page Not Found
        </h1>
        <p className="text-center">
          <PrismicLink href="/" className="hover:underline">
            Go to the homepage &rarr;
          </PrismicLink>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
