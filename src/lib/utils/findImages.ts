export default function findImages(
  obj: any,
  imageList: string[] = []
): string[] {
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
