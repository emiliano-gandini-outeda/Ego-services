"use server"

// Import Resend with a try-catch to handle potential missing package
let Resend: any
try {
  Resend = require("resend").Resend
} catch (error) {
  console.error("Failed to import Resend:", error)
  // Create a mock Resend class for fallback
  Resend = class MockResend {
    constructor() {}
    emails = {
      send: async () => {
        console.log("Mock email send - Resend package not available")
        return { data: null, error: { message: "Resend package not available" } }
      },
    }
  }
}

// Define a type for the form state
type FormState = {
  success?: boolean
  message?: string
} | null

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: FormState, formData: FormData) {
  try {
    // Check if formData exists
    if (!formData) {
      console.error("Form data is null or undefined")
      return {
        success: false,
        message: "form_data_missing",
      }
    }

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name, email, message })
      return {
        success: false,
        message: "missing_fields",
      }
    }

    // Basic content validation to prevent spam/inappropriate content
    const forbiddenWords = ["gay", "nigger", "fuck", "shit", "ass", "dick", "pussy", "cunt"]
    const contentCheck = (name + " " + message).toLowerCase()

    if (forbiddenWords.some((word) => contentCheck.includes(word))) {
      return {
        success: false,
        message: "inappropriate_content",
      }
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key is not configured")
      // Fall back to console logging in development
      console.log("Email would be sent to emiliano.outeda@gmail.com with the following content:", {
        to: "emiliano.outeda@gmail.com",
        from: email,
        subject: `Contact Form: Message from ${name}`,
        body: message,
        timestamp: new Date().toISOString(),
      })

      return {
        success: true,
        message: "email_sent_dev", // Indicate this was a development mode send
      }
    }

    // Send the actual email using Resend
    const { data, error } = await resend.emails.send({
      from: "EGOS Contact Form <contact@yourdomain.com>",
      to: ["emiliano.outeda@gmail.com"],
      subject: `Contact Form: Message from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Message:

${message}

Sent at: ${new Date().toISOString()}
      `,
    })

    if (error) {
      console.error("Error sending email with Resend:", error)
      return {
        success: false,
        message: "email_error",
      }
    }

    console.log("Email sent successfully with Resend:", data)

    // Returning success state
    return {
      success: true,
      message: "email_sent",
    }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return {
      success: false,
      message: "email_error",
    }
  }
}
