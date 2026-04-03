'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from './CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { state, removeItem, updateQuantity, closeCart, totalPrice, totalItems } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-red-600" />
            <h2 className="text-lg font-bold text-gray-900">Shopping Cart</h2>
            {totalItems > 0 && (
              <span className="bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-gray-200 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some products to get started!</p>
              <button
                onClick={closeCart}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {state.items.map((item) => (
                <li key={item.product.id} className="flex gap-4 bg-gray-50 rounded-xl p-3">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{item.product.name}</h4>
                    {item.selectedColor && (
                      <p className="text-xs text-gray-500">{item.selectedColor}</p>
                    )}
                    {item.selectedSize && (
                      <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                    )}
                    <p className="font-bold text-red-600 text-sm mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-lg">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 rounded-xl transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full border border-gray-300 hover:border-gray-400 text-gray-700 text-center font-medium py-3 rounded-xl transition-colors"
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
