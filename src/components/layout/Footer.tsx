import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer component loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {currentYear} Your Application Name. All rights reserved.</p>
          <nav className="flex space-x-4">
            {/* 
              Assuming these are external links or static pages not managed by client-side routing.
              If they become internal routes, change `href` to `to` and use `<Link>` from `react-router-dom`.
              For now, using '#' as placeholders or you can point them to actual external URLs.
            */}
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;