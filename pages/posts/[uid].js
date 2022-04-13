import Head from "next/head";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { Bounded } from "../../components/Bounded";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Post = ({ post, navigation, settings }) => {
  const date = prismicH.asDate(
    post.data.publishDate || post.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(post.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      <Bounded>
        <PrismicLink
          href="/"
          className="font-semibold tracking-tight text-slate-400"
        >
          &larr; Back to posts
        </PrismicLink>
      </Bounded>
      <article>
        <Bounded className="pb-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            <PrismicText field={post.data.title} />
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {dateFormatter.format(date)}
          </p>
        </Bounded>
        <SliceZone slices={post.data.slices} components={components} />
      </article>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const post = await client.getByUID("blogPost", params.uid);
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      post,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const posts = await client.getAllByType("blogPost");

  return {
    paths: posts.map((post) => prismicH.asLink(post, linkResolver)),
    fallback: false,
  };
}
