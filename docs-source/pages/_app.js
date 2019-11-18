import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import '../styles/_app.less'
import '../styles/highlight.less'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto|Tajawal" rel="stylesheet"/>
          <meta name="author" content="Lilith"/>
        </Head>
        <Header/>
        <main id="page">
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}

export default MyApp;
