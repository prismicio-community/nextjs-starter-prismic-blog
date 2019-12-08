import css from "styled-jsx/css";

export const globals = css.global`
  * {
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    background: #fff7c7; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: #fff7c7; /* Gecko Browsers */
  }

  /*
 * Globals
 */
  body {
    padding: 3rem 0 0 0;
    color: #353535;
    line-height: 1.5;
    font-family: "PT Serif", serif;
    font-size: 20px;
  }
  a {
    color: #353535;
    text-decoration: none;
    background-repeat: repeat-x;
    background-size: 2px 2px;
    background-position: 0 23px;
  }
  .blog-main h1,
  .blog-main .h1,
  .blog-main h2,
  .blog-main .h2,
  .blog-main h3,
  .blog-main .h3,
  .blog-main h4,
  .blog-main .h4,
  .blog-main h5,
  .blog-main .h5,
  .blog-main h6,
  .blog-main .h6 {
    color: #353535;
    text-align: left;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lato", sans-serif;
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
  pre,
  ul,
  ol {
    margin-bottom: 20px;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }

  /* Media Queries */
  @media (max-width: 767px) {
    .home,
    .blog-main,
    .container,
    footer {
      padding: 0 20px;
    }
    .post-part,
    .blog-main {
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
      font-size: 28px;
    }
    h3 {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    .post-part.single .block-citation,
    .blog-main.single .block-citation {
      margin: 20px 0;
    }
  }

  /* vh vw fallback for ios7 */
  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
    .main .blog-header.single,
    .blog-header.home {
      height: 1024px;
    }
    .main .blog-main.single .image-full-width {
      width: 768px;
    }
    .main .post-part.single .image-full-width {
      width: 768px;
    }
  }

  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: landscape) {
    .main .blog-header.single,
    .blog-header.home {
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
    .main .blog-header.single,
    .main .blog-header.home {
      height: 530px;
    }
    .main .blog-main.single .image-full-width {
      width: 530px;
    }
    .main .post-part.single .image-full-width {
      width: 530px;
    }
  }
`;
