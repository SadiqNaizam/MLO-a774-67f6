import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';

// shadcn/ui Components
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast'; // For notifications

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  console.log('ForgotPasswordPage loaded');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Password reset requested for email:', email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    toast({
      title: "Password Reset Link Sent",
      description: `If an account exists for ${email}, a password reset link has been sent. Please check your inbox.`,
    });
    // Optionally redirect or clear form, here we just show a toast.
    // For a real app, you might navigate them to a confirmation page or back to login.
    // setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Password Recovery" />

      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6">
        <AuthFormCard
          title="Forgot Your Password?"
          description="No problem. Enter your email address below and we'll send you a link to reset it."
          footerContent={
            <>
              <p className="text-sm text-muted-foreground">
                Remember your password?{' '}
                <Link to="/" className="font-medium text-primary hover:underline">
                  Back to Login
                </Link>
              </p>
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link to="/registration" className="font-medium text-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Sending Link...' : 'Send Reset Link'}
            </Button>
          </form>
        </AuthFormCard>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;