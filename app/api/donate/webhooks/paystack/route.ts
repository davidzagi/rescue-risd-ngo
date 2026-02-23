import { NextResponse } from 'next/server';
import { verifyPaystackWebhook, verifyPaystack } from '@/lib/payment/paystack';
import { sendDonationEmails } from '@/lib/payment/email';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-paystack-signature');

    if (!signature || !verifyPaystackWebhook(body, signature)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(body);

    if (event.event === 'charge.success') {
      const reference = event.data?.reference;
      if (!reference) return NextResponse.json({ received: true });

      try {
        const result = await verifyPaystack(reference);
        if (result.success) {
          await sendDonationEmails({
            donorName: result.donorName,
            donorEmail: result.donorEmail,
            amount: result.amount,
            currency: result.currency,
            donationType: result.donationType,
            provider: 'paystack',
            reference: result.reference,
          });
        }
      } catch (err) {
        console.error('Paystack webhook processing error:', err);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Paystack webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
