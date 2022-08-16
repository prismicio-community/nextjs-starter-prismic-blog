export default async function handler(_req, res) {
  res.setHeader("Cache-Control", "no-store; max-age=0");

  // Exit the current user from Preview Mode.
  res.clearPreviewData();

  res.json({ success: true });
}
