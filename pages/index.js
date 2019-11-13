import React from 'react'
import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

// Project components & functions
import DefaultLayout from 'layouts'
import { Header, PostList, SetupRepo } from 'components/home'
import { Client } from 'utils/prismicHelpers'

/**
 * Homepage component
 */
const Home = ({ doc, posts }) => {
  if (doc) {
    return (
      <DefaultLayout>
        <Head>
          <title>{RichText.asText(doc.data.headline)}</title>
        </Head>
        <Header
          image={doc.data.image}
          headline={doc.data.headline}
          description={doc.data.description}
        />
        <PostList posts={posts} />
      </DefaultLayout>
    )
  }

  // Message when repository has not been setup yet
  return <SetupRepo />
}

/**
 * Query the homepage document and blog posts from Prismic when the page is loaded
 */
Home.getInitialProps = async function ({ req }) {
  try {
    // Retrieve the homepage document
    const doc = await Client(req).getSingle('blog_home')

    // Retrieve the blog posts organized in descending chronological order
    const posts = await Client(req).query(
      Prismic.Predicates.at('document.type', 'post'),
      { orderings: '[my.post.date desc]' }
    )
  
    return {
      doc,
      posts: posts ? posts.results : []
    }
  } catch (error) {
    console.error(error)
    return error
  }
}

export default Home
