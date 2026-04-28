"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1200/400?random=1",
    title: "Bộ sưu tập mới",
    subtitle: "Khám phá ngay hôm nay",
  },
  {
    id: 2,
    image: "https://picsum.photos/1200/400?random=2",
    title: "Giảm giá đến 50%",
    subtitle: "Áp dụng cho tất cả sản phẩm",
  },
  {
    id: 3,
    image: "https://picsum.photos/1200/400?random=3",
    title: "Free Ship toàn quốc",
    subtitle: "Đơn hàng từ 299K",
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
              className="w-full h-[300px] md:h-[400px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-2xl md:text-4xl font-bold">
                {slide.title}
              </h2>
              <p className="mt-2 text-sm md:text-lg">
                {slide.subtitle}
              </p>
            </div>
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