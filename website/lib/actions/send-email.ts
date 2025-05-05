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

export async function sendEmail(formData: FormData): Promise<{
  success: boolean
  message: string
  errors?: { email?: string[]; contact?: string[]; message?: string[] }
}> {
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
    // Create a transporter using Google Workspace SMTP settings
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
    })

    // Format the current date
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })

    // Professional HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333333;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td style="padding: 20px 0;">
              <table align="center" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden; margin: 0 auto;">
                <!-- Header -->
                <tr>
                  <td style="background-color: #003366; padding: 30px 40px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Bugema University</h1>
                    <p style="color: #ffffff; margin: 10px 0 0; font-size: 16px;">New Contact Form Submission</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5;">A new message has been submitted through the contact form on the Bugema University website.</p>
                    
                    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 15px; background-color: #f9f9f9; border-radius: 6px;">
                          <table width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="padding-bottom: 10px;">
                                <p style="margin: 0; font-size: 14px; color: #666666;">Submitted on:</p>
                                <p style="margin: 5px 0 0; font-size: 16px; font-weight: 600;">${currentDate} at ${currentTime}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <p style="margin: 0 0 8px; font-size: 14px; color: #666666; font-weight: 600;">From:</p>
                          <p style="margin: 0; font-size: 16px;">${email}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <p style="margin: 0 0 8px; font-size: 14px; color: #666666; font-weight: 600;">Contact:</p>
                          <p style="margin: 0; font-size: 16px;">${contact || "Not provided"}</p>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td>
                          <p style="margin: 0 0 15px; font-size: 14px; color: #666666; font-weight: 600;">Message:</p>
                          <div style="background-color: #f9f9f9; border-left: 4px solid #003366; padding: 15px; border-radius: 4px;">
                            <p style="margin: 0; font-size: 16px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f5f5f5; padding: 20px 40px; text-align: center; border-top: 1px solid #eeeeee;">
                    <p style="margin: 0; font-size: 14px; color: #666666;">
                      This is an automated message from the Bugema University website contact form.
                    </p>
                    <p style="margin: 10px 0 0; font-size: 14px; color: #666666;">
                      To reply to this message, simply respond to this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Define email content
    const mailOptions = {
      from: `"Bugema University Data Team" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email, // Set reply-to as the submitter's email
      subject: "New Contact Form Submission - Bugema University",
      text: `
New Contact Form Submission

From: ${email}
Contact: ${contact || "Not provided"}
Date: ${currentDate} at ${currentTime}

Message:
${message}

---
This is an automated message from the Bugema University website contact form.
To reply to this message, simply respond to this email.
      `,
      html: htmlTemplate,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId)

    return {
      success: true,
      message: "Your message has been sent! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}
