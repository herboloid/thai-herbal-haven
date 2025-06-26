
import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nature-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/c1722a12-adf6-4917-b555-5bb7eb9d8656.png" 
                alt="SIAM HEALTHY" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold text-lg text-nature-700">SIAM HEALTHY</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Leading provider of high-quality natural dietary supplements for better health for you and your family
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-nature-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-gray-600 hover:text-nature-600 transition-colors">All Products</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-nature-600 transition-colors">Categories</Link></li>
              <li><Link to="/affiliate" className="text-gray-600 hover:text-nature-600 transition-colors">Affiliate Program</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-nature-600 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-nature-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-600 transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-600 transition-colors">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@siamhealthy.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-600">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Health Street, Wellness District, New York, NY 10110</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 SIAM HEALTHY. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
