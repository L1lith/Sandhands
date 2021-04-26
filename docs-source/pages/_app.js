import React, { Fragment } from 'react'
import App from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import '../styles/_app.less'
import '../styles/highlight.less'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto|Tajawal" rel="stylesheet" />
        <meta name="author" content="Lilith" />
        <title>Sandhands</title>
        <link rel="icon" href="/site-logo.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <Header />
      <main id="page">
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

MyApp.getInitialProps = async function getInitialProps({ Component, ctx }) {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps }
//   }

//   render() {
//     const { Component, pageProps } = this.props

//     return (
//       <Fragment>
//         <Head>
//           <link href="https://fonts.googleapis.com/css?family=Roboto|Tajawal" rel="stylesheet" />
//           <meta name="author" content="Lilith" />
//         </Head>
//         <Header />
//         <main id="page">
//           <Component {...pageProps} />
//         </main>
//       </Fragment>
//     )
//   }
// }

export default MyApp
