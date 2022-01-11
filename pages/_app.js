import { reset, globals } from '../styles/general';
import * as React from 'react'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'

// Update the path to your Link Resolver
import { linkResolver } from './../prismicConfiguration';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
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
    </>
  )
}

export default MyApp
