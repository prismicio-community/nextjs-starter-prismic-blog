import { CourierClient } from "@trycourier/courier";
import { NextApiRequest, NextApiResponse } from "next";
import { validationSchema } from "../../components/Shared/Contact/validationSchema";

const contact = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = validationSchema.parse(req.body);
    const courier = CourierClient({
      authorizationToken: process.env.COURIER_API_KEY,
    });

    await courier.send({
      message: {
        to: {
          user_id: "1234",
          first_name: "Rafael",
          last_name: "Paz",
          email: process.env.CONTACT_EMAIL,
        },
        template: "2BKS20D8N2MDRCG7ZWCJA2TKZY5Y",
        data: {
          ...data,
        },
      },
    });

    res.status(200).json({
      msg: "Message sent successfully",
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

export default contact;
