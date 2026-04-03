import ProductsGrid from '@/components/ProductsGrid';
import ProductFilters from '@/components/ProductFilters';

export const metadata = {
  title: 'All Products - ShopNext',
  description: 'Browse our complete collection of products'
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="mt-2 text-gray-600">Discover our complete collection</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <ProductFilters />
        </aside>
        <div className="flex-1">
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
