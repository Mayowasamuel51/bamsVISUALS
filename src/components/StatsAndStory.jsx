import { motion } from "framer-motion";

const StatsAndStory = () => {
  return (
    <section className="w-full bg-dark py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex flex-col gap-12 w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-lg font-bold font-quicksand tracking-widest text-text_gold uppercase">STORY</h2>
              <h3 className="lg:w-[400px] leading-[1.2] text-4xl md:text-[48px] font-bold text-white font-cormorant">STORY BEHIND BAM VISUALS</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-white text-lg leading-relaxed font-open_sans">
            Aliquam ex lacus, venenatis id finibus ut, scelerisque at felis. 
            Nulla facilisi. Sed fringilla enim consectetur cursus euismod. Sed vel magna in ex malesuada rhoncus ac a turpis.
            </p>

            <p className="text-white text-lg md:text-xl font-light font-open_sans">
            ” Vivamus quam lectus, facilisis a massa facilisis,
            imperdiet maximus nunc. Integer ut metus eget lectus imperdiet pulvinar in ac urna “
            </p>

            <div>
              <p className="text-text_gold font-bold font-cormorant text-2xl">BAM VISUALS NAME HERE</p>
              <p className="font-open_sans text-base text-white">CEO OF BAM VISUALS</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center gap-8"
        >
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
