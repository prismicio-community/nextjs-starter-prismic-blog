import { PostItem } from "./PostItem";

/**
 * List of posts.
 */
export const PostList = ({ posts }) => {
  return (
    <ul className="grid gap-10 md:gap-12">
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};
