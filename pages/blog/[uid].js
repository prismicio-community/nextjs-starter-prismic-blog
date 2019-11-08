import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Text, Quote, ImageCaption } from 'components/slices'
import { Client } from 'prismic-configuration'
import { postStyles } from 'styles'
import DefaultLayout from 'layouts'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import Error from '../_error'

const Post = (props) => {
  const renderSliceZone = (sliceZone) => {
    return sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('image_with_caption'):
          return <ImageCaption slice={slice} key={'slice-' + index} />
        case ('quote'):
          return <Quote slice={slice} key={'slice-' + index} />
        case ('text'):
          return <Text slice={slice} key={'slice-' + index} />
        default:
          return null
      }
    })
  }

  if (!props.post) {
    return (
      // Call the standard error page if the document was not found
      <Error statusCode='404' />
    )
  } else {
    const post = props.post
    let titled = RichText.asText(post.data.title).length !== 0
    return (
      <DefaultLayout>
        <Head>
          <title key='title'>
            {titled ? RichText.asText(post.data.title) : 'Untitled'}
          </title>
        </Head>
        <div className='main'>
          <div className='outer-container'>
            <div className='back'>
              <NextLink href='/'>
                <a>back to list</a>
              </NextLink>
            </div>
            <h1>
              {titled ? RichText.asText(post.data.title) : 'Untitled'}
            </h1>
          </div>
          {renderSliceZone(post.data.body)}
        </div>
        <style jsx global>{postStyles}</style>
      </DefaultLayout>
    )
  }
}

Post.getInitialProps = async function ({ req, query }) {
  const { uid } = query
  const document = await this.getBlogPost(uid, req)
  return {
    post: document
  }
}

Post.getBlogPost = async function (uid, req) {
  try {
    return await Client(req).getByUID('post', uid)
  } catch (error) {
    console.error(error)
    return error
  }
}

export default Post
