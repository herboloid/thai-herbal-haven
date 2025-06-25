
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ArrowRight, Users, Shield, Zap } from "lucide-react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-purple-200/25 to-indigo-300/20 rounded-full blur-3xl transform translate-x-1/3 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-indigo-200/30 to-blue-200/25 rounded-full blur-3xl transform translate-y-1/3 animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-600"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center py-12 px-4 min-h-screen">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Добро пожаловать в TaskFlow</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Современное приложение для управления проектами и задачами. 
              Войдите в систему или создайте аккаунт, чтобы начать.
            </p>
          </div>

          <SignedOut>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Features Section */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Безопасная аутентификация</h3>
                      <p className="text-gray-600">Защищённый вход с помощью современных технологий Clerk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрая регистрация</h3>
                      <p className="text-gray-600">Создайте аккаунт за несколько секунд и начните работать</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Управление профилем</h3>
                      <p className="text-gray-600">Полный контроль над вашими данными и настройками</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Auth Section */}
              <div>
                <Card className="backdrop-blur-sm bg-white/90 border-white/20 shadow-2xl">
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="signin" className="text-indigo-700 data-[state=active]:text-indigo-800">
                        Вход
                      </TabsTrigger>
                      <TabsTrigger value="signup" className="text-indigo-700 data-[state=active]:text-indigo-800">
                        Регистрация
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin">
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-gray-900">Войти в аккаунт</CardTitle>
                        <CardDescription className="text-gray-600">
                          Введите свои данные для входа в систему
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <SignInButton 
                          fallbackRedirectUrl="/"
                          forceRedirectUrl="/"
                        >
                          <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
                            <span className="flex items-center justify-center space-x-2">
                              <span>Войти</span>
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </Button>
                        </SignInButton>
                        
                        <div className="text-center text-sm text-gray-500">
                          Нет аккаунта?{" "}
                          <button 
                            onClick={() => setActiveTab("signup")}
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            Зарегистрируйтесь
                          </button>
                        </div>
                      </CardContent>
                    </TabsContent>

                    <TabsContent value="signup">
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-gray-900">Создать аккаунт</CardTitle>
                        <CardDescription className="text-gray-600">
                          Присоединяйтесь к нам и начните управлять проектами
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <SignUpButton 
                          fallbackRedirectUrl="/"
                          forceRedirectUrl="/"
                        >
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
                            <span className="flex items-center justify-center space-x-2">
                              <span>Создать аккаунт</span>
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </Button>
                        </SignUpButton>
                        
                        <div className="text-center text-sm text-gray-500">
                          Уже есть аккаунт?{" "}
                          <button 
                            onClick={() => setActiveTab("signin")}
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            Войдите
                          </button>
                        </div>
                      </CardContent>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="text-center">
              <Card className="backdrop-blur-sm bg-white/90 border-white/20 shadow-2xl max-w-md mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900 mb-4">Добро пожаловать!</CardTitle>
                  <div className="flex justify-center mb-4">
                    <UserButton 
                      afterSignOutUrl="/auth"
                      appearance={{
                        elements: {
                          avatarBox: "w-16 h-16"
                        }
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Вы успешно вошли в систему. Теперь вы можете управлять своими проектами и задачами.
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <a href="/">
                      <span className="flex items-center justify-center space-x-2">
                        <span>Перейти к приложению</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Auth;
