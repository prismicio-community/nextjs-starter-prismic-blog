import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for centered_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CenteredText;
