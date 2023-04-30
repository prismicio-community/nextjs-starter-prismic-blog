import React from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";

import { SetupRepo } from "../components/SetupRepo";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getPlaiceholder } from "plaiceholder";
import Header from "../components/Home/Header/Header";
import { HomepageDocument } from "../types.generated";
import About from "../components/Home/About/About";
import Services from "../components/Home/Services/Services";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const client = createClient({ previewData: context.previewData });

  let homepage: HomepageDocument["data"] | null = null;
  try {
    const result = await client.getSingle("homepage");
    homepage = result.data;
  } catch(e) {
    console.log('On CATCH', e)
    // If we reach this line, it means a Blog Home document was not created
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  const { base64 } = await getPlaiceholder(homepage?.headerImage.url ?? "", {
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
const Home = ({
  homepage,
  lqip,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!homepage) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <>
      <Head>
        <title>{prismicH.asText(homepage.title)}</title>
      </Head>
      <Header
        navItems={homepage.navigationItems}
        heroImage={homepage.headerImage}
        lqipImage={lqip}
      />
      <About />
      <Services />
    </>
  );
};

export default Home;
