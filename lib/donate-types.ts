export type Currency = 'NGN' | 'USD';
export type DonationType = 'one-time' | 'monthly';
export type PaymentProvider = 'paystack' | 'flutterwave';

export interface DonorInfo {
  name: string;
  email: string;
  phone?: string;
}

export interface DonationRequest {
  amount: number;
  currency: Currency;
  donationType: DonationType;
  provider: PaymentProvider;
  donor: DonorInfo;
}

export interface InitializeResponse {
  success: boolean;
  reference: string;
  accessCode?: string; // Paystack
  paymentLink?: string; // Flutterwave
  publicKey?: string;
  error?: string;
}

export interface VerifyRequest {
  reference: string;
  provider: PaymentProvider;
  transactionId?: string; // Flutterwave uses transaction ID
}

export interface VerifyResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const PRESET_AMOUNTS: Record<Currency, number[]> = {
  NGN: [5000, 10000, 25000, 50000, 100000],
  USD: [25, 50, 100, 250, 500],
};

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  NGN: '₦',
  USD: '$',
};
