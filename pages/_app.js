import { reset, globals } from '../styles/general';
import * as React from 'react'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next';

// Update the path to your Link Resolver
import { repoName,linkResolver } from './../prismicConfiguration';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
      <PrismicPreview repositoryName={repoName}>
        <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} {...props}>
            <a>{children}</a>
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
