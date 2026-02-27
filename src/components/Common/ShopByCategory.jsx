// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// const categories = [
//   { image: "./src/assets/casuals.jpg" },
//   { image: "./src/assets/sports.jpg" },
//   { image: "./src/assets/sneakers.jpg" },
//   { image: "./src/assets/formals.jpg" },
//   { image: "./src/assets/Party.jpg" },
// ];

// const ShopByCategory = () => {
//   return (
//     <div className="py-10 mb-10">
//       {/* Heading */}
//       <div className="flex items-center gap-4 font-bold text-2xl mt-6">
//         <div className="flex-1 h-0.5 bg-black" />
//         <span className="font-semibold text-4xl font-serif">
//           Explore Our <span className="text-red-400"> Categories </span>
//         </span>
//         <div className="flex-1 h-0.5 bg-black" />
//       </div>

//       {/* Slider */}
//       <div className="px-10 py-16">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           slidesPerView={4}
//           loop
//           autoplay={{
//             delay: 1200,
//             disableOnInteraction: false,
//           }}
//           speed={800}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {categories.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="overflow-hidden rounded-2xl shadow-md">
//                 <img
//                   src={item.image}
//                   alt="category"
//                   className="w-full h-auto transition duration-300 hover:scale-105"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Button */}
//       <div className="flex justify-center">
//         <div className="relative group border border-black rounded-2xl font-bold px-8 w-40 my-1 py-2 cursor-pointer text-center overflow-hidden">
          
//           <span className="absolute inset-0 bg-red-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-in-out" />
          
//           <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//             View All
//           </span>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopByCategory;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React, { useEffect, useRef, useState } from "react";

import casuals from "../../assets/casuals.jpg"
import sports from "../../assets/sports.jpg"
import sneakers from "../../assets/sneakers.jpg"
import formals from "../../assets/formals.jpg"
import Party from "../../assets/Party.jpg"

import "swiper/css";
import { NavLink } from "react-router-dom";

const categories = [
  casuals,
  sports,
  sneakers,
  formals,
  Party
];

const ShopByCategory = () => {
  const sectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "Explore Our Categories ";
  
  // 👀 Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // ⌨️ Typing effect
  useEffect(() => {
    if (!startTyping) return;

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <div ref={sectionRef} className="py-1 sm:py-4">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 px-4 sm:px-8">
        
        {/* Left Line */}
        <div className="flex-1 h-[1px] bg-black hidden sm:block" />

        {/* Text */}
        <h2
          className="
            text-2xl!
            sm:text-3xl! 
            lg:text-4xl! 
            font-serif 
            font-semibold 
            text-center 
            whitespace-nowrap
          "
        >
          {typedText}
          {startTyping && typedText.length !== fullText.length && (
            <span className="animate-pulse">|</span>
          )}
        </h2>

        {/* Right Line */}
        <div className="flex-1 h-[1px] bg-black hidden sm:block" />

      </div>

      {/* Slider */}
      <div className="px-0 sm:px-6 lg:px-10 py-6 sm:py-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <NavLink to='/newarrivals'>
                <img
                  src={item}
                  alt="category"
                  className="w-full h-auto transition duration-300 hover:scale-105"
                />
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      
      <div className="flex justify-center hover:no-underline">
        <NavLink to='newarrivals'>
        <div className="relative group border border-black text-black rounded-2xl font-bold px-8 w-40 my-1 py-2 cursor-pointer text-center overflow-hidden">
          <span className="absolute inset-0 bg-red-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-in-out" />

          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            View All
          </span>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ShopByCategory;
