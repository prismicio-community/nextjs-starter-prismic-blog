import Head from "next/head";
import { PrismicLink } from "@prismicio/next";

import { DefaultLayout } from "../layouts";
import { fourohfourStyles } from "../styles";

const NotFoundPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="fourohfour">
        <h1>404 - Page Not Found</h1>
        <PrismicLink href="/">Go back home</PrismicLink>
      </div>
      <style jsx global>
        {fourohfourStyles}
      </style>
    </DefaultLayout>
  );
};

export default NotFoundPage;
