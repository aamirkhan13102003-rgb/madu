
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const faqs = [
  { q: "Madunya bisa untuk bayi?", a: "Tidak disarankan untuk bayi di bawah usia 1 tahun karena sistem pencernaan mereka belum cukup kuat untuk memproses spora alami yang mungkin ada dalam madu mentah." },
  { q: "Kenapa madunya mengkristal?", a: "Kristalisasi adalah proses alami pada madu murni karena kandungan glukosa yang lebih tinggi dari fruktosa. Ini justru tanda keaslian madu, bukan berarti rusak. Cukup rendam botol di air hangat untuk mencairkannya kembali." },
  { q: "Ada sertifikat halal?", a: "Ya, produk kami telah mendapatkan sertifikat Halal dari MUI dengan nomor registrasi XXX-XXXX-XXXX." },
  { q: "Apakah bisa bayar di tempat (COD)?", a: "Saat ini kami belum melayani COD. Namun, kami memberikan garansi uang kembali jika Anda tidak puas dengan produk kami untuk menjamin keamanan transaksi Anda." },
  { q: "Apa madu ini aman untuk ibu hamil/menyusui?", a: "Ya, madu kami aman dan sangat dianjurkan untuk ibu hamil dan menyusui karena dapat meningkatkan daya tahan tubuh dan kualitas ASI. Namun, tetap konsultasikan dengan dokter Anda jika memiliki kondisi medis tertentu." },
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
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Masih ragu? Temukan jawaban atas pertanyaan Anda di sini.</p>
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
