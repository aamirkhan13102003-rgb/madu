import React, { useState } from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';

const PricingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [honeyType, setHoneyType] = useState('Madu Hutan');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp || quantity < 1) {
      alert('Mohon lengkapi semua data dengan benar.');
      return;
    }

    const phoneNumber = "6289678686515"; // Target number without '+'
    const message = `Halo Madu Al-Qubro, saya mau pesan:
- Nama: ${name}
- Jenis Madu: ${honeyType}
- Jumlah: ${quantity} Botol

Mohon konfirmasi total dan ongkirnya. Terima kasih.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="order-form" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-amber-100 p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">✅ Pesan Sekarang!</h2>
            <p className="text-stone-600 mt-2">Langsung Dikirim Hari Ini!</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-stone-700 font-semibold mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" 
                placeholder="cth: Budi Santoso"
                required 
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-stone-700 font-semibold mb-2">Nomor WhatsApp</label>
              <input 
                type="tel" 
                id="whatsapp" 
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" 
                placeholder="cth: 081234567890"
                required 
              />
            </div>
            <div>
              <label htmlFor="honeyType" className="block text-stone-700 font-semibold mb-2">Jenis Madu</label>
              <select 
                id="honeyType" 
                value={honeyType}
                onChange={(e) => setHoneyType(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                required
              >
                <option>Madu Hutan</option>
                <option>Madu Randu</option>
                <option>Madu Klanceng</option>
                <option>Paket Campur</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="block text-stone-700 font-semibold mb-2">Jumlah Botol</label>
              <input 
                type="number" 
                id="quantity" 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="1"
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" 
                required 
              />
            </div>
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
              <WhatsappIcon className="w-6 h-6" />
              KIRIM PESANAN
            </button>
            <p className="text-center text-stone-600 text-sm mt-4">
              Kami akan konfirmasi stok & ongkir via WA dalam 15 menit!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;