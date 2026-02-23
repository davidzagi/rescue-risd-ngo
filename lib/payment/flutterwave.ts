import type { DonationRequest } from '@/lib/donate-types';
import { generateReference } from './generate-reference';

const FLW_SECRET = process.env.FLUTTERWAVE_SECRET_KEY!;
const FLW_BASE = 'https://api.flutterwave.com/v3';

async function flwFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${FLW_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${FLW_SECRET}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return res.json();
}

/** Create a Flutterwave payment plan for monthly recurring */
async function createPaymentPlan(amount: number, currency: string): Promise<number | null> {
  const data = await flwFetch('/payment-plans', {
    method: 'POST',
    body: JSON.stringify({
      amount,
      name: `RISD Monthly ${currency} ${amount}`,
      interval: 'monthly',
      currency,
    }),
  });
  return data.data?.id ?? null;
}

/** Initialize a Flutterwave payment */
export async function initializeFlutterwave(req: DonationRequest) {
  const reference = generateReference('flutterwave');

  const payload: Record<string, unknown> = {
    tx_ref: reference,
    amount: req.amount,
    currency: req.currency,
    customer: {
      email: req.donor.email,
      name: req.donor.name,
      phonenumber: req.donor.phone ?? '',
    },
    meta: {
      donation_type: req.donationType,
    },
    customizations: {
      title: 'RISD Donation',
      description: `${req.donationType === 'monthly' ? 'Monthly' : 'One-time'} donation to RISD`,
      logo: 'https://www.rescuerisd.org.ng/assets/logo/risd-logo.svg',
    },
    redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rescuerisd.org.ng'}/donate?status=success`,
  };

  // For monthly recurring, create a payment plan
  if (req.donationType === 'monthly') {
    const planId = await createPaymentPlan(req.amount, req.currency);
    if (planId) {
      payload.payment_plan = planId;
    }
  }

  const data = await flwFetch('/payments', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (data.status !== 'success') {
    throw new Error(data.message ?? 'Flutterwave initialization failed');
  }

  return {
    reference,
    paymentLink: data.data.link as string,
  };
}

/** Verify a Flutterwave transaction by transaction ID */
export async function verifyFlutterwave(transactionId: string) {
  const data = await flwFetch(`/transactions/${encodeURIComponent(transactionId)}/verify`);

  if (data.status !== 'success') {
    throw new Error(data.message ?? 'Flutterwave verification failed');
  }

  const txn = data.data;
  return {
    success: txn.status === 'successful',
    amount: txn.amount as number,
    currency: txn.currency as string,
    donorEmail: txn.customer?.email as string,
    donorName: txn.customer?.name as string,
    donationType: (txn.meta?.donation_type as string) ?? 'one-time',
    reference: txn.tx_ref as string,
  };
}

/** Verify Flutterwave webhook hash */
export function verifyFlutterwaveWebhook(headerHash: string): boolean {
  const secretHash = process.env.FLUTTERWAVE_WEBHOOK_HASH;
  return headerHash === secretHash;
}
