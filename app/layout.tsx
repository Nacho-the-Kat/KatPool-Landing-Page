import './css/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const uncutsans = localFont({
  src: [
    {
      path: '../public/fonts/Uncut-Sans-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Uncut-Sans-Semibold.woff2',
      weight: '600',
    }, 
    {
      path: '../public/fonts/Uncut-Sans-Bold.woff2',
      weight: '700',
    }, 
    {
      path: '../public/fonts/Uncut-Sans-BoldOblique.woff2',
      weight: '700',
      style: 'italic'
    },          
  ],
  variable: '--font-uncut-sans',
  display: 'swap',  
})

export const metadata = {
  title: 'Kat Pool - Kaspa Mining Pool',
  description: 'Kat Pool is the first open-source mining pool built for Kaspa, empowering miners with transparency, scalability, and freedom.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${uncutsans.variable} font-inter antialiased bg-gray-900 text-gray-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
