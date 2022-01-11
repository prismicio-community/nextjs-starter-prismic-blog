import * as prismic from "@prismicio/client";

// -- Prismic Repo Name
export const repoName = prismic.getEndpoint("blog-tester-phil");

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

// export const routeResolver = {
//   routes: [
//     {
//       "type":"post",
//       "path":"/blog/:uid"
//     },
//   ]
// };
