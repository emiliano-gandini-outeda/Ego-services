"use client"

import { useTranslation } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-secondary/20 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("about.title")}</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Mission */}
          <Card className="bg-secondary/50 border-primary/20">
            <CardHeader>
              <CardTitle>{t("about.mission")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t("about.missionText")}</p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="bg-secondary/50 border-primary/20">
            <CardHeader>
              <CardTitle>{t("about.values")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t("about.valuesItems").map((value: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="bg-secondary/50 border-primary/20 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>{t("about.why")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t("about.whyItems").map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
