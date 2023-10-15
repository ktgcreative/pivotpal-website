import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './Nav'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pivot Pal | Python',
  description: 'PivotPal is a Python package designed by a machine learning student to simplify and enhance the data exploration process. Born out of the challenges of repetitive coding and messy outputs, PivotPal offers structured, user-friendly functions for common data analysis tasks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
      <div className="px-4 mx-auto max-w-screen-xl">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
