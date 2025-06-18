
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, User, Leaf } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Supplements" },
    { href: "/affiliate", label: "Affiliate" },
    { href: "/about", label: "About Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="flex items-center justify-center w-8 h-8 bg-coral-500 rounded-full">
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
                className={`text-sm font-medium transition-colors hover:text-coral-600 ${
                  isActive(item.href)
                    ? "text-coral-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>

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
                      className={`text-lg font-medium transition-colors hover:text-coral-600 py-2 ${
                        isActive(item.href) ? "text-coral-600" : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full mb-3" variant="outline">
                      <Search className="h-4 w-4 mr-2" />
                      Search Products
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
