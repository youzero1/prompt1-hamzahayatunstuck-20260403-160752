import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 text-white font-bold text-xl px-3 py-1 rounded-lg">SN</div>
              <span className="text-xl font-bold text-white">ShopNext</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your premier destination for quality products at competitive prices.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-red-400 transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-red-400 flex-shrink-0" />
                <span>123 Commerce St, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-red-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-red-400 flex-shrink-0" />
                <span>support@shopnext.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ShopNext. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
