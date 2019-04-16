import React, { Component, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { default as NextLink } from 'next/link';
import { linkResolver, apiEndpoint, accessToken, hrefResolver } from 'prismic-configuration';
import DefaultLayout from 'layouts';
import Head from 'next/head';

export default class extends Component {
  static async getInitialProps(context) {
    const req = context.req;
    // Get the required data for rendering the homepage
    const home = await this.getBlogHome(req);
    if (process.browser) window.prismic.setupEditButton();
    return {
      // State variables that hold the two different queried data. doc for homepage info, posts for the blog posts
      doc: home.document,
      posts: home.response.results
    };
  }

  static async getBlogHome(req) {
    try {
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
      // Use the function to get a single document for home
      const document = await API.getSingle('blog_home');
      // Make a query to get the blog posts organized in descending chronological order
      const response = await API.query(
        Prismic.Predicates.at('document.type', 'post'),
        {
          orderings: '[my.post.date desc]',
        }
      );
      return { document, response };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  firstParagraph(post) {
    // Find the first text slice of post's body
    let firstTextSlice = post.data.body.find(slice => slice.slice_type === 'text');
    if (firstTextSlice != null) {
      // Set the character limit for the text we'll show in the homepage
      const textLimit = 300;
      let text = RichText.asText(firstTextSlice.primary.text);
      let limitedText = text.substring(0, textLimit);

      if (text.length > textLimit) {
        // Cut only up to the last word and attach '...' for readability
        return (
          <p>{limitedText.substring(0, limitedText.lastIndexOf(' ')) + '...'}</p>
        );
      } else {
        // If it's shorter than the limit, just show it normally
        return <p>{text}</p>;
      }
    } else {
      // If there are no slices of type 'text', return nothing
      return null;
    }
  }

  renderHead() {
    const doc = this.props.doc;
    return(
      <Fragment>
      <div className="home">
        <div className="blog-avatar" style={{backgroundImage: 'url(' + doc.data.image.url +')'}}>
        </div>
        <h1 className="blog-title">{RichText.asText(doc.data.headline)}</h1>
        <p className="blog-description">{RichText.asText(doc.data.description)}</p>
      </div>
      {/* Styling for the homepage header segment */}
      <style jsx>{`
        .home {
          text-align: center;
          max-width: 700px;
          margin: auto;
        }

        .blog-avatar {
          height: 140px;
          width: 140px;
          border-radius: 50%;
          background-position: center;
          background-size: cover;
          margin: 1em auto;
        }

        .blog-description {
          font-size: 18px;
          color: #9A9A9A;
          line-height: 30px;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          font-family: 'Lato', sans-serif;
          border-bottom: 1px solid #DADADA;
        }
      `}</style>
      </Fragment>
    );
  }

  renderPosts() {
    return(
      <Fragment>
      <div className="blog-main">
        {this.props.posts.map((post) => (
          <div className="blog-post" key={post.id} data-wio-id={post.id}>
            {/* Use Nextjs Link component for internal links */}
            <NextLink
              as={linkResolver(post)}
              href={hrefResolver(post)}
              passHref
              prefetch
            >
              <a><h2>{RichText.asText(post.data.title)}</h2></a>
            </NextLink>
            <p className="blog-post-meta">
              <time className="created-at">
                {/* Format the date to M d, Y */}
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short', 
                  day: '2-digit', 
                  year: 'numeric'
                }).format(Date(post.data.date))}
              </time>
            </p>
            {this.firstParagraph(post)}
          </div>
        ))}
      </div>
      <style jsx>{`
        .blog-main {
          max-width: 700px;
          margin: auto;
        }
        .blog-post {
          margin-bottom: 3rem;
        }
        .blog-post h2 {
          margin: 0;
        }
        .blog-post-meta {
          color: #9A9A9A;
          font-family: 'Lato', sans-serif;
          margin-bottom: 8px;
        }
        .wio-link {
          float: right;
        }
        @media (max-width: 767px) { 
          .blog-post-meta, .blog-post-meta {
            font-size: 16px;
          }
        }
        @media screen and (min-width: 768px) {
          .blog-post-meta {
            font-size: 16px;
          }
        }
      `}</style>
      </Fragment>
    );
  }

  render() {
    if(this.props.doc){
      return(
        <DefaultLayout>
          <Head>
            {/* Website title defined from the Prismic data */}
            <title key="title">
              {RichText.asText(this.props.doc.data.headline)}
            </title>
          </Head>
          {this.renderHead()}
          {this.renderPosts()}
        </DefaultLayout>
      );
    }else{
      // Message when repository has not been setup yet
      return(
        <DefaultLayout>
          <div className="setup-repo">
            <h1>Good job!</h1>
            <h2>You're halfway done with setting up your Prismic website</h2>
            <h4>Just visit your <a href={`${apiEndpoint.slice(0,-6)}documents/`}>Prismic dashboard</a> and add some Content to show</h4>
          </div>
          <style jsx>{`
            .setup-repo {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 50vw;
              align-items: center;
            }
            a {
              color: purple;
              font-weight: 700;
            }
          `}</style>
        </DefaultLayout>
      );
    }
  }
}