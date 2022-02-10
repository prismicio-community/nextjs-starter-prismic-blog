import { footerStyles } from "styles";

/**
 * Links and credit to be used at the bottom of every page.
 */
export const Footer = () => (
  <footer>
    <p>
      Proudly published with &nbsp;
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        Prismic
      </a>
      <br />
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img
          className="footer-logo"
          src="/images/logo-prismic.svg"
          alt="Gray Prismic logo"
        />
      </a>
    </p>
    <style jsx global>
      {footerStyles}
    </style>
  </footer>
);
