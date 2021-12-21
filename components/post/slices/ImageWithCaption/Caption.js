import React from 'react'
import { PrismicText } from '@prismicio/react'

/**
 * Image caption component
 */
export const Caption = ({ caption }) => {
  if (<PrismicText field={caption} /> !== '') {
    return (
      <p>
        <span className='image-label'>
          <PrismicText field={caption} />
        </span>
      </p>
    )
  }

  return null
}
