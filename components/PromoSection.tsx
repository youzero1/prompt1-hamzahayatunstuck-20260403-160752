import Link from 'next/link';

export default function PromoSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Promo Card 1 */}
          <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 text-[120px] opacity-10 leading-none">🎧</div>
            <div className="relative z-10">
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                UP TO 40% OFF
              </span>
              <h3 className="text-2xl font-bold mb-2">Electronics Sale</h3>
              <p className="text-red-100 mb-6">Huge discounts on headphones, smartwatches, and more</p>
              <Link
                href="/products?category=Electronics"
                className="bg-white text-red-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-red-50 transition-colors inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 text-[120px] opacity-10 leading-none">👟</div>
            <div className="relative z-10">
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                NEW ARRIVALS
              </span>
              <h3 className="text-2xl font-bold mb-2">Sports & Footwear</h3>
              <p className="text-gray-300 mb-6">Latest running shoes and sports equipment</p>
              <Link
                href="/products?category=Sports"
                className="bg-white text-gray-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50' },
            { icon: '🔄', title: 'Easy Returns', desc: '30-day return policy' },
            { icon: '🔒', title: 'Secure Payment', desc: 'SSL encrypted checkout' },
            { icon: '💬', title: '24/7 Support', desc: 'Always here to help' }
          ].map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mb-2">{feature.icon}</span>
              <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
