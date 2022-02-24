import { PrismicLink } from "@prismicio/react";

/**
 * Links and credit to be used at the bottom of every page.
 */
export const Footer = () => {
  return (
    <footer className="grid justify-items-center gap-4 border-t border-neutral-200 pt-8">
      <p className="text-center italic text-neutral-400">
        Proudly published with{" "}
        <PrismicLink
          href="https://prismic.io"
          target="_blank"
          className="pl-1 font-bold text-neutral-700"
        >
          Prismic
        </PrismicLink>
      </p>
      <PrismicLink href="https://prismic.io" target="_blank">
        <img src="/logo-prismic.svg" alt="Prismic logo" className="w-8" />
      </PrismicLink>
    </footer>
  );
};
