import "./index.css"
import React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Rewin Jay Subibi — Portfolio",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
