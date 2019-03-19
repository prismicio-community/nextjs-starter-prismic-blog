import React from 'react';
import { RichText } from 'prismic-reactjs';

export default class ImageCaption extends React.Component {
  state = {
    imageUrl: this.props.slice.primary.image.url,
    imageAlt: this.props.slice.primary.image.alt,
    caption: this.props.slice.primary.caption,
  }

  defaultView() {
    return (
      <div className="post-part single container">
        <div className="block-img">
          <img src={this.state.imageUrl} alt={this.state.imageAlt} />
          {RichText.asText(this.state.caption) !== ""
            ? <p><span className="image-label">
              {RichText.asText(this.state.caption)}
            </span></p>
            : <p></p>
          }
        </div>
      </div>
    );
  }

  emphasized() {
    return (
      <div className="post-part single container">
        <div className="block-img emphasized">
          <img src={this.state.imageUrl} alt={this.state.imageAlt} />
          {RichText.asText(this.state.caption) !== ""
            ? <p><span className="image-label">
              {RichText.asText(this.state.caption)}
            </span></p>
            : null
          }
        </div>
      </div>
    );
  }

  imageFullWidth() {
    return (
      <React.Fragment>
        <div className="blog-header single"
          style={{ backgroundImage: 'url(' + this.state.imageUrl + ')' }}>
          <div className="wrapper">
            {RichText.asText(this.state.caption) !== ""
              ? <h1>{RichText.asText(this.state.caption)}</h1>
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
      </React.Fragment>
    );
  }

  render() {
    /* Render the appropiate image caption layout as specified by the user in the slice */
    switch (this.props.slice.slice_label) {
      case "image-full-width":
        return this.imageFullWidth()
      case "emphasized":
        return this.emphasized()
      default:
        return this.defaultView()
    }
  }
} 