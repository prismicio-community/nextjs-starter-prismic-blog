import React from 'react'
import { asDate } from '@prismicio/helpers'

/**
 * Post list item date component
 */
const PostDate = ({ date }) => {
  // Format the date to M d, Y
  const dateFormat = {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }
  const displayDate = new Intl.DateTimeFormat('en-US', dateFormat).format(asDate(date))

  return (
    <p className="blog-post-meta">
      <time className="created-at">{displayDate}</time>
    </p>
  )
}

export default PostDate
