
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Minus, Plus, Trash2, Package, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const Cart = () => {
  const { t } = useLanguage();
  const { state, dispatch } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    toast.success(t('cart.remove_item'));
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success(t('cart.clear_cart'));
  };

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 1000 ? 0 : 100;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      toast.success(t('cart.place_order'));
      dispatch({ type: 'CLEAR_CART' });
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full">
              <ShoppingCart className="h-10 w-10 text-gray-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cart.empty_title')}</h2>
          <p className="text-gray-600 mb-8">{t('cart.empty_description')}</p>
          <Button asChild size="lg" className="bg-nature-600 hover:bg-nature-700">
            <Link to="/products">{t('cart.continue_shopping')}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nature-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('cart.title')}</h1>
          <Button variant="outline" onClick={clearCart} size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            {t('cart.clear_cart')}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  {t('cart.cart_items')} ({state.items.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-nature-600 font-semibold">
                        ฿{item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-sm sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  {t('cart.order_summary')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('cart.subtotal')}</span>
                  <span className="font-semibold">฿{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('cart.delivery')}</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {t('cart.free_delivery')}
                      </Badge>
                    ) : (
                      `฿${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>{t('cart.total')}</span>
                  <span className="text-nature-600">฿{total.toLocaleString()}</span>
                </div>

                {/* Discount Code */}
                <div className="pt-4 border-t">
                  <Label htmlFor="discount-code" className="text-sm font-medium">
                    {t('cart.discount_code')}
                  </Label>
                  <div className="flex space-x-2 mt-2">
                    <Input
                      id="discount-code"
                      placeholder="Enter code"
                      className="flex-1"
                    />
                    <Button variant="outline" size="sm">
                      {t('cart.apply_discount')}
                    </Button>
                  </div>
                </div>

                {/* Checkout Form */}
                <div className="pt-4 border-t space-y-4">
                  <h3 className="font-semibold text-gray-900">{t('cart.shipping_info')}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="first-name" className="text-sm">
                        {t('cart.first_name')} <span className="text-red-500">*</span>
                      </Label>
                      <Input id="first-name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="text-sm">
                        {t('cart.last_name')} <span className="text-red-500">*</span>
                      </Label>
                      <Input id="last-name" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm">
                      {t('cart.email')} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm">
                      {t('cart.phone')} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-sm">
                      {t('cart.address')} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="address" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="city" className="text-sm">
                        {t('cart.city')} <span className="text-red-500">*</span>
                      </Label>
                      <Input id="city" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="postal-code" className="text-sm">
                        {t('cart.postal_code')} <span className="text-red-500">*</span>
                      </Label>
                      <Input id="postal-code" className="mt-1" />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-nature-600 hover:bg-nature-700 text-white py-3 text-lg font-semibold"
                >
                  {isCheckingOut ? t('common.processing') : t('cart.place_order')}
                </Button>

                <div className="text-center">
                  <Button variant="link" asChild className="text-nature-600">
                    <Link to="/products">{t('cart.continue_shopping')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
