import React from 'react';

const CTASection: React.FC = () => {
    const scrollToOrderForm = () => {
        document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="final-cta" className="py-20 bg-amber-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Jangan Tunda Kesehatan Keluarga Anda!</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Stok madu murni panen alami kami terbatas setiap bulannya. Amankan stok untuk keluarga Anda sekarang sebelum kehabisan.</p>
        <div className="flex justify-center">
          <button onClick={scrollToOrderForm} className="bg-white text-amber-600 font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl w-full md:w-auto">
            📲 Pesan Sekarang via Form di Atas!
          </button>
        </div>
        <p className="mt-6 text-amber-100">Stok hari ini semakin menipis!</p>
      </div>
    </section>
  );
};

export default CTASection;