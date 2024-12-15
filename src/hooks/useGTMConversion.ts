'use client';

import { useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

export function useGTMConversion() {
  useEffect(() => {
    sendGTMEvent({
      event: 'conversion',
      send_to: 'AW-16785539609/BSgICNe3rPcZEJmE_MM-',
    });
  }, []);
}
