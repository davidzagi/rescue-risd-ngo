import { SendMailClient } from 'zeptomail';

const url = 'https://api.zeptomail.com/v1.1/email';
const token = process.env.ZEPTOMAIL_API_TOKEN!;

const client = new SendMailClient({ url, token });

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

interface DonationEmailData {
  donorName: string;
  donorEmail: string;
  amount: number;
  currency: string;
  donationType: string;
  provider: string;
  reference: string;
}

/** Send confirmation email to donor */
async function sendDonorEmail(data: DonationEmailData) {
  const currencySymbol = data.currency === 'NGN' ? '₦' : '$';
  const formattedAmount = `${currencySymbol}${data.amount.toLocaleString()}`;
  const typeLabel = data.donationType === 'monthly' ? 'Monthly Recurring' : 'One-Time';

  await client.sendMail({
    from: {
      address: 'noreply@rescuerisd.org',
      name: 'RISD Donations',
    },
    to: [
      {
        email_address: {
          address: data.donorEmail,
          name: data.donorName,
        },
      },
    ],
    subject: `Thank you for your ${formattedAmount} donation to RISD!`,
    htmlbody: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
        <div style="background:#094C3B;padding:24px;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:24px;">Thank You for Your Generosity!</h1>
        </div>
        <div style="padding:24px;background:#f9f9f9;">
          <p>Dear ${escapeHtml(data.donorName)},</p>
          <p>Thank you for your generous donation to Rescue Initiative for Sustainable Development (RISD). Your support helps us reach more communities and change more lives.</p>

          <table style="border-collapse:collapse;width:100%;margin:20px 0;background:#fff;border-radius:8px;overflow:hidden;">
            <tr><td style="padding:12px 16px;font-weight:bold;border-bottom:1px solid #eee;background:#f5f5f5;">Amount</td><td style="padding:12px 16px;border-bottom:1px solid #eee;">${escapeHtml(formattedAmount)}</td></tr>
            <tr><td style="padding:12px 16px;font-weight:bold;border-bottom:1px solid #eee;background:#f5f5f5;">Type</td><td style="padding:12px 16px;border-bottom:1px solid #eee;">${escapeHtml(typeLabel)}</td></tr>
            <tr><td style="padding:12px 16px;font-weight:bold;border-bottom:1px solid #eee;background:#f5f5f5;">Reference</td><td style="padding:12px 16px;border-bottom:1px solid #eee;">${escapeHtml(data.reference)}</td></tr>
            <tr><td style="padding:12px 16px;font-weight:bold;background:#f5f5f5;">Payment via</td><td style="padding:12px 16px;">${escapeHtml(data.provider === 'paystack' ? 'Paystack' : 'Flutterwave')}</td></tr>
          </table>

          ${data.donationType === 'monthly' ? '<p><strong>Recurring Donation:</strong> You will be charged monthly. To cancel your recurring donation, please contact us at <a href="mailto:rescuerisd@gmail.com">rescuerisd@gmail.com</a>.</p>' : ''}

          <p>If you have any questions about your donation, please contact us at <a href="mailto:rescuerisd@gmail.com">rescuerisd@gmail.com</a> or call 08027322220.</p>

          <p style="margin-top:24px;">With gratitude,<br/><strong>The RISD Team</strong></p>
        </div>
        <div style="background:#2F5C4B;padding:16px;text-align:center;">
          <p style="color:#fff;margin:0;font-size:12px;">&copy; ${new Date().getFullYear()} Rescue Initiative for Sustainable Development</p>
        </div>
      </div>
    `,
  });
}

/** Send notification email to RISD team */
async function sendTeamNotification(data: DonationEmailData) {
  const currencySymbol = data.currency === 'NGN' ? '₦' : '$';
  const formattedAmount = `${currencySymbol}${data.amount.toLocaleString()}`;

  await client.sendMail({
    from: {
      address: 'noreply@rescuerisd.org',
      name: 'RISD Donations',
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
    subject: `New Donation Received: ${formattedAmount} from ${data.donorName}`,
    htmlbody: `
      <h2>New Donation Received</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Donor</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(data.donorName)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(data.donorEmail)}">${escapeHtml(data.donorEmail)}</a></td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Amount</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(formattedAmount)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Type</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(data.donationType === 'monthly' ? 'Monthly Recurring' : 'One-Time')}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Provider</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(data.provider)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;">Reference</td><td style="padding:8px 12px;">${escapeHtml(data.reference)}</td></tr>
      </table>
    `,
  });
}

/** Send both donor confirmation and team notification */
export async function sendDonationEmails(data: DonationEmailData) {
  await Promise.all([
    sendDonorEmail(data),
    sendTeamNotification(data),
  ]);
}
