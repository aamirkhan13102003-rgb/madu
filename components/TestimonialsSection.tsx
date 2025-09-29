import React from 'react';
import { StarIcon } from './icons/StarIcon';

const testimonials = [
  { name: "Ibu Rina", location: "Bandung", text: "Anak saya yang susah makan, sejak dikasih Madu Klanceng Al-Qubro, nafsu makannya naik! Rasanya agak asam jadi anak saya suka. Terima kasih!", rating: 5, image: "https://picsum.photos/100/100?random=1" },
  { name: "Bapak Agung", location: "Yogyakarta", text: "Saya rutin minum Madu Hutan setiap pagi. Badan jadi lebih bugar dan tidak gampang capek. Kualitasnya terasa beda, lebih kental dan aromanya khas.", rating: 5, image: "https://picsum.photos/100/100?random=2" },
  { name: "Andini Putri", location: "Jakarta", text: "Paket sampai dengan aman, packingnya tebal banget. Madu Randunya enak, lembut di tenggorokan. Pas banget buat saya yang sering radang.", rating: 5, image: "https://picsum.photos/100/100?random=3" },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Apa Kata Pelanggan Setia Kami?</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Testimoni asli dari keluarga yang telah merasakan langsung manfaat Madu Al-Qubro.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-amber-50 p-8 rounded-lg shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-amber-500" />)}
                </div>
                <p className="text-stone-600 italic mb-6">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
                <div>
                  <p className="font-bold text-stone-800">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;