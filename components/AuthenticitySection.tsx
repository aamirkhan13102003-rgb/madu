
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const AuthenticitySection: React.FC = () => {
  return (
    <section id="authenticity" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Cara Membedakan Madu Asli vs Palsu</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Jadilah konsumen cerdas. Kami bantu Anda mengenali madu murni yang sesungguhnya.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 md:w-1/2 lg:w-2/5">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Madu Asli Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Tidak larut sempurna di air, akan mengendap di dasar.</span></li>
              <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Jika dipanaskan, akan berkaramel, tidak berbusa banyak.</span></li>
              <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Dapat mengkristal jika disimpan di suhu dingin, ini tanda alami.</span></li>
              <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Memiliki aroma dan rasa khas bunga hutan yang kompleks.</span></li>
            </ul>
          </div>
          <div className="bg-stone-800 text-white rounded-lg shadow-xl p-8 md:w-1/2 lg:w-2/5">
            <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">Madu Palsu / Oplosan</h3>
            <ul className="space-y-4">
              <li className="flex items-start"><XIcon className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span>Larut dengan mudah di dalam air seperti sirup gula.</span></li>
              <li className="flex items-start"><XIcon className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span>Saat dipanaskan akan mendidih dan berbusa karena kandungan gula.</span></li>
              <li className="flex items-start"><XIcon className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span>Tidak akan pernah mengkristal, bahkan di dalam freezer sekalipun.</span></li>
              <li className="flex items-start"><XIcon className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span>Rasanya hanya manis satu dimensi tanpa aroma khas.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticitySection;
