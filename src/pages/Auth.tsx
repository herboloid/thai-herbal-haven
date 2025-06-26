
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Auth = () => {
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
        <SignedIn>
          <Navigate to="/" replace />
        </SignedIn>
        
        <SignedOut>
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-green-700">iHealth</h1>
              <p className="text-green-600 mt-2">Personal Account</p>
            </div>

            <div className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl rounded-lg p-6">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-full">
                  <SignIn 
                    forceRedirectUrl="/"
                    appearance={{
                      elements: {
                        formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
                        card: "shadow-none bg-transparent",
                        headerTitle: "text-green-700",
                        headerSubtitle: "text-green-600",
                        socialButtonsBlockButton: "border-green-200 hover:bg-green-50",
                        dividerLine: "bg-green-200",
                        dividerText: "text-green-600",
                        formFieldLabel: "text-green-700",
                        footerActionLink: "text-green-600 hover:text-green-700"
                      }
                    }}
                  />
                </div>
                
                <div className="w-full border-t border-green-200 pt-6">
                  <div className="text-center mb-4">
                    <span className="text-green-600 text-sm">Don't have an account?</span>
                  </div>
                  <SignUp 
                    forceRedirectUrl="/"
                    appearance={{
                      elements: {
                        formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
                        card: "shadow-none bg-transparent",
                        headerTitle: "text-green-700",
                        headerSubtitle: "text-green-600",
                        socialButtonsBlockButton: "border-green-200 hover:bg-green-50",
                        dividerLine: "bg-green-200",
                        dividerText: "text-green-600",
                        formFieldLabel: "text-green-700",
                        footerActionLink: "text-green-600 hover:text-green-700"
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Auth;
