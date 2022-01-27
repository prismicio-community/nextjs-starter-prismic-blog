//Imports
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from '@prismicio/next';

// -- Prismic Repo Name
export const repositoryName = 'nextjs-sm-blog'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      "type":"post",
      "path":"/blog/:uid"
    },
  ]
};

// -- Prismic Repo Name
export const endpoint = prismic.getEndpoint(repositoryName);

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
