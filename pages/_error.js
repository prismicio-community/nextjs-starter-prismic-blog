import React from 'react'
import DefaultLayout from 'layouts'
import Head from 'next/head'

const Error = (props) => (
  <DefaultLayout>
    <div className='not-found'>
      <Head><title>Error!</title></Head>
      <h1>{props.statusCode
        ? `${props.statusCode} Error`
        : 'Client-side error'}</h1>
      <h2>{props.statusCode === '404' ? 'Document not found' : 'Please contact developer'}</h2>
      <p><a href='/'>Return to homepage</a></p>
      <style jsx>{`
        .not-found {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 42vw;
          align-items: center;
        }
      `}</style>
    </div>
  </DefaultLayout>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
