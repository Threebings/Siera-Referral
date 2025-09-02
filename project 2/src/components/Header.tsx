import React from 'react';
import { Stethoscope } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <Stethoscope className="h-8 w-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-gray-900">Spinal Excellence</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;