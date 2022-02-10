import * as prismicH from "@prismicio/helpers";

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
    </p>
  );
};
