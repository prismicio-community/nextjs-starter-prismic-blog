import Prismic from 'prismic-javascript'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from 'prismic-configuration'

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

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
