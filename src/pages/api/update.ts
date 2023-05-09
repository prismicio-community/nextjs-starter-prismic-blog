import { NextApiRequest, NextApiResponse } from "next";

const update = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  if (!body) return res.json({ revalidated: false });

  if (req.body.secret !== process.env.REVALIDATE_SECRET_KEY) {
    return res.status(401).json({ message: "Invalid token" });
  }
  console.dir(req.body, { depth: null });

  await res.revalidate("/");
  return res.json({ revalidated: true });
};

export default update;
