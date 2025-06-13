"use server"

// Define a type for the form state
type FormState = {
  success: boolean
  message: string
}

export async function submitContactForm(prevState: FormState | null, formData: FormData): Promise<FormState> {
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

    // Log the email details (since we don't have Resend configured yet)
    console.log("Email would be sent with the following content:", {
      to: "emiliano.outeda@gmail.com",
      from: email,
      subject: `Contact Form: Message from ${name}`,
      body: message,
      timestamp: new Date().toISOString(),
    })

    // Return success
    return {
      success: true,
      message: "email_sent_dev",
    }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return {
      success: false,
      message: "email_error",
    }
  }
}
