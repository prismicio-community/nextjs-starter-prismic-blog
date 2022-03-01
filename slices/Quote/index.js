import { PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

/**
 * Component for the Quote Slice.
 */
const Quote = ({ slice }) => {
  return (
    <section className="py-5">
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <blockquote className="relative font-serif text-2xl italic leading-relaxed lg:-mx-20">
          <span className="pointer-events-none absolute top-0 -left-3 select-none">
            &ldquo;
          </span>
          <PrismicText field={slice.primary.quote} />
          <span className="pointer-events-none select-none">&rdquo;</span>
        </blockquote>
      )}
    </section>
  );
};

export default Quote;
