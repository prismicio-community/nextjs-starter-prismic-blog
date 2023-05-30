import { useImageStore } from "@/src/lib/stores";
import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";

const ImageWithBlurSSR: React.FC<PrismicNextImageProps> = ({
  field,
  ...props
}) => {
  const blurImage = useImageStore.getState().getImage(field?.url ?? "");
  return (
    <PrismicNextImage
      field={field}
      placeholder={blurImage ? "blur" : "empty"}
      blurDataURL={blurImage}
      className="h-auto w-full max-w-full"
      {...props}
    />
  );
};

export default ImageWithBlurSSR;
