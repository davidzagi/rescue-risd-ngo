'use client';

import { useState } from 'react';
import { Heart, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import type {
  Currency,
  DonationType,
  PaymentProvider,
  DonationRequest,
  InitializeResponse,
} from '@/lib/donate-types';
import { PRESET_AMOUNTS, CURRENCY_SYMBOLS } from '@/lib/donate-types';

declare global {
  interface Window {
    PaystackPop?: {
      setup(config: Record<string, unknown>): { openIframe(): void };
    };
    FlutterwaveCheckout?: (config: Record<string, unknown>) => void;
  }
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function DonationForm() {
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [donationType, setDonationType] = useState<DonationType>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const amount = selectedAmount ?? (customAmount ? Number(customAmount) : 0);

  const handleAmountSelect = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    // Allow only numbers and decimal point
    const cleaned = value.replace(/[^0-9.]/g, '');
    setCustomAmount(cleaned);
    setSelectedAmount(null);
  };

  const formatAmount = (amt: number) => {
    return `${CURRENCY_SYMBOLS[currency]}${amt.toLocaleString()}`;
  };

  const initializePayment = async (provider: PaymentProvider) => {
    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please enter your name and email.');
      setStatus('error');
      return;
    }

    if (!amount || amount <= 0) {
      setErrorMessage('Please select or enter a donation amount.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload: DonationRequest = {
        amount,
        currency,
        donationType,
        provider,
        donor: { name: name.trim(), email: email.trim(), phone: phone.trim() || undefined },
      };

      const res = await fetch('/api/donate/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: InitializeResponse = await res.json();

      if (!data.success) {
        throw new Error(data.error ?? 'Failed to initialize payment');
      }

      if (provider === 'paystack') {
        openPaystack(data);
      } else {
        openFlutterwave(data);
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const openPaystack = (data: InitializeResponse) => {
    if (!window.PaystackPop) {
      setErrorMessage('Payment system is loading. Please try again in a moment.');
      setStatus('error');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: data.publicKey,
      email: email.trim(),
      amount: amount * 100,
      currency,
      ref: data.reference,
      channels: ['card', 'bank', 'ussd', 'bank_transfer'],
      onClose: () => {
        setStatus('idle');
      },
      callback: (response: { reference: string }) => {
        verifyPayment(response.reference, 'paystack');
      },
    });

    handler.openIframe();
  };

  const openFlutterwave = (data: InitializeResponse) => {
    if (!window.FlutterwaveCheckout) {
      setErrorMessage('Payment system is loading. Please try again in a moment.');
      setStatus('error');
      return;
    }

    window.FlutterwaveCheckout({
      public_key: data.publicKey,
      tx_ref: data.reference,
      amount,
      currency,
      customer: {
        email: email.trim(),
        name: name.trim(),
        phone_number: phone.trim(),
      },
      customizations: {
        title: 'RISD Donation',
        description: `${donationType === 'monthly' ? 'Monthly' : 'One-time'} donation to RISD`,
        logo: 'https://www.rescuerisd.org.ng/assets/logo/risd-logo.svg',
      },
      callback: (response: { transaction_id: number; tx_ref: string }) => {
        verifyPayment(response.tx_ref, 'flutterwave', String(response.transaction_id));
      },
      onclose: () => {
        setStatus('idle');
      },
    });
  };

  const verifyPayment = async (reference: string, provider: PaymentProvider, transactionId?: string) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/donate/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, provider, transactionId }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setErrorMessage(data.error ?? data.message ?? 'Payment verification failed.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Could not verify payment. Please contact us if you were charged.');
      setStatus('error');
    }
  };

  // Success state
  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-2">
          Your {formatAmount(amount)} {donationType === 'monthly' ? 'monthly ' : ''}donation has been received.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          A confirmation email has been sent to {email}.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setSelectedAmount(null);
            setCustomAmount('');
            setName('');
            setEmail('');
            setPhone('');
          }}
          className="px-6 py-3 rounded-full font-semibold text-[#2F5C4B] bg-[#B8DC7C] hover:bg-[#a8cc6c] transition-colors"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-6 h-6 text-[#2F5C4B]" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Make a Donation</h3>
      </div>

      {/* Currency Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
        <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
          {(['NGN', 'USD'] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => {
                setCurrency(c);
                setSelectedAmount(null);
                setCustomAmount('');
              }}
              className={`px-5 py-2 text-sm font-medium transition-colors ${
                currency === c
                  ? 'bg-[#2F5C4B] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {c === 'NGN' ? '🇳🇬 NGN' : '🇺🇸 USD'}
            </button>
          ))}
        </div>
      </div>

      {/* Donation Type Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
        <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
          {([
            { value: 'one-time' as DonationType, label: 'One-time' },
            { value: 'monthly' as DonationType, label: 'Monthly' },
          ]).map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setDonationType(value)}
              className={`px-5 py-2 text-sm font-medium transition-colors ${
                donationType === value
                  ? 'bg-[#2F5C4B] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Amounts */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Amount</label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {PRESET_AMOUNTS[currency].map((amt) => (
            <button
              key={amt}
              onClick={() => handleAmountSelect(amt)}
              className={`py-3 px-2 rounded-lg text-sm font-semibold transition-colors border ${
                selectedAmount === amt
                  ? 'border-[#2F5C4B] bg-[#2F5C4B] text-white'
                  : 'border-gray-200 text-gray-700 hover:border-[#2F5C4B]/40'
              }`}
            >
              {formatAmount(amt)}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Or Enter Custom Amount</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
            {CURRENCY_SYMBOLS[currency]}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            placeholder="0.00"
            className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F5C4B]/30 focus:border-[#2F5C4B]"
          />
        </div>
      </div>

      {/* Donor Info */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F5C4B]/30 focus:border-[#2F5C4B]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F5C4B]/30 focus:border-[#2F5C4B]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (optional)</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08012345678"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F5C4B]/30 focus:border-[#2F5C4B]"
          />
        </div>
      </div>

      {/* Error Message */}
      {status === 'error' && errorMessage && (
        <div className="flex items-start gap-2 p-4 mb-6 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Payment Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => initializePayment('paystack')}
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-colors bg-[#2F5C4B] text-white hover:bg-[#094C3B] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : null}
          Pay {amount > 0 ? formatAmount(amount) : ''} with Paystack
        </button>
        <button
          onClick={() => initializePayment('flutterwave')}
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-colors border-2 border-[#2F5C4B] text-[#2F5C4B] hover:bg-[#2F5C4B]/5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : null}
          Pay {amount > 0 ? formatAmount(amount) : ''} with Flutterwave
        </button>
      </div>

      {donationType === 'monthly' && (
        <p className="mt-4 text-xs text-gray-500 text-center">
          You will be charged {amount > 0 ? formatAmount(amount) : 'the selected amount'} monthly. You can cancel anytime by contacting us.
        </p>
      )}
    </div>
  );
}
