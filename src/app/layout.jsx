import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'

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
      <head>
        <meta name="apple-mobile-web-app-title" content="BOT" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
