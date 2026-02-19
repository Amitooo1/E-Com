import { useState } from "react";

const SlideButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative overflow-hidden border border-black rounded-2xl font-bold px-8 w-40 py-2 cursor-pointer"
      >
        {/* BLACK layer → enters when hover */}
        <span
          className={`absolute inset-0 bg-black transition-transform duration-500
          ${hover ? "translate-x-0" : "-translate-x-full"}`}
        />

        {/* WHITE layer → enters when mouse leaves */}
        <span
          className={`absolute inset-0 bg-white transition-transform duration-500
          ${hover ? "translate-x-full" : "translate-x-0"}`}
        />

        {/* TEXT */}
        <span
          className={`relative z-10 transition-colors duration-300 ${
            hover ? "text-white" : "text-black"
          }`}
        >
          View All
        </span>
      </div>
    </div>
  );
};

export default SlideButton;
