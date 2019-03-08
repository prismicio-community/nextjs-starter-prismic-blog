import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { getBlogPostAPI } from '../api';
import linkResolver from '../components/prismic';
import DefaultLayout from '../layouts';
import Head from 'next/head';

export default class Post extends Component {
  static async getInitialProps(context) {
    const { uid } = context.query;
    const response = await getBlogPostAPI(uid);
    return {
      post: response
    };
  }

  render() {
    const post = this.props.post.data;
    return (
      <DefaultLayout>
        <Head>
          <title key="title">
            {post.title[0].text}
          </title>
        </Head>
        <div className="outer-container">
          <div className="back">
            <a href="/">back to list</a>
          </div>
          {/*Edit button goes here*/}
        </div>
        {/*Render the slice zone here*/}
        <article>
          <h1>{RichText.render(post.title)}</h1>
        </article>
      </DefaultLayout>
    );
  }
}