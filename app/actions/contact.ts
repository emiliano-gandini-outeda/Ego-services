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

  // For now, we'll simulate the email sending
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would send the actual email to emiliano.outeda@gmail.com
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      recipient: "emiliano.outeda@gmail.com",
    })

    return {
      success: true,
      message: "Message sent successfully!",
    }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    }
  }
}
