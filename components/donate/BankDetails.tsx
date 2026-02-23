'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { DONATE } from '@/data/site-data';

export default function BankDetails() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  if (!DONATE.bankAccounts?.length) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Prefer Bank Transfer?
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          You can also donate directly via bank transfer to any of the accounts below.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {DONATE.bankAccounts.map((account, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#2F5C4B]/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                {account.currency}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#2F5C4B] mb-3">
              {account.bankName}
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500">Account Name:</span>
                <p className="font-medium text-gray-900">{account.accountName}</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500">Account Number:</span>
                  <p className="font-semibold text-gray-900 text-lg">{account.accountNumber}</p>
                </div>
                <button
                  onClick={() => handleCopy(account.accountNumber, index)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700"
                  title="Copy account number"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
