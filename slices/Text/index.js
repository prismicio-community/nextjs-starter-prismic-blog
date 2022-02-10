import { PrismicRichText } from "@prismicio/react";

/**
 * Component for the Text Slice.
 */
const Text = ({ slice }) => {
  return (
    <div className="post-part single container">
      <PrismicRichText field={slice.primary.text} />
    </div>
  );
};

export default Text;
