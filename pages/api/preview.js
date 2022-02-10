import * as prismicNext from "@prismicio/next";

import { createClient, linkResolver } from "../../prismicio";

export default async (req, res) => {
  const client = createClient({ req });

  await prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client, linkResolver });
};
