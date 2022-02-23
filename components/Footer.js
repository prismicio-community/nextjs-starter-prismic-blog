import { PrismicLink } from "@prismicio/react";
import css from "styled-jsx/css";

/**
 * Links and credit to be used at the bottom of every page.
 */
export const Footer = () => (
  <footer className="container">
    <p>
      Proudly published with &nbsp;
      <PrismicLink
        href="https://prismic.io"
        target="_blank"
        className={linkStyles.className}
      >
        Prismic
      </PrismicLink>
    </p>
    <PrismicLink href="https://prismic.io" target="_blank">
      <img
        src="/images/logo-prismic.svg"
        alt="Gray Prismic logo"
        className="logo"
      />
    </PrismicLink>
    <style jsx>{styles}</style>
    {linkStyles.styles}
  </footer>
);

const styles = css`
  .container {
    border-top: 1px solid #dadada;
    color: #9a9a9a;
    display: grid;
    font-style: italic;
    gap: 10px;
    justify-items: center;
    margin: 0 auto;
    max-width: 700px;
    padding: 2rem 0;
    text-align: center;
  }

  .logo {
    width: 30px;
  }
`;

const linkStyles = css.resolve`
  a {
    font-weight: bold;
    color: #353535;
  }
`;
