import Head from "next/head";
import { PrismicLink } from "@prismicio/react";
import css from "styled-jsx/css";

import { Layout } from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <PrismicLink href="/">Go back home</PrismicLink>
      </div>
      <style jsx>{styles}</style>
    </Layout>
  );
};

export default NotFoundPage;

const styles = css`
  .container {
    margin: 0 auto;
    padding: 100px 0 100px 0;
    max-width: 700px;
  }
`;
