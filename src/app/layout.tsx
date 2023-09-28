import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maxim A',
  description: 'Personal Resume Website by Maxim Abdulkhalikov',
  openGraph: {
    images: '/Header.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max A - Potrfolio',
    description: 'Portfolio of Maxim Abdulkhalikov',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
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
