"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Linkedin } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"
import { submitContactForm } from "@/app/actions/contact"
import { useFormState } from "react-dom"
import { useState, useEffect } from "react"

export default function Contact() {
  const { t } = useTranslation()

  // Initialize form state with useFormState hook
  const initialState = { message: "", success: false }
  const [state, formAction] = useFormState(submitContactForm, initialState)

  // Track form submission state
  const [isPending, setIsPending] = useState(false)

  // Handle form submission start and end
  const handleSubmitStart = () => setIsPending(true)
  const handleSubmitEnd = () => setIsPending(false)

  // Reset pending state when state changes
  useEffect(() => {
    if (state && state.message) {
      handleSubmitEnd()
    }
  }, [state])

  // Get appropriate message based on state
  const getStatusMessage = () => {
    if (!state || !state.message) return null

    if (state.message === "email_sent" || state.message === "email_sent_dev") {
      return t("contact.success")
    } else if (state.message === "missing_fields") {
      return t("contact.missingFields") || "Please fill in all required fields."
    } else if (state.message === "form_data_missing") {
      return t("contact.formError") || "There was a problem with your form submission. Please try again."
    } else if (state.message === "inappropriate_content") {
      return (
        t("contact.inappropriate_content") ||
        "Your message contains inappropriate content. Please revise and try again."
      )
    } else {
      return t("contact.error")
    }
  }

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.title")}</h2>
            <p className="text-gray-300 md:text-xl">{t("contact.subtitle")}</p>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-secondary/50 border-primary/20">
            <CardHeader>
              <CardTitle>{t("contact.formTitle")}</CardTitle>
              <CardDescription>{t("contact.formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} onSubmit={handleSubmitStart} className="space-y-4">
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
                  {isPending ? t("contact.sending") || "Sending..." : t("contact.submit")}
                </Button>
              </form>
              {state && state.message && (
                <div
                  className={`mt-4 p-4 rounded-md ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
                >
                  {getStatusMessage()}
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
                    <DiscordIcon className="h-5 w-5" />
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
          </div>
        </div>
      </div>
    </section>
  )
}
