'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { categories } from '@/lib/data';

export default function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      router.push('/products');
    } else {
      router.push(`/products?category=${categoryId}`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-red-50 text-red-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-2">
          {[
            { label: 'Under $25', value: 'under-25' },
            { label: '$25 - $50', value: '25-50' },
            { label: '$50 - $100', value: '50-100' },
            { label: '$100 - $200', value: '100-200' },
            { label: 'Over $200', value: 'over-200' }
          ].map((range) => (
            <label key={range.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-red-600" />
              <span className="text-sm text-gray-600">
                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)} & up
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
