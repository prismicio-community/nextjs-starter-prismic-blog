import { linkResolver } from "../../prismicConfiguration";
import { createPrismicClient } from "../../utils/prismicHelpers";
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

export default async (req, res) => {
  const client = createPrismicClient({ req });

  await redirectToPreviewURL({ req, res, client, linkResolver });

  await setPreviewData({ req, res });
  
  return true
};