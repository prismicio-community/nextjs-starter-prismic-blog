import React, { Fragment } from 'react'
import { DefaultImage } from './DefaultImage'
import { FullWidthImage } from './FullWidthImage'
import { imageCaptionStyles } from 'styles'

/**
 * Image caption slice component
 */
export const ImageWithCaption = ({ slice }) => {

  const imageComponent =
    slice.slice_label === 'image-full-width' ? 
    <FullWidthImage slice={slice} /> :
    <DefaultImage slice={slice} />

  return (
    <Fragment>
      {imageComponent}
      <style jsx global>{imageCaptionStyles}</style>
    </Fragment>
  )
}
