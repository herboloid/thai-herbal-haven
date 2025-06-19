
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { 
  ShoppingCart, 
  Minus, 
  Plus, 
  Trash2, 
  ArrowLeft,
  CreditCard,
  Truck,
  MapPin,
  User,
  Mail,
  Phone
} from "lucide-react";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: 'card' | 'paypal' | 'bank';
  deliveryMethod: 'standard' | 'express' | 'pickup';
}

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CheckoutForm>({
    defaultValues: {
      paymentMethod: 'card',
      deliveryMethod: 'standard',
      country: 'United States'
    }
  });

  const deliveryMethod = watch('deliveryMethod');
  const paymentMethod = watch('paymentMethod');

  const getDeliveryPrice = () => {
    switch (deliveryMethod) {
      case 'express': return 15;
      case 'pickup': return 0;
      default: return state.totalPrice >= 50 ? 0 : 5;
    }
  };

  const getDeliveryTime = () => {
    switch (deliveryMethod) {
      case 'express': return '1-2 business days';
      case 'pickup': return 'Today';
      default: return '3-5 business days';
    }
  };

  const totalWithDelivery = state.totalPrice + getDeliveryPrice();

  const onSubmit = (data: CheckoutForm) => {
    setIsCheckingOut(true);
    console.log('Order data:', { ...data, items: state.items, total: totalWithDelivery });
    
    setTimeout(() => {
      alert(`Order for $${totalWithDelivery.toFixed(2)} has been placed! Thank you for your purchase. Order details sent to ${data.email}`);
      clearCart();
      setIsCheckingOut(false);
      setShowCheckoutForm(false);
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Add products to your cart to continue shopping
            </p>
            <Button asChild className="bg-nature-600 hover:bg-nature-700">
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-600">
                {state.totalItems} {state.totalItems === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={clearCart}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Items List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-16 h-16 rounded-lg ${
                        item.id === 7 ? 'object-contain bg-white p-1' : 'object-cover'
                      }`}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-nature-600">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 mt-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Checkout Form */}
            {showCheckoutForm && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          {...register('firstName', { required: 'First name is required' })}
                          className={errors.firstName ? 'border-red-500' : ''}
                        />
                        {errors.firstName && (
                          <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          {...register('lastName', { required: 'Last name is required' })}
                          className={errors.lastName ? 'border-red-500' : ''}
                        />
                        {errors.lastName && (
                          <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          {...register('phone', { required: 'Phone number is required' })}
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-sm">{errors.phone.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        {...register('address', { required: 'Address is required' })}
                        className={errors.address ? 'border-red-500' : ''}
                      />
                      {errors.address && (
                        <span className="text-red-500 text-sm">{errors.address.message}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          {...register('city', { required: 'City is required' })}
                          className={errors.city ? 'border-red-500' : ''}
                        />
                        {errors.city && (
                          <span className="text-red-500 text-sm">{errors.city.message}</span>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code *</Label>
                        <Input
                          id="postalCode"
                          {...register('postalCode', { required: 'Postal code is required' })}
                          className={errors.postalCode ? 'border-red-500' : ''}
                        />
                        {errors.postalCode && (
                          <span className="text-red-500 text-sm">{errors.postalCode.message}</span>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          {...register('country')}
                          readOnly
                          className="bg-gray-100"
                        />
                      </div>
                    </div>

                    {/* Delivery Method */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Delivery Method</Label>
                      <div className="space-y-3">
                        {[
                          { value: 'standard', label: 'Standard Delivery', time: '3-5 business days', price: state.totalPrice >= 50 ? 0 : 5 },
                          { value: 'express', label: 'Express Delivery', time: '1-2 business days', price: 15 },
                          { value: 'pickup', label: 'Store Pickup', time: 'Today', price: 0 }
                        ].map((method) => (
                          <label key={method.value} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              value={method.value}
                              {...register('deliveryMethod')}
                              className="text-nature-600"
                            />
                            <Truck className="h-4 w-4 text-gray-600" />
                            <div className="flex-1">
                              <div className="font-medium">{method.label}</div>
                              <div className="text-sm text-gray-600">{method.time}</div>
                            </div>
                            <div className="font-bold">
                              {method.price === 0 ? 'Free' : `$${method.price}`}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                      <div className="space-y-3">
                        {[
                          { value: 'card', label: 'Credit Card', icon: CreditCard },
                          { value: 'paypal', label: 'PayPal', icon: CreditCard },
                          { value: 'bank', label: 'Bank Transfer', icon: CreditCard }
                        ].map((method) => (
                          <label key={method.value} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              value={method.value}
                              {...register('paymentMethod')}
                              className="text-nature-600"
                            />
                            <method.icon className="h-4 w-4 text-gray-600" />
                            <span className="font-medium">{method.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowCheckoutForm(false)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isCheckingOut}
                        className="flex-1 bg-nature-600 hover:bg-nature-700"
                      >
                        {isCheckingOut ? "Processing..." : "Place Order"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({state.totalItems})</span>
                    <span>${state.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping ({getDeliveryTime()})</span>
                    <span className={getDeliveryPrice() === 0 ? 'text-green-600' : ''}>
                      {getDeliveryPrice() === 0 ? 'Free' : `$${getDeliveryPrice()}`}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${totalWithDelivery.toFixed(2)}</span>
                  </div>
                </div>

                {!showCheckoutForm ? (
                  <Button 
                    className="w-full bg-nature-600 hover:bg-nature-700"
                    onClick={() => setShowCheckoutForm(true)}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Proceed to Checkout
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600 text-center">
                      Fill out the form to complete your order
                    </div>
                  </div>
                )}

                <div className="text-center text-sm text-gray-500 space-y-1">
                  <p className="flex items-center justify-center">
                    <CreditCard className="h-4 w-4 mr-1" />
                    Secure Payment
                  </p>
                  <p className="flex items-center justify-center">
                    <Truck className="h-4 w-4 mr-1" />
                    Free shipping over $50
                  </p>
                  <p className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Worldwide delivery
                  </p>
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
