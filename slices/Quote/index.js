import { PrismicText } from "@prismicio/react";
import { quoteStyles } from "styles";

/**
 * Component for the Quote Slice.
 */
const Quote = ({ slice }) => {
  return (
    <div className="post-part single container">
      <blockquote className="block-quotation">
        <PrismicText field={slice.primary.quote} />
      </blockquote>
      <style jsx global>
        {quoteStyles}
      </style>
    </div>
  );
};

export default Quote;
