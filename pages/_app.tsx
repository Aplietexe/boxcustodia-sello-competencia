import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from "next/app"
import Head from "next/head"

import GlobalStyle from "styles/GlobalStyle"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default MyApp
