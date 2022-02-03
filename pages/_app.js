import { reset, globals } from '../styles/general';
import * as React from 'react';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName,linkResolver } from './../prismicio';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
      <PrismicPreview repositoryName={repositoryName}>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          <Component {...pageProps} />
        </PrismicProvider>
      </PrismicPreview>
    </>
  )
}

export default MyApp
