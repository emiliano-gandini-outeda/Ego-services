"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Products() {
  const { t } = useTranslation()

  return (
    <section id="products" className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("products.title")}</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {/* DevBot */}
          <Card className="bg-secondary/50 border-primary/20 overflow-hidden flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/devBotIcon-vDUEbCVQcr2TS7hOX9pR84kV0uuyyG.png"
                    alt="DevBot Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <CardTitle className="text-2xl">{t("products.devbot.title")}</CardTitle>
                  <CardDescription>{t("products.devbot.tagline")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300">{t("products.devbot.description")}</p>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Key Features</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {t("products.devbot.features").map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Coming Soon</h4>
                <div className="flex flex-wrap gap-2">
                  {t("products.devbot.upcoming").map((feature: string, i: number) => (
                    <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full group" asChild>
                <Link href="/devbot">
                  {t("products.devbot.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* InsightGrid */}
          <Card className="bg-secondary/50 border-primary/20 overflow-hidden flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc2626" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-2xl">{t("products.insightgrid.title")}</CardTitle>
                  <CardDescription>{t("products.insightgrid.tagline")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300">{t("products.insightgrid.description")}</p>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Key Features</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {t("products.insightgrid.features").map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full group" asChild>
                <Link href="/insightgrid">
                  {t("products.insightgrid.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
