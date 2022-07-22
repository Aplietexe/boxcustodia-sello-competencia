import type { AppProps } from "next/app"
import Head from "next/head"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
