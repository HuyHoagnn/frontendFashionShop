"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://cdn.hstatic.net/files/200000886795/file/web_pc.png",
    title: "",
    subtitle: "",
  },
  {
    id: 2,
    image: "https://cdn.hstatic.net/files/200000887901/file/pc__1__75f287c1f544467cbce452977a7f3ef0.jpg",
    title: "",
    subtitle: "",
  },
  {
    id: 3,
    image: "https://cdn.hstatic.net/files/200000887901/file/qtyn-desktop.jpg",
    title: "",
    subtitle: "",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}