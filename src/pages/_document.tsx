import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="he" dir="rtl">
        <Head>
          <meta
            name="description"
            content='צפריר ליכטנשטיין. מתופף מקצועי, בעל למעלה מ-25 שנות נסיון בהוראת תופים וכלי הקשה לכל הגילאים והרמות, בארץ ובחו"ל.  מתמחה בלימוד ילדים ומבוגרים על הרצף האוטיסטי, לקויות והפרעות קשב'
          />
          <meta
            name="keywords"
            content="drums, drums lessons, music, music lessons, תופים, שיעורי תופים, מוזיקה"
          />
          <meta name="author" content="Rafael Paz" />
          <link
            href="https://fonts.googleapis.com/earlyaccess/opensanshebrew.css?display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossOrigin="anonymous"
          />
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
