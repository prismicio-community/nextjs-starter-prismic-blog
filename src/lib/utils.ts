import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getPlaiceholder } from "plaiceholder";
import { useImageStore } from "./stores";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function findImages(obj: any, imageList: string[] = []): string[] {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      imageList = findImages(obj[key], imageList);
    } else if (
      typeof obj[key] === "string" &&
      obj[key].match(/\.(jpg|jpeg|png|gif)/i)
    ) {
      imageList.push(obj[key]);
    }
  }
  return imageList;
}

export async function addImagesPlaceholders(obj: unknown) {
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
