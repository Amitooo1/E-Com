import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const BestSellers = () => {
  const products = Array.from({ length: 8 });

  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="pt-6 sm:pt-8 overflow-x-hidden">

      {/* Header */}
      <div className="flex items-baseline justify-between px-2 sm:px-6! lg:px-8! mb-2">

        {/* Title */}
        <h2
          className={`text-xl! sm:text-3xl! lg:text-4xl!
          font-serif! font-bold! text-black
          whitespace-nowrap transition-all duration-700 ${
            show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          Best Sellers
        </h2>

        {/* View All */}
        <NavLink
          to="bestsellers"
          className={`text-sm sm:text-base font-medium
          text-red-400! hover:text-red-500!
          transition-all duration-700 whitespace-nowrap ${
            show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          View All →
        </NavLink>

      </div>

      {/* Slider */}
      <div className="px-2 sm:px-6! lg:px-8!">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((_, index) => (
            <SwiperSlide key={index} className="pb-10">
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default BestSellers;