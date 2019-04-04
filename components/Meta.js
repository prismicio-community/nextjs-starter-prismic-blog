import { Fragment } from 'react'
import Head from 'next/head'
import { apiEndpoint } from 'prismic-configuration';
import { reset, globals, medias } from 'styles';

export default () => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
      <link rel="icon" href="/static/favicon.png" type="image/png" />
      <script dangerouslySetInnerHTML={{
        __html: `
        window.prismic = { endpoint: "${apiEndpoint}" }
      `}} />
      <script src="//static.cdn.prismic.io/prismic.min.js" />
    </Head>
    <style jsx global>{ reset }</style>
    <style jsx global>{ globals }</style>
    <style jsx global>{ medias }</style>
  </Fragment>
)