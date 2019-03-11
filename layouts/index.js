import { PRISMIC_API_URL } from '../prismic-config';
import Head from 'next/head';

const DefaultLayout = ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8"/>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
      <link rel="icon" href="/static/favicon.png" type="image/png" />
      <script dangerouslySetInnerHTML={{ __html: `
        window.prismic = { endpoint: "${PRISMIC_API_URL}" }
      `}} />
      <script src="//static.cdn.prismic.io/prismic.min.js" />
    </Head>
    <main>{children}</main>
    <footer><p>
      Proudly published with &nbsp;<a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
      <br/>
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo" src="/static/images/logo-prismic.svg" alt="Gray Prismic logo"/>
      </a>
    </p></footer>
    <style jsx global>{`
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol, ul {
        list-style: none;
      }
      blockquote, q {
        quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}</style>
    <style jsx global>{`
      * {
        -webkit-font-smoothing: antialiased;
      }
      ::selection {
        background: #FFF7C7; /* WebKit/Blink Browsers */
      }
      ::-moz-selection {
        background: #FFF7C7; /* Gecko Browsers */
      }

      /*
       * Globals
       */
      body {
        padding: 3rem 0 0 0;
        color: #353535;
        line-height: 1.5;
        font-family: 'PT Serif', serif;
        font-size: 20px;
      }
      a {
        color: #353535;
        text-decoration: none;
        background-repeat: repeat-x;
        background-size: 2px 2px;
        background-position: 0 23px;
      }
      .blog-main h1, .blog-main .h1,
      .blog-main h2, .blog-main .h2,
      .blog-main h3, .blog-main .h3,
      .blog-main h4, .blog-main .h4,
      .blog-main h5, .blog-main .h5,
      .blog-main h6, .blog-main .h6 {
        color: #353535;
        text-align: left;
      }
      h1, h2,h3,h4,h5,h6 {
        font-family: 'Lato', sans-serif;
      }
      h1 {
        margin-bottom: 1rem;
        font-size: 50px;
        font-weight: 900;
        line-height: 60px;
      }
      h2 {
        margin-bottom: 1rem;
        font-size: 28px;
        font-weight: 900;
        line-height: 40px;
      }
      h3 {
        margin-bottom: 1rem;
        font-size: 22px;
        font-weight: 900;
      }
      p {
        margin-bottom: 2rem;
      }
      pre, ul {
        margin-bottom: 20px;
      }
      strong {
        font-weight: bold;
      }
      em {
        font-style: italic;
      }
    `}</style>
    <style jsx>{`
      footer {
        max-width: 700px;
        margin: 0 auto;
        color: #9A9A9A;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-style: italic;
        text-align: center;
      }
      footer p {
        border-top: 1px solid #DADADA;
        padding: 2rem 0;
        margin-bottom: 0;
      }
      footer a {
        font-weight: bold;
      }
      .footer-logo {
        width: 30px;
        margin-top: 10px;
      }
    `}</style>
    <style jsx global>{`

      /* Media Queries */
      @media (max-width: 767px) {
        .home, .blog-main, .container, footer {
          padding: 0 20px;
        }
        .post-part, .blog-main {
          font-size: 18px;
        }
        .post-part pre {
          font-size: 14px;
        }
        h1 {
          font-size: 36px;
          line-height: 45px;
        }
        h2 {
          font-size: 28px
        }
        h3 {
          font-size: 18px;
        }
        .blog-header .wrapper {
          width: 80%;
        }
        .blog-header {
          padding: 5px;
        }
        .blog-header.home {
          background-image: none;
        }
        .blog-post-meta, .blog-post-meta {
          font-size: 16px;
        }
      }

      @media screen and (min-width: 768px) {
        /* Blog post images */
        .post-part.single .block-quotation ,  .blog-main.single .block-quotation {
          width: 130%;
          margin: 0 -15% 2rem -15%;
          font-size: 30px;
          padding: 0;
        }
        .block-img.emphasized {
          width: 130%;
          margin: 0 -15% 2rem -15%;
        }
        .post-part.single .block-citation, .blog-main.single .block-citation {
          margin: 20px 0;
        }
        .blog-post-meta {
          font-size: 16px;
        }
      }

      /* vh vw fallback for ios7 */
      @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        .main .blog-header.single, .blog-header.home {
          height: 1024px;
        }
        .main .blog-main.single .image-full-width {
          width: 768px;
        }
        .main .post-part.single .image-full-width {
          width: 768px;
        }
      }

      @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:landscape){
        .main .blog-header.single, .blog-header.home {
          height: 768px;
        }
        .main .blog-main.single .image-full-width {
          width: 768px;
        }
        .main .post-part.single .image-full-width {
          width: 768px;
        }
      }

      @media screen and (device-aspect-ratio: 40/71) {
        .main .blog-header.single, .main .blog-header.home {
          height: 530px;
        }
        .main .blog-main.single .image-full-width {
          width: 530px;
        }
        .main .post-part.single .image-full-width {
          width: 530px;
        }
      }
    `}</style>
  </div>
);

export default DefaultLayout;