import React from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";

import { Layout } from "../components/Layout";
import { HomeHeader } from "../components/HomeHeader";
import { PostList } from "../components/PostList";
import { SetupRepo } from "../components/SetupRepo";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { Container, StyledContainer } from "@nextui-org/react";
import { getPlaiceholder } from "plaiceholder";
import { styled } from "../stitches.config";
import Header from "../components/Home/Header/Header";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const client = createClient({ previewData: context.previewData });

  let blogHome = null;
  try {
    blogHome = await client.getSingle("blog-home");
  } catch {
    // If we reach this line, it means a Blog Home document was not created
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  const { base64 } = await getPlaiceholder(blogHome?.data.image.url, {
    size: 64,
  });

  return {
    props: {
      blogHome,
      base64,
    },
  };
};


/**
 * Homepage component
 */
const Home = ({
  blogHome,
  base64,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!blogHome) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <Layout>
      <Head>
        <title>{prismicH.asText(blogHome.data.headline)}</title>
      </Head>
      <Header />

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
