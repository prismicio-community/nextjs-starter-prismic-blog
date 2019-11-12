import { Fragment } from 'react'
import Head from 'next/head'
import { apiEndpoint } from 'prismic-configuration'
import { reset, globals } from 'styles'

/**
 * Meta data component
 */
const Meta = () => {
  const repoNameArray = /([^\/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
  const repoName = repoNameArray[1]

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Head>
      <style jsx global>{ reset }</style>
      <style jsx global>{ globals }</style>
    </Fragment>
  )
}

export default Meta
