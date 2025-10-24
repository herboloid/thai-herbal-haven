import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useTranslation } from "react-i18next";
import { useProducts } from "@/hooks/useProducts";
import { 
  ShoppingCart, 
  Minus, 
  Plus, 
  Trash2, 
  ArrowLeft,
  ExternalLink
} from "lucide-react";

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const { t } = useTranslation();
  const { data: products = [] } = useProducts();

  // Get LINE URL for a product
  const getProductLineUrl = (productId: number): string | undefined => {
    const product = products.find(p => p.id === productId);
    return product?.lineUrl;
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
              {t('cart.empty')}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t('cart.emptyDesc')}
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/products">
                {t('cart.continueShopping')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('cart.continueShopping')}
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('cart.title')}</h1>
              <p className="text-muted-foreground">
                {state.totalItems} {state.totalItems === 1 ? t('cart.item') : t('cart.items')}
              </p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={clearCart}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            {t('cart.clearCart')}
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cart Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                {t('cart.cartItems')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {state.items.map((item) => {
                const lineUrl = getProductLineUrl(item.id);
                
                return (
                  <div key={item.id} className="border rounded-lg p-6 space-y-4 bg-card">
                    {/* Product Info Row */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-20 h-20 rounded-lg ${
                          item.id === 7 ? 'object-contain bg-white p-1' : 'object-cover'
                        }`}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-primary">
                            {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
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
                        <div className="font-bold text-lg text-foreground">
                          ฿{(parseFloat(item.price.replace('฿', '').replace(',', '')) * item.quantity).toFixed(2)}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive mt-1"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>

                    {/* LINE Checkout Section */}
                    {lineUrl ? (
                      <div className="pt-4 border-t">
                        <div className="bg-accent/10 rounded-lg p-4 space-y-3">
                          <div className="text-center">
                            <p className="text-sm font-semibold text-foreground mb-1">
                              {t('cart.lineCheckout')}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {t('cart.lineCheckoutDesc')}
                            </p>
                          </div>
                          <Button
                            asChild
                            className="w-full bg-[#06C755] hover:bg-[#05b04d] text-white"
                            size="lg"
                          >
                            <a
                              href={lineUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg 
                                viewBox="0 0 24 24" 
                                className="h-5 w-5 mr-2" 
                                fill="currentColor"
                              >
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.771.039 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                              </svg>
                              {t('cart.placeOrder')}
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-4 border-t">
                        <p className="text-sm text-muted-foreground text-center">
                          Contact us to purchase this product
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">{t('cart.total')}</span>
                  <span className="font-bold text-foreground text-2xl">฿{state.totalPrice.toFixed(2)}</span>
                </div>
                <div className="text-sm text-muted-foreground text-center pt-2 border-t">
                  {t('cart.lineCheckoutDesc')}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
