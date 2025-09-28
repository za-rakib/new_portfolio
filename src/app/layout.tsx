import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rakib Portfolio',
  description: 'Mobile App Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex items-center justify-center">{children}</body>
    </html>
  )
}