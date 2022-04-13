import { PrismicLink } from "@prismicio/react";

import { Bounded } from "./Bounded";

export const Footer = () => {
  return (
    <Bounded as="footer" className="px-4 py-14">
      <div className="grid grid-cols-1 justify-items-center gap-20">
        <hr className="h-px w-full max-w-sm border-0 bg-gray-200" />
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-gray-500">
          Proudly published using{" "}
          <PrismicLink href="https://prismic.io" className="text-gray-700">
            Prismic
          </PrismicLink>
        </div>
      </div>
    </Bounded>
  );
};
