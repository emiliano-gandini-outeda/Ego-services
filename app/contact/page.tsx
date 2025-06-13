"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(null, new FormData(e.target as HTMLFormElement))
      setSubmitResult(result)
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get appropriate message based on state
  const getStatusMessage = () => {
    if (!submitResult || !submitResult.message) return null

    if (submitResult.message === "email_sent" || submitResult.message === "email_sent_dev") {
      return "Message sent successfully to emiliano.outeda@gmail.com!"
    } else if (submitResult.message === "missing_fields") {
      return "Please fill in all required fields."
    } else if (submitResult.message === "form_data_missing") {
      return "There was a problem with your form submission. Please try again."
    } else if (submitResult.message === "inappropriate_content") {
      return "Your message contains inappropriate content. Please revise and try again."
    } else {
      return "There was an error sending your message. Please try again."
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Link href="/" className="self-start mb-8 flex items-center gap-2 text-blue-500 hover:text-blue-600">
              ← Back to Home
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="text-gray-500 md:text-xl max-w-2xl">
                Ready to optimize your operations? Get in touch with us today.
              </p>
              <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-gray-500">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md min-h-32"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              {submitResult && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    submitResult.success
                      ? "bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400"
                  }`}
                >
                  {getStatusMessage()}
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Business Information</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-500">emiliano.outeda@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Company</h4>
                    <p className="text-gray-500">Eclipse Growth Optimization Services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Domain</h4>
                    <p className="text-gray-500">ego-services.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/emiliano-gandini-outeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:emiliano.outeda@gmail.com"
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Why Choose EGOS?</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-500">Customized solutions for your specific needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-500">Scalable tools that grow with your organization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-500">Expert support and guidance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-500">Proven experience with small-medium businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
