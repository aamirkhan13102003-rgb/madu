
import React from 'react';
import { HeartIcon } from './icons/HeartIcon';
import { StomachIcon } from './icons/StomachIcon';
import { FaceMaskIcon } from './icons/FaceMaskIcon';
import { CheckIcon } from './icons/CheckIcon';

const benefits = [
  { icon: <HeartIcon className="w-8 h-8 text-red-500" />, title: "Daya Tahan Tubuh", description: "Kaya akan antioksidan dan nutrisi untuk melawan radikal bebas dan meningkatkan imunitas." },
  { icon: <StomachIcon className="w-8 h-8 text-green-500" />, title: "Meredakan Batuk & Tenggorokan", description: "Efektif sebagai pereda alami untuk batuk, pilek, dan sakit tenggorokan." },
  { icon: <FaceMaskIcon className="w-8 h-8 text-blue-500" />, title: "Membantu Pencernaan", description: "Mengandung enzim prebiotik yang baik untuk kesehatan usus dan sistem pencernaan." },
  { icon: <CheckIcon className="w-8 h-8 text-purple-500" />, title: "Baik untuk Kulit", description: "Sifat antibakterinya dapat digunakan sebagai masker wajah untuk melembapkan dan mengatasi jerawat." },
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Manfaat & Khasiat Madu</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Rasakan kebaikan alam yang spesifik dan berbasis fakta untuk kesehatan Anda dan keluarga.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 border border-amber-200 rounded-lg bg-amber-50 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all">
              <div className="flex justify-center items-center mb-4 bg-white w-20 h-20 mx-auto rounded-full shadow-md">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-xl mb-2 text-stone-800">{benefit.title}</h3>
              <p className="text-stone-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-sm text-stone-500 italic">
          <p>"Berdasarkan berbagai penelitian, madu murni mengandung senyawa antibakteri dan anti-inflamasi alami yang bermanfaat bagi tubuh."</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
