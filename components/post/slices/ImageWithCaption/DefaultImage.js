import React from 'react'
import Caption from './Caption'

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url
  const imageAlt = slice.primary.image.alt
  const caption = slice.primary.caption

  return (
    <div className="post-part single container">
      <div className={`block-img ${slice.slice_label}`}>
        <img src={imageUrl} alt={imageAlt} />
        <Caption caption={caption} />
      </div>
    </div>
  )
}

export default DefaultImage
