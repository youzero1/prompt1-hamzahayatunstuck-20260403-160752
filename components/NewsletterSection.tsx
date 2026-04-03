'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-6">
          <Mail size={28} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Stay in the Loop</h2>
        <p className="text-red-100 text-lg mb-8">
          Subscribe to our newsletter for exclusive deals, new arrivals, and more!
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Check size={20} />
            </div>
            <span className="text-lg font-semibold">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-xl text-gray-900 outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-white text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-red-200 text-sm mt-4">No spam, unsubscribe at any time.</p>
      </div>
    </section>
  );
}
