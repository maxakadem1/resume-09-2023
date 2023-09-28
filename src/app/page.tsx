import React from 'react'
import HomePage from '@/pages/homePage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Website Title</title>

        {/* Basic meta tags */}
        <meta
          name='description'
          content='Webiste portfolio of Maxim Abdulkhalikov'
        />

        {/* Open Graph meta tags */}
        <meta property='og:title' content='Max A - Potrfolio' />
        <meta
          property='og:description'
          content='Webiste portfolio of Maxim Abdulkhalikov'
        />
        <meta property='og:image' content='/Header.png' />
        <meta property='og:url' content='maxworks.dev' />
        <meta property='og:type' content='website' />

        {/* Twitter specific meta tags (optional, but good to have) */}
        <meta name='twitter:card' content='/Header.png' />
        <meta name='twitter:title' content='Max A - Potrfolio' />
        <meta
          name='twitter:description'
          content='Webiste portfolio of Maxim Abdulkhalikov'
        />
        <meta name='twitter:image' content='/Header.png' />
      </Head>

      <HomePage />
    </>
  )
}
