"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Email validation schema
const EmailFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  contact: z.string().optional(),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
})

type EmailFormData = z.infer<typeof EmailFormSchema>

export async function sendEmail(formData: FormData) {
  // Extract form data
  const email = formData.get("email") as string
  const contact = formData.get("contact") as string
  const message = formData.get("message") as string

  // Validate form data
  const validatedFields = EmailFormSchema.safeParse({
    email,
    contact,
    message,
  })

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Define email content - using the same email for from and to
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // If EMAIL_TO is not set, send to self
      subject: "New Contact Form Submission",
      text: `
        Email: ${email}
        Contact: ${contact || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Email sent successfully!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}
