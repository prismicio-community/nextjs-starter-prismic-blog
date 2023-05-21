import { getPlaiceholder } from "plaiceholder";

import findImages from "./findImages";

export default async function addImagesPlaceholders(obj: unknown) {
  const images = findImages(obj);
  const imageBlurs: Record<string, string> = {};
  await Promise.all(
    images.map(async (image) => {
      const { base64 } = await getPlaiceholder(image, { size: 64 });
      imageBlurs[image] = base64;
    })
  );
  return imageBlurs;
}
