import crypto from 'crypto';
import type { DonationRequest } from '@/lib/donate-types';
import { generateReference } from './generate-reference';

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;
const PAYSTACK_BASE = 'https://api.paystack.co';

async function paystackFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${PAYSTACK_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return res.json();
}

/** Create a Paystack subscription plan for monthly donations */
async function createPlan(amount: number, currency: string): Promise<string> {
  const data = await paystackFetch('/plan', {
    method: 'POST',
    body: JSON.stringify({
      name: `RISD Monthly ${currency} ${amount}`,
      interval: 'monthly',
      amount: amount * 100, // Paystack expects kobo/cents
      currency,
    }),
  });
  return data.data?.plan_code ?? '';
}

/** Initialize a Paystack transaction */
export async function initializePaystack(req: DonationRequest) {
  const reference = generateReference('paystack');
  const amountInSmallestUnit = req.amount * 100; // kobo or cents

  const payload: Record<string, unknown> = {
    email: req.donor.email,
    amount: amountInSmallestUnit,
    currency: req.currency,
    reference,
    metadata: {
      donor_name: req.donor.name,
      donor_phone: req.donor.phone ?? '',
      donation_type: req.donationType,
    },
  };

  // For monthly recurring, create a plan first
  if (req.donationType === 'monthly') {
    const planCode = await createPlan(req.amount, req.currency);
    if (planCode) {
      payload.plan = planCode;
    }
  }

  const data = await paystackFetch('/transaction/initialize', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!data.status) {
    throw new Error(data.message ?? 'Paystack initialization failed');
  }

  return {
    reference,
    accessCode: data.data.access_code as string,
    authorizationUrl: data.data.authorization_url as string,
  };
}

/** Verify a Paystack transaction by reference */
export async function verifyPaystack(reference: string) {
  const data = await paystackFetch(`/transaction/verify/${encodeURIComponent(reference)}`);

  if (!data.status) {
    throw new Error(data.message ?? 'Paystack verification failed');
  }

  const txn = data.data;
  return {
    success: txn.status === 'success',
    amount: txn.amount / 100, // convert back from kobo/cents
    currency: txn.currency as string,
    donorEmail: txn.customer?.email as string,
    donorName: (txn.metadata?.donor_name as string) ?? '',
    donationType: (txn.metadata?.donation_type as string) ?? 'one-time',
    reference: txn.reference as string,
  };
}

/** Verify Paystack webhook signature (HMAC SHA512) */
export function verifyPaystackWebhook(body: string, signature: string): boolean {
  const hash = crypto
    .createHmac('sha512', PAYSTACK_SECRET)
    .update(body)
    .digest('hex');
  return hash === signature;
}
