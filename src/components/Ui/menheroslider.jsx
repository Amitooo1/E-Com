import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

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
    <div className="px-4 sm:px-8 lg:px-16 mb-12">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="
              grid 
              grid-cols-1 
              lg:grid-cols-4 
              bg-gray-100 
              rounded-2xl 
              overflow-hidden
            ">
              
              {/* LEFT IMAGE */}
              <div className="lg:col-span-3">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="
                    w-full 
                    h-[220px] 
                    sm:h-[300px] 
                    md:h-[380px] 
                    lg:h-[420px] 
                    object-cover
                  "
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="
                lg:col-span-1 
                flex 
                flex-col 
                justify-center 
                p-6 
                text-center 
                lg:text-left
              ">
                
                {/* brand logos */}
                <div className="flex justify-center lg:justify-start items-center gap-3 mb-4 flex-wrap">
                  <div className="border px-3 py-1 text-sm font-bold">PUMA</div>
                  <div className="border px-3 py-1 text-sm font-bold">ADIDAS</div>
                  <span className="text-gray-500 text-sm">& more</span>
                </div>

                {/* title */}
                <div className="
                  text-xl 
                  sm:text-2xl 
                  lg:text-3xl 
                  font-semibold
                ">
                  {slide.title}
                </div>

                {/* offer */}
                <div className="
                  text-base 
                  lg:text-lg 
                  text-gray-600 
                  mt-1
                ">
                  {slide.offer}
                </div>

                {/* explore */}
                <button className="
                  mt-6 
                  mx-auto lg:mx-0
                  border 
                  border-black 
                  px-5 
                  py-2 
                  text-sm 
                  rounded-full 
                  hover:bg-black 
                  hover:text-white 
                  transition
                ">
                  Explore
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}