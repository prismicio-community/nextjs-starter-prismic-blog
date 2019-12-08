import css from "styled-jsx/css";

export const quoteStyles = css.global`
  .block-quotation {
    margin-bottom: 2rem;
    display: inline-block;
    font-style: italic;
    font-size: 24px;
  }

  .block-quotation:before {
    content: "« ";
  }

  .block-quotation:after {
    content: " »";
  }

  .block-citation {
    display: inline-block;
    font-style: italic;
    border-left: solid #b4b4b4 4px;
    padding-left: 10px;
  }

  @media screen and (min-width: 920px) {
    .post-part.single .block-quotation,
    .blog-main.single .block-quotation {
      width: 130%;
      margin: 0 -15% 2rem -15%;
      font-size: 30px;
      padding: 0;
    }
  }
`;
