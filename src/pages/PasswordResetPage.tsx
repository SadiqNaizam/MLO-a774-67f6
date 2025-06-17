import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"; // For user feedback

const PasswordResetPage: React.FC = () => {
  console.log('PasswordResetPage loaded');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      setIsLoading(false);
      return;
    }

    // Simulate API call for password reset
    console.log("Attempting to reset password for user with new password.");
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Assuming success for this placeholder
    toast({
      title: "Password Reset Successful",
      description: "Your password has been updated. You can now log in with your new password.",
      variant: "default", // Explicitly using a valid variant
    });
    navigate("/"); // Navigate to LoginPage (path from app_tsx_content)

    // In a real scenario, handle API errors:
    // setError("Failed to reset password. Please try again later.");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header title="Secure Account Access" />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Set New Password"
          description="Create a new password for your account. Make sure it's strong and memorable."
          footerContent={
            <p className="text-sm text-muted-foreground">
              Remembered your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Login here
              </Link>
            </p>
          }
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                name="new-password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1"
                disabled={isLoading}
              />
            </div>

            {error && (
              <p className="text-sm font-medium text-destructive">{error}</p>
            )}

            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Resetting Password...' : 'Set New Password'}
              </Button>
            </div>
          </form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default PasswordResetPage;