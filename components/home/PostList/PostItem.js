import { PrismicLink, PrismicText } from "@prismicio/react";

import { PostDate } from "./PostDate";
import { FirstParagraph } from "./FirstParagraph";

/**
 * Renders a blog post's title, publication date, and excerpt. The title is
 * linked to the blog post's page.
 */
export const PostItem = ({ post }) => {
  return (
    <div className="blog-post">
      <PrismicLink document={post}>
        <h2>
          <PrismicText field={post.data.title} />
        </h2>
      </PrismicLink>

      <PostDate date={post.data.date} />

      <FirstParagraph slices={post.data.slices} />
    </div>
  );
};
