'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/data';
import ProductCard from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

export default function ProductsGrid() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = [...products];

    if (categoryParam && categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [categoryParam, sortBy]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600 text-sm">
          Showing <span className="font-semibold">{filteredProducts.length}</span> products
          {categoryParam && categoryParam !== 'all' && (
            <span> in <span className="font-semibold text-red-600">{categoryParam}</span></span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:border-red-400"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviewed</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
