import { PrismicText } from "@prismicio/react";
import css from "styled-jsx/css";

/**
 * The site's global header.
 */
export const HomeHeader = ({ image, headline, description }) => {
  return (
    <header className="container">
      <div className="avatar">
        <img src={image.url} alt={image.alt} className="avatar__img" />
      </div>
      <h1 className="title">
        <PrismicText field={headline} />
      </h1>
      <p className="description">
        <PrismicText field={description} />
      </p>
      <style jsx>{styles}</style>
    </header>
  );
};

const styles = css`
  .container {
    border-bottom: 1px solid #dadada;
    display: grid;
    gap: 1rem;
    justify-items: center;
    margin: 0 auto 3rem;
    max-width: 700px;
    padding: 3rem 0;
  }

  .title {
    font-size: 50px;
    font-weight: 900;
    line-height: 60px;
    text-align: center;
  }

  .avatar {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar__img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .description {
    font-size: 18px;
    color: #9a9a9a;
    line-height: 30px;
    text-align: center;
  }
`;
