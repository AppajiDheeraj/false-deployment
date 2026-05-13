'use client';

import { useEffect, useState } from 'react';

type LiveNetworkCheckProps = {
  endpoint: string;
};

export function LiveNetworkCheck({ endpoint }: LiveNetworkCheckProps) {
  const [status, setStatus] = useState('checking live channel');

  useEffect(() => {
    let cancelled = false;

    fetch(endpoint, {
      mode: 'cors',
      credentials: 'omit'
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Unexpected status ${response.status}`);
        }

        const body = await response.text();

        if (!cancelled) {
          setStatus(body ? 'live channel healthy' : 'live channel returned an empty payload');
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatus('live channel blocked by CORS policy');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return <span className="pill">{status}</span>;
}