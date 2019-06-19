import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver, customLink } from 'prismic-configuration'

const Text = ({ slice }) => (
  <div className='post-part single container'>
    <RichText render={slice.primary.text} linkResolver={linkResolver} serializeHyperlink={customLink} />
  </div>
)

export default Text
