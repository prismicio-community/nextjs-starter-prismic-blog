import React from 'react';

export default function NotFound() {
  document.title = "404 :<";
  return (
    <div className="not-found">
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