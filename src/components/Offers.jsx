// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const Offers = () => {
//   return (
//     <div className="w-full px-6 pt-4 ">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         loop
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//       >
//         {/* ===== Slide 1 : Free Delivery ===== */}
//         <SwiperSlide>
//           <div className="flex items-center justify-between bg-gradient-to-r from-neutral-300 to-neutral-500 px-8 py-4 rounded-2xl">
//             <div className="text-xl md:text-2xl font-extrabold tracking-wide">
//               FREE DELIVERY ON ALL ORDERS*
//             </div>

//             <div className="bg-black text-white px-6 py-2 rounded-full font-semibold">
//               USE CODE : FREEDEL
//             </div>

//             <div className="text-sm font-medium">T&C APPLY</div>
//           </div>
//         </SwiperSlide>

//         {/* ===== Slide 2 : IDBI ===== */}
//         <SwiperSlide>
//           <div className="flex items-center justify-between bg-gradient-to-r from-neutral-300 to-neutral-500 px-8 py-4 rounded-2xl">
//             <div className="text-xl md:text-2xl font-bold">
//               10% INSTANT DISCOUNT*
//             </div>

//             <div className="text-lg font-medium">
//               ON IDBI CREDIT & DEBIT CARDS
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* ===== Slide 3 : All Banks ===== */}
//         <SwiperSlide>
//           <div className="flex items-center justify-between bg-gradient-to-r from-neutral-300 to-neutral-500 px-8 py-4 rounded-2xl">
//             <div className="text-xl md:text-2xl font-bold">
//               5–10% OFF*
//             </div>

//             <div className="text-lg font-medium">
//               ON ALL BANK CREDIT CARDS
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* ===== Slide 4 : ICICI ===== */}
//         <SwiperSlide>
//           <div className="flex items-center justify-between bg-gradient-to-r from-neutral-300 to-neutral-500 px-8 py-4 rounded-2xl">
//             <div className="text-xl md:text-2xl font-bold">
//               15% INSTANT DISCOUNT*
//             </div>

//             <div className="text-lg font-medium">
//               ON ICICI CREDIT & DEBIT CARDS
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//     </div>
//   );
// };

// export default Offers;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Offers = () => {
  return (
    <div className="w-full px-6 pt-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {/* ===== Slide 1 : Free Delivery ===== */}
        <SwiperSlide>
          <div className="relative px-8 py-6 bg-linear-90 from-orange-100 via-5% to-red-100">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-600">
                  Limited Time
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  <span className="text-red-400">Free Delivery</span> On Every Order.
                </h2>
              </div>

              <div className="bg-red-400 text-white px-6 py-2 rounded-full font-semibold">
                Use Code: FREEDEL
              </div>

              <p className="text-xs text-gray-600">*T&C apply</p>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 2 : IDBI ===== */}
        <SwiperSlide>
          <div className="relative px-8 py-6 bg-linear-90 from-orange-100 via-5% to-red-100">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-600">
                  Bank Offer
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Extra <span className="text-red-400">10%</span> Instant Discount
                </h2>
              </div>

              <div className="text-lg font-semibold">
                with IDBI Credit & Debit Cards
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 3 : All Banks ===== */}
        <SwiperSlide>
          <div className="relative px-8 py-6 bg-linear-90 from-orange-100 via-5% to-red-100">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-600">
                  Card Deals
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Save <span className="text-red-400">5–10%</span> More
                </h2>
              </div>

              <div className="text-lg font-semibold">
                on All Major Bank Credit Cards
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 4 : ICICI ===== */}
        <SwiperSlide>
          <div className="relative px-8 py-6 bg-linear-90 from-orange-100 via-5% to-red-100">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-600">
                  Special Partner Offer
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Flat <span className="text-red-400">15%</span> Off
                </h2>
              </div>

              <div className="text-lg font-semibold">
                on ICICI Credit & Debit Cards
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Offers;
