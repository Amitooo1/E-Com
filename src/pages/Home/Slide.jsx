import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const slides = [
    {
      image: "/src/assets/pic1.jpg",
      title: "Redefine Your Style",
      subtitle: "New season. New energy."
    },
    {
      image: "/src/assets/pic2.jpg",
      title: "Elevated Essentials",
      subtitle: "Minimal. Modern. Magnetic."
    },
    {
      image: "/src/assets/pic3.jpg",
      title: "Built To Stand Out",
      subtitle: "Crafted for confidence."
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        navigation
        loop
        speed={900}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full 
                   h-[380px] 
                   sm:h-[450px] 
                   md:h-[520px] 
                   lg:h-[600px] 
                   xl:h-[650px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mb-3">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg opacity-90">
                  {slide.subtitle}
                </p>

                <button className="mt-6 px-6 py-2.5 bg-white text-black text-sm rounded-full hover:bg-red-400! hover:text-white transition duration-300">
                  Shop Now
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;