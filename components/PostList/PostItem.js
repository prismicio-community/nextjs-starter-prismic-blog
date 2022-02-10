import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import css from "styled-jsx/css";

import { PostDate } from "./PostDate";

const getExcerptFromSlices = ({ slices, characterLimit = 300 }) => {
  // Find the first text slice of post's body
  const firstTextSlice = slices.find((slice) => slice.slice_type === "text");

  if (firstTextSlice) {
    const text = prismicH.asText(firstTextSlice.primary.text);

    let excerpt = text.substring(0, characterLimit);

    if (text.length > characterLimit) {
      // Cut only up to the last word and attach '...' for readability
      excerpt = `${excerpt.substring(0, excerpt.lastIndexOf(" "))}…`;
    }

    return excerpt;
  } else {
    return null;
  }
};

/**
 * Renders a blog post's title, publication date, and excerpt. The title is
 * linked to the blog post's page.
 */
export const PostItem = ({ post }) => {
  const excerpt = getExcerptFromSlices({
    slices: post.data.slices,
  });

  return (
    <div className="blog-post">
      <PrismicLink document={post}>
        <h2>
          <PrismicText field={post.data.title} />
        </h2>
      </PrismicLink>

      <PostDate date={post.data.date} />

      {excerpt && <p>{excerpt}</p>}
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .blog-post {
    margin-bottom: 3rem;
  }

  .blog-post h2 {
    margin: 0;
  }
`;
