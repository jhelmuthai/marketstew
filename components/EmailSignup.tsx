'use client';

import { useState } from 'react';

interface EmailSignupProps {
  variant?: 'inline' | 'hero' | 'dark';
  className?: string;
}

export default function EmailSignup({ variant = 'inline', className = '' }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (variant === 'dark') {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <div className="flex gap-2">
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com" required
            className="flex-1 px-3 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-stew-light"
          />
          <button type="submit" disabled={status === 'loading'}
            className="px-5 py-2.5 bg-stew hover:bg-stew-dark text-white text-sm font-semibold rounded transition-colors whitespace-nowrap"
          >
            {status === 'loading' ? '...' : status === 'success' ? '✓ Done' : status === 'error' ? 'Try again' : 'Subscribe'}
          </button>
        </div>
      </form>
    );
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className={`max-w-md ${className}`}>
        <div className="flex gap-2">
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com" required
            className="flex-1 px-3.5 py-2.5 rounded border border-ink-10 bg-white text-ink text-sm placeholder-ink-20 focus:outline-none focus:border-stew focus:ring-1 focus:ring-stew/20"
          />
          <button type="submit" disabled={status === 'loading'}
            className="px-5 py-2.5 bg-stew hover:bg-stew-dark text-white text-sm font-semibold rounded transition-colors whitespace-nowrap"
          >
            {status === 'loading' ? '...' : status === 'success' ? '✓ Subscribed' : status === 'error' ? 'Try again' : 'Subscribe Free'}
          </button>
        </div>
        <p className="mt-2 text-[11px] text-ink-40">Free daily newsletter. Unsubscribe anytime.</p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex gap-2">
        <input
          type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="Enter email" required
          className="flex-1 px-3 py-2 rounded border border-ink-10 bg-white text-ink text-sm focus:outline-none focus:border-stew"
        />
        <button type="submit" disabled={status === 'loading'}
          className="px-4 py-2 bg-stew hover:bg-stew-dark text-white text-sm font-semibold rounded transition-colors"
        >
          {status === 'loading' ? '...' : status === 'success' ? '✓' : status === 'error' ? '✗' : 'Subscribe'}
        </button>
      </div>
    </form>
  );
}
