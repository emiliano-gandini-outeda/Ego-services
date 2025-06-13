"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-provider"
import { useRouter, usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const { t, language, setLanguage } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    setMobileMenuOpen(false)

    // If it's the home button
    if (href === "/") {
      if (pathname === "/") {
        // Already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        // Navigate to home page and scroll to top
        router.push("/")
        // Use a timeout to ensure navigation completes before scrolling
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)
      }
      return
    }

    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home first
      if (pathname !== "/") {
        router.push("/" + href)
      } else {
        // If we're on home page, scroll to section immediately
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    } else {
      router.push(href)
    }
  }

  // Handle navigation after route change
  useEffect(() => {
    if (pathname === "/") {
      if (window.location.hash) {
        // Handle hash navigation
        setTimeout(() => {
          const element = document.querySelector(window.location.hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 500)
      } else {
        // If no hash, ensure we're at the top (for home navigation from other pages)
        setTimeout(() => {
          if (window.scrollY > 0) {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }, 100)
      }
    }
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <button onClick={() => handleNavigation("/")} className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EGOSicon-JUvOLfFTzXrebCQqpRGz71aNbzjQNX.png"
            alt="EGOS Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="hidden font-bold text-xl md:inline-block">EGOS</span>
        </button>

        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => handleNavigation("/")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.home")}
          </button>
          <button
            onClick={() => handleNavigation("#products")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.products")}
          </button>
          <button
            onClick={() => handleNavigation("#about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.contact")}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Select language">
                <Globe className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">{language === "en" ? "EN" : "ES"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-primary/10" : ""}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("es")} className={language === "es" ? "bg-primary/10" : ""}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-gray-800 p-4">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavigation("/")}
              className="text-lg font-medium hover:text-primary transition-colors text-left py-2"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => handleNavigation("#products")}
              className="text-lg font-medium hover:text-primary transition-colors text-left py-2"
            >
              {t("nav.products")}
            </button>
            <button
              onClick={() => handleNavigation("#about")}
              className="text-lg font-medium hover:text-primary transition-colors text-left py-2"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-lg font-medium hover:text-primary transition-colors text-left py-2"
            >
              {t("nav.contact")}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
