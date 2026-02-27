// Premium Responsive HomePage (No Tailwind Config Required)

import { motion } from "framer-motion";
import HeroSlider from "./Slide";
import Offers from "../../components/Ui/Offers";
import NewArrivals from "../../components/Common/NewArrivals";
import BestSellers from "../../components/Common/BestSellers";
import ShopByGender from "../../components/Common/ShopByGender";
import ShopByCategory from "../../components/Common/ShopByCategory";
import FeaturedCollection from "../../components/Ui/Featured";
import IgReels from "../../components/Ui/IgReels";
import Features from "../../components/Layout/Features";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SectionWrapper = ({ children }) => (
  <div className="max-w-[1440px] mx-auto px-0! sm:px-6! lg:px-10">
    {children}
  </div>
);

const GlassCard = ({ children }) => (
  <div className="relative rounded-none sm:rounded-2xl bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg py-4 sm:py-8 lg:py-10">
    {children}
  </div>
);

const HomePage = () => {
  return (
    <main className="pt-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">

      {/* Hero Section */}
      <section className="relative w-full">
        <HeroSlider />
      </section>

      {/* Offers + New Arrivals */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden md:block"
      >
        <SectionWrapper>
          <div className="space-y-10 py-4">
            <Offers/>
            <GlassCard>
              <NewArrivals />
            </GlassCard>
          </div>
        </SectionWrapper>
      </motion.section>

      {/* Best Sellers */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-1 "
      >
        <SectionWrapper>
          <GlassCard>
            <BestSellers />
          </GlassCard>
        </SectionWrapper>
      </motion.section>

      {/* Shop Sections */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-4 sm:py-16 lg:py-24"
      >
        <SectionWrapper>
          <div className="space-y-6">
            <GlassCard>
              <ShopByGender />
            </GlassCard>

            <GlassCard>
              <ShopByCategory />
            </GlassCard>
          </div>
        </SectionWrapper>
      </motion.section>

      {/* Featured Collection */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=""
      >
        <div className="relative rounded-2xl overflow-hidden bg-black border shadow-lg pb-4 mx-2 sm:mx-6 lg:mx-8 md:pb-10! sm:pt-1! lg:p-10 ">
          <FeaturedCollection />
        </div>        
      </motion.section>

      {/* Instagram Reels */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-4 sm:py-16 lg:py-24"
      >
        <div className="relative rounded-2xl overflow-hidden bg-black border shadow-lg pb-4 mx-2 sm:mx-6 lg:mx-8 sm:pb-6! sm:pt-1! lg:p-10">
          <IgReels />
        </div>        
      </motion.section>

      {/* Features */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-1 pb-4 sm:py-6"
      >
        <SectionWrapper>
          <GlassCard>
            <Features />
          </GlassCard>
        </SectionWrapper>
      </motion.section>

    </main>
  );
};

export default HomePage;