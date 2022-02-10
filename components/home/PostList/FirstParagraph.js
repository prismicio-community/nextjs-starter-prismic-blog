import * as prismicH from "@prismicio/helpers";

/**
 * Renders the first paragraph of a blog post.
 */
export const FirstParagraph = ({ slices, characterLimit = 300 }) => {
  // Find the first text slice of post's body
  const firstTextSlice = slices.find((slice) => slice.slice_type === "text");

  if (firstTextSlice) {
    const text = prismicH.asText(firstTextSlice.primary.text);

    let limitedText = text.substring(0, characterLimit);

    if (text.length > characterLimit) {
      // Cut only up to the last word and attach '...' for readability
      limitedText = `${limitedText.substring(
        0,
        limitedText.lastIndexOf(" ")
      )}…`;
    }

    return <p>{limitedText}</p>;
  }

  // If there are no Slices of type 'text', render anything.
  return null;
};
