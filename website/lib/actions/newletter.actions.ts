"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID, Query } from "node-appwrite"
import nodemailer from "nodemailer"

const sendEmailNotification = async (email: string, content: string, subject: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "data@bugemauniv.ac.ug",
        pass: "datateam@bu",
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    const mailOptions = {
      from: '"Bugema University Data Team" <data@bugemauniv.ac.ug>',
      to: email,
      subject: subject,
      html: content,
    }

    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    throw new Error("Failed to send email.")
  }
}

export const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient()

  const result = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.newsLetterCollectionId, [
    Query.equal("email", [email]),
  ])

  return result.total > 0 ? result.documents[0] : null
}

export const CreateNewsLetter = async ({
  fname,
  lname,
  email,
}: {
  fname: string
  lname: string
  email: string
}) => {
  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    const { databases } = await createAdminClient()

    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsLetterCollectionId,
      ID.unique(),
      {
        fname,
        lname,
        email,
      },
    )

    if (!response) throw new Error("Failed to create user")

    const content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Bugema University Newsletter!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 0;">
                        <table role="presentation" style="width: 600px; border-collapse: collapse; text-align: left; background-color: #ffffff;">
                            <tr>
                                <td style="padding: 20px 30px;">
                                    <img src="https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67a9b42b0011188988a3/view?project=674dcf7b003d57db960a&mode=admin" alt="Bugema University Logo" style="width: 150px; height: auto;">
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 30px 20px 30px;">
                                    <h1 style="margin: 0; color: #003366; font-size: 28px;">Welcome to the Bugema University Family, ${fname}! 🎓</h1>
                                    <p style="margin: 20px 0; color: #666666; font-size: 16px; line-height: 1.5;">
                                        We're thrilled to have you join our newsletter community. Get ready for an exciting journey of knowledge, opportunities, and growth!
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px 30px 30px;">
                                    <h2 style="color: #003366; font-size: 22px;">What to Expect:</h2>
                                    <ul style="color: #666666; font-size: 16px; line-height: 1.5;">
                                        <li>Latest campus news and events</li>
                                        <li>Exclusive academic insights and research highlights</li>
                                        <li>Student success stories and alumni achievements</li>
                                        <li>Career development opportunities and workshops</li>
                                        <li>Community outreach initiatives</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px 30px 30px;">
                                    <a href="https://www.bugemauniv.ac.ug/" style="background-color: #003366; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-weight: bold; display: inline-block;">Explore Our Website</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px; background-color: #003366;">
                                    <p style="margin: 0; color: #ffffff; font-size: 14px; line-height: 1.5; text-align: center;">
                                        Connect with us on social media:
                                        <br><br>
                                        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Facebook</a> |
                                        <a href="https://x.com/UnivBugema" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Twitter</a> |
                                        <a href="https://www.instagram.com/bugemauniv/" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Instagram</a> |
                                        <a href="https://www.linkedin.com/school/bugema-university/" style="color: #ffffff; text-decoration: none; margin: 0 10px;">LinkedIn</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px; text-align: center; font-size: 12px; color: #666666;">
                                    <p>You're receiving this email because you subscribed to the Bugema University newsletter.</p>
                                    <p>© 2025 Bugema University. All rights reserved.</p>
                                    <p>Bugema, Luweero, Uganda • <a href="mailto:info@bugemauniv.ac.ug" style="color: #003366;">info@bugemauniv.ac.ug</a></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `

    await sendEmailNotification(email, content, "Welcome to Bugema University Newsletter!")
  }
}

