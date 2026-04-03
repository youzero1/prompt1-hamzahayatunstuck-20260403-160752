export const metadata = {
  title: 'About Us - ShopNext',
  description: 'Learn more about ShopNext'
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About ShopNext</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 text-lg mb-6">
          Welcome to ShopNext, your premier destination for quality products at competitive prices.
          Founded in 2024, we&apos;ve been committed to providing an exceptional shopping experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-600">Brands</div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make quality products accessible to everyone. We carefully curate our
            selection to ensure you get the best value for your money, backed by excellent customer service.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>Free shipping on orders over $50</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>30-day hassle-free returns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>24/7 customer support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>Secure payment processing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
