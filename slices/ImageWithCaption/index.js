import Image from "next/image";
import { PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import css from "styled-jsx/css";

/**
 * Component for the ImageWithCaption Slice.
 */
const ImageWithCaption = ({ slice }) => {
  const imageUrl = slice.primary.image.url;
  const imageAlt = slice.primary.image.alt;
  const caption = slice.primary.caption;

  return (
    <div className="post-part single">
      <div className={`block-img ${slice.variation}`}>
        {slice.variation === "fullWidthImage" ? (
          <div>
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          <div className="container">
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
        )}
        {prismicH.isFilled.richText(caption) && (
          <span className="image-label">
            <PrismicText field={caption} />
          </span>
        )}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default ImageWithCaption;

const styles = css`
  .blog-header {
    height: 400px;
    position: relative;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    background-color: white;
    background-size: cover;
    color: white;
    margin-bottom: 3rem;
  }

  .blog-header::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .blog-header::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: -moz-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.05) 80%,
      rgba(0, 0, 0, 0.1) 90%,
      rgba(0, 0, 0, 0.2) 100%
    );
    background: -webkit-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.05) 80%,
      rgba(0, 0, 0, 0.1) 90%,
      rgba(0, 0, 0, 0.2) 100%
    );
    background: -o-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.05) 80%,
      rgba(0, 0, 0, 0.1) 90%,
      rgba(0, 0, 0, 0.2) 100%
    );
    background: -ms-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.05) 80%,
      rgba(0, 0, 0, 0.1) 90%,
      rgba(0, 0, 0, 0.2) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.05) 80%,
      rgba(0, 0, 0, 0.1) 90%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  .blog-header .wrapper {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .blog-header .image-label {
    margin-bottom: 1rem;
    font-size: 50px;
    font-weight: 900;
    line-height: 60px;
    font-style: normal;
    color: #ffffff;
  }

  img {
    width: 100%;
    height: auto;
    position: inherit;
  }

  .block-img > div {
    margin-bottom: 24px;
    position: relative;
    width: 100%;
    height: 400px;
  }

  .image-label {
    display: block;
    margin-bottom: 20px;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: #949494;
  }

  /* Media Queries */
  @media (max-width: 767px) {
    .blog-header .image-label {
      font-size: 36px;
      line-height: 45px;
    }

    .blog-header {
      padding: 5px;
      height: 240px;
    }

    .blog-header .wrapper {
      width: 80%;
    }

    .block-img > div {
      height: 300px;
    }
  }
  @media screen and (min-width: 768px) {
    /* Blog post images */
    .block-img.default-slice {
      width: 130%;
      margin: 0 -15% 2rem -15%;
    }
  }
`;
