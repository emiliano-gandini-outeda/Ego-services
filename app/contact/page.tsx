"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, MessageSquare, Mail, Linkedin, ArrowLeft } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { useActionState, useEffect } from "react"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useTranslation()
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Default why items if translation is not available
  const whyItems = [
    "Customized solutions for your specific needs",
    "Scalable tools that grow with your organization",
    "Expert support and guidance",
    "Proven experience with small-medium businesses",
  ]

  // Safely get the translated why items, falling back to default if not an array
  const getWhyItems = () => {
    const translated = t("about.whyItems")
    return Array.isArray(translated) ? translated : whyItems
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Button variant="ghost" asChild className="self-start mb-8">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.title")}</h1>
              <p className="text-gray-300 md:text-xl max-w-2xl">{t("contact.subtitle")}</p>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-secondary/50 border-primary/20">
              <CardHeader>
                <CardTitle>{t("contact.formTitle")}</CardTitle>
                <CardDescription>{t("contact.formDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("contact.namePlaceholder")}
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("contact.messagePlaceholder")}
                      required
                      className="min-h-32 bg-secondary/50"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Sending..." : t("contact.submit")}
                  </Button>
                </form>
                {state && (
                  <div
                    className={`mt-4 p-4 rounded-md ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
                  >
                    {state.message}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-secondary/50 border-primary/20">
                <CardHeader>
                  <CardTitle>{t("contact.info")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">emiliano.outeda@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Company</h4>
                    <p className="text-gray-300">Eclipse Growth Optimization Services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Domain</h4>
                    <p className="text-gray-300">ego-services.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 border-primary/20">
                <CardHeader>
                  <CardTitle>{t("contact.social")}</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/emiliano-gandini-outeda"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://discord.gg/egos" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                      <MessageSquare className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:emiliano.outeda@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 border-primary/20">
                <CardHeader>
                  <CardTitle>{t("about.why") || "Why Choose EGOS?"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {getWhyItems().map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
