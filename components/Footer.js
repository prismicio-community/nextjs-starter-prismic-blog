import { PrismicLink } from "@prismicio/react";
import css from "styled-jsx/css";

/**
 * Links and credit to be used at the bottom of every page.
 */
export const Footer = () => (
  <footer className="container">
    <p>
      Proudly published with &nbsp;
      <PrismicLink href="https://prismic.io">Prismic</PrismicLink>
      <br />
      <PrismicLink href="https://prismic.io">
        <img
          className="footer-logo"
          src="/images/logo-prismic.svg"
          alt="Gray Prismic logo"
        />
      </PrismicLink>
    </p>
    <style jsx>{styles}</style>
  </footer>
);

const styles = css`
  .container {
    max-width: 700px;
    margin: 0 auto;
    color: #9a9a9a;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: italic;
    text-align: center;
  }

  .container p {
    border-top: 1px solid #dadada;
    padding: 2rem 0;
    margin-bottom: 0;
  }

  .container a {
    font-weight: bold;
  }

  .footer-logo {
    width: 30px;
    margin-top: 10px;
  }
`;
