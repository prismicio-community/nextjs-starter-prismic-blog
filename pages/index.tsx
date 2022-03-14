import React from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";

import { Layout } from "../components/Layout";
import { SetupRepo } from "../components/SetupRepo";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getPlaiceholder } from "plaiceholder";
import Header from "../components/Home/Header/Header";
import { BlogHome, Homepage } from "../src/generated/graphql";
import { DeepNonNullRequired } from "../types";
import Image from "next/image";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const client = createClient({ previewData: context.previewData });

  let homepage: DeepNonNullRequired<Homepage> | null = null;
  try {
    const result = await client.getSingle("homepage");
    homepage = result.data as DeepNonNullRequired<Homepage>;
  } catch {
    // If we reach this line, it means a Blog Home document was not created
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  // const { base64 } = await getPlaiceholder(blogHome?.image.url, {
  // size: 64,
  // });

  return {
    props: {
      homepage,
      // base64,
    },
  };
};

/**
 * Homepage component
 */
const Home = ({ homepage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!homepage) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <Layout>
      <Head>
        <title>{prismicH.asText(homepage.title)}</title>
      </Head>
      <Header navItems={homepage.navitems} heroImage={homepage.header_image} />
      {/* <StyledContainer css={{ img: { transition: "0.3s ease" } }}>
        <Image
          src={blogHome.data.image.url}
          alt="cool"
          placeholder="blur"
          blurDataURL={base64}
          width={blogHome.data.image.dimensions.width}
          height={blogHome.data.image.dimensions.height}
          layout="responsive"
        />
      </StyledContainer> */}
    </Layout>
  );
};

export default Home;
