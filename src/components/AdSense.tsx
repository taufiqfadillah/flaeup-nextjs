'use client';

import Script from 'next/script';

export default function AdSense() {
  return (
    <>
      <Script id="google-adsense" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" strategy="afterInteractive" />
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-6570254249061972" data-ad-slot="1946334638" data-ad-format="auto" data-full-width-responsive="true" />
      <Script
        id="adsbygoogle-init"
        async
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: '(adsbygoogle = window.adsbygoogle || []).push({})',
        }}
      />
    </>
  );
}
