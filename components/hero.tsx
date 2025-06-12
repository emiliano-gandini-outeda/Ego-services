"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>

      {/* Red accent circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {t("hero.title")}
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">{t("hero.subtitle")}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="#products">{t("hero.cta")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">{t("hero.demo")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EGOSicon-JUvOLfFTzXrebCQqpRGz71aNbzjQNX.png"
                alt="EGOS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
