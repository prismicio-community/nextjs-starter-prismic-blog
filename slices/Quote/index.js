import React from 'react'
import { PrismicText } from '@prismicio/react'
import { quoteStyles } from 'styles'

/**
 * Quote slice component
 */
export const Quote = ({ slice }) => (
  <div className="post-part single container">
    <blockquote className="block-quotation">
      <PrismicText field={slice.primary.quote} />
    </blockquote>
    <style jsx global>{quoteStyles}</style>
  </div>
)
