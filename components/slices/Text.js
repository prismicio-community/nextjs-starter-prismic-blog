import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import htmlSerializer from 'utils/htmlSerializer';

const Text = ({ slice }) => (
  <div className="post-part single container">
    {RichText.render(slice.primary.text, linkResolver, htmlSerializer)}
  </div>
);

export default Text;