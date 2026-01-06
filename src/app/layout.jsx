import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sobat Jagoan Discord Bot",
  description: "Bot discord official Sobat Jagoan",
};

export default function RootLayout({ children }) {
  return (
    <html
      className='dark'
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
