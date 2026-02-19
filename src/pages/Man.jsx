// import React, { useState } from "react";
// import Card from "../components/Card";
// import Footer from "../components/Footer";

// const Men = () => {
//   const MIN = 0;
//   const MAX = 10000;

//   const [price, setPrice] = useState(MIN);
//   const [brand, setBrand] = useState("");

//   return (
//     <div className="pt-14">
//       <div className="flex justify-center gap-10 py-8 px-12">
//         {/* Filters */}
//         <div className="w-1/4">
//           <h1>FILTERS</h1>

//           {/* Size */}
//           <div>
//             <h5 className="mt-3">Size</h5>
//             <div className="grid grid-cols-3 gap-3">
//               {[6, 7, 8, 9, 10, 11, 12, 13].map((size) => (
//                 <button
//                   key={size}
//                   className="cursor-pointer border py-2 px-4 !rounded-xl transition-transform duration-200 hover:scale-110 hover:bg-red-400 hover:shadow-2xl"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Brand */}
//           <div>
//             <h5 className="pt-3">Brand</h5>
//             <select
//               value={brand}
//               onChange={(e) => setBrand(e.target.value)}
//               className="w-full border rounded"
//             >
//               <option value="" disabled>
//                 Choose Brand
//               </option>
//               <option>PUMA</option>
//               <option>NIKE</option>
//               <option>ADIDAS</option>
//               <option>REDTAPE</option>
//               <option>BUCCA BUCCI</option>
//               <option>METRO</option>
//               <option>RED CHIEF</option>
//               <option>ASICS</option>
//               <option>CAMPUS</option>
//               <option>SPARKS</option>
//               <option>ASIAN</option>
//             </select>
//           </div>

//           {/* Price */}
//           <div>
//             <h5 className="pt-3">Price Range</h5>
//             <div className="flex flex-col gap-2">
//               <label>
//                 ₹{MIN} - ₹{price}
//               </label>

//               <input
//                 type="range"
//                 min={MIN}
//                 max={MAX}
//                 value={price}
//                 onChange={(e) => setPrice(Number(e.target.value))}
//               />
//             </div>
//           </div>

//           {/* Colours */}
//           <div>
//             <h5 className="pt-3 mb-3">Colours</h5>

//             <div className="space-y-2 max-h-60 overflow-y-auto">
//               {[
//                 { name: "Green", color: "bg-green-500" },
//                 { name: "Black", color: "bg-black" },
//                 { name: "White", color: "bg-white" },
//                 { name: "Tan", color: "bg-yellow-700" },
//                 { name: "Maroon", color: "bg-red-800" },
//                 { name: "Brown", color: "bg-amber-900" },
//               ].map((item) => (
//                 <div key={item.name} className="flex items-center gap-3">
//                   <input type="checkbox" />
//                   <span className={`w-5 h-5 rounded-full border ${item.color}`} />
//                   <span>{item.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Products */}
//         <div className="flex flex-col w-3/4">
//           <h1 className="font-extrabold">MEN</h1>

//           <div className="grid grid-cols-3 gap-4">
//             {/* Later you can filter cards using price & brand */}
//             {Array.from({ length: 12 }).map((_, i) => (
//               <Card key={i} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Men;

import React, { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import MenHeroSlider from "../components/menheroslider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Men = () => {
  const MIN = 0;
  const MAX = 10000;

  const [price, setPrice] = useState(MIN);
  const [brand, setBrand] = useState("");

  return (
    <div className="pt-22">
      <MenHeroSlider />
      {/* ================= FILTER + PRODUCTS ================= */}
      <div className="flex justify-center gap-10 px-12 pb-10">
        {/* Filters */}
        <div className="w-1/4">
          <h1 className="filter">FILTERS</h1>

          {/* Size */}
          <div>
            <h5 className="mt-3">Size</h5>
            <div className="grid grid-cols-3 gap-3">
              {[6, 7, 8, 9, 10, 11, 12, 13].map((size) => (
                <button
                  key={size}
                  className="cursor-pointer border py-2 px-4 !rounded-xl transition-transform duration-200 hover:scale-110 hover:bg-red-400 hover:shadow-2xl"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div>
            <h5 className="pt-3">Brand</h5>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border rounded"
            >
              <option value="" disabled>
                Choose Brand
              </option>
              <option>PUMA</option>
              <option>NIKE</option>
              <option>ADIDAS</option>
              <option>REDTAPE</option>
              <option>BUCCA BUCCI</option>
              <option>METRO</option>
              <option>RED CHIEF</option>
              <option>ASICS</option>
              <option>CAMPUS</option>
              <option>SPARKS</option>
              <option>ASIAN</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <h5 className="pt-3">Price Range</h5>
            <div className="flex flex-col gap-2">
              <label>₹{MIN} - ₹{price}</label>
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Colours */}
          <div>
            <h5 className="pt-3 mb-3">Colours</h5>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {[
                { name: "Green", color: "bg-green-500" },
                { name: "Black", color: "bg-black" },
                { name: "White", color: "bg-white" },
                { name: "Tan", color: "bg-yellow-700" },
                { name: "Maroon", color: "bg-red-800" },
                { name: "Brown", color: "bg-amber-900" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span className={`w-5 h-5 rounded-full border ${item.color}`} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col w-3/4">
          <h1 className="font-extrabold" >MEN</h1>

          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Men;
