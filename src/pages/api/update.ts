import { NextApiRequest, NextApiResponse } from "next";

const update = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.dir("req", req.body);
  res.status(200).json({
    message: "OK",
  });
};

export default update;
