import { draftMode } from "next/headers";
import { redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "@/prismicio";

export async function GET(request) {
  const client = createClient();

  draftMode().enable();

  await redirectToPreviewURL({ client, request });
}
