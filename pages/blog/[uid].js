import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { asText } from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react'

// Project components
import DefaultLayout from "../../layouts";
import { BackButton } from "../../components/post";
import { components } from '../../components/post/slices';

// Project functions & styles
import { Client } from "../../utils/prismicHelpers";
import { queryRepeatableDocuments } from '../../utils/queries';
import { postStyles } from "../../styles";

/**
 * Post page component
 */
const Post = ({ post }) => {

  if (post && post.data) {
    const hasTitle = asText(post.data.title).length !== 0;
    const title = hasTitle ? asText(post.data.title) : "Untitled";

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
          <SliceZone 
            slices={post.data.body}
            components={components} 
          />
        </div>
        <style jsx global>
          {postStyles}
        </style>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {

  const post = await Client().getByUID("post", params.uid) || {}
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: true,
  }
}

export default Post;
