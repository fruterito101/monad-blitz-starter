import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monad Blitz Collection',
  description: 'Mintea tu colección en Monad Testnet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
