import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <div className="post-part single container">
    <RichText
      render={slice.primary.text}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    />
  </div>
)

export default Text
