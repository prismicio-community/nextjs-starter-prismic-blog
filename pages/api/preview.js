import { linkResolver } from "../../prismicConfiguration";
import { Client } from "../../utils/prismicHelpers";
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

export default async (req, res) => {
  const client = Client({ req });

  await redirectToPreviewURL({ req, res, client, linkResolver });

  await setPreviewData({ req, res });

  return true
};