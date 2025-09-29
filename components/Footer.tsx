
import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { BeeIcon } from './icons/BeeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
               <BeeIcon className="w-8 h-8 text-amber-400 mr-2" />
               <h3 className="text-2xl font-bold">Madu Hutan</h3>
            </div>
            <p className="text-stone-400">Madu murni dari hutan Kalimantan, dipanen secara lestari untuk kesehatan Anda dan kelestarian alam.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-stone-400">
                <li><a href="https://wa.me/6281234567890" className="hover:text-amber-400 flex items-center gap-2"><WhatsappIcon className="w-5 h-5" /> +62 812-3456-7890</a></li>
                <li><p>Alamat: Jl. Hutan Raya No. 123, Pontianak, Kalimantan Barat</p></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <a href="#" className="hover:text-amber-400 flex items-center gap-2"><InstagramIcon className="w-5 h-5" /> @maduhutan.kalimantan</a>
            <p className="mt-4 text-stone-400">Lihat testimoni & proses panen di Instagram kami!</p>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-700 pt-6 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Madu Hutan Kalimantan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
