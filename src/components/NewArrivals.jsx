// import React from 'react'
// import Card from './Card'

// const NewArrivals = () => {
//   return (
//     <div className='my-00 py-10'>
//         <div className='max-w-6xl mx-auto flex justify-between items-center mt-10'>
//             <div>
//                 <h3>New Arrivals</h3>
//             </div>
//             <div className=''>
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

// export default NewArrivals
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card";

import "swiper/css";
import "swiper/css/pagination";

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
    <div ref={sectionRef} className="pt-10 overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-12">
        <p
          className={`font-bold text-4xl font-serif pt-5 transition-all duration-700 ${
            show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          New Arrivals
        </p>

        <button
          className={`border border-black px-6 py-2 transition-all duration-700 hover:bg-red-400 hover:text-white ${
            show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          View All
        </button>
      </div>

      {/* Slider */}
      <div className="px-12 mt-8">
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
