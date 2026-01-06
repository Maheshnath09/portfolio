import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Logo */}
        <div className="bg-pixel-dark text-white px-4 py-2 border-2 border-white shadow-pixel-sm transform rotate-[-2deg] hover:rotate-0 transition-transform">
          <a href="#" className="font-press text-sm md:text-base">PIXEL.DEV</a>
        </div>

        {/* Desktop Menu - "Floating Pill" Style */}
        <div className="hidden md:block">
          <div className="bg-pixel-dark border-2 border-white px-2 py-2 shadow-pixel rounded-none">
            <ul className="flex space-x-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="block px-4 py-2 font-press text-xs text-white hover:bg-white hover:text-pixel-dark transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-pixel-dark text-white p-2 border-2 border-white shadow-pixel-sm"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-4 w-64 pointer-events-auto">
          <div className="bg-pixel-dark border-4 border-white p-4 shadow-pixel">
            <ul className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-press text-sm text-white hover:text-pixel-yellow text-center"
                  >
                    {'>'} {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};