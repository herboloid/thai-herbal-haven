
import { SignedIn, SignedOut, UserProfile } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <SignedOut>
        <Navigate to="/auth" replace />
      </SignedOut>
      
      <SignedIn>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-green-700 mb-2">Profile Settings</h1>
                <p className="text-green-600">Manage your account and preferences</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                <UserProfile 
                  appearance={{
                    elements: {
                      card: "shadow-none bg-transparent",
                      navbar: "bg-green-50",
                      navbarButton: "text-green-700 hover:bg-green-100",
                      navbarButtonActive: "bg-green-600 text-white",
                      headerTitle: "text-green-700",
                      headerSubtitle: "text-green-600",
                      formButtonPrimary: "bg-green-600 hover:bg-green-700"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  );
};

export default Profile;
