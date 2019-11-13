import React from 'react'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

// Project components
import DefaultLayout from 'layouts'
import { BackButton, SliceZone } from 'components/post'
import Error from '../_error'

// Project functions & styles
import { Client } from 'utils/prismicHelpers'
import { postStyles } from 'styles'

/**
 * Post page component
 */
const Post = ({ post }) => {
  if (post) {
    const titled = RichText.asText(post.data.title).length !== 0
    const title = titled ? RichText.asText(post.data.title) : 'Untitled'

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
        <style jsx global>{postStyles}</style>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return <Error statusCode='404' />
}

/**
 * Query the post document from Prismic when the page is loaded
 */
Post.getInitialProps = async function ({ req, query }) {
  try {
    const { uid } = query
    const document = await Client(req).getByUID('post', uid)

    return {
      post: document
    }
  } catch (error) {
    console.error(error)
    return error
  }
}

export default Post
