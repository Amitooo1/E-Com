// import React from 'react'

// const ShopByGender = () => {
//   return (
//     <div className='mt-10 className="bg-gray-100 py-10 my-10"'>
//         <div className='flex items-center gap-4 font-bold text-2xl my-6'>
//             <div className="flex-1 h-0.5 bg-black" />
//             <span className="font-semibold text-4xl font-serif">Shop By Gender</span>
//             <div className="flex-1 h-0.5 bg-black" />
//         </div>
//         <div className='flex justify-between gap-10 items-center px-10 py-10'>
//             <div className="w-full h-74 overflow-hidden transition hover:scale-105">
//             <img
//                 src="./src/assets/men.jpg"
//                 alt="men"
//                 className="w-full h-full"
//             />
//             </div>

//             <div className="w-full h-74 overflow-hidden transition hover:scale-105">
//             <img
//                 src="./src/assets/women.jpg"
//                 alt="women"
//                 className="w-full h-full"
//             />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ShopByGender

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShopByGender = () => {
  const sectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "Shop By Gender";

  // 👀 Detect when section enters viewport
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
    <div ref={sectionRef} className="py-14">
      {/* ===== Heading ===== */}
      <div className="flex items-center gap-4 font-bold text-2xl my-6">
        <div className="flex-1 h-0.5 bg-black" />

        <span className="font-semibold text-4xl font-serif">
          {typedText}
          {startTyping && typedText.length !== fullText.length && (
            <span className="animate-pulse">|</span>
          )}
        </span>
        <div className="flex-1 h-0.5 bg-black" />
      </div>

      {/* ===== Images ===== */}
      <div className="flex justify-between gap-10 items-center px-10 py-10 overflow-hidden">
        
        {/* MEN */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-74 overflow-hidden hover:scale-103 transition"
        >
          <img
            src="./src/assets/men.jpg"
            alt="men"
            className="w-full h-full"
          />
        </motion.div>

        {/* WOMEN */}
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-74 overflow-hidden hover:scale-103 transition"
        >
          <img
            src="./src/assets/women.jpg"
            alt="women"
            className="w-full h-full"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default ShopByGender;
