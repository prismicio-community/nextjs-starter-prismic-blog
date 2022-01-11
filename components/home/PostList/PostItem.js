import React from 'react'
import { PrismicLink, PrismicText } from '@prismicio/react'
import PostDate from './PostDate'
import FirstParagraph from './FirstParagraph'

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  
  return (
    <div className="blog-post">
      <PrismicLink document={post}>
        <h2>
          <PrismicText field={post.data.title} />
        </h2>
      </PrismicLink>

      <PostDate date={post.data.date} />
      
      <FirstParagraph
        sliceZone={post.data.body}
        textLimit={300}
      />
    </div>
  )
}

export default PostItem
