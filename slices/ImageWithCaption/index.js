import Image from "next/image";
import { PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { imageCaptionStyles } from "styles";

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
      <style jsx global>
        {imageCaptionStyles}
      </style>
    </div>
  );
};

export default ImageWithCaption;
