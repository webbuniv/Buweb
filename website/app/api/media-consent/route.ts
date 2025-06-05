import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create transporter with better error handling
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number.parseInt(process.env.EMAIL_SERVER_PORT!),
    secure: true, // Use SSL for port 465
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 60000, // 60 seconds
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, registrationNumber, date, consentDetails, agreeToTerms } = body

    if (!fullName || !email || !date || !consentDetails || !agreeToTerms) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const submissionDate = new Date().toLocaleString()
    const formId = `BU-${Date.now()}`
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const printUrl = `${baseUrl}/print-consent/${formId}?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&regNo=${encodeURIComponent(registrationNumber || "")}&date=${encodeURIComponent(date)}&consent=${encodeURIComponent(consentDetails)}&submitted=${encodeURIComponent(submissionDate)}`

    // Create transporter
    const transporter = createTransporter()

    // Verify connection first
    try {
      await transporter.verify()
      console.log("SMTP connection verified successfully")
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError)
      // Continue anyway, sometimes verify fails but sending works
    }

    // Send thank you email to the person
    const thankYouEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Media Consent Confirmation</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #2563eb 0%, #16a34a 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">BUGEMA UNIVERSITY</h1>
            <p style="color: #e0f2fe; margin: 15px 0 0 0; font-size: 16px;">Media Consent Confirmation</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #2563eb, #16a34a); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-size: 24px;">✓</span>
              </div>
              <h2 style="color: #1e293b; margin: 0; font-size: 24px;">Thank You, ${fullName}!</h2>
            </div>
            
            <p style="color: #475569; line-height: 1.6; font-size: 16px; margin-bottom: 25px;">
              Your media consent form has been successfully submitted. We appreciate your participation 
              in allowing Bugema University to use your image/video for promotional purposes.
            </p>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #2563eb;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Submission Confirmation</h3>
              <p style="margin: 8px 0; color: #475569;"><strong>Date of Consent:</strong> ${date}</p>
              <p style="margin: 8px 0; color: #475569;"><strong>Submitted on:</strong> ${submissionDate}</p>
              <p style="margin: 8px 0; color: #475569;"><strong>Reference ID:</strong> ${formId}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #fbbf24;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>Important:</strong> Please keep this email as confirmation of your media consent submission. 
                If you need to make any changes, please contact our media team.
              </p>
            </div>
            
            <p style="color: #475569; font-size: 14px; margin-top: 30px;">
              If you have any questions, please contact our media team at 
              <a href="mailto:${process.env.EMAIL_SERVER_USER}" style="color: #2563eb;">${process.env.EMAIL_SERVER_USER}</a>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #1e293b; padding: 25px 30px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">© 2024 Bugema University. All rights reserved.</p>
            <p style="color: #64748b; margin: 10px 0 0 0; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send thank you email
    try {
      await transporter.sendMail({
        from: `"Bugema University" <${process.env.EMAIL_SERVER_USER}>`,
        to: email,
        subject: "Media Consent Form - Confirmation Received",
        html: thankYouEmailHtml,
      })
      console.log("Thank you email sent successfully")
    } catch (emailError) {
      console.error("Error sending thank you email:", emailError)
      // Continue with admin email even if user email fails
    }

    // Send detailed form email to admin with print link
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Media Consent Form</title>
      </head>
      <body style="margin: 0; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 700px; margin: 0 auto; background-color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-radius: 12px; overflow: hidden;">
          
          <!-- Print Link Section -->
          <div style="background: #f1f5f9; padding: 20px 30px; text-align: center; border-bottom: 1px solid #e2e8f0;">
            <h3 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px;">📄 Printable Media Consent Form</h3>
            <p style="margin: 0 0 15px 0; color: #475569; font-size: 14px;">
              Click the button below to open a printable version of this consent form:
            </p>
            <a href="${printUrl}" 
               style="display: inline-block; background: #2563eb; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; font-size: 14px; margin: 10px;">
              🖨️ Open Printable Form
            </a>
            <p style="margin: 15px 0 0 0; color: #64748b; font-size: 12px;">
              The link will open in your browser where you can print or save as PDF
            </p>
          </div>
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #2563eb 0%, #16a34a 100%); padding: 40px 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 1px;">BUGEMA UNIVERSITY</h1>
            <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">MEDIA CONSENT FORM</p>
            <div style="margin-top: 20px; padding: 10px 20px; background: rgba(255,255,255,0.2); border-radius: 25px; display: inline-block;">
              <span style="font-size: 14px;">Form ID: ${formId}</span>
            </div>
          </div>
          
          <!-- Form Content -->
          <div style="padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #1e293b; margin: 0; font-size: 24px;">New Media Consent Submission</h2>
              <p style="color: #64748b; margin: 10px 0 0 0;">Submitted on ${submissionDate}</p>
            </div>
            
            <!-- Personal Information -->
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 2px solid #e2e8f0;">
              <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
                👤 Personal Information
              </h3>
              <div style="display: grid; gap: 15px;">
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #374151; min-width: 140px;">Full Name:</strong>
                  <span style="color: #1f2937; font-weight: 500;">${fullName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #374151; min-width: 140px;">Email Address:</strong>
                  <span style="color: #1f2937;">${email}</span>
                </div>
                ${
                  registrationNumber
                    ? `
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #374151; min-width: 140px;">Registration No:</strong>
                  <span style="color: #1f2937; font-weight: 500;">${registrationNumber}</span>
                </div>
                `
                    : ""
                }
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                  <strong style="color: #374151; min-width: 140px;">Date:</strong>
                  <span style="color: #1f2937; font-weight: 500;">${date}</span>
                </div>
              </div>
            </div>
            
            <!-- Consent Details -->
            <div style="background: #fefce8; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 2px solid #fbbf24;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
                📋 Consent Details
              </h3>
              <p style="color: #374151; margin: 0; line-height: 1.6; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                ${consentDetails}
              </p>
            </div>
            
            <!-- Agreement Confirmation -->
            <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 2px solid #22c55e;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #22c55e; padding-bottom: 8px;">
                ✅ Agreement Confirmation
              </h3>
              <div style="display: flex; align-items: center; background: white; padding: 15px; border-radius: 8px;">
                <div style="width: 20px; height: 20px; background: #22c55e; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                  <span style="color: white; font-size: 12px; font-weight: bold;">✓</span>
                </div>
                <span style="color: #374151; font-weight: 500;">
                  I agree to the terms and conditions for media usage by Bugema University
                </span>
              </div>
            </div>
            
            <!-- Signature Section -->
            <div style="background: #f1f5f9; padding: 25px; border-radius: 12px; border: 2px dashed #64748b;">
              <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px;">
                ✍️ Digital Signature Confirmation
              </h3>
              <div style="display: flex; justify-content: space-between; align-items: end;">
                <div>
                  <p style="margin: 0; color: #374151; font-weight: 500; font-size: 18px;">${fullName}</p>
                  <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Digital Signature</p>
                  <div style="width: 200px; height: 1px; background: #64748b; margin-top: 10px;"></div>
                </div>
                <div style="text-align: right;">
                  <p style="margin: 0; color: #374151; font-weight: 500;">${submissionDate}</p>
                  <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Date Signed</p>
                  <div style="width: 150px; height: 1px; background: #64748b; margin-top: 10px;"></div>
                </div>
              </div>
            </div>
            
            <!-- Print Link Again -->
            <div style="margin-top: 30px; padding: 20px; background: #e0f2fe; border-radius: 8px; text-align: center; border: 1px solid #0ea5e9;">
              <p style="margin: 0 0 10px 0; color: #0c4a6e; font-weight: 500;">Need to print this form?</p>
              <a href="${printUrl}" 
                 style="display: inline-block; background: #0ea5e9; color: white; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px;">
                🖨️ Open Printable Version
              </a>
            </div>
            
            <!-- Footer Information -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                This form was digitally submitted and processed by Bugema University Media Department<br>
                For inquiries, contact: ${process.env.EMAIL_SERVER_USER} | Generated: ${submissionDate}
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Send admin email
    try {
      await transporter.sendMail({
        from: `"Bugema University System" <${process.env.EMAIL_SERVER_USER}>`,
        to: process.env.EMAIL_SERVER_USER,
        subject: `📄 Media Consent Form - ${fullName} (${submissionDate})`,
        html: adminEmailHtml,
      })
      console.log("Admin email sent successfully")
    } catch (adminEmailError) {
      console.error("Error sending admin email:", adminEmailError)
      // Don't fail the request if admin email fails
    }

    return NextResponse.json({
      success: true,
      message: "Consent form submitted successfully",
      submissionId: formId,
    })
  } catch (error) {
    console.error("Error submitting consent form:", error)
    return NextResponse.json(
      {
        error: "Failed to submit form. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
