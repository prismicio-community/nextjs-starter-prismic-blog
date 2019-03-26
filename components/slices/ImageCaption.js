import React from 'react';
import { RichText } from 'prismic-reactjs';

import { imagePropType } from 'utils/propTypes';

import {
  shape,
  string,
} from 'prop-types';

const DefaultComp = (props) => (
  <div className="post-part single container">
    <div className="block-img">
      <img src={props.imageUrl} alt={props.imageAlt} />
      {RichText.asText(props.caption) !== ""
        ? <p><span className="image-label">
          {RichText.asText(props.caption)}
        </span></p>
        : <p></p>
      }
    </div>
  </div>
);

const EmphasizedComp = (props) => (
  <div className="post-part single container">
    <div className="block-img emphasized">
      <img src={props.imageUrl} alt={props.imageAlt} />
      {RichText.asText(props.caption) !== ""
        ? <p><span className="image-label">
          {RichText.asText(props.caption)}
        </span></p>
        : null
      }
    </div>
  </div>
);

const FullWidthComp = (props) => (
  <Fragment>
    <div className="blog-header single"
      style={{ backgroundImage: 'url(' + props.imageUrl + ')' }}>
      <div className="wrapper">
        {RichText.asText(props.caption) !== ""
          ? <h1>{RichText.asText(props.caption)}</h1>
          : null
        }
      </div>
    </div>
    <style jsx>{`
      .blog-header {
        height: 85px;
        position: relative;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        background-color: white;
        background-size: cover;
        color: white;
        margin-bottom: 3rem;
      }
      .blog-header .wrapper {
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .blog-header .meta {
        opacity: 0.7;
      }
      .blog-header.single, .blog-header.home {
        height: 100vh;
      }
      .blog-header.single::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.2);
      }
      .blog-header.single::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0.05) 80%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.2) 100%);
        background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0.05) 80%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.2) 100%);
        background: -o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0.05) 80%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.2) 100%);
        background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0.05) 80%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.2) 100%);
        background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0.05) 80%, rgba(0,0,0,0.1) 90%, rgba(0, 0, 0, 0.2) 100%);
      }
    `}</style>
  </Fragment>
);

const ImageCaption = ({ slice }) => {
  const imageUrl = slice.primary.image.url;
  const imageAlt = slice.primary.image.alt;
  const caption  = slice.primary.caption;

  switch (slice.slice_label) {
    case "image-full-width":
      return <FullWidthComp caption={caption} imageUrl={imageUrl} imageAlt={imageAlt} />
    case "emphasized":
      return <EmphasizedComp caption={caption} imageUrl={imageUrl} imageAlt={imageAlt} />
    default:
      return <DefaultComp caption={caption} imageUrl={imageUrl} imageAlt={imageAlt} />
  }
}

ImageCaption.propTypes = {
  slice: shape({
    caption: string,
    image: imagePropType.isRequired,
  }).isRequired
}

export default ImageCaption;