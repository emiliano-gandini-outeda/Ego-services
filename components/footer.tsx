"use client"

import { useTranslation } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import { Github, Mail, Linkedin } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"
import { useRouter, usePathname } from "next/navigation"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (href: string) => {
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

  return (
    <footer className="bg-secondary/30 border-t border-primary/10">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/company-logo.png" alt="EGOS Logo" width={40} height={40} className="h-10 w-10" />
              <span className="font-bold text-xl">EGOS</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              {t("footer.description") ||
                "Eclipse Growth Optimization Services (EGOS) provides custom tools for small to medium businesses and open source projects. Visit us at ego-services.com"}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.products")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/devbot" className="text-gray-400 hover:text-primary transition-colors">
                  DevBot
                </Link>
              </li>
              <li>
                <Link href="/insightgrid" className="text-gray-400 hover:text-primary transition-colors">
                  InsightGrid
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("#about")}
                  className="text-gray-400 hover:text-primary transition-colors text-left"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-400 hover:text-primary transition-colors text-left"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-primary transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/legal?tab=privacy" className="text-gray-400 hover:text-primary transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Eclipse Growth Optimization Services. {t("footer.rights")}.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/emiliano-gandini-outeda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://discord.gg/egos" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <DiscordIcon className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:emiliano.outeda@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
