'use client';

import Link from 'next/link';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 text-sm text-red-300 mb-6">
              <Star size={14} fill="currentColor" />
              <span>Rated #1 Online Store 2024</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Discover
              <span className="text-red-400"> Amazing</span>
              <br />
              Products
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Shop the latest trends in electronics, fashion, and lifestyle products.
              Free shipping on orders over $50. 30-day returns guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Truck size={16} className="text-red-400" />
                <span>Free Shipping $50+</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield size={16} className="text-red-400" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star size={16} className="text-red-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl mb-2">🎧</div>
                  <div className="font-semibold text-sm">Premium Headphones</div>
                  <div className="text-red-400 text-sm font-bold">$79.99</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl mb-2">👟</div>
                  <div className="font-semibold text-sm">Running Sneakers</div>
                  <div className="text-red-400 text-sm font-bold">$89.99</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl mb-2">⌚</div>
                  <div className="font-semibold text-sm">Smart Watch</div>
                  <div className="text-red-400 text-sm font-bold">$199.99</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl mb-2">🎒</div>
                  <div className="font-semibold text-sm">Laptop Backpack</div>
                  <div className="text-red-400 text-sm font-bold">$54.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
