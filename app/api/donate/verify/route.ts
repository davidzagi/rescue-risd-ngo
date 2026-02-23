import { NextResponse } from 'next/server';
import type { VerifyRequest, VerifyResponse } from '@/lib/donate-types';
import { verifyPaystack } from '@/lib/payment/paystack';
import { verifyFlutterwave } from '@/lib/payment/flutterwave';
import { sendDonationEmails } from '@/lib/payment/email';

export async function POST(request: Request) {
  try {
    const body: VerifyRequest = await request.json();
    const { reference, provider, transactionId } = body;

    if (!reference || !provider) {
      return NextResponse.json<VerifyResponse>(
        { success: false, message: '', error: 'Reference and provider are required.' },
        { status: 400 },
      );
    }

    let result;

    if (provider === 'paystack') {
      result = await verifyPaystack(reference);
    } else if (provider === 'flutterwave') {
      if (!transactionId) {
        return NextResponse.json<VerifyResponse>(
          { success: false, message: '', error: 'Transaction ID is required for Flutterwave.' },
          { status: 400 },
        );
      }
      result = await verifyFlutterwave(transactionId);
    } else {
      return NextResponse.json<VerifyResponse>(
        { success: false, message: '', error: 'Invalid provider.' },
        { status: 400 },
      );
    }

    if (!result.success) {
      return NextResponse.json<VerifyResponse>({
        success: false,
        message: 'Payment was not successful.',
      });
    }

    // Send confirmation emails (don't fail the response if email fails)
    try {
      await sendDonationEmails({
        donorName: result.donorName,
        donorEmail: result.donorEmail,
        amount: result.amount,
        currency: result.currency,
        donationType: result.donationType,
        provider,
        reference: result.reference,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation emails:', emailError);
    }

    return NextResponse.json<VerifyResponse>({
      success: true,
      message: 'Payment verified successfully. Thank you for your donation!',
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json<VerifyResponse>(
      {
        success: false,
        message: '',
        error: 'Failed to verify payment. Please contact us if you were charged.',
      },
      { status: 500 },
    );
  }
}
