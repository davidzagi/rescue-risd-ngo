import { SendMailClient } from 'zeptomail';
import { NextResponse } from 'next/server';

const url = 'https://api.zeptomail.com/v1.1/email';
const token = process.env.ZEPTOMAIL_API_TOKEN!;

const client = new SendMailClient({ url, token });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    await client.sendMail({
      from: {
        address: 'noreply@rescuerisd.org',
        name: 'RISD Contact Form',
      },
      to: [
        {
          email_address: {
            address: 'contact@rescuerisd.org',
            name: 'Rescue RISD',
          },
        },
        {
          email_address: {
            address: 'rescuerisd@gmail.com',
            name: 'Rescue RISD',
          },
        },
      ],
      reply_to: [
        {
          address: email,
          name: name,
        },
      ],
      subject: `New Contact Form Submission from ${name}`,
      htmlbody: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone ? escapeHtml(phone) : 'Not provided'}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px 12px;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
