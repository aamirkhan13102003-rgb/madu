
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const uspData = [
  { title: "Asli 100%", description: "Tanpa campuran air, gula, atau sirup. Murni dari nektar bunga." },
  { title: "Langsung dari Peternak", description: "Mendukung peternak lokal dengan rantai pasok yang transparan dan adil." },
  { title: "Sudah Uji Laboratorium", description: "Kualitas terjamin dengan sertifikat uji mutu independen." },
  { title: "Kemasan Higienis", description: "Botol kaca food-grade yang menjaga kualitas dan tahan lama." },
  { title: "Garansi Uang Kembali", description: "Tidak puas dengan produk kami? Kami kembalikan uang Anda 100%." },
];

const USPSection: React.FC = () => {
  return (
    <section id="usp" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Kenapa Harus Pilih Madu Kami?</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Kami tidak hanya menjual madu, kami memberikan jaminan kualitas dan keaslian terbaik.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uspData.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CheckIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-xl text-stone-800">{item.title}</h3>
              </div>
              <p className="text-stone-600">{item.description}</p>
            </div>
          ))}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CheckIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-xl text-stone-800">Visual Produk Menarik</h3>
              </div>
              <p className="text-stone-600">Kami menampilkan foto asli madu, proses panen, dan perbandingan visual untuk membuktikan keaslian produk.</p>
               <img src="https://picsum.photos/400/250?image=1060" alt="Proses panen madu" className="rounded-lg mt-4 w-full" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
