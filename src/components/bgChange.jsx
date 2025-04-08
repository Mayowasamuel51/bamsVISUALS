import { motion } from "framer-motion";
import ReactPlayer from 'react-player';
import { useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

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
  const { pathname } = useLocation()
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center z-[9999]">
      <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
        <div className="absolute top-0 left-0 w-full h-full scale-[2.5] lg:scale-150">
          <ReactPlayer
            url="https://player.vimeo.com/video/1010058915?h=c7c983dfc5&autoplay=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
            playing
            muted
            loop
            width="100%"
            height="100%"
            className="!absolute !top-0 !left-0 !w-full !h-full"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {pathname === "/" && (
        <motion.div
          className="w-full relative text-white text-center px-6 md:px-12 space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome */}
          <motion.p
            className="tracking-[0.3em] text-sm md:text-xl uppercase font-bold font-quicksand"
            variants={fadeUpVariant}
          >
            Welcome to
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-cormorant"
            variants={fadeUpVariant}
          >
            BAM VISUALS
            <span className="block font-cormorant text-text_gold">PRODUCTION</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="xl:w-[1000px] text-sm md:text-sm lg:text-base font-normal leading-relaxed mx-auto text-open_sans"
            variants={fadeUpVariant}
          >
            A wedding film is more than just a recording —
            <span className="block">
              It’s a timeless keepsake, capturing the emotions
              and memories you’ll cherish for a lifetime.
            </span>
          </motion.p>
        </motion.div>
      )}

      {pathname === "/about" && (
        <motion.div
          className="w-full relative text-white text-left px-6 md:px-12 space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome */}
          <motion.p
            className="text-xl uppercase font-bold font-cormorant md:text-[100px]"
            variants={fadeUpVariant}
          >
            About Us
          </motion.p>

          <motion.p
            className="text-text_gold flex gap-2 items-center text-sm md:text-sm lg:text-base font-normal leading-relaxed mx-auto text-open_sans"
            variants={fadeUpVariant}
          >
            Home <FaChevronRight />
            <span className="text-white">
              {pathname.slice(1, pathname.length)}
            </span>
          </motion.p>
        </motion.div>
      )}
      {pathname === "/gallery" && (
        <motion.div
          className="w-full relative text-white text-left px-6 md:px-12 space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome */}
          <motion.p
            className="text-xl uppercase font-bold font-cormorant md:text-[100px]"
            variants={fadeUpVariant}
          >
            FILMS
          </motion.p>

          <motion.p
            className="text-text_gold flex gap-2 items-center text-sm md:text-sm lg:text-base font-normal leading-relaxed mx-auto text-open_sans"
            variants={fadeUpVariant}
          >
            Home <FaChevronRight />
            <span className="text-white">
              {pathname.slice(1, pathname.length)}
            </span>
          </motion.p>
        </motion.div>
      )}
      {pathname === "/contact" && (
        <motion.div
          className="w-full relative text-white text-left px-6 md:px-12 space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome */}
          <motion.p
            className="text-xl uppercase font-bold font-cormorant md:text-[100px]"
            variants={fadeUpVariant}
          >
            CONTACT US
          </motion.p>

          <motion.p
            className="text-text_gold flex gap-2 items-center text-sm md:text-sm lg:text-base font-normal leading-relaxed mx-auto text-open_sans"
            variants={fadeUpVariant}
          >
            Home <FaChevronRight />
            <span className="text-white">
              {pathname.slice(1, pathname.length)}
            </span>
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default BgChange;
