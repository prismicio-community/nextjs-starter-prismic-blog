import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

import { imagePropType } from 'utils/propTypes'
import { imageCaptionStyles } from 'styles'

import {
  shape,
  array
} from 'prop-types'

const DefaultComp = (props) => (
  <div className='post-part single container'>
    <div className='block-img'>
      <img src={props.imageUrl} alt={props.imageAlt} />
      {RichText.asText(props.caption) !== ''
        ? <p><span className='image-label'>
          {RichText.asText(props.caption)}
        </span></p>
        : <p />
      }
    </div>
    <style jsx global>{imageCaptionStyles}</style>
  </div>
)

const EmphasizedComp = (props) => (
  <div className='post-part single container'>
    <div className='block-img emphasized'>
      <img src={props.imageUrl} alt={props.imageAlt} />
      {RichText.asText(props.caption) !== ''
        ? <p><span className='image-label'>
          {RichText.asText(props.caption)}
        </span></p>
        : null
      }
    </div>
    <style jsx global>{imageCaptionStyles}</style>
  </div>
)

const FullWidthComp = (props) => (
  <Fragment>
    <div className='blog-header single'
      style={{ backgroundImage: 'url(' + props.imageUrl + ')' }}>
      <div className='wrapper'>
        {RichText.asText(props.caption) !== ''
          ? <h1>{RichText.asText(props.caption)}</h1>
          : null
        }
      </div>
    </div>
    <style jsx global>{imageCaptionStyles}</style>
  </Fragment>
)

const ImageCaption = ({ slice }) => {
  const imageUrl = slice.primary.image.url
  const imageAlt = slice.primary.image.alt
  const caption = slice.primary.caption

  switch (slice.slice_label) {
    case 'image-full-width':
      return <FullWidthComp caption={caption} imageUrl={imageUrl} imageAlt={imageAlt} />
    case 'emphasized':
      return <EmphasizedComp caption={caption} imageUrl={imageUrl} imageAlt={imageAlt} />
    default:
      return <DefaultComp caption={caption} imageUrl={imageUrl} imageAlt={imageAlt} />
  }
}

ImageCaption.propTypes = {
  slice: shape({
    primary: shape({
      caption: array,
      image: imagePropType.isRequired
    })
  }).isRequired
}

export default ImageCaption
