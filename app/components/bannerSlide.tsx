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
    image:
      "https://cdn.hstatic.net/files/200000887901/file/pc__1__75f287c1f544467cbce452977a7f3ef0.jpg",
    title: "",
    subtitle: "",
  },
  {
    id: 3,
    image:
      "https://cdn.hstatic.net/files/200000887901/file/qtyn-desktop.jpg",
    title: "",
    subtitle: "",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">

            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] md:h-[520px] object-cover"
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white max-w-2xl">
              <h2 className="text-2xl md:text-5xl font-bold mb-4 tracking-wide">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg mb-6 opacity-90">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${current === index
                ? "w-6 bg-white"
                : "w-2 bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}