import React, { useState } from 'react';
import { BeeIcon } from './icons/BeeIcon';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollAndCloseMenu = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-amber-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BeeIcon className="w-8 h-8 text-amber-600" />
          <span className="font-bold text-xl text-stone-800">Madu Al-Qubro</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <button onClick={() => scrollToSection('variants')} className="text-stone-700 hover:text-amber-600 transition-colors">Varian Madu</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-stone-700 hover:text-amber-600 transition-colors">Testimoni</button>
            <button onClick={() => scrollToSection('faq')} className="text-stone-700 hover:text-amber-600 transition-colors">FAQ</button>
          </nav>
          <a href="#order-form" onClick={(e) => { e.preventDefault(); scrollToSection('order-form'); }} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg">
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 -mr-2">
            {isMenuOpen ? <CloseIcon className="w-6 h-6 text-stone-800" /> : <MenuIcon className="w-6 h-6 text-stone-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-amber-100 shadow-lg`}>
        <nav className="flex flex-col items-start p-6 space-y-4">
          <button onClick={() => handleScrollAndCloseMenu('variants')} className="text-lg text-stone-700 hover:text-amber-600 transition-colors w-full text-left py-2">Varian Madu</button>
          <button onClick={() => handleScrollAndCloseMenu('testimonials')} className="text-lg text-stone-700 hover:text-amber-600 transition-colors w-full text-left py-2">Testimoni</button>
          <button onClick={() => handleScrollAndCloseMenu('faq')} className="text-lg text-stone-700 hover:text-amber-600 transition-colors w-full text-left py-2">FAQ</button>
          <a 
            href="#order-form" 
            onClick={(e) => { e.preventDefault(); handleScrollAndCloseMenu('order-form'); }} 
            className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-full transition-transform transform hover:scale-105 shadow-md w-full text-center"
          >
            Pesan Sekarang
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
