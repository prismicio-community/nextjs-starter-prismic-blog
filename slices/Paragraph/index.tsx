import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Paragraph`.
 */
export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>;

/**
 * Component for "Paragraph" Slices.
 */
const Paragraph = ({ slice }: ParagraphProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for paragraph (variation: {slice.variation}) Slices
    </section>
  );
};

export default Paragraph;
