import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <h2 className="mb-7 mt-12 font-sans text-3xl font-semibold tracking-tighter text-gray-800 last:mb-0">
                  {children}
                </h2>
              ),
              heading2: ({ children }) => (
                <h3 className="mb-7 font-sans text-2xl font-semibold tracking-tighter text-gray-800 last:mb-0">
                  {children}
                </h3>
              ),
              heading3: ({ children }) => (
                <h4 className="mb-7 font-sans text-xl font-semibold tracking-tighter text-gray-800 last:mb-0">
                  {children}
                </h4>
              ),
              paragraph: ({ children }) => (
                <p className="mb-7 last:mb-0">{children}</p>
              ),
              oList: ({ children }) => (
                <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
              ),
              oListItem: ({ children }) => (
                <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">
                  {children}
                </li>
              ),
              list: ({ children }) => (
                <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
              ),
              listItem: ({ children }) => (
                <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">
                  {children}
                </li>
              ),
              preformatted: ({ children }) => (
                <pre className="mb-7 rounded bg-gray-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
                  <code>{children}</code>
                </pre>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
            }}
          />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
