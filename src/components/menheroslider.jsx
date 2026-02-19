import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const slides = [
  {
    image: pic1,
    title: "Sports Shoes",
    offer: "Min. 30% Off",
  },
  {
    image: pic2,
    title: "Running Collection",
    offer: "Flat 25% Off",
  },
  {
    image: pic3,
    title: "New Arrivals",
    offer: "Starting ₹999",
  },
];

export default function MenHeroSlider() {
  return (
    <div className="px-12 mb-14">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="py-8 ">
            <div className="grid grid-cols-4 bg-gray-100 rounded-2xl overflow-hidden">
              
              {/* LEFT IMAGE */}
              <div className="col-span-3">
                <img
                  src={slide.image}
                  alt="offer"
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="col-span-1 flex flex-col justify-center p-6">
                
                {/* brand logos */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="border px-3 py-1 font-bold">PUMA</div>
                  <div className="border px-3 py-1 font-bold">ADIDAS</div>
                  <span className="text-gray-500">& more</span>
                </div>

                {/* title */}
                <div className="text-2xl font-semibold">
                  {slide.title}
                </div>

                {/* offer */}
                <div className="text-lg text-gray-600 mt-1">
                  {slide.offer}
                </div>

                {/* explore */}
                <button className="mt-6 text-left text-gray-500 hover:text-black">
                  + Explore
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
