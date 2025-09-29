
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://picsum.photos/1920/1080?image=1018" alt="Hutan Kalimantan" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Madu Asli 100% dari Hutan Kalimantan</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">Sudah ribuan keluarga sehat dengan madu alami kami – bebas gula tambahan, bebas pengawet, dan khasiat nyata dalam 7 hari!</p>
        <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl">
          Lihat Produk & Pesan
        </a>
      </div>
    </section>
  );
};

export default Hero;
