import { Client, linkResolver } from "../../prismicConfiguration";
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

export default async (req, res) => {
  const client = Client({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client, linkResolver });

  return true
};