import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import { createClient } from "../../prismicio";
import Header from "../components/Home/Header/Header";
import SideBarSearch from "../components/Post/SideBar/SideBarSearch";
import { SetupRepo } from "../components/SetupRepo";
import { useImageStore } from "../lib/stores";
import addImagesPlaceholders from "../lib/utils/addImagesPlaceholders";

const DynamicAbout = dynamic(() => import("../components/Home/About/About"));
const DynamicCounter = dynamic(
  () => import("../components/Home/Counter/Counter")
);
const DynamicPortfolio = dynamic(
  () => import("../components/Home/Portfolio/Portfolio")
);
const DynamicServices = dynamic(
  () => import("../components/Home/Services/Services")
);
const DynamicTestimonials = dynamic(
  () => import("../components/Home/Testimonials/Testimonials")
);
const DynamicBlog = dynamic(() => import("../components/Home/Blog/Blog"));
const DynamicContact = dynamic(
  () => import("../components/Shared/Contact/Contact")
);
const DynamicFooter = dynamic(
  () => import("../components/Shared/Footer/Footer")
);

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const client = createClient({ previewData: context.previewData });

  const result = await client.getSingle("homepage");
  const posts = await client.getAllByType("post", {
    graphQuery: `
    {
      post {
        title
        header_image
        description
      }
    }
  `,
  });
  const images = await addImagesPlaceholders({ result, posts });

  return {
    props: {
      homepage: result.data,
      images,
      posts,
    },
  };
};

const Home = ({
  homepage,
  images,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useImageStore.setState({ images });
  if (!homepage) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <>
      <Head>
        <title>צפריר ליכטנשטיין | מורה לתופים לאוטיסטים | דה דה בום</title>
      </Head>
      <Header rotatingStrings={homepage.rotatingstrings} />
      <DynamicAbout
        about_content={homepage.about_content}
        about_title={homepage.about_title}
        about_image={homepage.about_image}
      />
      <DynamicServices services={homepage.services} />
      <DynamicCounter counters={homepage.counters} />
      <DynamicPortfolio images={homepage.images} videos={homepage.videos} />
      <DynamicTestimonials testimonials={homepage.testimonials} />
      <DynamicBlog posts={posts} />
      <DynamicContact
        map_label_link={homepage.map_label_link}
        map_label_text={homepage.map_label_text}
        map_lat={homepage.map_lat}
        map_lng={homepage.map_lng}
      />
      <DynamicFooter />
    </>
  );
};

export default Home;
