import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => {
    return <p className="text-center text-lg mb-3">{children}</p>;
  },
};
/**
 * Props for `CenteredText`.
 */
export type CenteredTextProps = SliceComponentProps<Content.CenteredTextSlice>;

/**
 * Component for "CenteredText" Slices.
 */
const CenteredText = ({ slice }: CenteredTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        key={slice.primary.text[0]?.type}
        field={slice.primary.text}
        components={components}
      />
    </section>
  );
};

export default CenteredText;
