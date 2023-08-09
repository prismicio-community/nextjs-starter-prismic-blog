import { redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "@/prismicio";

export async function GET(request) {
  const client = createClient();

  await redirectToPreviewURL({ client, request });
}
