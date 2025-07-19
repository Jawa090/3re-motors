import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    label: 'Home',
    path: '/'
  }, {
    label: 'Inventory',
    path: '/inventory'
  }, {
    label: 'Sell Your Car',
    path: '/sell-car'
  }, {
    label: 'Finance',
    path: '/finance'
  }, {
    label: 'About',
    path: '/about'
  }, {
    label: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  return <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="3RE Motors" className="h-12 w-auto" />
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`nav-font px-4 py-2 rounded-lg transition-all duration-300 ${isActive(item.path) ? 'bg-red-50 text-red-600 shadow-sm' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'}`}>
                {item.label}
              </Link>)}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg font-semibold px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-red-600 p-2">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`nav-font block px-3 py-2 rounded-md text-base transition-colors ${isActive(item.path) ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'}`}>
                  {item.label}
                </Link>)}
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                  Get Started
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;