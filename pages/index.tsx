import React from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";

import { Layout } from "../components/Layout";
import { HomeHeader } from "../components/HomeHeader";
import { PostList } from "../components/PostList";
import { SetupRepo } from "../components/SetupRepo";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Container, StyledContainer } from "@nextui-org/react";
import { getPlaiceholder } from "plaiceholder";

/**
 * Homepage component
 */
const Home = ({ blogHome, posts, base64 }) => {
  if (!blogHome) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <Layout>
      <Head>
        <title>{prismicH.asText(blogHome.data.headline)}</title>
      </Head>
      <HomeHeader
        image={blogHome.data.image}
        headline={blogHome.data.headline}
        description={blogHome.data.description}
      />
      <div className="py-12 md:py-16">
        <PostList posts={posts} />
      </div>

      <StyledContainer css={{ 'img': { transition: '0.3s ease' } }}>
        <Image
          src={blogHome.data.image.url}
          alt="cool"
          placeholder="blur"
          blurDataURL={base64}
          width={blogHome.data.image.dimensions.width}
          height={blogHome.data.image.dimensions.height}
          layout="responsive"
        />
      </StyledContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
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
  const posts = await client.getAllByType("post", {
    orderings: [{ field: "my.post.date", direction: "desc" }],
  });

  return {
    props: {
      blogHome,
      posts,
      base64,
    },
  };
};

export default Home;
