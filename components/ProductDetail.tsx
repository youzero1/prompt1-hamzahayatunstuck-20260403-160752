'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from './CartContext';
import { formatPrice, calculateDiscount } from '@/lib/utils';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? '');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ product, quantity, selectedColor, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-red-600 font-medium mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill={star <= Math.floor(product.rating) ? '#f59e0b' : 'none'}
                  className={star <= Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {product.rating} ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-0.5 rounded">
                  Save {calculateDiscount(product.originalPrice, product.price)}%
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-2">Color: <span className="font-normal text-gray-600">{selectedColor}</span></p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 rounded-lg text-sm border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-200 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-2">Size: <span className="font-normal text-gray-600">{selectedSize}</span></p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg text-sm border-2 font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-200 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <p className="font-semibold text-gray-900 mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 font-bold"
              >
                -
              </button>
              <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {added ? (
                <><Check size={20} /> Added to Cart!</>
              ) : (
                <><ShoppingCart size={20} /> Add to Cart</>
              )}
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-xl hover:border-red-300 hover:text-red-600 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Truck size={16} className="text-red-500" />
              <span>Free shipping $50+</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Shield size={16} className="text-red-500" />
              <span>30-day returns</span>
            </div>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div>
              <p className="font-semibold text-gray-900 mb-3">Key Features</p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
