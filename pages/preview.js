import React from 'react'
import Router from 'next/router'
import { Client, linkResolver } from 'prismic-configuration'

const Preview = () => (
  <div>Preview</div>
)

Preview.getInitialProps = async function (context) {
  const token = context.query.token
  const { res, req } = context

  const url = await Client(req).previewSession(token, linkResolver, '/')
  if (res) {
    res.writeHead(302, { Location: url })
    res.end()
  } else {
    Router.push(url)
  }
  return {}
}

export default Preview
