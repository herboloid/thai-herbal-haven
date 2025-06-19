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
    <div className="min-h-screen relative overflow-hidden">
      {/* Organic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Organic shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-teal-200/25 to-green-300/20 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-200/30 to-green-200/25 rounded-full blur-3xl transform translate-y-1/3"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-teal-300/20 to-emerald-200/25 rounded-full blur-2xl"></div>
        
        {/* Subtle pattern overlay */}
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
      <div className="relative z-10 flex items-center justify-center py-12 px-4 min-h-screen">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-700">Siam Healthy</h1>
            <p className="text-green-600 mt-2">Личный кабинет</p>
          </div>

          <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
            <Tabs value={isLogin ? "login" : "register"} onValueChange={(value) => setIsLogin(value === "login")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" className="text-green-700 data-[state=active]:text-green-800">Вход</TabsTrigger>
                <TabsTrigger value="register" className="text-green-700 data-[state=active]:text-green-800">Регистрация</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <CardHeader>
                  <CardTitle className="text-green-700">Вход в аккаунт</CardTitle>
                  <CardDescription className="text-green-600">
                    Введите ваши данные для входа
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-green-700">Email</Label>
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
                      <Label htmlFor="login-password" className="text-green-700">Пароль</Label>
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
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Войти
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>

              <TabsContent value="register">
                <CardHeader>
                  <CardTitle className="text-green-700">Создать аккаунт</CardTitle>
                  <CardDescription className="text-green-600">
                    Заполните форму для регистрации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-green-700">Имя</Label>
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
                        <Label htmlFor="lastName" className="text-green-700">Фамилия</Label>
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
                      <Label htmlFor="register-email" className="text-green-700">Email</Label>
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
                      <Label htmlFor="phone" className="text-green-700">Телефон (необязательно)</Label>
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
                      <Label htmlFor="register-password" className="text-green-700">Пароль</Label>
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
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>
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
    </div>
  );
};

export default Auth;
