import PostHeader from "@/src/components/Post/PostHeader";

interface PostPageProps {
  params: { postId: string };
}

async function getPostData(postId: string) {
  return "COOL";
  // const res = await fetch(`/api/posts/${postId}`);
  // const post = await res.json();
  // return post;
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.postId);
  return <PostHeader />;
}
