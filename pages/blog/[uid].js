import React from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

// Project components
import DefaultLayout from "../../layouts";
import { BackButton } from "../../components/post";
import { components } from "../../slices";

// Project functions & styles
import { createClient, linkResolver } from "../../prismicio";
import { postStyles } from "../../styles";

/**
 * Page for a blog post.
 */
const BlogPostPage = ({ post }) => {
  const title = prismicH.asText(post.data.title) || "Untitled";

  return (
    <DefaultLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="main">
        <div className="outer-container">
          <BackButton />
          <h1>{title}</h1>
        </div>
        <SliceZone slices={post.data.slices} components={components} />
      </div>
      <style jsx global>
        {postStyles}
      </style>
    </DefaultLayout>
  );
};

export const getStaticProps = (context) => {
  const client = createClient({ context });

  const post = await client.getByUID("post", context.params.uid);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = () => {
  const client = createClient();

  const documents = await client.getAllByType("post");

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
};

export default BlogPostPage;
