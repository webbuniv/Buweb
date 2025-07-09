import nodemailer from "nodemailer"

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number.parseInt(process.env.EMAIL_SERVER_PORT!),
    secure: true,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
  })
}

export interface AlumniRegistrationEmailData {
  firstName: string
  lastName: string
  email: string
  studentId: string
  verificationCode: string
  graduationYear: number
  school: string
  degree: string
}

export async function sendAlumniRegistrationConfirmation(data: AlumniRegistrationEmailData) {
  const transporter = createTransporter()

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alumni Registration Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f8fafc;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .verification-code {
          background: #10b981;
          color: white;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          margin: 20px 0;
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 2px;
        }
        .student-id {
          background: #3b82f6;
          color: white;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          margin: 20px 0;
          font-size: 18px;
          font-weight: bold;
        }
        .info-box {
          background: #e0f2fe;
          border-left: 4px solid #0284c7;
          padding: 15px;
          margin: 20px 0;
        }
        .warning-box {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 15px;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🎓 Bugema University</div>
        <h1>Alumni Registration Confirmation</h1>
      </div>
      
      <div class="content">
        <h2>Dear ${data.firstName} ${data.lastName},</h2>
        
        <p>Thank you for registering with the Bugema University Alumni Association! We're excited to welcome you back to our growing community of graduates.</p>
        
        <div class="info-box">
          <h3>📋 Registration Details</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>School:</strong> ${data.school}</p>
          <p><strong>Degree:</strong> ${data.degree}</p>
          <p><strong>Graduation Year:</strong> ${data.graduationYear}</p>
        </div>
        
        <h3>🆔 Your Identification Codes</h3>
        
        <div class="student-id">
          <div>Student ID</div>
          <div>${data.studentId}</div>
        </div>
        
        <div class="verification-code">
          <div>Verification Code</div>
          <div>${data.verificationCode}</div>
        </div>
        
        <div class="warning-box">
          <h4>⚠️ Important: Save Your Verification Code</h4>
          <p>Your verification code <strong>${data.verificationCode}</strong> is unique and can be used for:</p>
          <ul>
            <li>🗳️ Alumni voting and elections</li>
            <li>✅ Identity verification for university services</li>
            <li>🎫 Event registration and access</li>
            <li>💼 Professional networking verification</li>
            <li>📧 Account recovery and support</li>
          </ul>
          <p><strong>Please save this code in a secure location. You may need it at any time for official university business.</strong></p>
        </div>
        
        <div class="info-box">
          <h4>📝 What's Next?</h4>
          <p>Your registration is currently <strong>pending approval</strong> by our alumni office. You will receive another email once your application has been reviewed and approved.</p>
          <p>This process typically takes 2-3 business days.</p>
        </div>
        
        <h3>🌟 Alumni Benefits</h3>
        <p>Once approved, you'll have access to:</p>
        <ul>
          <li>📚 Alumni directory and networking opportunities</li>
          <li>🎓 Continuing education and professional development</li>
          <li>📰 University news and updates</li>
          <li>🤝 Mentorship programs</li>
          <li>🎉 Alumni events and reunions</li>
          <li>💼 Career services and job opportunities</li>
        </ul>
        
        <p>If you have any questions or need assistance, please don't hesitate to contact our Alumni Office:</p>
        <p>
          📧 Email: alumni@bugemauniv.ac.ug<br>
          📞 Phone: +256-414-540-822<br>
          🌐 Website: https://bugemauniv.ac.ug/alumni
        </p>
        
        <p>Welcome back to the Bugema family!</p>
        
        <p>Best regards,<br>
        <strong>Bugema University Alumni Office</strong></p>
      </div>
      
      <div class="footer">
        <p>© ${new Date().getFullYear()} Bugema University. All rights reserved.</p>
        <p>Bugema University, P.O. Box 6529, Kampala, Uganda</p>
      </div>
    </body>
    </html>
  `

  const textContent = `
    Dear ${data.firstName} ${data.lastName},
    
    Thank you for registering with the Bugema University Alumni Association!
    
    REGISTRATION DETAILS:
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    School: ${data.school}
    Degree: ${data.degree}
    Graduation Year: ${data.graduationYear}
    
    YOUR IDENTIFICATION CODES:
    Student ID: ${data.studentId}
    Verification Code: ${data.verificationCode}
    
    IMPORTANT: SAVE YOUR VERIFICATION CODE
    Your verification code ${data.verificationCode} is unique and can be used for:
    - Alumni voting and elections
    - Identity verification for university services
    - Event registration and access
    - Professional networking verification
    - Account recovery and support
    
    Please save this code in a secure location. You may need it at any time for official university business.
    
    WHAT'S NEXT?
    Your registration is currently pending approval by our alumni office. You will receive another email once your application has been reviewed and approved.
    
    This process typically takes 2-3 business days.
    
    If you have any questions, contact us:
    Email: alumni@bugemauniv.ac.ug
    Phone: +256-414-540-822
    Website: https://bugemauniv.ac.ug/alumni
    
    Welcome back to the Bugema family!
    
    Best regards,
    Bugema University Alumni Office
  `

  const mailOptions = {
    from: {
      name: "Bugema University Alumni Office",
      address: process.env.EMAIL_SERVER_USER!,
    },
    to: data.email,
    subject: "🎓 Alumni Registration Confirmation - Save Your Verification Code",
    text: textContent,
    html: htmlContent,
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    console.log("Alumni registration email sent successfully:", result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error("Error sending alumni registration email:", error)
    throw error
  }
}

export async function sendAlumniApprovalNotification(data: AlumniRegistrationEmailData) {
  const transporter = createTransporter()

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alumni Registration Approved</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f8fafc;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .success-badge {
          background: #10b981;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          display: inline-block;
          margin: 20px 0;
          font-weight: bold;
        }
        .cta-button {
          background: #3b82f6;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 8px;
          display: inline-block;
          margin: 20px 0;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">🎓 Bugema University</div>
        <h1>Registration Approved! 🎉</h1>
      </div>
      
      <div class="content">
        <h2>Congratulations ${data.firstName}!</h2>
        
        <div class="success-badge">✅ Your alumni registration has been approved!</div>
        
        <p>We're thrilled to officially welcome you to the Bugema University Alumni Association. Your profile is now active and you have full access to all alumni benefits and services.</p>
        
        <a href="https://bugemauviv.ac.ug/alumni/dashboard" class="cta-button">Access Your Alumni Dashboard</a>
        
        <p>Your verification code <strong>${data.verificationCode}</strong> is now active for all university services.</p>
        
        <p>Start exploring your alumni benefits today!</p>
        
        <p>Best regards,<br>
        <strong>Bugema University Alumni Office</strong></p>
      </div>
      
      <div class="footer">
        <p>© ${new Date().getFullYear()} Bugema University. All rights reserved.</p>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: {
      name: "Bugema University Alumni Office",
      address: process.env.EMAIL_SERVER_USER!,
    },
    to: data.email,
    subject: "🎉 Alumni Registration Approved - Welcome to the Community!",
    html: htmlContent,
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    console.log("Alumni approval email sent successfully:", result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error("Error sending alumni approval email:", error)
    throw error
  }
}
