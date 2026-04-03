import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { products } from '@/lib/data';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString()
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: `${product.name} - ShopNext`,
    description: product.description
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
