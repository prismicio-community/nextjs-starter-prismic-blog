import * as prismic from "@prismicio/client";

export function findFirstImage(slices) {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismic.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
}
