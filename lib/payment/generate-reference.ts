import type { PaymentProvider } from '@/lib/donate-types';

export function generateReference(provider: PaymentProvider): string {
  const prefix = provider === 'paystack' ? 'RISD-PS' : 'RISD-FW';
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `${prefix}-${timestamp}-${random}`;
}
