import React from 'react';

const UsageSection: React.FC = () => {
  return (
    <section id="usage" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Cara Konsumsi & Penyimpanan</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Dapatkan manfaat maksimal dengan cara penggunaan dan penyimpanan yang tepat.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-amber-600">Cara Konsumsi</h3>
            <ul className="list-disc list-inside space-y-2 text-stone-700">
              <li><strong>Dewasa:</strong> 1-2 sendok makan, 2 kali sehari.</li>
              <li><strong>Anak-anak ({'>'}1 tahun):</strong> 1 sendok teh, 2 kali sehari.</li>
              <li>Dapat dikonsumsi langsung atau dicampur dengan air hangat (jangan air panas), teh, atau yogurt.</li>
              <li>Sangat baik dikonsumsi pagi hari sebelum sarapan dan malam hari sebelum tidur.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-amber-600">Cara Penyimpanan</h3>
            <ul className="list-disc list-inside space-y-2 text-stone-700">
              <li>Simpan di suhu ruang yang sejuk dan kering.</li>
              <li>Hindari paparan sinar matahari langsung.</li>
              <li>Tidak perlu disimpan di dalam kulkas.</li>
              <li>Gunakan sendok kering dan bersih untuk mengambil madu agar tidak terkontaminasi.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;