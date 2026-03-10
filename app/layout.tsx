import { Geist, Geist_Mono } from "next/font/google"
import "./index.css"
import React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navigation"
import { Footer } from "@/components/Navigation/Footer"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
        <Navbar />
      </body>
    </html>
  )
}
