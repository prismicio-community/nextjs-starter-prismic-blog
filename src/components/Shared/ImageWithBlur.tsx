import useBlurImage from "@/src/hooks/useBlurImage";
import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";

const ImageWithBlur: React.FC<PrismicNextImageProps> = ({
  field,
  ...props
}) => {
  const blurImage = useBlurImage(field);
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

export default ImageWithBlur;
