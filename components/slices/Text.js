import React from 'react';
import {RichText} from 'prismic-reactjs';
import { linkResolver } from '../prismic';

export default class Text extends React.Component {
  render() {
    return (
      <div className="post-part single container">
        <div>
          {RichText.render(this.props.slice.primary.text, linkResolver)}
        </div>
      </div>
    );
  }
} 