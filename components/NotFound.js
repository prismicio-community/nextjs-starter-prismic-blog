import React from 'react';
import Head from 'next/head';

export default function NotFound() {
  return (
    <div className="not-found">
      <Head><title>404 Error - Document not found</title></Head>
      <h1>404</h1>
      <h2>Document not found</h2>
      <p><a href="/">Return to homepage</a></p>
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
  );
}