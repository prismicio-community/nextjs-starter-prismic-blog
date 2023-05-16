import { getPlaiceholder } from "plaiceholder";
import { findImages } from ".";

export default async function addImagesPlaceholders(obj: unknown) {
  const images = findImages(obj);
  const imageBlurs: Record<string, string> = {};
  await Promise.all(
    images.map(async (image) => {
      const { blurhash } = await getPlaiceholder(image, { size: 64 });
      imageBlurs[image] = blurhash.hash;
    })
  );
  return imageBlurs;
}
