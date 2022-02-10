import { PrismicText } from "@prismicio/react";
import { headerStyles } from "styles";

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
      <style jsx global>
        {headerStyles}
      </style>
    </header>
  );
};
