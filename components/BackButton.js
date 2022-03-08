import { PrismicLink } from "@prismicio/react";

/**
 * Back button used on blog post pages.
 */
export const BackButton = () => {
  return (
    <PrismicLink href="/" className="group -m-2 p-2 text-neutral-400">
      <span aria-hidden="true">&larr;</span>
      <span className="ml-2 group-hover:underline">back to list</span>
    </PrismicLink>
  );
};
