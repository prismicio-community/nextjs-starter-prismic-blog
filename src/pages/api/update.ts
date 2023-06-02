import { NextApiRequest, NextApiResponse } from "next";

const update = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { body } = req;
    console.log("Body:");
    console.dir(body, { depth: null });
    if (!body) return res.json({ revalidated: false });

    if (req.body.secret !== process.env.REVALIDATE_SECRET_KEY) {
      console.log("Invalid secret key");
      return res.status(401).json({ message: "Invalid token" });
    }

    console.log("before revalidate");
    res.revalidate("/");
    console.log("after revalidate");
    return res.json({ revalidated: true });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return res.status(500).json({ message: e.message });
    }
    return res.status(500).json({ message: "Unknown error" });
  }
};

export default update;
