import Prismic from 'prismic-javascript'
import Link from 'next/link'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://your-repo-name.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages links to internal Prismic documents
// Modify as your project grows to handle any new routes you've made
export const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'post') {
    return `/post?uid=${doc.uid}`
  }
  return '/'
}

let frontClient

export const Client = (req = null) => {
  if (!req && frontClient) return frontClient // prevent generate new instance for client side since we don't need the refreshed request object.
  else {
    const options = Object.assign({}, req ? { req } : {}, accessToken ? { accessToken: accessToken } : {})
    return Prismic.client(apiEndpoint, options)
  }
}

export const customLink = (type, element, content, children, index) => (
  <Link key={element.data.id} href={hrefResolver(element.data)} as={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
)
