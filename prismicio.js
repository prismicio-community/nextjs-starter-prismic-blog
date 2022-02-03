//Imports
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from '@prismicio/next';
import smConfig from "./sm.json";

// -- Prismic Repo API Endpoint
export const endpoint = smConfig.apiEndpoint;

// -- Prismic Repo Name //Regex to get repo ID
export const repositoryName = new URL(endpoint).hostname.split('.')[0]

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "post") {
    return `/blog/${doc.uid}`;
  }
  return "/";
};

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const createClient = (config) => {
  const client = prismic.createClient(endpoint);

  enableAutoPreviews({
    client,
    context: config?.context,
    req: config?.req,
  });

  return client;
};

export default createClient
