"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import NextTopLoader from "nextjs-toploader"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system" disableTransitionOnChange>
      <NextTopLoader />
      {children}
    </ThemeProvider>
  )
}

export default Providers
