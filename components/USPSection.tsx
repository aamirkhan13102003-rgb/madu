import React from 'react';
import { TreeIcon } from './icons/TreeIcon';
import { FlowerIcon } from './icons/FlowerIcon';
import { SmallBeeIcon } from './icons/SmallBeeIcon';
import { CheckIcon } from './icons/CheckIcon';

const variants = [
  { 
    icon: <TreeIcon className="w-10 h-10 text-green-700" />, 
    title: "Madu Hutan", 
    source: "Nektar bunga hutan alami", 
    benefits: "Daya tahan tubuh, anti-radang, detox alami.",
    features: "Warna gelap, rasa kuat & khas."
  },
  { 
    icon: <FlowerIcon className="w-10 h-10 text-pink-500" />, 
    title: "Madu Randu", 
    source: "Bunga pohon randu (kapuk)", 
    benefits: "Meredakan batuk, sakit tenggorokan, suara serak.",
    features: "Warna terang, rasa lembut & manis."
  },
  { 
    icon: <SmallBeeIcon className="w-10 h-10 text-yellow-600" />, 
    title: "Madu Klanceng (Trigona)", 
    source: "Lebah kecil tanpa sengat", 
    benefits: "Cocok untuk anak, pencernaan, kulit sensitif.",
    features: "Rasa asam segar, kaya antioksidan."
  },
];

const USPSection: React.FC = () => {
  return (
    <section id="variants" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Kenali Varian Madu Al-Qubro</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Setiap jenis madu memiliki manfaat unik. Pilih yang paling tepat untuk Anda dan keluarga.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {variants.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl text-stone-800">{item.title}</h3>
              </div>
              <div className="flex-grow">
                <p className="text-stone-600 mb-4"><span className="font-semibold">Sumber:</span> {item.source}</p>
                <p className="text-stone-600 mb-4"><span className="font-semibold">Cocok untuk:</span> {item.benefits}</p>
                <p className="text-stone-600"><span className="font-semibold">Ciri khas:</span> {item.features}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-2xl text-stone-800 mb-3">Bingung Pilih? Coba Paket Campur!</h3>
            <p className="text-stone-600">Dapatkan semua manfaat terbaik dari 3 varian madu kami dalam satu paket hemat. Pilih "Paket Campur" di form pemesanan.</p>
        </div>
      </div>
    </section>
  );
};

export default USPSection;