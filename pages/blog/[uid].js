import React from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";

import { Layout } from "../../components/Layout";
import { BackButton } from "../../components/BackButton";

/**
 * Page for a blog post.
 */
const BlogPostPage = ({ post }) => {
  if (!post) {
    return null;
  }

  const title = prismicH.asText(post.data.title) || "Untitled";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div className="grid gap-6 md:gap-8">
          <BackButton />
          <h1 className="text-3xl font-black md:text-5xl md:leading-tight">
            {title}
          </h1>
        </div>
        <div className="py-5 md:pb-10">
          <SliceZone slices={post.data.slices} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const post = await client.getByUID("post", params.uid);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const documents = await client.getAllByType("post");

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
};

export default BlogPostPage;
