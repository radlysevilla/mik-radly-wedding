import type { Metadata } from 'next'
import { Noto_Serif_Display } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mik & Radly\'s Wedding',
  description: 'Join us as we celebrate our special day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSerif.className}>{children}</body>
    </html>
  )
} 