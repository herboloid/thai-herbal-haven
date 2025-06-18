
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
  X
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
        title: "Профиль обновлен",
        description: "Ваши данные успешно сохранены"
      });
      setIsEditing(false);
    } else {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить профиль",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "До свидания!",
      description: "Вы успешно вышли из системы"
    });
    navigate('/');
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  // Моковые данные для заказов и избранного
  const recentOrders = [
    { id: '1', date: '2024-01-15', total: '$35', status: 'Доставлен', items: 2 },
    { id: '2', date: '2024-01-10', total: '$67', status: 'В пути', items: 3 },
    { id: '3', date: '2024-01-05', total: '$24', status: 'Доставлен', items: 1 }
  ];

  const favoriteProducts = [
    { id: 1, name: 'Natural Vitamin C', price: '$19', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop' },
    { id: 2, name: 'Omega-3 Fish Oil', price: '$28', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=100&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-green-100 text-green-700 text-lg">
                  {getInitials(user.firstName, user.lastName)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Заказы</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Избранное</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Настройки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Личная информация</CardTitle>
                    <CardDescription>
                      Управляйте вашими личными данными
                    </CardDescription>
                  </div>
                  {!isEditing ? (
                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                      <Edit3 className="h-4 w-4 mr-2" />
                      Редактировать
                    </Button>
                  ) : (
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        <X className="h-4 w-4 mr-2" />
                        Отмена
                      </Button>
                      <Button onClick={handleSaveProfile} disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        <Save className="h-4 w-4 mr-2" />
                        Сохранить
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
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
                  <Label htmlFor="email">Email</Label>
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
                  <Label htmlFor="phone">Телефон</Label>
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
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
                <CardDescription>
                  Просмотрите ваши последние заказы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Заказ #{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date} • {order.items} товара</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{order.total}</p>
                        <Badge variant={order.status === 'Доставлен' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
                <CardDescription>
                  Ваши любимые добавки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {favoriteProducts.map((product) => (
                    <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-green-600 font-semibold">{product.price}</p>
                      </div>
                      <Button size="sm">В корзину</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Настройки аккаунта</CardTitle>
                <CardDescription>
                  Управляйте настройками вашего аккаунта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email уведомления</h3>
                      <p className="text-sm text-gray-600">Получайте уведомления о заказах и акциях</p>
                    </div>
                    <Button variant="outline" size="sm">Настроить</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Изменить пароль</h3>
                      <p className="text-sm text-gray-600">Обновите пароль для безопасности</p>
                    </div>
                    <Button variant="outline" size="sm">Изменить</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Удалить аккаунт</h3>
                      <p className="text-sm text-gray-600">Навсегда удалить ваш аккаунт</p>
                    </div>
                    <Button variant="destructive" size="sm">Удалить</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
