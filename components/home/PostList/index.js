import css from "styled-jsx/css";

import { PostItem } from "./PostItem";

/**
 * Post list component
 */
export const PostList = ({ posts }) => {
  return (
    <div className="blog-main">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .blog-main {
    max-width: 700px;
    margin: auto;
  }
`;
