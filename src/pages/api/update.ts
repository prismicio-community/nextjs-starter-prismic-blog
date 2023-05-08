import { NextApiRequest, NextApiResponse } from "next";

const update = async function handler(
  req: NextApiRequest,
  _res: NextApiResponse
) {
  console.dir("req", req.body);
};

export default update;
