import { NextApiRequest, NextApiResponse } from "next";

const update = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  console.log("Body:");
  console.dir(body, { depth: null });
  if (!body) return res.json({ revalidated: false });

  if (req.body.secret !== process.env.REVALIDATE_SECRET_KEY) {
    console.log("Invalid secret key");
    return res.status(401).json({ message: "Invalid token" });
  }

  console.log("before revalidate");
  await res.revalidate("/");
  console.log("after revalidate");
  return res.json({ revalidated: true });
};

export default update;
