import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const proofs = [
  {
    title: "Proses Panen Lestari",
    description: "Kami hanya memanen madu secukupnya dan memastikan koloni lebah tetap sehat dan berkembang biak.",
    image: "https://picsum.photos/400/250?image=1060"
  },
  {
    title: "Hasil Uji Laboratorium",
    description: "Setiap batch madu kami diuji di laboratorium independen untuk memastikan kemurnian dan kualitasnya.",
    image: "https://picsum.photos/400/250?image=119"
  },
  {
    title: "Sertifikasi Halal MUI",
    description: "Produk kami telah melalui proses verifikasi dan dijamin halal oleh Majelis Ulama Indonesia.",
    image: "https://picsum.photos/400/250?image=11"
  },
  {
    title: "Garansi 100% Murni",
    description: "Kami memberikan garansi uang kembali jika madu kami terbukti tidak asli. Kepuasan Anda adalah prioritas kami.",
    image: "https://picsum.photos/400/250?image=20"
  }
];

const AuthenticitySection: React.FC = () => {
  return (
    <section id="authenticity" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Bukti Keaslian & Transparansi</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Kami tidak hanya berkata 'asli', kami menunjukkannya. Inilah jaminan kualitas Madu Al-Qubro.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofs.map((proof, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform">
              <img src={proof.image} alt={proof.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-stone-800 mb-2">{proof.title}</h3>
                <p className="text-stone-600 text-sm">{proof.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthenticitySection;