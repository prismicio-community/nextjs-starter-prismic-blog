import { linkResolver } from "prismic-configuration";
import { Client } from "utils/prismicHelpers";

export default async (req, res) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await Client(req).getPreviewResolver(ref, documentId).resolve(linkResolver, '/');

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({ ref })

  // Redirect the user to the share endpoint from same origin. This is
  // necessary due to a Chrome bug:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
  )
  res.end()
}