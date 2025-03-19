
import React from 'react';
import { ArrowLeft, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-azure-50 to-white">
      <div className="max-w-md w-full text-center glass-card p-10 animate-fade-in">
        <div className="w-20 h-20 bg-azure-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Database className="h-10 w-10 text-azure-600" />
        </div>
        
        <h1 className="heading-lg text-azure-800 mb-2">404</h1>
        <h2 className="heading-sm mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild size="lg" className="flex items-center gap-2 mx-auto">
          <a href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
