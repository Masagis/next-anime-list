import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'

import reduxStore from '../src/store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@etchteam/next-pagination/dist/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Anime List | Masagis</title>
        <meta name="description" content="Anime List | Masagis" />
        <meta name="keywords" content="Anime List | Masagis" />

        <link
          rel="icon"
          type="image/png"
          href="https://amartha.com/wp-content/uploads/2019/08/logo_amartha.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://amartha.com/wp-content/uploads/2019/08/logo_amartha.png"
        />
      </Head>
      <Provider store={reduxStore()}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
