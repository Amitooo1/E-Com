
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Common/Card";

import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

const NewArrivals = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);
  const products = Array.from({ length: 8 });

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
    <div ref={sectionRef} className="pt-1 sm:pt-6! overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-row items-center sm:flex-row justify-between sm:items-center px-4 sm:px-8 lg:px-12 gap-4 sm:gap-0">
        
        <p
          className={`font-bold font-serif 
          text-2xl sm:text-3xl lg:text-4xl 
          pt-3 sm:pt-5 
          transition-all duration-700 ${
            show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          New Arrivals
        </p>

        <NavLink
          to="newarrivals"
          className={`rounded-full border border-black 
          px-6 sm:px-8 lg:px-10 
          py-2 text-sm sm:text-base
          transition-all duration-700 
          hover:bg-red-400 hover:text-white ${
            show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          View All
        </NavLink>

      </div>

      {/* Slider */}
      <div className="px-12 mt-2">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
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
            <SwiperSlide key={index} className="pb-16">
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
