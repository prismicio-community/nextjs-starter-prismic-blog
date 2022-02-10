import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import smConfig from "./sm.json";

/**
 * The project's Prismic Rest API V2 endpoint.
 */
const endpoint = smConfig.apiEndpoint;

/**
 * The project's Prismic repository name.
 */
export const repositoryName = new URL(endpoint).hostname.split(".")[0];

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 */
export const linkResolver = (doc) => {
  if (doc.type === "post") {
    return `/blog/${doc.uid}`;
  }

  return "/";
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = (config) => {
  const client = prismic.createClient(endpoint);

  prismicNext.enableAutoPreviews({
    client,
    context: config?.context,
    req: config?.req,
  });

  return client;
};

export default createClient;
