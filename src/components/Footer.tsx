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
                  <span className="font-bold text-azure-400">RS</span>
                </div>
              </div>
              <span className="font-bold text-xl">Data<span className="text-azure-400">Engineer</span></span>
            </a>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Rupam's Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>by {' '}
              <a href="https://github.com/rupamsau0010" className="text-blue-500 hover:underline">Rupam</a> in 
            </span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png" alt="Indian Flag" className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
