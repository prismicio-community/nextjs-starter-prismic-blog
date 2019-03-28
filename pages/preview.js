import React from 'react';
import Prismic from 'prismic-javascript';
import { apiEndpoint, linkResolver } from 'prismic-configuration';

export default class Preview extends React.Component {
  static async getInitialProps(context) {
    const token = context.query.token;
    const { req, res } = context;

    const API = await Prismic.getApi(apiEndpoint, {req});
    const url = await API.previewSession(token, linkResolver, '/');
    
    res.writeHead(302, { Location: url });
    res.end();
    return {}
  }

  render() {
    return <div>Preview</div>
  }
}