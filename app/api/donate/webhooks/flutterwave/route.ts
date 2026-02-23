import { NextResponse } from 'next/server';
import { verifyFlutterwaveWebhook, verifyFlutterwave } from '@/lib/payment/flutterwave';
import { sendDonationEmails } from '@/lib/payment/email';

export async function POST(request: Request) {
  try {
    const headerHash = request.headers.get('verif-hash');

    if (!headerHash || !verifyFlutterwaveWebhook(headerHash)) {
      return NextResponse.json({ error: 'Invalid hash' }, { status: 401 });
    }

    const event = await request.json();

    if (event.event === 'charge.completed' && event.data?.status === 'successful') {
      const transactionId = event.data?.id;
      if (!transactionId) return NextResponse.json({ received: true });

      try {
        const result = await verifyFlutterwave(String(transactionId));
        if (result.success) {
          await sendDonationEmails({
            donorName: result.donorName,
            donorEmail: result.donorEmail,
            amount: result.amount,
            currency: result.currency,
            donationType: result.donationType,
            provider: 'flutterwave',
            reference: result.reference,
          });
        }
      } catch (err) {
        console.error('Flutterwave webhook processing error:', err);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Flutterwave webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
