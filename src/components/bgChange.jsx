import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const BgChange = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <iframe
          src="https://player.vimeo.com/video/1010058915?h=c7c983dfc5&autoplay=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Background Video"
        ></iframe>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Cinematic Text Content */}
      <motion.div
        className="relative text-white text-center px-6 md:px-12 max-w-5xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome */}
        <motion.p
          className="tracking-[0.3em] text-sm md:text-base uppercase font-light"
          variants={fadeUpVariant}
        >
          Welcome to
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
          variants={fadeUpVariant}
        >
          BAM VISUALS
          <br className="hidden md:block" />
          PRODUCTION
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-md md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto"
          variants={fadeUpVariant}
        >
          A wedding film is more than just a recording —
          <br className="hidden md:block" />
          It’s a timeless keepsake, capturing the emotions
          <br className="hidden md:block" />
          and memories you’ll cherish for a lifetime.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BgChange;
