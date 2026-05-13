'use client';

import React, { useState } from 'react';

type LegacyBadgeProps = {
  src: string;
};

export function LegacyBadge({ src }: LegacyBadgeProps) {
  const [status, setStatus] = useState('legacy badge pending');

  return (
    <div className="legacy-badge-wrap">
      <img
        alt="Legacy status badge"
        className="legacy-badge"
        src={src}
        onLoad={() => setStatus('legacy badge loaded')}
        onError={() => setStatus('legacy badge blocked by mixed content')}
      />
      <span className="pill">{status}</span>
    </div>
  );
}