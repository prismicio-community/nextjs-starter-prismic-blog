import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <div className="post-part single container">
    <PrismicRichText
      field={slice.primary.text}
    />
  </div>
)

export default Text
