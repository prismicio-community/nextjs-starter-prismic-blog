import Link from "next/link";
import { createClient } from "@/prismicio";
import cn from "@/src/lib/utils/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getPostNavigationData = async (currentPostId: string) => {
  const client = createClient();
  const posts = await client.getAllByType("post");
  const currentPostIndex = posts.findIndex((post) => post.id === currentPostId);
  const nextPost = posts[currentPostIndex + 1];
  const previousPost = posts[currentPostIndex - 1];
  return { nextPost, previousPost };
};

export default async function PostNavigation({
  currentPostId,
}: {
  currentPostId: string;
}) {
  const { nextPost, previousPost } = await getPostNavigationData(currentPostId);
  return (
    <div
      className={cn(
        "flex justify-between my-container",
        previousPost && !nextPost && "justify-end",
        !previousPost && nextPost && "justify-start"
      )}
    >
      {nextPost && (
        <Link href={`/blog/${nextPost.uid}`}>
          <div className="group flex cursor-pointer">
            <ChevronLeft className="transition-colors group-hover:text-primary" />
            לפוסט הבא
          </div>
        </Link>
      )}
      {previousPost && (
        <Link href={`/blog/${previousPost.uid}`}>
          <div className="group flex cursor-pointer">
            לפוסט הקודם
            <ChevronRight className="transition-colors group-hover:text-primary" />
          </div>
        </Link>
      )}
    </div>
  );
}
