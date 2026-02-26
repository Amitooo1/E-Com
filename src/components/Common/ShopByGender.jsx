import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import pic1 from "../../assets/men.jpg";
import pic2 from "../../assets/women.jpg";

const ShopByGender = () => {
  return (
    <section className="py-1 px-4 ">
      
      {/* ===== Heading ===== */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <div className="hidden sm:block flex-1 h-[1px] bg-gray-300" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-center">
          Shop By Gender
        </h2>
        <div className="hidden sm:block flex-1 h-[1px] bg-gray-300" />
      </div>

      {/* ===== Cards Container ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* MEN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <NavLink to="/man">
            <img
              src={pic1}
              alt="Men"
              className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                MEN
              </h3>
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
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
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                WOMEN
              </h3>
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
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