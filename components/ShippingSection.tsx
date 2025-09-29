import React from 'react';

const ShippingSection: React.FC = () => {
  return (
    <section id="shipping" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Proses & Pengiriman</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Kami memastikan pesanan Anda sampai ke tangan Anda dengan aman dan cepat.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Packing Super Aman</h3>
            <p className="text-stone-600">Setiap botol kaca kami lapisi dengan bubble wrap tebal dan dimasukkan ke dalam box kardus yang kokoh untuk mencegah pecah.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Pilihan Ekspedisi</h3>
            <p className="text-stone-600">Kami bekerja sama dengan JNE, SiCepat, dan J&T. Anda bisa memilih ekspedisi saat konfirmasi pesanan via WhatsApp.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Estimasi Tiba</h3>
            <p className="text-stone-600">2-4 hari untuk wilayah Jawa, dan 4-7 hari untuk luar Jawa. Resi pengiriman akan kami kirimkan via WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;