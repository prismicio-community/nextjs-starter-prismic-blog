import { NextApiRequest, NextApiResponse } from "next";

const update = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.dir("@@ req", req);
  res.status(200).json({
    message: "OK",
  });
};

export default update;

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { body } = req;
//   if (!body) return res.json({ revalidated: false });

//   // Check for secret to confirm this is a valid request
//   // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//   //   return res.status(401).json({ message: 'Invalid token' });
//   // }

//   try {
//     // this should be the actual path not a rewritten path
//     // e.g. for "/blog/[slug]" this should be "/blog/post-1"
//     const url = getUrlByType(body._type, body.slug?.current);

//     await res.revalidate(url);
//     return res.json({ revalidated: true });
//   } catch (err) {
//     // If there was an error, Next.js will continue
//     // to show the last successfully generated page
//     return res.status(500).send('Error revalidating');
//   }
// }
