
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-azure-600 to-data-600 rounded-md"></div>
                <div className="absolute inset-0.5 bg-background rounded-md flex items-center justify-center">
                  <span className="font-bold text-azure-400">DE</span>
                </div>
              </div>
              <span className="font-bold text-xl">Data<span className="text-azure-400">Engineer</span></span>
            </a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Azure Data Engineer Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>using React & TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
