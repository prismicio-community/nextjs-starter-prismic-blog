import React from 'react';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { linkResolver, hrefResolver } from 'prismic-configuration';
import Router from 'next/router';

const onClickHandler = function(href, as) {
  // Handler that will do routing imperatively on internal links
  return e => {
    e.preventDefault();
    Router.push(href, as);
  }
}

const Elements = RichText.Elements;

const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

export const htmlSerializer = function(type, element, content, children, key) {
 
  var props = {};
  switch(type) {
    case Elements.hyperlink: // Link
      if(element.data.link_type === 'Document') {
        // Only for internal links add the new onClick that will imperatively route to the appropiate page
        props = Object.assign({
          onClick: onClickHandler(hrefResolver(element.data), linkResolver(element.data)),
          href: linkResolver(element.data)
        });
        return React.createElement('a', propsWithUniqueKey(props, key), children)
      } else {
        // Default link handling
        const targetAttr = element.data.target ? { target: element.data.target } : {};
        const relAttr = element.data.target ? { rel: 'noopener' } : {};
        props = Object.assign({
          href: element.data.url || linkResolver(element.data)
        }, targetAttr, relAttr);
        return React.createElement('a', propsWithUniqueKey(props, key), children);
      }

    case Elements.image: // Image
      var props = {};
      var internal = false;
      
      if (element.linkTo && element.linkTo.link_type === 'Document') {
        // Exclusively for internal links, build the object that can be used for router push
        internal = true;
        props = Object.assign({
          onClick: onClickHandler(hrefResolver(element.linkTo), linkResolver(element.linkTo)),
          href: linkResolver(element.linkTo)
        });
      }
      // Handle images just like regular HTML Serializer
      const linkUrl = element.linkTo ? element.linkTo.url || linkResolver(element.linkTo) : null;
      const linkTarget = (element.linkTo && element.linkTo.target) ? { target: element.linkTo.target } : {};
      const linkRel = linkTarget.target ? { rel: 'noopener' } : {};
      const img = React.createElement('img', { src: element.url , alt: element.alt || '' });
      return React.createElement(
        'p',
        propsWithUniqueKey({ className: [element.label || '', 'block-img'].join(' ') }, key),
        linkUrl ? React.createElement('a',
          // if it's an internal link, replace the onClick 
          internal ? propsWithUniqueKey(props, key) : Object.assign({ href: linkUrl },
          linkTarget, linkRel), img) : img
      );  
 
    default: 
      return null;
  }
};

export default htmlSerializer;