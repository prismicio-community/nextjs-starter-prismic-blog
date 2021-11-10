import Link from 'next/link'
import Head from "next/head"
import DefaultLayout from "../layouts"
import { fourohfourStyles } from "../styles";

export default function Custom404() {
  return <>
    <DefaultLayout>
      <Head>
          <title>404 - oops</title>
      </Head>
      <div className="fourohfour">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>
            Go back home
          </a>
        </Link>
      </div>
      <style jsx global>
        {fourohfourStyles}
      </style>
    </DefaultLayout>
  </>
}