import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { useToast } from "@/components/ui/use-toast"; // Example for future use
// import { ShieldAlert } from 'lucide-react'; // Example for future use

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  // const { toast } = useToast(); // Example for future use
  const navigate = useNavigate(); // Example for future use

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Basic validation (more robust validation should be added)
    if (!username || !email || !password) {
        setError("All fields are required.");
        return;
    }
    if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
    }


    console.log('Registration attempt:', { username, email, password });
    // Here you would typically call an API to register the user
    // For demonstration, simulate success and redirect
    // toast({
    //   title: "Registration Successful!",
    //   description: "You can now log in with your new account.",
    // });
    // navigate('/'); // Redirect to login page after successful registration

    // Placeholder for actual registration logic
    alert(`Registration submitted (simulated):\nUsername: ${username}\nEmail: ${email}\nRedirecting to login...`);
    navigate('/'); // Navigate to login page path from App.tsx
  };

  const authFormFooterContent = (
    <p className="text-center text-sm text-muted-foreground">
      Already have an account?{' '}
      <Link to="/" className="font-semibold text-primary hover:underline">
        Sign In
      </Link>
    </p>
  );

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header title="Auth Portal" />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6">
        <AuthFormCard
          title="Create an Account"
          description="Enter your details below to join us."
          footerContent={authFormFooterContent}
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="yourusername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-describedby="username-error"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="email-error"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-describedby="password-error"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                aria-describedby="confirmPassword-error"
              />
            </div>
            
            {error && (
              <div id="form-error" role="alert" className="p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded-md flex items-center">
                {/* <ShieldAlert className="h-4 w-4 mr-2 flex-shrink-0" /> */}
                <span>{error}</span>
              </div>
            )}

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;