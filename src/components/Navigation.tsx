
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full"></div>
            <span className="text-xl font-bold text-gray-900">Siam Healthy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Главная
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900 transition-colors">
              Товары
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-gray-900 transition-colors">
              Категории
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              О нас
            </Link>
            <Link to="/affiliate" className="text-gray-700 hover:text-gray-900 transition-colors">
              Партнерство
            </Link>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
                autoFocus
              />
              <Button type="submit" size="sm">
                Найти
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </form>
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!isSearchOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Профиль
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => navigate("/auth")}>
                <User className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Главная
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-gray-900">
                Товары
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-gray-900">
                Категории
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                О нас
              </Link>
              <Link to="/affiliate" className="text-gray-700 hover:text-gray-900">
                Партнерство
              </Link>
              
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Link to="/cart" className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Корзина ({totalItems})</span>
                </Link>
                
                {user ? (
                  <div className="flex items-center space-x-2">
                    <Link to="/profile" className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Профиль</span>
                    </Link>
                    <Button variant="ghost" size="sm" onClick={handleLogout}>
                      Выйти
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth" className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Войти</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
