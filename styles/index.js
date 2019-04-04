import css from 'styled-jsx/css'

export const reset = css.global`
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
}`

export const globals = css.global`
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
pre, ul, ol {
  margin-bottom: 20px;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}`

export const medias = css.global`
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
}

@media screen and (min-width: 768px) {
  .post-part.single .block-citation, .blog-main.single .block-citation {
    margin: 20px 0;
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
}`

export const postStyle = css.global`
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
`