import React from 'react';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { linkResolver, hrefResolver } from 'prismic-configuration';

const Elements = RichText.Elements;

const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

export const htmlSerializer = function(type, element, content, children, key) {
 
  var props = {};
  switch(type) {
    case Elements.hyperlink:
      if(element.data.link_type === 'Document') {
        props = Object.assign({
          as: linkResolver(element.data),
          href: hrefResolver(element.data),
          'passHref': true
        });
        return React.createElement(Link, propsWithUniqueKey(props, key),
          React.createElement('a', null, children)
        );
      } else {
        const targetAttr = element.data.target ? { target: element.data.target } : {};
        const relAttr = element.data.target ? { rel: 'noopener' } : {};
        props = Object.assign({
          href: element.data.url || linkResolver(element.data)
        }, targetAttr, relAttr);
        return React.createElement('a', propsWithUniqueKey(props, key), children);
      }
      
 
    default: 
      return null;
  }
};

export default htmlSerializer;