import { PrismicText } from "@prismicio/react";
import css from "styled-jsx/css";

/**
 * The site's global header.
 */
export const Header = ({ image, headline, description }) => {
  return (
    <header className="home">
      <div
        className="blog-avatar"
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <h1 className="blog-title">
        <PrismicText field={headline} />
      </h1>
      <p className="blog-description">
        <PrismicText field={description} />
      </p>
      <style jsx>{styles}</style>
    </header>
  );
};

const styles = css`
  .home {
    text-align: center;
    max-width: 700px;
    margin: auto;
  }

  .blog-avatar {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin: 1em auto;
  }

  .blog-description {
    font-size: 18px;
    color: #9a9a9a;
    line-height: 30px;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    font-family: "Lato", sans-serif;
    border-bottom: 1px solid #dadada;
  }
`;
