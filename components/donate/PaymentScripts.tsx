'use client';

import Script from 'next/script';

export default function PaymentScripts() {
  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://checkout.flutterwave.com/v3.js"
        strategy="lazyOnload"
      />
    </>
  );
}
