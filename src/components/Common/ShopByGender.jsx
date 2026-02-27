import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import pic1 from "../../assets/men.jpg";
import pic2 from "../../assets/women.jpg";

const ShopByGender = () => {
  return (
    <section className="py-2 sm:py-8 px-0">
      
      {/* ===== Heading ===== */}
      <div className="flex items-center justify-center gap-3 mb-10 px-2">
        <div className="hidden sm:block flex-1 h-[1px] bg-gray-300" />
        <h2
          className="
            text-lg 
            sm:text-3xl! 
            lg:text-4xl! 
            font-serif 
            font-semibold 
            text-center 
            whitespace-nowrap
          "
        >
          Shop By Gender
        </h2>
        <div className="hidden sm:block flex-1 h-[1px] bg-gray-300" />
      </div>

      {/* ===== Cards Container ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-2 sm:px-6! lg:px-8!">
        
        {/* MEN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <NavLink to="/men">
            <img
              src={pic1}
              alt="Men"
              className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0 
                flex flex-col items-center justify-end 
                pb-6
                bg-gradient-to-t from-black/70 via-black/30 to-transparent
                sm:opacity-0 sm:group-hover:opacity-100
                transition duration-500
              "
            >
              <h3 className="text-white text-xl sm:text-3xl font-bold mb-3 tracking-wide">
                MEN
              </h3>

              <button className="bg-white text-black px-5 py-2 rounded-full! text-xs sm:text-sm font-semibold hover:bg-red-400! hover:text-white transition">
                Explore Now
              </button>
            </div>
          </NavLink>
        </motion.div>

        {/* WOMEN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <NavLink to="/women">
            <img
              src={pic2}
              alt="Women"
              className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0 
                flex flex-col items-center justify-end 
                pb-6
                bg-gradient-to-t from-black/70 via-black/30 to-transparent
                sm:opacity-0 sm:group-hover:opacity-100
                transition duration-500
              "
            >
              <h3 className="text-white text-xl sm:text-3xl font-bold mb-3 tracking-wide">
                WOMEN
              </h3>

              <button className="bg-white text-black px-5 py-2 rounded-full! text-xs sm:text-sm font-semibold hover:bg-red-400! hover:text-white transition">
                Explore Now
              </button>
            </div>
          </NavLink>
        </motion.div>

      </div>
    </section>
  );
};

export default ShopByGender;