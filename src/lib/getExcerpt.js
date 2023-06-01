import * as prismic from "@prismicio/client";

export function getExcerpt(slices) {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => prismic.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
}
