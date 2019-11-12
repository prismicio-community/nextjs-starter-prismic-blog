import React from 'react'
import Head from 'next/head'

import DefaultLayout from 'layouts'
import { errorStyles } from 'styles'

/**
 * Error page component
 */
const Error = ({ statusCode }) => {
  const errorHeading = statusCode ? `${statusCode} Error` : 'Client-side error'
  const errorMessage = statusCode === '404' ? 'Document not found' : 'Please contact your development team'

  return (
    <DefaultLayout>
      <div className="not-found">
        <Head>
          <title>Error!</title>
        </Head>
        <h1>{errorHeading}</h1>
        <h2>{errorMessage}</h2>
        <p>
          <a href="/">Return to homepage</a>
        </p>
        <style jsx global>{errorStyles}</style>
      </div>
    </DefaultLayout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
