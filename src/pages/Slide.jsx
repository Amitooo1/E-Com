import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  const images = [
    "./src/assets/pic1.jpg",
    "./src/assets/pic2.jpg",
    "./src/assets/pic3.jpg",
  ];

  return (
    <div className="h-50">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={400}
        
        className="h-[550px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
