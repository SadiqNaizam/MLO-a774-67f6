import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
// import { useToast } from "@/components/ui/use-toast"; // For success/error notifications
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // For inline errors
// import { AlertTriangle } from 'lucide-react';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  // const { toast } = useToast(); // Example: if toasts were used on this page
  const navigate = useNavigate();

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log('Login attempt:', { emailOrUsername, password, rememberMe });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example login logic
    if (emailOrUsername === 'user@example.com' && password === 'password123') {
      // toast({ title: "Login Successful", description: "Redirecting to dashboard..." });
      console.log("Login successful, redirecting...");
      // Navigate to a protected route, e.g., '/dashboard' if it existed
      // For this project, App.tsx doesn't show a dashboard, so we'll just log success.
      // If a dashboard existed at say '/dashboard', you would use: navigate('/dashboard');
      setIsLoading(false);
      // For now, let's clear form and simulate success message
      setEmailOrUsername('');
      setPassword('');
      setRememberMe(false);
      // In a real app, you'd redirect here. For now, display a success message or clear form.
      // For this example, we'll just clear the error and fields.
      // If there was a /dashboard route, it would be: navigate('/dashboard');
      alert("Login successful! (No dashboard route defined in this example setup)");

    } else {
      setError('Invalid email/username or password. Please try again.');
      // toast({ variant: "destructive", title: "Login Failed", description: "Invalid credentials." });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header 
        title="Auth Portal" 
        logoSrc="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" // Example logo
      />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Sign in to your account"
          description="Enter your credentials below to access your account."
          footerContent={
            <>
              <Link
                to="/forgot-password" // Path from App.tsx
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link
                  to="/registration" // Path from App.tsx
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                {/* <AlertTriangle className="h-4 w-4 inline mr-2" /> */}
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="emailOrUsername">Email or Username</Label>
              <Input
                id="emailOrUsername"
                name="emailOrUsername"
                type="text" // Could be 'email' if only email is accepted
                autoComplete="username"
                required
                placeholder="you@example.com"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                disabled={isLoading}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  disabled={isLoading}
                />
                <Label htmlFor="remember-me" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </div>
          </form>
        </AuthFormCard>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;