'use server';

import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID } from 'node-appwrite';
import nodemailer from 'nodemailer';
import { parseStringify } from '../utils';
import { getUserByEmail } from './user.action';

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};

const sendEmailNotification = async (email: string, content: string, subject: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "your-email@gmail.com",
        pass: "your-app-password",
      },
    });

    const mailOptions = {
      from: 'Your Company <your-email@gmail.com>',
      to: email,
      subject: subject,
      html: content,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
};

export const CreateNewsLetter = async ({  
    fname,
    lname,
    email,
  }: {
    fname: string;
    lname: string;
    email: string;
  }) => {
    const existingUser = await getUserByEmail(email);
    
    if (!existingUser) {
        const { databases } = await createAdminClient();
    
        const response = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.newsLetterCollectionId,
          ID.unique(),
          {
            fname,
            lname,
            email,
          },
        );

        if (!response) throw new Error("Failed to create user");

        const content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Our Newsletter!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 0;">
                        <table role="presentation" style="width: 600px; border-collapse: collapse; text-align: center; background-color: #ffffff;">
                            <tr>
                                <td style="padding: 0;">
                                    <img src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Newsletter Header" style="width: 100%; max-width: 600px; height: auto;">
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 30px 20px 30px;">
                                    <h1 style="margin: 0; color: #333333; font-size: 28px;">Welcome, ${fname} ${lname}!</h1>
                                    <p style="margin: 20px 0; color: #666666; font-size: 16px; line-height: 1.5;">Thank you for subscribing to our newsletter. We're thrilled to have you join our community!</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px 30px 30px;">
                                    <a href="#" style="background-color: #4CAF50; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-weight: bold; display: inline-block;">Explore Our Website</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `;

        await sendEmailNotification(email, content, "Welcome to Our Newsletter!");

        return parseStringify({ accountId: response.$id });
    }
    return parseStringify({ accountId: existingUser.accountId });
}
