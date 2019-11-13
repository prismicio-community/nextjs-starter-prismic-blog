import Prismic from 'prismic-javascript'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from 'prismic-configuration'

// Client method to query documents from the Prismic repo
let frontClient
export const Client = (req = null) => {
  if (!req && frontClient) return frontClient // prevents generating a new instance for client side since we don't need the refreshed request object.
  else {
    const options = Object.assign({}, req ? { req } : {}, accessToken ? { accessToken: accessToken } : {})
    return Prismic.client(apiEndpoint, options)
  }
}

export default Client
