"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // In a real application, you would integrate with an email service like:
  // - Resend
  // - SendGrid
  // - Nodemailer with SMTP
  // - AWS SES

  try {
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
