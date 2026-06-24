import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: 'Maxim A',
  description: 'Personal Resume Website by Maxim Abdulkhalikov',
  openGraph: {
    images: '/Header.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max A - Portfolio',
    description: 'Portfolio of Maxim Abdulkhalikov',
    creator: '@maxakadem1',
    images: ['/Header.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
