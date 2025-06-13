"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Database, BarChart3, Zap, Shield, Cloud, Code } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function InsightGridPage() {
  const { t } = useTranslation()

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: Database,
      title: "Custom Data Processing Pipelines",
      description: "Build tailored data processing workflows that match your specific business requirements.",
    },
    {
      icon: BarChart3,
      title: "Advanced Data Linking & Mapping",
      description: "Create complex relationships between datasets with intelligent mapping algorithms.",
    },
    {
      icon: Zap,
      title: "Real-time Data Transformation",
      description: "Process and transform data in real-time with high-performance processing engines.",
    },
    {
      icon: BarChart3,
      title: "Interactive Visualization Dashboards",
      description: "Create stunning, interactive dashboards that make data insights accessible to everyone.",
    },
    {
      icon: Database,
      title: "Multi-format Data Import/Export",
      description: "Support for CSV, JSON, XML, databases, and custom formats with seamless conversion.",
    },
    {
      icon: Code,
      title: "Custom Algorithm Implementation",
      description: "Deploy custom algorithms and machine learning models tailored to your data needs.",
    },
    {
      icon: Shield,
      title: "Automated Data Quality Assessment",
      description: "Ensure data integrity with automated validation, cleansing, and quality reporting.",
    },
    {
      icon: Cloud,
      title: "Secure Cloud & On-premise Deployment",
      description: "Flexible deployment options with enterprise-grade security and compliance.",
    },
  ]

  const benefits = [
    "Transform raw data into actionable business insights",
    "Reduce manual data processing time by up to 90%",
    "Improve data accuracy and consistency across systems",
    "Scale data operations as your business grows",
    "Integrate with existing tools and workflows",
    "Ensure compliance with data governance standards",
  ]

  const useCases = [
    {
      title: "Business Intelligence",
      description: "Create comprehensive BI solutions with custom analytics and reporting capabilities.",
    },
    {
      title: "Data Integration",
      description: "Connect disparate data sources and create unified views of your business data.",
    },
    {
      title: "Process Automation",
      description: "Automate complex data workflows and reduce manual intervention in data operations.",
    },
    {
      title: "Custom Analytics",
      description: "Develop specialized analytics tools that address your unique business challenges.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"></div>

        {/* Floating animated elements */}
        <div className="absolute top-16 left-16 w-5 h-5 bg-primary rounded-full animate-float opacity-50"></div>
        <div
          className="absolute top-32 right-16 w-3 h-3 bg-primary/80 rounded-full animate-float opacity-60"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-24 left-24 w-4 h-4 bg-primary rounded-full animate-float opacity-40"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#dc2626"
                    viewBox="0 0 16 16"
                    className="animate-glow"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">InsightGrid</h1>
                  <p className="text-xl text-primary font-semibold">Custom Data Treatment & Linking Solutions</p>
                </div>
              </div>

              <p className="max-w-[600px] text-gray-300 md:text-xl">
                A powerful web application platform designed to host custom data treatment and linking tools tailored
                specifically for each client's unique needs. InsightGrid transforms raw data into actionable insights
                through intelligent processing, advanced analytics, and seamless data integration capabilities.
              </p>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Request Custom Solution</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="w-64 h-64 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="256"
                    height="256"
                    fill="#dc2626"
                    viewBox="0 0 16 16"
                    className="animate-glow"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                  </svg>
                </div>
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
              {t("insightgrid.features") || "Powerful Features"}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Card key={i} className="bg-secondary/50 border-primary/20">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4 animate-glow" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              {t("insightgrid.benefits") || "Key Benefits"}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              {t("insightgrid.useCases") || "Use Cases"}
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

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("insightgrid.cta") || "Ready to Transform Your Data Operations?"}
            </h2>
            <p className="text-gray-300 md:text-xl max-w-2xl mx-auto">
              {t("insightgrid.ctaDescription") ||
                "Let us create a custom InsightGrid solution tailored to your specific data challenges and business requirements."}
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">{t("insightgrid.requestSolution") || "Request Custom Solution"}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">{t("contact.title") || "Contact Us"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
