import React, { useState, useEffect } from 'react';
import { BookIcon } from './icons/BookIcon';
import { SpoonIcon } from './icons/SpoonIcon';

const UsageSection: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                let { hours, minutes, seconds } = prevTime;
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    seconds = 59;
                    minutes--;
                } else if (hours > 0) {
                    seconds = 59;
                    minutes = 59;
                    hours--;
                } else {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }
                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <section id="promo" className="py-12 bg-stone-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">🎁 🔥 PROMO KHUSUS HARI INI!</h2>
                <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-lg">
                    <p className="text-lg md:text-xl mb-4">
                        Beli 2 Botol (varian apa saja), dapatkan <span className="font-bold text-amber-400">GRATIS</span>:
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6 text-left">
                        <div className="flex items-center gap-3">
                            <SpoonIcon className="w-8 h-8 text-amber-300 flex-shrink-0" />
                            <span className="font-semibold text-lg">1 Sendok Kayu Premium</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <BookIcon className="w-8 h-8 text-amber-300 flex-shrink-0" />
                            <span className="font-semibold text-lg">Ebook "7 Resep Sehat Madu"</span>
                        </div>
                    </div>
                    <div className="text-amber-400 font-bold mb-4">Stok terbatas – hanya untuk 20 pemesan pertama hari ini!</div>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-lg">Penawaran Berakhir Dalam:</span>
                        <div className="bg-white text-stone-800 font-bold text-2xl px-3 py-1 rounded-md">
                            {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsageSection;