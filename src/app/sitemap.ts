import { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  const posts = await client.getAllByType("post");
  return [
    {
      url: "/",
      lastModified: homepage.last_publication_date,
    },
    ...posts.map((post) => ({
      url: `https://dadaboom.co.il/blog/${post.uid}`,
      lastModified: post.last_publication_date,
    })),
  ];
}
