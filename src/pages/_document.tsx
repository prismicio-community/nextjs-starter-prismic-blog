import React from "react";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { montserrat, openSans } from "@/src/styles/fontLoad";
import { ServerStyleSheet } from "styled-components";

import cn from "../lib/utils/cn";

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
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dadaboom/image/upload/q_auto/v1521616799/Cover/zafrir-b_w_20_950KB_Flip.jpg"
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
