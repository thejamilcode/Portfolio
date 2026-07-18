import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "jamilcode56@gmail.com",
      replyTo: email,
      subject: `📬 New message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #020e08; color: #e8ece9; border-radius: 12px; overflow: hidden; border: 1px solid rgba(26,92,58,0.4);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0c2a1c, #1a5c3a); padding: 32px 36px; border-bottom: 1px solid rgba(46,204,136,0.2);">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px;">
              📬 New Portfolio Message
            </h1>
            <p style="margin: 6px 0 0; font-size: 13px; color: #2ecc88; font-family: monospace; letter-spacing: 0.5px;">
              jamilahmed.dev — Contact Form Submission
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 36px;">

            <!-- Sender Info -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 10px 14px; background: rgba(19,53,38,0.5); border: 1px solid rgba(26,92,58,0.35); border-radius: 8px 8px 0 0;">
                  <span style="font-size: 10px; font-family: monospace; color: #7a8f85; text-transform: uppercase; letter-spacing: 1px;">Name</span>
                  <p style="margin: 4px 0 0; font-size: 16px; font-weight: 600; color: #ffffff;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; background: rgba(19,53,38,0.3); border: 1px solid rgba(26,92,58,0.35); border-top: none; border-radius: 0 0 8px 8px;">
                  <span style="font-size: 10px; font-family: monospace; color: #7a8f85; text-transform: uppercase; letter-spacing: 1px;">Reply-To Email</span>
                  <p style="margin: 4px 0 0; font-size: 15px; color: #2ecc88;">
                    <a href="mailto:${email}" style="color: #2ecc88; text-decoration: none;">${email}</a>
                  </p>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div>
              <p style="font-size: 10px; font-family: monospace; color: #7a8f85; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
              <div style="background: rgba(6,26,18,0.8); border: 1px solid rgba(26,92,58,0.4); border-left: 3px solid #2ecc88; border-radius: 0 8px 8px 0; padding: 18px 20px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #b0bfb8; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- CTA -->
            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #d4a843, #e8c468); color: #020e08; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none; letter-spacing: 0.3px;">
                ↩ Reply to ${name}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 16px 36px; background: rgba(6,26,18,0.6); border-top: 1px solid rgba(26,92,58,0.3); text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #7a8f85; font-family: monospace;">
              Sent via jamilahmed.dev portfolio contact form
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
