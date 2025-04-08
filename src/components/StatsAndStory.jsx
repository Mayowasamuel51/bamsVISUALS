import React from "react";
import { motion } from "framer-motion";

const StatsAndStory = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* Left Column – Stats + Story */}
        <div className="flex flex-col gap-12 w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="text-lg text-gray-600 uppercase tracking-widest">
                ING FILMS
              </p>
              <h3 className="text-4xl font-bold text-black">250+</h3>
            </div>
            <div>
              <p className="text-lg text-gray-600 uppercase tracking-widest">
                BIRTHDAY VIDEOS
              </p>
              <h3 className="text-4xl font-bold text-black">78+</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              We take the time to get to know each couple so the film captures the
              event in a way that reflects who they are. For us, wedding films are
              more than just a video. They're a keepsake that tells your love story
              in a way only film can. And since every couple is unique, we approach
              each wedding with fresh eyes and an open heart, ready to create
              something special.
            </p>

            <p className="text-black font-semibold text-xl md:text-2xl uppercase tracking-wide">
              DO NOT HESITATE TO CHOOSE <span className="text-[#D7A86E]">BAM VISUALS</span> AS YOUR STUDIO PRODUCTION
            </p>

            <p className="text-gray-900 text-lg md:text-xl font-light italic">
              When you choose Bamsvisuals, you’re choosing a personalized cinematic
              experience tailored just for you.
            </p>
          </motion.div>
        </div>

        {/* Right Column – CTA & Video */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8"
        >
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.5em] text-black">
              B A M &nbsp; V I S U A L S
            </h2>
            <p className="mt-4 text-[#D7A86E] text-xl font-semibold uppercase tracking-wide">
              Have idea for your project?
            </p>
          </div>

          <div className="w-full h-64 md:h-96">
            <iframe
              src="https://player.vimeo.com/video/1010058915?h=c7c983dfc5&autoplay=0&muted=1&background=0&badge=0&autopause=0"
              className="w-full h-full rounded-xl shadow-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Bams Visual CTA Video"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsAndStory;
