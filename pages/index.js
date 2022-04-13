import NextImage from "next/image";
import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Bounded } from "../components/Bounded";
import { Heading } from "../components/Heading";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

const Post = ({ post }) => {
  const featuredImage =
    (prismicH.isFilled.image(post.data.featuredImage) &&
      post.data.featuredImage) ||
    findFirstImage(post.data.slices);
  const date = prismicH.asDate(
    post.data.publishDate || post.first_publication_date
  );
  const excerpt = getExcerpt(post.data.slices);

  return (
    <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
      <PrismicLink document={post} tabIndex="-1">
        <div className="aspect-w-4 aspect-h-3 relative bg-gray-100">
          {prismicH.isFilled.image(featuredImage) && (
            <NextImage
              src={prismicH.asImageSrc(featuredImage, {
                w: undefined,
                h: undefined,
              })}
              alt={featuredImage.alt}
              layout="fill"
              className="object-cover"
            />
          )}
        </div>
      </PrismicLink>
      <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <Heading as="h2">
          <PrismicLink document={post}>
            <PrismicText field={post.data.title} />
          </PrismicLink>
        </Heading>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        {excerpt && (
          <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
};

const Index = ({ posts, navigation, settings }) => {
  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const posts = await client.getAllByType("blogPost", {
    orderings: [
      { field: "my.post.date", direction: "asc" },
      { field: "document.first_publication_date", direction: "asc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      posts,
      navigation,
      settings,
    },
  };
}
