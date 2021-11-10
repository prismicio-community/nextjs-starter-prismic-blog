import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

// Project components
import DefaultLayout from "../../layouts";
import { BackButton, SliceZone } from "../../components/post";
import Loader from "../../components/Loader";
import Custom404 from '../404';

// Project functions & styles
import { Client } from "../../utils/prismicHelpers";
import { queryRepeatableDocuments } from '../../utils/queries';
import useUpdatePreviewRef from '../../utils/useUpdatePreviewRef';
import { postStyles } from "../../styles";

/**
 * Post page component
 */
const Post = ({ post, previewRef }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }

  if (!post.id) {
    return <Custom404 />
  }

  useUpdatePreviewRef(previewRef, post.id)

  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

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
          <SliceZone sliceZone={post.data.body} />
        </div>
        <style jsx global>
          {postStyles}
        </style>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, previewData }) {
  const previewRef = previewData ? previewData.ref : null
  const refOption = previewRef ? { ref: previewRef } : null

  const post = await Client().getByUID("post", params.uid, refOption) || {}
  return {
    props: {
      previewRef,
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
