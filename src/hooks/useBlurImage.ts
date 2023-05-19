import { ImageField } from "@prismicio/types";

import { useImageStore } from "../lib/stores";

const useBlurImage = (imageField: ImageField | null | undefined) => {
  const { getImage } = useImageStore();

  if (!imageField) return "";

  return getImage(imageField.url ?? "") ?? "";
};

export default useBlurImage;
