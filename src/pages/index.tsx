import React from "react";
import Head from "next/head";

import { createClient } from "../../prismicio";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getPlaiceholder } from "plaiceholder";
import About from "../components/Home/About/About";
import Counter from "../components/Home/Counter/Counter";
import Header from "../components/Home/Header/Header";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Services from "../components/Home/Services/Services";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import { SetupRepo } from "../components/SetupRepo";
import Blog from "../components/Home/Blog/Blog";
import Contact from "../components/Home/Contact/Contact";
import Footer from "../components/Home/Footer/Footer";
import { HomepageDocument } from "../../prismicio-types";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const client = createClient({ previewData: context.previewData });

  let homepage: HomepageDocument["data"] | null = null;
  try {
    const result = await client.getSingle("homepage");
    homepage = result.data;
  } catch (e) {
    console.log("On CATCH", e);
    // If we reach this line, it means a Blog Home document was not created
    // yet. We don't need to do anything here. We will render a component on
    // the page with a helpful setup message.
  }

  const { base64 } = await getPlaiceholder(homepage?.headerImage.url ?? "", {
    size: 64,
  });

  return {
    props: {
      homepage,
      lqip: base64,
    },
  };
};

/**
 * Homepage component
 */
const Home = ({
  homepage,
  lqip,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!homepage) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <>
      <Head>
        <title>צפריר ליכשטנשטיין | מורה לתופים לאוטיסטים | דה דה בום</title>
      </Head>
      <Header
        navItems={homepage.navigationItems}
        heroImage={homepage.headerImage}
        lqipImage={lqip}
      />
      <About
        about_content={homepage.about_content}
        about_title={homepage.about_title}
        about_image={homepage.about_image}
      />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
