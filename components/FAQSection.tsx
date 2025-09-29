import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const faqs = [
  { q: "Bisa untuk bayi?", a: "Madu murni tidak disarankan untuk anak di bawah usia 1 tahun karena sistem pencernaan mereka belum sempurna." },
  { q: "Kenapa madunya mengkristal? Apakah ini tanda rusak?", a: "Justru sebaliknya! Kristalisasi adalah proses alami pada madu murni karena kandungan glukosa alaminya. Ini adalah salah satu tanda keaslian madu. Cukup rendam botol di air hangat untuk mencairkannya kembali." },
  { q: "Apakah ada campuran gula tambahan?", a: "Tidak. Kami memberikan garansi 100% uang kembali jika madu kami terbukti mengandung gula tambahan. Murni dari nektar bunga." },
  { q: "Bisa bayar di tempat (COD)?", a: "Saat ini kami belum melayani COD untuk menjaga efisiensi pengiriman. Namun, kami menjamin keamanan transaksi Anda dengan garansi uang kembali jika madu tidak asli." },
  { q: "Bagaimana cara menyimpannya?", a: "Cukup simpan di suhu ruang, tutup rapat, dan hindari sinar matahari langsung. Tidak perlu dimasukkan ke dalam kulkas." },
];

const FaqItem: React.FC<{ faq: { q: string; a: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-stone-800"
      >
        <span>{faq.q}</span>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-stone-600">
          <p>{faq.a}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Masih Ada Pertanyaan?</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Kami jawab semua keraguan Anda di sini.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;