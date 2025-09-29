import React from 'react';
import { LeafIcon } from './icons/LeafIcon';

const AboutSection: React.FC = () => {
  return (
    <section id="brand-story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Dari Hati Peternak, Untuk Kesehatan Keluargamu</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Lebih dari sekadar madu, kami membawa amanah para peternak lokal langsung ke meja makan Anda.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://asset.kompas.com/crops/lGApe5VHyCjIHQ3NIRfXBP6LeUg=/0x0:0x0/1200x800/data/photo/2021/09/03/6131c50735bf1.jpg" alt="Peternak lebah lokal" className="rounded-lg shadow-2xl w-full object-cover h-full max-h-[400px]" />
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <LeafIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-800">Berawal dari Keluarga</h3>
                <p className="text-stone-600">Madu Al-Qubro lahir dari usaha kecil keluarga di Jawa Tengah yang percaya bahwa madu terbaik adalah madu yang murni dan jujur, seperti yang dikonsumsi turun-temurun.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="bg-amber-100 p-3 rounded-full">
                <LeafIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-800">Komitmen pada Kemurnian</h3>
                <p className="text-stone-600">Kami berkomitmen untuk tidak pernah mencampur madu kami dengan apapun dan tidak memanaskannya secara berlebihan, agar semua kebaikan alaminya tetap terjaga.</p>
              </div>
            </div>
             <div className="flex items-start space-x-4">
               <div className="bg-amber-100 p-3 rounded-full">
                <LeafIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-800">Adil bagi Peternak</h3>
                <p className="text-stone-600">Kami bekerja sama langsung dengan peternak lebah di Kalimantan, Jawa, dan NTT, memastikan mereka mendapatkan harga yang adil untuk madu berkualitas yang mereka hasilkan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;