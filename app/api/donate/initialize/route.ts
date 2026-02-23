import { NextResponse } from 'next/server';
import type { DonationRequest, InitializeResponse } from '@/lib/donate-types';
import { initializePaystack } from '@/lib/payment/paystack';
import { initializeFlutterwave } from '@/lib/payment/flutterwave';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: DonationRequest = await request.json();
    const { amount, currency, donationType, provider, donor } = body;

    // Validate required fields
    if (!donor?.name || !donor?.email) {
      return NextResponse.json<InitializeResponse>(
        { success: false, reference: '', error: 'Name and email are required.' },
        { status: 400 },
      );
    }

    if (!validateEmail(donor.email)) {
      return NextResponse.json<InitializeResponse>(
        { success: false, reference: '', error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    if (!amount || amount <= 0) {
      return NextResponse.json<InitializeResponse>(
        { success: false, reference: '', error: 'Please enter a valid donation amount.' },
        { status: 400 },
      );
    }

    if (!['NGN', 'USD'].includes(currency)) {
      return NextResponse.json<InitializeResponse>(
        { success: false, reference: '', error: 'Invalid currency.' },
        { status: 400 },
      );
    }

    if (!['one-time', 'monthly'].includes(donationType)) {
      return NextResponse.json<InitializeResponse>(
        { success: false, reference: '', error: 'Invalid donation type.' },
        { status: 400 },
      );
    }

    if (provider === 'paystack') {
      const result = await initializePaystack(body);
      return NextResponse.json<InitializeResponse>({
        success: true,
        reference: result.reference,
        accessCode: result.accessCode,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      });
    }

    if (provider === 'flutterwave') {
      const result = await initializeFlutterwave(body);
      return NextResponse.json<InitializeResponse>({
        success: true,
        reference: result.reference,
        paymentLink: result.paymentLink,
        publicKey: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
      });
    }

    return NextResponse.json<InitializeResponse>(
      { success: false, reference: '', error: 'Invalid payment provider.' },
      { status: 400 },
    );
  } catch (error) {
    console.error('Donation initialization error:', error);
    return NextResponse.json<InitializeResponse>(
      {
        success: false,
        reference: '',
        error: 'Failed to initialize payment. Please try again.',
      },
      { status: 500 },
    );
  }
}
