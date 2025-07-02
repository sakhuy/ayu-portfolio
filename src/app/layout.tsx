import type React from "react"
import type { Metadata } from "next"
// 1. Impor STIX_Two_Text di samping Inter
import { Inter, STIX_Two_Text } from "next/font/google"
import "./globals.css"

// 2. Konfigurasi Inter untuk menggunakan CSS Variable
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

// 3. Konfigurasi STIX_Two_Text untuk menggunakan CSS Variable
const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: 'swap',
  variable: '--font-stix',
})

export const metadata: Metadata = {
  title: "Ayu Joyo Atmojo - Portfolio",
  description: "Digital Communication & Media student portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${stixTwoText.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}