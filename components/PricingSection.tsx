
import React from 'react';

const pricingData = [
  { size: "250gr", price: "Rp 85.000", popular: false, features: ["Ukuran Coba", "Praktis dibawa", "Cocok untuk 1 orang"] },
  { size: "500gr", price: "Rp 150.000", popular: true, features: ["Paling Laris", "Untuk keluarga kecil", "Bonus 1 sendok kayu"] },
  { size: "1kg", price: "Rp 280.000", popular: false, features: ["Paket Hemat", "Stok 1-2 bulan", "Diskon 10%"] },
];

const PricingSection: React.FC = () => {
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Varian & Paket Tersedia</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Pilih ukuran yang paling sesuai dengan kebutuhan harian Anda dan keluarga.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingData.map((plan, index) => (
            <div key={index} className={`relative border rounded-lg p-8 text-center transition-transform transform ${plan.popular ? 'bg-amber-100 border-amber-500 scale-105 shadow-2xl' : 'bg-white border-stone-200 shadow-lg hover:shadow-xl hover:-translate-y-2'}`}>
              {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">Paling Populer</div>}
              <h3 className="text-2xl font-bold text-stone-800 mb-2">{plan.size}</h3>
              <p className="text-4xl font-extrabold text-amber-600 mb-6">{plan.price}</p>
              <ul className="space-y-3 text-stone-600 mb-8">
                {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
              <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className={`w-full block font-bold py-3 px-6 rounded-full transition-colors ${plan.popular ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-stone-800 text-white hover:bg-stone-700'}`}>
                Pesan Ukuran {plan.size}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
