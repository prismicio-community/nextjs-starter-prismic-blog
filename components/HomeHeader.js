import { PrismicText } from "@prismicio/react";

/**
 * The site's global header.
 */
export const HomeHeader = ({ image, headline, description }) => {
  return (
    <header className="grid justify-items-center gap-4 border-b border-neutral-200 pb-12">
      <img
        src={image.url}
        alt={image.alt}
        className="block h-36 w-36 rounded-full object-cover"
      />
      <h1 className="text-center text-4xl font-black md:text-5xl">
        <PrismicText field={headline} />
      </h1>
      <p className="text-center text-lg text-neutral-400">
        <PrismicText field={description} />
      </p>
    </header>
  );
};
