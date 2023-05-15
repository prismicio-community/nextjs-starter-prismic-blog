import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => {
    return <p className="mb-3 text-lg">{children}</p>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
  list: ({ children }) => {
    return <ul className="list-disc text-lg mr-5 mb-3">{children}</ul>;
  },
  oList: ({ children }) => {
    return <ol className="list-decimal text-lg mr-5 mb-3">{children}</ol>;
  },
};

type RichTextProps = SliceComponentProps<Content.ParagraphSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section>
      {slice.items.map((item) => (
        <PrismicRichText
          key={item.paragraph[0]?.type}
          field={item.paragraph}
          components={components}
        />
      ))}
    </section>
  );
}
