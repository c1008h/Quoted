import React from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'

export default function RootLayout({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
