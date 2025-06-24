import { type NextRequest, NextResponse } from "next/server"
import { resend } from "@/lib/resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to you (the business owner)
    const { data: businessEmail, error: businessError } = await resend.emails.send({
      from: "Contact Form <noreply@bitropy.io>", // Use your verified domain
      to: ["info@bitropy.io"], // Your email address
      reply-to: [email],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              This email was sent from the contact form on bitropy.io
            </p>
          </div>
        </div>
      `,
    })

    if (businessError) {
      console.error("Error sending business email:", businessError)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Send confirmation email to the user
    const { data: confirmationEmail, error: confirmationError } = await resend.emails.send({
      from: "Darek from Bitropy <noreply@bitropy.io>", // Use your verified domain
      to: [email],
      subject: "Thank you for contacting Bitropy - We'll be in touch soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 1px solid #e5e7eb;">
            <h1 style="color: #1f2937; margin: 0;">Bitropy</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Technology Consulting</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #1f2937;">Hi ${name},</h2>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Thank you for reaching out to us! We've received your message about "<strong>${subject}</strong>" 
              and appreciate you taking the time to contact us.
            </p>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
              <ul style="color: #4b5563; line-height: 1.6;">
                <li>We'll review your message within 24 hours</li>
                <li>A member of our team will respond with next steps</li>
                <li>If urgent, feel free to schedule a call directly</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendly.com/darekd/30min" 
                 style="background-color: #1f2937; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Schedule a Call
              </a>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Best regards,<br>
              <strong>Darek Dwornikowski</strong><br>
              Founder & CEO, Bitropy<br>
              <a href="mailto:info@bitropy.io" style="color: #1f2937;">info@bitropy.io</a>
            </p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              Bitropy - Strategic Technology Consulting<br>
              <a href="https://bitropy.io" style="color: #1f2937;">bitropy.io</a>
            </p>
          </div>
        </div>
      `,
    })

    if (confirmationError) {
      console.error("Error sending confirmation email:", confirmationError)
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        businessEmailId: businessEmail?.id,
        confirmationEmailId: confirmationEmail?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
