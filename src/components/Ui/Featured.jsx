import { useState, useEffect, useRef } from "react";
import featured1 from "../../assets/featured1.jpg";
import featured2 from "../../assets/featured2.jpg";
import featured3 from "../../assets/featured3.jpg";
import featured4 from "../../assets/featured4.jpg";
import featured5 from "../../assets/featured5.jpg";
import { NavLink } from "react-router-dom";

const images = [
  featured1,
  featured2,
  featured3,
  featured4,
  featured5,
];

export default function FeaturedCollection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Typing states
  const [displayText, setDisplayText] = useState("");
  const fullText = "Featured Collection";
  const sectionRef = useRef(null);
  const hasTyped = useRef(false);

  // Scroll trigger typing
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped.current) {
          hasTyped.current = true;
          let i = 0;

          const typingInterval = setInterval(() => {
            setDisplayText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
              clearInterval(typingInterval);
            }
          }, 80);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const changeImage = (index) => {
    if (index === activeIndex) return;

    setFade(false);

    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 300);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center bg-black!"
    >
        {/* Typing Heading */}
        <div className="w-9/12 mx-auto pt-10 pb-6 text-center">
            <p className="font-bold text-4xl text-white font-serif min-h:48px">
                {displayText}
                {displayText.length !== fullText.length && (
                <span className="border-r-2 border-white ml-1 animate-pulse"></span>
                )}
            </p>
        </div>

      {/* Slider */}
      <div className="relative w-11/12 h-[80vh] mx-auto overflow-hidden ">

        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-400 pointer-events-none rounded-2xl border-gray-50 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
          }}
        />

        {/* Dots */}
        <div className="absolute inset-0 flex justify-center items-baseline-last pb-10 gap-6 z-10">
            {images.map((_, index) => (
            <div
                key={index}
                onMouseEnter={() => changeImage(index)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer transition-colors duration-100 ${
                activeIndex === index
                    ? "bg-red-400"
                    : "bg-white hover:bg-red-400"
                }`}
            />
            ))}
        </div>

        {/* Shop Now Button */}
        <div className="absolute bottom-30 left-1/2 sm:left-1/2 -translate-x-1/2 z-20">
            <NavLink to='newarrivals' className="px-3 sm:px-8 py-3 bg-white text-black! font-medium rounded-full! transition-all duration-300 hover:bg-red-400! hover:text-white!">
            Shop Now
            </NavLink>
        </div>

      </div>

    </section>
  );
}
