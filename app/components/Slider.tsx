"use client";

import { useState, useEffect } from 'react';

const slides = [
  {
    image: "/images/banner/1.webp",
    title: "BAYRAKLI'NIN GURURU",
    subtitle: "Geleceğin şampiyonlarını yetiştiriyoruz."
  },
  {
    image: "/images/banner/2.webp",
    title: "14 FARKLI BRANŞ",
    subtitle: "Sporun her dalında Bayraklı bayrağını dalgalandırıyoruz."
  },
  {
    image: "/images/banner/3.webp",
    title: "AZİM VE KARARLILIK",
    subtitle: "Bayraklı Belediyesi Spor Kulübü her zaman zirvede."
  }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl md:text-7xl font-black mb-4 drop-shadow-lg uppercase">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl font-light max-w-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
            <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold rounded-full transition-all duration-300">
              BRANŞLARIMIZI İNCELE
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-red-600 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}