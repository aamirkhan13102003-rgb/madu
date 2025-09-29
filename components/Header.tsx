
import React from 'react';
import { BeeIcon } from './icons/BeeIcon';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-amber-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BeeIcon className="w-8 h-8 text-amber-600" />
          <span className="font-bold text-xl text-stone-800">Madu Hutan</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('benefits')} className="text-stone-700 hover:text-amber-600 transition-colors">Manfaat</button>
          <button onClick={() => scrollToSection('pricing')} className="text-stone-700 hover:text-amber-600 transition-colors">Harga</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-stone-700 hover:text-amber-600 transition-colors">Testimoni</button>
          <button onClick={() => scrollToSection('faq')} className="text-stone-700 hover:text-amber-600 transition-colors">FAQ</button>
        </nav>
        <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg">
          Pesan Sekarang
        </a>
      </div>
    </header>
  );
};

export default Header;
