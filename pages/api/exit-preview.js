import * as prismicNext from "@prismicio/next";

export default async function handler(req, res) {
  prismicNext.exitPreview({ res, req });
}
