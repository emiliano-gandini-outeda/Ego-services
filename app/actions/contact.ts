"use server"

import { Resend } from "resend"

export async function submitContactForm(formData: FormData | null) {
  try {
    // Check if formData is null or undefined
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

    // Initialize Resend with API key
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set")
      return {
        success: false,
        message: "email_error",
      }
    }

    const resend = new Resend(resendApiKey)

    // Format message with line breaks for HTML
    const formattedMessage = message
      .split("\n")
      .map((line) => `<p style="margin: 8px 0">${line}</p>`)
      .join("")

    // Create email HTML content
    const emailHtml = `
      <div>
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from the EGOS website contact form.</p>

        <h2>Contact Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h2>Message:</h2>
        <div style="padding: 15px; background-color: #f5f5f5; border-left: 4px solid #dc2626; margin-top: 10px; margin-bottom: 10px;">
          ${formattedMessage}
        </div>

        <p style="margin-top: 20px; font-size: 14px; color: #666;">
          This email was sent from the EGOS website contact form.
        </p>
      </div>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "EGOS Contact Form <contact@ego-services.com>",
      to: "emiliano.outeda@gmail.com",
      subject: `Contact Form: Message from ${name}`,
      html: emailHtml,
      reply_to: email,
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
      message: "email_sent", // Using a key for translation instead of hardcoded message
    }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return {
      success: false,
      message: "email_error", // Using a key for translation
    }
  }
}
