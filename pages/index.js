import React from "react";
import Head from "next/head";
import { asText } from '@prismicio/helpers';

// Project components & functions
import { Client } from "../prismicConfiguration";
import DefaultLayout from "../layouts";
import { Header, PostList, SetupRepo } from "../components/home";

/**
 * Homepage component
 */
const Home = ({ blogHome, posts }) => {

  if (blogHome && blogHome.data) {
    return (
      <DefaultLayout>
        <Head>
          <title>{asText(blogHome.data.headline)}</title>
        </Head>
        <Header
          image={blogHome.data.image}
          headline={blogHome.data.headline}
          description={blogHome.data.description}
        />
        <PostList posts={posts} />
      </DefaultLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps(context) {

  const blogHome = await Client({context}).getSingle("blog-home") || null

  const posts = await Client({context}).getByType("post",
   { orderings: 
    {
      field: 'my.post.date',
      direction: 'desc'
    }
  })

  return {
    props: {
      blogHome,
      posts: posts ? posts.results : [],
    }
  }
}

export default Home;
