import { PrismicLink } from "@prismicio/react";
import css from "styled-jsx/css";

/**
 * Back button used on blog post pages.
 */
export const BackButton = () => {
  return (
    <PrismicLink href="/" className="back-button">
      <span aria-hidden="true" className="icon">
        &larr;
      </span>
      <span className="label">back to list</span>
      <style jsx>{styles}</style>
    </PrismicLink>
  );
};

const styles = css`
  :global(.back-button) {
    color: #9a9a9a;
  }

  :global(.back-button:hover) .label {
    text-decoration: underline;
  }

  .icon {
    margin-right: 8px;
  }
`;
