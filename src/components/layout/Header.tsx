import React from 'react';
import { Link } from 'react-router-dom';
// import { ShieldCheck } from 'lucide-react'; // Example icon for placeholder

interface HeaderProps {
  /**
   * The title to display next to the logo.
   * @default "Auth Portal"
   */
  title?: string;
  /**
   * The source URL for the application logo.
   * If not provided, a placeholder will be shown.
   */
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Auth Portal", logoSrc }) => {
  console.log('Header component loaded');

  return (
    <header className="py-4 px-4 sm:px-6 bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          {logoSrc ? (
            <img 
              src={logoSrc} 
              alt="Application Logo" 
              className="h-8 w-auto sm:h-10 transition-opacity group-hover:opacity-80" 
            />
          ) : (
            <div 
              className="h-8 w-8 sm:h-10 sm:w-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base transition-colors group-hover:bg-primary/90"
              aria-label="Application Logo Placeholder"
            >
              {/* <ShieldCheck size={20} className="sm:size-24" /> */}
              <span>LOGO</span>
            </div>
          )}
          {title && (
            <span className="text-xl sm:text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {title}
            </span>
          )}
        </Link>
        {/* Future elements like theme toggle or user menu could go here */}
      </div>
    </header>
  );
};

export default Header;