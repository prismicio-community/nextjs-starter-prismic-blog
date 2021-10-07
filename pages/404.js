import React from 'react'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Prismic</title>
        <meta name="description" content="Prismic is a web software you can use to build and manage any kind of website or app. API-driven, it is the easiest way to integrate your content with no technology or design constraint. It is also the easiest way for content writers to edit, preview and plan updates." />
      </Head>
      <div id="notFound">
        <main>
          <div className="msg">
            <h2>This is not the page you are looking for</h2>
            <p>
              {`Sorry, the page you were looking for could not be located on this site.
              If you think there is really something missing on this website, please ask us on the `}
              <a href="https://community.prismic.io/">community forum</a>
              .
            </p>
            <a className="button default" href="/docs">Go back to homepage</a>
          </div>
        </main>
      </div>
    </>
  )
}