
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings, 
  LogOut, 
  Loader2,
  Edit3,
  Save,
  X,
  Upload,
  MapPin,
  Plus
} from "lucide-react";

const Profile = () => {
  const { user, logout, updateProfile, isLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || ''
    });
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = async () => {
    const success = await updateProfile(formData);
    
    if (success) {
      toast({
        title: "Profile Updated",
        description: "Your information has been saved successfully"
      });
      setIsEditing(false);
    } else {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Goodbye!",
      description: "You have been logged out successfully"
    });
    navigate('/');
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  // Mock data for orders and favorites
  const recentOrders = [
    { id: '1', date: '2024-01-15', total: '$35', status: 'Delivered', items: 2, products: ['Natural Vitamin C', 'Omega-3 Fish Oil'] },
    { id: '2', date: '2024-01-10', total: '$67', status: 'In Transit', items: 3, products: ['Probiotics', 'Magnesium', 'Vitamin D3'] },
    { id: '3', date: '2024-01-05', total: '$24', status: 'Delivered', items: 1, products: ['Multivitamin'] }
  ];

  const favoriteProducts = [
    { id: 1, name: 'Natural Vitamin C', price: '$19', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop', inStock: true },
    { id: 2, name: 'Omega-3 Fish Oil', price: '$28', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=100&fit=crop', inStock: true },
    { id: 3, name: 'Probiotics Complex', price: '$32', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop', inStock: false }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Organic Background - Same as Auth page */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-teal-200/25 to-green-300/20 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-200/30 to-green-200/25 rounded-full blur-3xl transform translate-y-1/3"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-teal-300/20 to-emerald-200/25 rounded-full blur-2xl"></div>
        
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="organic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-green-600"/>
                <circle cx="10" cy="10" r="0.5" fill="currentColor" className="text-emerald-600"/>
                <circle cx="30" cy="30" r="0.5" fill="currentColor" className="text-teal-600"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic-pattern)"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="backdrop-blur-sm bg-white/80 border-b border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-green-100 text-green-700 text-lg">
                      {getInitials(user.firstName, user.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white shadow-sm"
                  >
                    <Upload className="h-3 w-3" />
                  </Button>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-green-800">
                    {user.firstName} {user.lastName}
                  </h1>
                  <p className="text-green-600">{user.email}</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleLogout} className="border-green-300 text-green-700 hover:bg-green-50">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="profile" className="flex items-center space-x-2 text-green-700 data-[state=active]:text-green-800">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center space-x-2 text-green-700 data-[state=active]:text-green-800">
                <ShoppingBag className="h-4 w-4" />
                <span>Orders</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center space-x-2 text-green-700 data-[state=active]:text-green-800">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2 text-green-700 data-[state=active]:text-green-800">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="grid gap-6">
                {/* Personal Information */}
                <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-green-700">Personal Information</CardTitle>
                        <CardDescription className="text-green-600">
                          Manage your personal details and preferences
                        </CardDescription>
                      </div>
                      {!isEditing ? (
                        <Button variant="outline" onClick={() => setIsEditing(true)} className="border-green-300 text-green-700 hover:bg-green-50">
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      ) : (
                        <div className="flex space-x-2">
                          <Button variant="outline" onClick={() => setIsEditing(false)} className="border-green-300 text-green-700 hover:bg-green-50">
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                          <Button onClick={handleSaveProfile} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-green-700">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-green-700">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-green-700">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-green-700">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Address Management */}
                <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-green-700">Addresses</CardTitle>
                        <CardDescription className="text-green-600">
                          Manage your shipping and billing addresses
                        </CardDescription>
                      </div>
                      <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Address
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-green-600">
                      <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No addresses saved yet</p>
                      <p className="text-sm">Add an address to make checkout faster</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-green-700">Order History</CardTitle>
                  <CardDescription className="text-green-600">
                    View your recent orders and track deliveries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="border border-green-200 rounded-lg p-4 hover:bg-green-50/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-green-800">Order #{order.id}</p>
                            <p className="text-sm text-green-600">{order.date} • {order.items} items</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-green-800">{order.total}</p>
                            <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className="bg-green-100 text-green-700">
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-sm text-green-600">
                          <p>Products: {order.products.join(', ')}</p>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                            View Details
                          </Button>
                          {order.status === 'Delivered' && (
                            <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                              Reorder
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites">
              <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-green-700">Favorite Products</CardTitle>
                  <CardDescription className="text-green-600">
                    Your saved supplements and health products
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {favoriteProducts.map((product) => (
                      <div key={product.id} className="flex items-center space-x-4 p-4 border border-green-200 rounded-lg hover:bg-green-50/50 transition-colors">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-green-800">{product.name}</h3>
                          <p className="text-green-600 font-semibold">{product.price}</p>
                          {!product.inStock && (
                            <Badge variant="secondary" className="bg-red-100 text-red-700 mt-1">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" disabled={!product.inStock} className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <div className="space-y-6">
                <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-green-700">Account Settings</CardTitle>
                    <CardDescription className="text-green-600">
                      Manage your account preferences and security
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-green-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-green-800">Email Notifications</h3>
                          <p className="text-sm text-green-600">Receive updates about orders and promotions</p>
                        </div>
                        <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-green-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-green-800">Change Password</h3>
                          <p className="text-sm text-green-600">Update your password for security</p>
                        </div>
                        <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50">Change</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-green-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-green-800">Privacy Settings</h3>
                          <p className="text-sm text-green-600">Control your data and privacy preferences</p>
                        </div>
                        <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50">Manage</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50/50">
                        <div>
                          <h3 className="font-medium text-red-800">Delete Account</h3>
                          <p className="text-sm text-red-600">Permanently delete your account and data</p>
                        </div>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
