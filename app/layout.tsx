import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WrapNavbar from '@/components/Navbar/WrapNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biografi Candi Prambanan',
  description: 'Biografi candi prambanan, berbagai sejarah dan keindahannya.',
  icons: {
    icon: './logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WrapNavbar />
        {children}
      </body>
    </html>
  )
}
