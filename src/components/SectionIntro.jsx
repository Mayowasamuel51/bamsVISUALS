import React from "react";
import { motion } from "framer-motion";

const SectionIntro = () => {
  return (
    <section className="w-full bg-[#f9f1e7] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="text-sm md:text-base text-gray-600 uppercase tracking-widest font-light">
            We are the best
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mt-2 leading-snug">
            Studio Production
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionIntro;
