import { PrismicRichText } from "@prismicio/react";

/**
 * Component for the Text Slice.
 */
const Text = ({ slice }) => {
  return (
    <section className="py-5 font-serif leading-relaxed md:text-lg">
      <PrismicRichText
        field={slice.primary.text}
        components={{
          heading2: ({ children }) => (
            <h2 className="mb-7 font-sans text-2xl font-bold last:mb-0 md:text-3xl md:leading-snug">
              {children}
            </h2>
          ),
          paragraph: ({ children }) => (
            <p className="mb-7 last:mb-0">{children}</p>
          ),
          oList: ({ children }) => (
            <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
          ),
          oListItem: ({ children }) => (
            <li className="mb-4 list-decimal pl-1 last:mb-0 md:pl-2">
              {children}
            </li>
          ),
          list: ({ children }) => (
            <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
          ),
          listItem: ({ children }) => (
            <li className="mb-4 list-disc pl-1 last:mb-0 md:pl-2">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
        }}
      />
    </section>
  );
};

export default Text;
