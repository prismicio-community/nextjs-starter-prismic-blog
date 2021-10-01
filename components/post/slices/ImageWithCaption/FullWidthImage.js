import React from 'react'
import Image from "next/image"
import Caption from './Caption'

/**
 * Full width image component
 */
const FullWidthImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url
  const imageAlt = slice.primary.image.imageAlt
  const caption = slice.primary.caption

  return (
    <div
      className="blog-header single"
    >
      <Image src={imageUrl} alt={imageAlt} layout="fill" objectPosition="top" objectFit="cover"/>
      <div className="wrapper">
        <Caption caption={caption} />
      </div>
    </div>
  )
}

export default FullWidthImage
