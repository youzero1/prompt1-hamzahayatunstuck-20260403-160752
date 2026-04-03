export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
  features?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for extended listening sessions.',
    price: 79.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    category: 'Electronics',
    rating: 4.8,
    reviews: 2341,
    badge: 'Best Seller',
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour battery', 'Bluetooth 5.0', 'Foldable design']
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    description: 'Stay connected and track your fitness with our latest smartwatch. Features heart rate monitoring, GPS, sleep tracking, and over 100 workout modes.',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    category: 'Electronics',
    rating: 4.7,
    reviews: 1876,
    badge: 'New',
    inStock: true,
    features: ['Heart Rate Monitor', 'Built-in GPS', 'Water resistant', 'Sleep tracking']
  },
  {
    id: 3,
    name: 'Minimalist Leather Wallet',
    description: 'Slim and stylish leather wallet with RFID blocking technology. Holds up to 8 cards with a dedicated cash pocket.',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    category: 'Accessories',
    rating: 4.6,
    reviews: 943,
    inStock: true,
    colors: ['Black', 'Brown', 'Navy'],
    features: ['RFID Blocking', 'Genuine leather', 'Slim profile', '8 card slots']
  },
  {
    id: 4,
    name: 'Casual Cotton T-Shirt',
    description: 'Premium 100% organic cotton t-shirt with a relaxed fit. Perfect for everyday wear, available in multiple colors and sizes.',
    price: 24.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    category: 'Clothing',
    rating: 4.5,
    reviews: 3210,
    inStock: true,
    colors: ['White', 'Black', 'Gray', 'Navy', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 5,
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 360° sound and 24-hour battery life. Perfect for outdoor adventures.',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    category: 'Electronics',
    rating: 4.7,
    reviews: 1654,
    badge: 'Sale',
    inStock: true,
    features: ['Waterproof IPX7', '360° sound', '24-hour battery', 'Built-in microphone']
  },
  {
    id: 6,
    name: 'Running Sneakers Pro',
    description: 'High-performance running shoes with advanced cushioning technology and breathable mesh upper for maximum comfort.',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    category: 'Footwear',
    rating: 4.8,
    reviews: 2876,
    badge: 'Popular',
    inStock: true,
    colors: ['Black/White', 'Blue/Orange', 'Red/Black'],
    sizes: ['6', '7', '8', '9', '10', '11', '12']
  },
  {
    id: 7,
    name: 'Stainless Steel Water Bottle',
    description: 'Double-wall insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
    price: 29.99,
    originalPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
    category: 'Sports',
    rating: 4.9,
    reviews: 4521,
    badge: 'Top Rated',
    inStock: true,
    colors: ['Silver', 'Black', 'Rose Gold', 'Blue']
  },
  {
    id: 8,
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat made from eco-friendly TPE material. Extra thick for superior joint protection during practice.',
    price: 44.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop',
    category: 'Sports',
    rating: 4.6,
    reviews: 1234,
    inStock: true,
    colors: ['Purple', 'Blue', 'Green', 'Black']
  },
  {
    id: 9,
    name: 'Laptop Backpack 30L',
    description: 'Professional laptop backpack with USB charging port, anti-theft design, and fits laptops up to 17 inches.',
    price: 54.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'Accessories',
    rating: 4.7,
    reviews: 2109,
    inStock: true,
    colors: ['Black', 'Gray', 'Navy']
  },
  {
    id: 10,
    name: 'Sunglasses Polarized',
    description: 'UV400 polarized sunglasses with lightweight titanium frame. Reduces glare and provides superior eye protection.',
    price: 49.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
    category: 'Accessories',
    rating: 4.5,
    reviews: 876,
    inStock: true,
    colors: ['Black', 'Brown', 'Gold']
  },
  {
    id: 11,
    name: 'Coffee Maker Deluxe',
    description: 'Programmable coffee maker with built-in grinder, thermal carafe, and customizable brew strength settings.',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop',
    category: 'Home',
    rating: 4.8,
    reviews: 1567,
    inStock: true,
    features: ['Built-in grinder', 'Programmable timer', 'Thermal carafe', '12-cup capacity']
  },
  {
    id: 12,
    name: 'Desk Lamp LED',
    description: 'Energy-efficient LED desk lamp with adjustable brightness, color temperature, and USB charging port.',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop',
    category: 'Home',
    rating: 4.6,
    reviews: 789,
    inStock: true,
    colors: ['White', 'Black', 'Silver']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'Electronics', name: 'Electronics', icon: '💻' },
  { id: 'Clothing', name: 'Clothing', icon: '👕' },
  { id: 'Footwear', name: 'Footwear', icon: '👟' },
  { id: 'Accessories', name: 'Accessories', icon: '👜' },
  { id: 'Sports', name: 'Sports', icon: '⚽' },
  { id: 'Home', name: 'Home', icon: '🏠' }
];
