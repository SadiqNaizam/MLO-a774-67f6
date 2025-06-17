import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  title,
  description,
  children,
  footerContent,
  className,
}) => {
  console.log(`AuthFormCard loaded with title: ${title}`);

  return (
    <Card className={`w-full max-w-md ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        {description && (
          <CardDescription className="pt-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {footerContent && (
        <CardFooter className="flex flex-col items-center space-y-2 pt-4">
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormCard;