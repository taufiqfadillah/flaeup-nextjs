'use client';

import { useEffect } from 'react';

export default function GTMIntegration() {
  useEffect(() => {
    const gtmId = 'GTM-NGSPT54T';
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    return () => {
      const gtmScript = document.head.querySelector(`script[src="https://www.googletagmanager.com/gtm.js?id=${gtmId}"]`);
      if (gtmScript) {
        document.head.removeChild(gtmScript);
      }
    };
  }, []);

  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${'GTM-NGSPT54T'}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" />
    </noscript>
  );
}
