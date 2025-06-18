import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart, User, Leaf, X, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(3);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Supplements" },
    { href: "/affiliate", label: "Affiliate" },
    { href: "/about", label: "About Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`;
      setIsSearchOpen(false);
      setSearchTerm("");
    }
  };

  const handleCartClick = () => {
    alert(`You have ${cartItems} items in your cart`);
  };

  const handleLogout = () => {
    logout();
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-xl text-gray-800">Siam Healthy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  isActive(item.href)
                    ? "text-green-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex relative"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Cart Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>

            {/* User Button */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.firstName} />
                      <AvatarFallback className="bg-green-100 text-green-700 text-xs">
                        {getInitials(user.firstName, user.lastName)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Профиль</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Выйти</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost" size="sm">
                <Link to="/auth">
                  <User className="h-4 w-4" />
                </Link>
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-green-600 py-2 ${
                        isActive(item.href) ? "text-green-600" : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full mb-3" variant="outline" onClick={handleCartClick}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Cart ({cartItems})
                    </Button>
                    {user ? (
                      <>
                        <Button asChild className="w-full mb-3" variant="outline">
                          <Link to="/profile" onClick={() => setIsOpen(false)}>
                            <User className="h-4 w-4 mr-2" />
                            Профиль
                          </Link>
                        </Button>
                        <Button className="w-full" variant="outline" onClick={handleLogout}>
                          <LogOut className="h-4 w-4 mr-2" />
                          Выйти
                        </Button>
                      </>
                    ) : (
                      <Button asChild className="w-full" variant="outline">
                        <Link to="/auth" onClick={() => setIsOpen(false)}>
                          <User className="h-4 w-4 mr-2" />
                          Войти
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t bg-white py-4">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Search for supplements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                  autoFocus
                />
              </div>
              <Button type="submit" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                size="sm"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
