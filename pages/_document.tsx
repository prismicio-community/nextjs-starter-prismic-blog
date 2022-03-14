import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html lang="en" dir="rtl">
        <Head>
          {CssBaseline.flush()}
          {/* <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Roboto:300,400|Athiti:300,400|Indie+Flower&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Indie+Flower|Secular+One|Assistant&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans&subset=hebrew&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
