import { NextApiRequest, NextApiResponse } from "next";

const update = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  if (!body) return res.json({ revalidated: false });

  if (req.query.secret !== process.env.REVALIDATE_SECRET_KEY) {
    return res.status(401).json({ message: "Invalid token" });
  }
  console.dir(req.body, { depth: null });
  res.status(200).json({
    message: "OK",
  });
};

export default update;
