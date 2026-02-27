import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Offers = () => {
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);

  const slides = [
    {
      tag: "Limited Time",
      title: "Free Delivery",
      description: "Use Code: FREEDEL",
    },
    {
      tag: "Bank Offer",
      title: "10% Discount",
      highlightPart: "10%",
      description: "with IDBI Credit & Debit Cards",
    },
    {
      tag: "Card Deals",
      title: "Save 5–10% More",
      highlightPart: "5–10%",
      description: "on All Major Bank Credit Cards",
    },
    {
      tag: "Special Partner Offer",
      title: "Flat 15% Off",
      highlightPart: "15%",
      description: "on ICICI Credit & Debit Cards",
    },
  ];

  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, []);

  return (
    <div className="w-full">

      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ "--swiper-theme-color": "#f87171" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="
              px-4! py-3
              sm:px-8! sm:py-4
              md:px-12 md:py-6
              bg-gradient-to-r from-orange-100 via-orange-50 to-red-100
              transition hover:shadow-md
            ">
              <div className="
                flex flex-col items-center text-center gap-1
                sm:flex-row sm:justify-between sm:text-left sm:gap-6
              ">

                <div>
                  <p className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-600">
                  {slide.tag}
                  </p>

                  <h2 className="text-md sm:text-2xl md:text-3xl font-extrabold leading-tight">
                    {slide.highlightPart ? (
                      <>
                        {slide.title.split(slide.highlightPart)[0]}
                        <span className="text-red-500">
                          {slide.highlightPart}
                        </span>
                        {slide.title.split(slide.highlightPart)[1]}
                      </>
                    ) : (
                      <span className="text-red-500">
                        {slide.title}
                      </span>
                    )}
                  </h2>
                </div>

                <div className="text-sm sm:text-base font-medium">
                  {slide.description}
                  {slide.sub && (
                    <p className="text-[10px] text-gray-500">
                      {slide.sub}
                    </p>
                  )}
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*Pagination BELOW dots */}
      <div
        ref={paginationRef}
        className="flex justify-center mt-2 gap-4"
        />

    </div>
  );
};

export default Offers;