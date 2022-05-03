import React from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";

import { Layout } from "../components/Layout";
import { SetupRepo } from "../components/SetupRepo";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getPlaiceholder } from "plaiceholder";
import Header from "../components/Home/Header/Header";
import { HomepageDocument } from "../types.generated";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const client = createClient({ previewData: context.previewData });

  let homepage: HomepageDocument['data'] | null = null;
  try {
    const result = await client.getSingle<HomepageDocument>("homepage");
    homepage = result.data;
  } catch {
    // If we reach this line, it means a Blog Home document was not created
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  const { base64 } = await getPlaiceholder(homepage?.headerImage.url ?? '', {
    size: 64,
  });

  return {
    props: {
      homepage,
      lqip: base64,
    },
  };
};

/**
 * Homepage component
 */
const Home = ({ homepage, lqip }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!homepage) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <Layout>
      <Head>
        <title>{prismicH.asText(homepage.title)}</title>
      </Head>
      <Header navItems={homepage.navigationItems} heroImage={homepage.headerImage} lqipImage={lqip} />
    </Layout>
  );
};

export default Home;
