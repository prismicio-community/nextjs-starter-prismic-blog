import * as prismicH from "@prismicio/helpers";
import css from "styled-jsx/css";

/**
 * Post list item date component
 */
export const PostDate = ({ date }) => {
  // Format the date to M d, Y
  const displayDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(prismicH.asDate(date));

  return (
    <p className="blog-post-meta">
      <time className="created-at">{displayDate}</time>
      <style jsx>{styles}</style>
    </p>
  );
};

const styles = css`
  .blog-post-meta {
    color: #9a9a9a;
    font-family: "Lato", sans-serif;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    .blog-post-meta,
    .blog-post-meta {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    .blog-post-meta {
      font-size: 16px;
    }
  }
`;
