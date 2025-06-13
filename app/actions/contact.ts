"use server"

// Define a type for the form state
type FormState = {
  success?: boolean
  message?: string
} | null

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

    // In a real application, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would send the actual email to emiliano.outeda@gmail.com
    console.log("Email sent to emiliano.outeda@gmail.com with the following content:", {
      to: "emiliano.outeda@gmail.com",
      from: email,
      subject: `Contact Form: Message from ${name}`,
      body: message,
      timestamp: new Date().toISOString(),
    })

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
