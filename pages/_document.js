import Document, { Html, Head, Main, NextScript } from 'next/document'
import { repoName } from 'prismic-configuration'
import { reset, globals } from 'styles/general'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        </Head>
        <style jsx global>{ reset }</style>
        <style jsx global>{ globals }</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
