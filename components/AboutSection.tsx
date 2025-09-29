
import React from 'react';
import { LeafIcon } from './icons/LeafIcon';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Apa Itu Madu Kami?</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Kenali lebih dalam sumber kebaikan alami yang kami tawarkan langsung dari jantung hutan.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://picsum.photos/600/400?image=25" alt="Madu dalam toples" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <LeafIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-800">Madu Hutan Liar Kalimantan</h3>
                <p className="text-stone-600">Dipanen dari lebah Apis Dorsata yang hidup liar di hutan, menghisap nektar dari ribuan jenis bunga liar (multiflora), menghasilkan rasa dan aroma yang khas dan kompleks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="bg-amber-100 p-3 rounded-full">
                <LeafIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-800">Proses Mentah & Alami</h3>
                <p className="text-stone-600">Madu kami adalah madu mentah (raw honey). Dipanen dan disaring secara tradisional tanpa proses pemanasan (pasteurisasi) untuk menjaga semua enzim, vitamin, dan nutrisi penting tetap utuh.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="bg-amber-100 p-3 rounded-full">
                <LeafIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-800">Rasa, Warna & Tekstur Unik</h3>
                <p className="text-stone-600">Warna madu kami cenderung lebih gelap dengan tekstur yang sedikit lebih encer, menandakan kandungan mineral yang tinggi. Rasanya manis dengan sedikit sentuhan asam buah yang menyegarkan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
