import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * Text slice component
 */
export const Text = ({ slice }) => (
  <div className="post-part single container">
    <PrismicRichText
      field={slice.primary.text}
    />
  </div>
)
