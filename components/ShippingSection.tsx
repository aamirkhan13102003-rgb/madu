
import React from 'react';

const ShippingSection: React.FC = () => {
  return (
    <section id="shipping" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Pengiriman & Garansi</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Kami memastikan pesanan Anda sampai dengan aman dan cepat.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Asal Pengiriman</h3>
            <p className="text-stone-600">Dikirim langsung dari gudang kami di Pontianak, Kalimantan Barat, untuk menjaga kesegaran produk.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Packing Aman Anti Bocor</h3>
            <p className="text-stone-600">Setiap botol dibungkus dengan bubble wrap tebal dan dimasukkan ke dalam kardus kokoh untuk menjamin keamanan.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Garansi Kerusakan</h3>
            <p className="text-stone-600">Jika produk rusak atau pecah di perjalanan, kami akan ganti dengan yang baru. Cukup kirimkan video unboxing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
