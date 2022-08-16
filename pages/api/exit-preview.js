export default function handler(_req, res) {
  // Exit the current user from Preview Mode.
  res.clearPreviewData();

  res.json({ success: true, foo: "bar" });
}
