import { ImageField } from "@prismicio/types";
import { useImageStore } from "../lib/stores";

const useBlurImage = (imageField: ImageField) => {
  const { getImage } = useImageStore();

  return getImage(imageField.url ?? "") ?? "";
};

export default useBlurImage;
