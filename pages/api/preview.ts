import * as prismicNext from "@prismicio/next";

import { createClient } from "../../prismicio";
import { NextApiRequest, NextApiResponse } from "next";

const preview = async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const client = createClient({ req });

  prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client });
}

export default preview;
