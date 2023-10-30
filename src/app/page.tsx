import React, { useEffect } from 'react'
import HomePage from '@/pages/homePage'
import Head from 'next/head'
import { initGA, logPageView } from '../../analytics'

declare global {
  interface Window {
    GA_INITIALIZED?: boolean
  }
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <>
      <HomePage />
    </>
  )
}
