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
      <div className="blog-header single"
      style={{backgroundImage: 'url('+ this.state.imageUrl +')'}}>
        <div className="wrapper">
          {RichText.asText(this.state.caption) !== ""
            ? <h1>{RichText.asText(this.state.caption)}</h1>
            : null
          }
        </div>
      </div>
    );
  }

  render() {
    /* Render the appropiate image caption layout as specified by the user in the slice */
    switch(this.props.slice.slice_label) {
      case "image-full-width":
        return this.imageFullWidth()
      case "emphasized":
        return this.emphasized()
      default:
        return this.defaultView()
    }
  }
} 