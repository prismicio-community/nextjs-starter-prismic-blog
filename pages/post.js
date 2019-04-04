import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Text, Quote, ImageCaption } from 'components/slices';
import { apiEndpoint, accessToken } from 'prismic-configuration';
import { postStyle } from 'styles';
import DefaultLayout from 'layouts';
import Head from 'next/head';
import { default as NextLink } from 'next/link';
import Error from './_error';

export default class Post extends Component {
  static async getInitialProps(context) {
    const { uid } = context.query;
    const req = context.req;
    const document = await this.getBlogPost(uid, req);
    return {
      post: document
    };
  }

  static async getBlogPost(uid, req) {
    try {
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
      return await API.getByUID('post', uid);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  renderSliceZone(sliceZone) {
    return sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ("image_with_caption"):
          return <ImageCaption slice={slice} key={'slice-' + index} />
        case ("quote"):
          return <Quote slice={slice} key={'slice-' + index} />
        case ("text"):
          return <Text slice={slice} key={'slice-' + index} />
        default:
          return null;
      }
    })
  }

  render() {
    if (!this.props.post) {
      return(
        // Call the standard error page if the document was not found
        <Error statusCode='404' />
      );
    } else {
      const post = this.props.post;
      let titled = RichText.asText(post.data.title).length !== 0;
      return (
        <DefaultLayout>
          <Head>
            <title key="title">
              {titled ? RichText.asText(post.data.title) : 'Untitled'}
            </title>
          </Head>
          <div className="main">
            <div className="outer-container">
              <div className="back">
                <NextLink href="/" prefetch>
                  <a>back to list</a>
                </NextLink>
              </div>
              <h1 data-wio-id={post.id}>
                {titled ? RichText.asText(post.data.title) : 'Untitled'}
              </h1>
            </div>
            {this.renderSliceZone(post.data.body)}
          </div>
          <style jsx global>{postStyle}</style>
        </DefaultLayout>
      );
    }
  }
}