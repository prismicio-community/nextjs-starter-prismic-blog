import * as prismicNext from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  prismicNext.exitPreview({ res, req });
}
