"use client";

import { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactBox() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;

    if (!email || !email.includes('@')) {
      setError("Please provide a valid email address.");
      setStatus('idle');
      return;
    }
    if (!name.trim()) {
      setError("Please provide your name.");
      setStatus('idle');
      return;
    }
    const decision = formData.get('decision') as string;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, decision }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      setStatus('success');
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl mx-auto bg-wash border border-hairline p-8 md:p-12 text-center rounded-sm relative"
        role="status"
        aria-live="polite"
      >
        <span className="text-vermilion text-4xl block mb-4 select-none">印</span>
        <h3 className="font-display text-2xl font-bold text-ink mb-4 italic">Received with Clarity</h3>
        <p className="text-ink opacity-80 font-display text-sm leading-relaxed max-w-md mx-auto">
          Your inquiry has been cast into the void. We will examine the coordinates of your decision and be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
        
        {/* Name Input Group */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label htmlFor="name" className="font-display font-bold text-sm tracking-wide text-ink">
              Name
            </label>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate opacity-60">Required</span>
          </div>
          <p className="text-[11px] text-slate opacity-75 italic font-display">
            How should we address you in our correspondence?
          </p>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === 'submitting'}
            placeholder="e.g. Musashi Miyamoto"
            className="w-full bg-white border border-hairline rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:ring-1 focus:ring-vermilion focus:border-vermilion transition-all placeholder:text-ink/30 disabled:opacity-50"
          />
        </div>

        {/* Email Input Group */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label htmlFor="email" className="font-display font-bold text-sm tracking-wide text-ink">
              Email
            </label>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate opacity-60">Required</span>
          </div>
          <p className="text-[11px] text-slate opacity-75 italic font-display">
            The secure address where we can send our response.
          </p>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === 'submitting'}
            placeholder="address@domain.com"
            className="w-full bg-white border border-hairline rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:ring-1 focus:ring-vermilion focus:border-vermilion transition-all placeholder:text-ink/30 disabled:opacity-50"
          />
        </div>

        {/* Decision Input Group */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label htmlFor="decision" className="font-display font-bold text-sm tracking-wide text-ink">
              The Decision
            </label>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate opacity-40">Optional</span>
          </div>
          <p className="text-[11px] text-slate opacity-75 italic font-display">
            Describe the challenge or choice currently weighing on your mind.
          </p>
          <textarea
            id="decision"
            name="decision"
            rows={4}
            disabled={status === 'submitting'}
            placeholder="State your strategic challenge, uncertainty, or the decision you wish to clear your mind around..."
            className="w-full bg-white border border-hairline rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:ring-1 focus:ring-vermilion focus:border-vermilion transition-all placeholder:text-ink/30 disabled:opacity-50 resize-none leading-relaxed"
          />
        </div>

        {error && (
          <p className="text-xs text-vermilion font-display italic mt-1" role="alert">
            {error}
          </p>
        )}

        <div className="mt-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 bg-ink text-paper hover:bg-vermilion text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
          >
            {status === 'submitting' ? 'Transmitting into the Void...' : 'Submit Decision to Sensai'}
          </button>
        </div>
      </form>
    </div>
  );
}
