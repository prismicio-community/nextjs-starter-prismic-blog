// Install with: npm install @trycourier/courier
import { CourierClient } from "@trycourier/courier";
import { NextApiRequest, NextApiResponse } from "next";

const contact = async function handler(req: NextApiRequest) {
  console.log("@@", req);
  const courier = CourierClient({
    authorizationToken: process.env.COURIER_API_KEY,
  });

  const { requestId } = await courier.send({
    message: {
      to: {
        user_id: "1234",
        first_name: "Rafael",
        last_name: "Paz",
        email: "refaelypaz@gmail.com",
      },
      template: "2BKS20D8N2MDRCG7ZWCJA2TKZY5Y",
      data: {
        variables: "awesomeness",
      },
    },
  });
};

export default contact;
