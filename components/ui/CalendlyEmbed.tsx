'use client';

import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

export function CalendlyEmbed({ url, className }: CalendlyEmbedProps) {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className || ''}`}
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function CalendlyButton({ url, children, className }: CalendlyButtonProps) {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head?.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    head?.appendChild(link);

    return () => {
      head?.removeChild(script);
      head?.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    // @ts-expect-error Calendly is loaded via external script
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-expect-error Calendly is loaded via external script
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
