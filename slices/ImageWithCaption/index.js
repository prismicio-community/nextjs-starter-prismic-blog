import React from 'react'
import Image from 'next/image'
import { PrismicText } from '@prismicio/react'
import { imageCaptionStyles } from 'styles'

/**
 * Default image component
 */
export const ImageWithCaption = ({ slice }) => {
  const imageUrl = slice.primary.image.url
  const imageAlt = slice.primary.image.alt
  const caption = slice.primary.caption

  return (
    <div className="post-part single">
      <div className={`block-img ${slice.variation}`}>
        {slice.variation === 'fullWidthImage' ? (
          <div className="container">
            <Image src={imageUrl} alt={imageAlt} layout="fill" objectPosition="top" objectFit="cover"/>
          </div>
        ) : 
          <Image src={imageUrl} alt={imageAlt} layout="fill" objectFit="cover"/>
        }
        {<PrismicText field={caption} /> !== '' ? (
          <div className="wrapper">
            <p>
              <span className='image-label'>
                <PrismicText field={caption} />
              </span>
            </p>
          </div>
        ) : null}
      </div>
      <style jsx global>{imageCaptionStyles}</style>
    </div>
  )
}
