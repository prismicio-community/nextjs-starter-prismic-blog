import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import PostDate from './PostDate'
import FirstParagraph from './FirstParagraph'
import { hrefResolver, linkResolver } from 'prismic-configuration'

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title) ? RichText.asText(post.data.title) : 'Untitled'
  
  return (
    <div className="blog-post">
      <NextLink
        as={linkResolver(post)}
        href={hrefResolver(post)}
      >
        <a>
          <h2>{title}</h2>
        </a>
      </NextLink>

      <PostDate date={post.data.date} />
      
      <FirstParagraph
        sliceZone={post.data.body}
        textLimit={300}
      />
    </div>
  )
}

export default PostItem
