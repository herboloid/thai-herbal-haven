
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ShoppingCart, User, Menu, X, Bot } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { state } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  const handleLanguageToggle = (checked: boolean) => {
    setLanguage(checked ? 'th' : 'en');
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c1722a12-adf6-4917-b555-5bb7eb9d8656.png" 
              alt="SIAM HEALTHY" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl text-gray-900">SIAM HEALTHY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-nature-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-medium transition-colors ${
                isActive('/products') ? 'text-nature-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.supplements')}
            </Link>
            <Link 
              to="/ai-consultant" 
              className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                isActive('/ai-consultant') ? 'text-nature-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Bot className="h-4 w-4" />
              <span>{t('nav.ai_consultant')}</span>
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-nature-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/affiliate" 
              className={`text-sm font-medium transition-colors ${
                isActive('/affiliate') ? 'text-nature-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.affiliate')}
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-nature-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.about')}
            </Link>
          </div>

          {/* Right side - Language switcher, Cart and User */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">EN</span>
              <Switch
                checked={language === 'th'}
                onCheckedChange={handleLanguageToggle}
                className="data-[state=checked]:bg-nature-600"
              />
              <span className="text-sm font-medium text-gray-600">TH</span>
            </div>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-nature-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={logout}
                  className="hidden md:inline-flex"
                >
                  {t('nav.logout')}
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="hidden md:inline-flex">
                  {t('nav.sign_in')}
                </Button>
              </Link>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-nature-600 bg-nature-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/products"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/products') ? 'text-nature-600 bg-nature-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.supplements')}
              </Link>
              <Link
                to="/ai-consultant"
                className={`block px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-2 ${
                  isActive('/ai-consultant') ? 'text-nature-600 bg-nature-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Bot className="h-4 w-4" />
                <span>{t('nav.ai_consultant')}</span>
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-nature-600 bg-nature-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link
                to="/affiliate"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/affiliate') ? 'text-nature-600 bg-nature-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.affiliate')}
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-nature-600 bg-nature-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center space-x-2 px-3 py-2">
                <span className="text-sm font-medium text-gray-600">EN</span>
                <Switch
                  checked={language === 'th'}
                  onCheckedChange={handleLanguageToggle}
                  className="data-[state=checked]:bg-nature-600"
                />
                <span className="text-sm font-medium text-gray-600">TH</span>
              </div>

              {user ? (
                <div className="border-t pt-2">
                  <Link
                    to="/profile"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.profile')}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {t('nav.logout')}
                  </button>
                </div>
              ) : (
                <div className="border-t pt-2">
                  <Link
                    to="/auth"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.sign_in')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
