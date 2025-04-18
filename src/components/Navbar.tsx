
import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'light'
            ? 'py-3 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200' 
            : 'py-3 bg-background/80 backdrop-blur-lg shadow-md border-b border-border/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-r from-azure-500 to-data-500' : 'bg-gradient-to-r from-azure-600 to-data-600'} rounded-md`}></div>
            <div className={`absolute inset-0.5 ${theme === 'light' ? 'bg-white' : 'bg-background'} rounded-md flex items-center justify-center`}>
              <span className="font-bold text-azure-500">RS</span>
            </div>
          </div>
          <span className="font-bold text-xl">Data<span className="text-azure-500">Engineer</span></span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-azure-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  theme === 'dark' ? 'text-gray-300 hover:text-azure-400' : 'text-gray-700 hover:text-azure-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <Sun size={18} className={`${theme === 'light' ? 'text-amber-500' : 'text-gray-400'}`} />
            <Switch 
              checked={theme === 'dark'} 
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-azure-600 data-[state=unchecked]:bg-gray-200"
            />
            <Moon size={18} className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-400'}`} />
          </div>
        </div>
        
        <Button
          variant="outline" 
          size="icon"
          className={`md:hidden ${theme === 'dark' ? 'border-azure-700/50 text-gray-300' : 'border-azure-300 text-gray-700'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${theme === 'dark' ? 'bg-background/95 border-border/50' : 'bg-white/95 border-gray-200'} border-b shadow-lg rounded-b-lg animate-slide-down md:hidden`}>
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`py-2 px-4 font-medium rounded-md transition-colors ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:bg-azure-900/20' 
                      : 'text-gray-700 hover:bg-azure-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between py-2 px-4">
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Theme</span>
                <div className="flex items-center space-x-2">
                  <Sun size={16} className={`${theme === 'light' ? 'text-amber-500' : 'text-gray-400'}`} />
                  <Switch 
                    checked={theme === 'dark'} 
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-azure-600 data-[state=unchecked]:bg-gray-200"
                  />
                  <Moon size={16} className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-400'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
