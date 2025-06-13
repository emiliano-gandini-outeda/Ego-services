"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Bot, Shield, Zap, Users } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function DevBotPage() {
  const { t } = useTranslation()

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Default features in case translations aren't available
  const defaultFeatures = [
    {
      icon: Bot,
      title: "Advanced Ticket System",
      description: "Professional support ticketing with privacy controls and workflow automation.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Create custom automated responses and moderation workflows.",
    },
    {
      icon: Github,
      title: "GitHub Integration",
      description: "Seamless integration with GitHub repositories for project management.",
    },
    {
      icon: Users,
      title: "Meeting Scheduler",
      description: "Coordinate team meetings and community events efficiently.",
    },
    {
      icon: DiscordIcon,
      title: "Conversation Management",
      description: "Advanced tools for organizing and managing community discussions.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Comprehensive data protection and user privacy controls.",
    },
  ]

  // Default upcoming features
  const defaultUpcomingFeatures = [
    "AI-Powered Features",
    "Google Calendar Integration",
    "Notion Integration",
    "Trello Integration",
    "Advanced Analytics",
    "API & Webhooks",
  ]

  // Default use cases
  const defaultUseCases = [
    {
      title: "Open Source Projects",
      description: "GitHub integration, contributor management, and issue tracking automation.",
    },
    {
      title: "Developer Communities",
      description: "Code review coordination, technical discussions, and knowledge sharing.",
    },
    {
      title: "Educational Servers",
      description: "Assignment reminders, study groups, and academic project coordination.",
    },
    {
      title: "Team Collaboration",
      description: "Internal project management, meeting coordination, and workflow automation.",
    },
  ]

  // Get features from translations or use defaults
  const features = defaultFeatures.map((feature, index) => {
    const translatedFeatures = t("products.devbot.features")
    return {
      ...feature,
      title: Array.isArray(translatedFeatures) && translatedFeatures[index] ? translatedFeatures[index] : feature.title,
    }
  })

  // Get upcoming features from translations or use defaults
  const translatedUpcoming = t("products.devbot.upcoming")
  const upcomingFeatures = Array.isArray(translatedUpcoming) ? translatedUpcoming : defaultUpcomingFeatures

  // Get use cases from translations or use defaults
  const translatedUseCases = t("devbot.useCasesItems")
  const useCases = Array.isArray(translatedUseCases) ? translatedUseCases : defaultUseCases

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"></div>

        {/* Floating animated elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-primary/70 rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/devbot-logo.png"
                  alt="devBot Logo"
                  width={80}
                  height={80}
                  className="h-20 w-20 animate-glow"
                />
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">devBot</h1>
                  <p className="text-xl text-primary font-semibold">
                    {t("products.devbot.tagline") || "Advanced Discord Community Management Solution"}
                  </p>
                </div>
              </div>

              <p className="max-w-[600px] text-gray-300 md:text-xl">
                {t("products.devbot.description") || defaultFeatures[0].description}
              </p>

              <div className="flex justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">{t("devbot.getStarted") || "Get Started Today"}</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/images/devbot-logo.png"
                  alt="devBot Logo"
                  fill
                  className="object-contain animate-glow"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              {t("devbot.features") || "Core Features"}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card key={i} className="bg-secondary/50 border-primary/20">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4 animate-glow" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-background py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              {t("devbot.useCases") || "Perfect For"}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, i) => (
              <Card key={i} className="bg-secondary/50 border-primary/20">
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="bg-secondary/20 py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              {t("devbot.upcomingFeatures") || "Coming Soon"}
            </h2>
            <p className="text-gray-300 md:text-xl mb-8">
              devBot is continuously evolving with new features and integrations
            </p>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {upcomingFeatures.map((feature, i) => (
                <div key={i} className="flex justify-center">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20 p-4 text-center w-full"
                  >
                    {feature}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("devbot.cta") || "Ready to Transform Your Community Management?"}
            </h2>
            <p className="text-gray-300 md:text-xl max-w-2xl mx-auto">
              {t("devbot.ctaDescription") ||
                "Join the growing number of communities using devBot to streamline their operations and enhance member engagement."}
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">{t("devbot.getStarted") || "Get Started Today"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
