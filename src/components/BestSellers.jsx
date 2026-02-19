// import Card from "./Card"
// const BestSellers = () => {
//   return (
//     <div className='bg-gray-100 py-10 my-10'>
//         <div className='max-w-6xl mx-auto flex justify-between items-center mt-10'>
//             <div>
//                 <h3>Best Sellers</h3>
//             </div>
//             <div className='rounded-full'>
//                 <button className='!rounded-full bg-black text-white px-10 py-2 transition hover:scale-110'>View all</button>
//             </div>
//         </div>
//         <div className='flex justify-between gap-2 px-10'>
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//     </div>
//   )
// }

// export default BestSellers

import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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
    <div ref={sectionRef} className="bg-linear-to-b from-gray-200 to-gray-50 pb-12 pt-1">
      {/* ===== Top Bar ===== */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mt-10 overflow-hidden">
        {/* Title */}
        <p
          className={`font-bold text-4xl pt-5 font-serif transition-all duration-700 ${
            show ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
          }`}
        >
          Best Sellers
        </p>

        {/* Button */}
        <button
          className={`rounded-full border border-black px-10 py-2 
          transition-all duration-700 hover:bg-red-400 hover:text-white ${
            show ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
          }`}
        >
          View all
        </button>
      </div>

      {/* ===== Slider ===== */}
      <div className="px-10 mt-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          loop
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

export default BestSellers;
