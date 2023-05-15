import { createClient } from "@/prismicio";
import Post from "@/src/components/Post/Post";
import PostHeader from "@/src/components/Post/PostHeader";

export const dynamic = "force-static";

interface PostPageProps {
  params: { postId: string };
}

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("post");

  return posts.map((post) => ({
    postId: post.uid,
  }));
}

async function getPostData(postUID: string) {
  const client = createClient();

  const posts = await client.getByUID("post", postUID);
  return posts.data;
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.postId);

  /* @ts-expect-error Async Server Component */
  return <Post {...postData} />;
}
