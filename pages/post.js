import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Text, Quote, ImageCaption } from 'components/slices';
import { apiEndpoint, accessToken } from 'prismic-configuration';
import DefaultLayout from 'layouts';
import Head from 'next/head';
import Link from 'next/link';
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
                <Link href="/" prefetch>
                  <a>back to list</a>
                </Link>
              </div>
              <h1 data-wio-id={post.id}>
                {titled ? RichText.asText(post.data.title) : 'Untitled'}
              </h1>
            </div>
            {this.renderSliceZone(post.data.body)}
          </div>
          <style jsx global>{`
            .outer-container {
              max-width: 700px;
              margin-left: auto;
              margin-right: auto;
              padding: 20px;
            }
            .back {
              color: #9A9A9A;
              display: block;
              max-width: 700px;
              margin: 0 auto 2em auto;
              font-family: 'Lato', sans-serif;
              font-size: 16px;
            }
            .back:before {
              content: '←';
              display: inline-block;
              position: relative;
              margin-right: 8px;
            }
            .back a {
              color: #9A9A9A;
            }
            .back a:hover {
              text-decoration: underline;
            }
            .container {
              max-width:700px;
              margin: auto;
            }

            .post-part.single a, .blog-main.single a {
              text-decoration: none;
              background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
              background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
              background-repeat: repeat-x;
              background-size: 2px 2px;
              background-position: 0 23px;
            }

            .post-part.single img, .blog-main.single img {
              width: 100%;
              height: auto;
            }
            .post-part.single .image-full-width + .image-label, .blog-main.single .image-full-width + .image-label {
              width: 100%;
            }
            .post-part.single .image-label {
              display: block;
              text-align: center;
              font-style: italic;
              font-size: 14px;
              color: #949494;
            }
            .image-label .block-quotation, .post-part.single .block-quotation {
              margin-bottom: 2rem;
              display: inline-block;
              font-style: italic;
              font-size: 24px;
            }
            .post-part li {
              list-style-type: initial;
              margin-left: 1em;
            }
            .post-part ol li {
              list-style-type: decimal;
            }
            .wio-link {
              float: right;
            }
          `}</style>
        </DefaultLayout>
      );
    }
  }
}