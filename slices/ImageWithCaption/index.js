import { PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";

/**
 * Component for the ImageWithCaption Slice.
 */
const ImageWithCaption = ({ slice }) => {
  const image = slice.primary.image;
  const caption = slice.primary.caption;

  return (
    <section className="py-5">
      <figure className="grid gap-4">
        {prismicH.isFilled.image(image) && (
          <div
            className={
              slice.variation === "fullWidthImage"
                ? "-mx-6 md:mx-0 md:-mx-[calc((100vw-100%)/2)]"
                : "-mx-6 md:mx-0"
            }
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.dimensions.width}
              height={image.dimensions.height}
              layout="responsive"
            />
          </div>
        )}
        {prismicH.isFilled.richText(caption) && (
          <figcaption className="text-center font-serif text-xs italic text-neutral-400 md:text-sm">
            <PrismicText field={caption} />
          </figcaption>
        )}
      </figure>
    </section>
  );
};

export default ImageWithCaption;
