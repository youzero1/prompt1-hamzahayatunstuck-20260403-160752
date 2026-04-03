import Link from 'next/link';
import { categories } from '@/lib/data';

export default function CategorySection() {
  const displayCategories = categories.filter((c) => c.id !== 'all');

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-600 mt-1">Find exactly what you&apos;re looking for</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-red-50 hover:border-red-200 border border-transparent transition-all group"
            >
              <span className="text-3xl">{category.icon}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 text-center">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
