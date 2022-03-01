import Head from "next/head";
import { PrismicLink } from "@prismicio/react";

import { Layout } from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default NotFoundPage;
