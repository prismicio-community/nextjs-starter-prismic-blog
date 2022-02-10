import React from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { DefaultLayout } from "../layouts";
import { Header } from "../components/home/Header";
import { PostList } from "../components/home/PostList";
import { SetupRepo } from "../components/home/SetupRepo";

/**
 * Homepage component
 */
const Home = ({ blogHome, posts }) => {
  if (!blogHome) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <DefaultLayout>
      <Head>
        <title>{prismicH.asText(blogHome.data.headline)}</title>
      </Head>
      <Header
        image={blogHome.data.image}
        headline={blogHome.data.headline}
        description={blogHome.data.description}
      />
      <PostList posts={posts} />
    </DefaultLayout>
  );
};

export async function getStaticProps(context) {
  const client = createClient({ context });

  let blogHome = null;
  try {
    blogHome = await client.getSingle("blog-home");
  } catch {
    // If we reach this line, it means a Blog Home document was not created
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  const posts = await client.getAllByType("post", {
    orderings: [{ field: "my.post.date", direction: "desc" }],
  });

  return {
    props: {
      blogHome,
      posts,
    },
  };
}

export default Home;
