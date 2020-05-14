export default async (_, res) => {
  res.clearPreviewData()

  res.writeHead(307, { Location: '/' })
  res.end()
}