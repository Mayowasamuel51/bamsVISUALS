import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "FILM PRODUCTION",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: "🎬",
  },
  {
    title: "MUSIC VIDEO",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: "🎵",
  },
  {
    title: "INTERVIEWS",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: "🎤",
  },
  {
    title: "CREATIVE DIRECTION",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: "🎨",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest text-gray-500 uppercase"
        >
          WHAT SERVICE WE OFFER?
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold tracking-[0.4em] text-black"
        >
          SERVICES
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-black mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-20 text-center">
        <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition">
          START YOUR PROJECT
        </button>
        <button className="border border-black text-black py-3 px-8 rounded-full hover:bg-black hover:text-white transition">
          SEE ALL PROJECT
        </button>
      </div>
    </section>
  );
};

export default Services;
