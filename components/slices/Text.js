import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';

const Text = ({ slice }) => (
  <div className="post-part single container">
    {RichText.render(slice.primary.text, linkResolver)}
  </div>
);

export default Text;