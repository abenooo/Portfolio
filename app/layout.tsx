import './globals.css'
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Abenezer Kifle",
  description: "Abenezer Kifle's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const combinedClasses = [
    geistSans.variable,
    geistMono.variable,
    'font-sans',
    'antialiased'
  ].join(' ')

  return (
    <html lang="en">
      <body className={combinedClasses}>{children}</body>
    </html>
  )
}