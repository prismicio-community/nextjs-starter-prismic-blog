import { createClient } from "@/prismicio";
import Post from "@/src/components/Post/Post";
import PostHeader from "@/src/components/Post/PostHeader";

interface PostPageProps {
  params: { postId: string };
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
