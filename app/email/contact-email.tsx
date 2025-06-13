import type * as React from "react"

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export const ContactEmail: React.FC<ContactEmailProps> = ({ name, email, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from the EGOS website contact form.</p>

    <h2>Contact Details:</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>

    <h2>Message:</h2>
    <div
      style={{
        padding: "15px",
        backgroundColor: "#f5f5f5",
        borderLeft: "4px solid #dc2626",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      {message.split("\n").map((line, i) => (
        <p key={i} style={{ margin: "8px 0" }}>
          {line}
        </p>
      ))}
    </div>

    <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
      This email was sent from the EGOS website contact form.
    </p>
  </div>
)
