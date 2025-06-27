import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EGOS - Eclipse Growth Optimization Services | Custom Business Tools",
  description:
    "Eclipse Growth Optimization Services provides custom tools for small to medium businesses and open source projects. Visit us at ego-services.com",
  keywords: "business optimization, custom tools, discord bot, data analytics, small business solutions",
  authors: [{ name: "Eclipse Growth Optimization Services" }],
  creator: "Eclipse Growth Optimization Services",
  publisher: "Eclipse Growth Optimization Services",
  metadataBase: new URL("https://ego-services.com"),
  icons: {
    icon: "/images/company-logo.png", // ✅ favicon correcto
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider defaultLanguage="en">
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
