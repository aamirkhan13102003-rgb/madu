
import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-amber-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Siap Merasakan Khasiat Madu Murni?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Stok madu panen liar terbatas setiap bulannya. Jangan sampai kehabisan! Pesan sekarang dan dapatkan gratis ongkir untuk pembelian pertama.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="#" className="bg-white text-amber-600 font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl w-full md:w-auto">
            Pesan Sekarang – Stok Terbatas!
          </a>
          <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Madu%20Hutan%20Kalimantan." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 w-full md:w-auto">
            <WhatsappIcon className="w-6 h-6" />
            Konsultasi via WhatsApp
          </a>
        </div>
        <div className="mt-12">
            <h3 className="font-bold text-xl mb-3">Bonus Spesial Untuk Anda</h3>
            <p className="max-w-md mx-auto">Dapatkan Ebook gratis "7 Cara Pakai Madu untuk Kesehatan & Kecantikan" untuk setiap pembelian paket 500gr ke atas.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
