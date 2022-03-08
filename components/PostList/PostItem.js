import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const getExcerptFromSlices = (slices) => {
  const text =
    slices
      .filter((slice) => slice.slice_type === "text")
      .map((slice) => prismicH.asText(slice.primary.text))
      .join(" ") || "";

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

/**
 * Renders a blog post's title, publication date, and excerpt. The title is
 * linked to the blog post's page.
 */
export const PostItem = ({ post }) => {
  const excerpt = getExcerptFromSlices(post.data.slices);

  const displayDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(prismicH.asDate(post.data.date));

  return (
    <div className="grid gap-2">
      <h2 className="text-2xl font-black md:text-3xl">
        <PrismicLink document={post}>
          <PrismicText field={post.data.title} />
        </PrismicLink>
      </h2>

      <p className="text-neutral-400">
        <time dateTime={post.data.date}>{displayDate}</time>
      </p>

      {excerpt && (
        <p className="font-serif leading-relaxed md:text-lg">{excerpt}</p>
      )}
    </div>
  );
};
