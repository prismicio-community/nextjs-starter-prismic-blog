import css from "styled-jsx/css";

export const footerStyles = css.global`
  footer {
    max-width: 700px;
    margin: 0 auto;
    color: #9a9a9a;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: italic;
    text-align: center;
  }

  footer p {
    border-top: 1px solid #dadada;
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
`;
