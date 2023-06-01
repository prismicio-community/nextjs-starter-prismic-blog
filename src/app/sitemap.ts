import { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

const BASE_URL = "https://dadaboom.co.il";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  const posts = await client.getAllByType("post");
  return [
    {
      url: BASE_URL,
      lastModified: homepage.last_publication_date,
    },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.uid}`,
      lastModified: post.last_publication_date,
    })),
  ];
}
