
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const { login, register, isLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive"
      });
      return;
    }

    const success = await login(formData.email, formData.password);
    
    if (success) {
      toast({
        title: "Добро пожаловать!",
        description: "Вы успешно вошли в систему"
      });
      navigate('/profile');
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неверный email или пароль",
        variant: "destructive"
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.firstName || !formData.lastName) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Ошибка",
        description: "Пароль должен содержать минимум 6 символов",
        variant: "destructive"
      });
      return;
    }

    const success = await register(formData);
    
    if (success) {
      toast({
        title: "Регистрация успешна!",
        description: "Добро пожаловать в Siam Healthy"
      });
      navigate('/profile');
    } else {
      toast({
        title: "Ошибка регистрации",
        description: "Попробуйте еще раз",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Siam Healthy</h1>
          <p className="text-gray-600 mt-2">Личный кабинет</p>
        </div>

        <Card>
          <Tabs value={isLogin ? "login" : "register"} onValueChange={(value) => setIsLogin(value === "login")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <CardHeader>
                <CardTitle>Вход в аккаунт</CardTitle>
                <CardDescription>
                  Введите ваши данные для входа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Введите пароль"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Войти
                  </Button>
                </form>
              </CardContent>
            </TabsContent>

            <TabsContent value="register">
              <CardHeader>
                <CardTitle>Создать аккаунт</CardTitle>
                <CardDescription>
                  Заполните форму для регистрации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Иван"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Петров"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон (необязательно)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Минимум 6 символов"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Зарегистрироваться
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
