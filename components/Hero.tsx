import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-yellow-950">
      <div className="absolute inset-0 bg-black">
        <img src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/11/raw-honey-1296x728-header-1024x576.jpg" alt="Madu Alami" className="absolute inset-0 w-full h-full object-cover opacity-80" />
      </div>
      <div className="absolute inset-0 bg-amber-50/60 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Madu Asli dari Berbagai Sumber – Pilih Sesuai Kebutuhan Keluargamu!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium">
          Madu Hutan untuk imun, Madu Randu untuk tenggorokan, Madu Klanceng untuk anak – semua 100% alami, tanpa campuran, langsung dari peternak terpercaya.
        </p>
        <a href="#order-form" onClick={(e) => { e.preventDefault(); scrollToSection('order-form'); }} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl">
          Pesan & Dapatkan Promo
        </a>
      </div>
    </section>
  );
};

export default Hero;
