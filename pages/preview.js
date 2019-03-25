import React from 'react';
import Prismic from 'prismic-javascript';
import Router from 'next/router';
import { apiEndpoint, linkResolver } from '../prismic-configuration';

export default class Preview extends React.Component {
  static async getInitialProps(context) {
    const token = context.query.token;
    const { req, res } = context;

    const API = await Prismic.getApi(apiEndpoint, {req});
    const url = await API.previewSession(token, linkResolver, '/');
    
    if (res) {
      res.writeHead(302, {
        Location: url
      })
      res.end()
    } else {
      Router.push(url)
    }
    return {}
  }

  render() {
    return <div>Preview</div>
  }
}