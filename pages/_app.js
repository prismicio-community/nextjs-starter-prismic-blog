import { reset, globals } from '../styles/general';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
