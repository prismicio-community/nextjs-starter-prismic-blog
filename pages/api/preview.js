import { linkResolver, Client } from 'prismic-configuration'

export const Preview = async (req, res) => {
  const token = req.query.token;
  if (token) {
    try {
      const url = await Client(req).previewSession(token, linkResolver, '/')
      res.writeHead(302, { Location: url })
      res.end()
    } catch {
      res.status(400).send('Something went wrong with the previewSession request');
    }
  } else {
    res.status(400).send('Missing token from preview request');
  }
}

export default Preview
