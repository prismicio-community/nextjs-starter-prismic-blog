import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from '@prismicio/next';
import Link from 'next/link'
import {
  repoName,
  accessToken,
  linkResolver,
  routeResolver
} from '../prismicConfiguration'

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

// -- Prismic Repo Name
export const endpoint = prismic.getEndpoint(repoName);

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const Client = (config) => {
  const client = prismic.createClient(endpoint, createClientOptions(config?.req, accessToken, routeResolver));

  enableAutoPreviews({
    client,
    context: config?.context,
    req: config?.req,
  });

  return client;
};

// Options to be passed to the Client
const createClientOptions = (req = null, prismicAccessToken = null, routes = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  const routesOption = routes ? { routes: routeResolver.routes } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
    ...routesOption,
  }
}

export default Client
