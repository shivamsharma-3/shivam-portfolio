import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialise once per cold start. If the API key is missing, the route will
// gracefully fall back to logging + returning success so local dev still works,
// but production deployments MUST set RESEND_API_KEY for real delivery.
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

// Where the contact form delivers. Pulled from env so you can change it
// without touching code. Defaults to the address already shown on the page.
const RECIPIENT_EMAIL =
  process.env.CONTACT_RECIPIENT_EMAIL || 'shivamsharma4c@gmail.com'

// The "from" address. Resend's free tier lets you send from
// onboarding@resend.dev to the account owner's verified email without
// any domain setup — perfect for a personal portfolio.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Basic validation — empty fields are rejected before any network call.
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Lightweight email shape check — saves a round-trip to Resend.
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Hard cap message length — protects against abuse.
    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message too long' },
        { status: 400 }
      )
    }

    // No API key configured (e.g. local dev without .env). Log + succeed so
    // the form UX still works, but surface a clear note in server logs.
    if (!resend) {
      console.warn(
        '[contact] RESEND_API_KEY not set — message was NOT emailed. ' +
          'Add it to .env to enable delivery. Submission:',
        { name, email, message }
      )
      return NextResponse.json(
        { success: true, warning: 'Email not configured' },
        { status: 200 }
      )
    }

    // Send the actual email. The reply-to is the visitor's address so you
    // can hit "reply" in your inbox and respond directly.
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
        '',
        '---',
        'Sent from your portfolio contact form.',
      ].join('\n'),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #0a0a0a;">
          <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-size: 13px; color: #737373; width: 80px; vertical-align: top;">Name</td>
              <td style="padding: 6px 0; font-size: 14px; font-weight: 500;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-size: 13px; color: #737373; vertical-align: top;">Email</td>
              <td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #d97706; text-decoration: none;">${escapeHtml(email)}</a></td>
            </tr>
          </table>
          <div style="padding: 16px; background: #fafafa; border-left: 3px solid #fbbf24; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
          <p style="margin: 24px 0 0 0; font-size: 12px; color: #a3a3a3;">Sent from your portfolio contact form · Reply directly to this email to respond.</p>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

// Tiny HTML-escaper so user input can't break out of the email template.
function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
