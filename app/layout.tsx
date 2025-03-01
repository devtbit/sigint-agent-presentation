import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIGINT Agent',
  description: 'A Proof-of-Concept for AI-Powered SIGINT Operator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
