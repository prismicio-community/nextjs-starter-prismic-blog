import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

// Project components & functions
import DefaultLayout from "layouts";
import { Header, PostList, SetupRepo } from "components/home";
import { Client } from "utils/prismicHelpers";

/**
 * Homepage component
 */
const Home = ({ doc, posts }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <Head>
          <title>{RichText.asText(doc.data.headline)}</title>
        </Head>
        <Header
          image={doc.data.image}
          headline={doc.data.headline}
          description={doc.data.description}
        />
        <PostList posts={posts} />
      </DefaultLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("blog_home", ref ? { ref } : null) || {}

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
      orderings: "[my.post.date desc]",
      ...(ref ? { ref } : null)
    },
  )

  return {
    props: {
      doc,
      posts: posts ? posts.results : [],
      preview
    }
  }
}

export default Home;
