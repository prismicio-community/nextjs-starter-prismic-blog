import React from "react";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";

// Project components & functions
import { Client } from "utils/prismicHelpers";
import DefaultLayout from "layouts";
import { Header, PostList, SetupRepo } from "components/home";
import useUpdatePreviewRef from 'utils/useUpdatePreviewRef'

/**
 * Homepage component
 */
const Home = ({ doc, posts, previewRef }) => {

  useUpdatePreviewRef(previewRef, doc.id)

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

export async function getStaticProps({ previewData }) {

  const ref = previewData ? previewData.ref : null

  const doc = await Client().getSingle("blog_home", ref ? { ref } : null) || {}

  const posts = await Client().query(
    Prismic.Predicates.at("document.type", "post"), {
      orderings: "[my.post.date desc]",
      ...(ref ? { ref } : null)
    },
  )

  return {
    props: {
      doc,
      posts: posts ? posts.results : [],
      previewRef: ref,
    }
  }
}

export default Home;
