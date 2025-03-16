import { useRef } from "react";
import aboutImage from "../assets/images/WhatsApp Image 2024-08-08 at 14.26.48_5fb3f285.jpg";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar";
import BgChange from "../components/bgChange";
import Footer from "../components/footer";
import logo from "../assets/images/logo2.png";
import logo2 from "../assets/images/logo-gold.png";
const containerVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delayChildren: 0.3,
      staggerChildren: 0.4,
      type: "spring",
    },
  },
};

const divChildVariant = {
  initial: { scale: 0, origin: "top" },
  animate: {
    scale: 1,
    origin: "top",
    transition: { duration: 0.4, type: "spring" },
  },
};

const About = () => {
  const mainRef = useRef(null);
  const subRef = useRef(null);

  const isMainInView = useInView(mainRef, { once: true });
  const isSubInView = useInView(subRef, { once: true });

  return (
    <main className="bg-black text-white">
      <div className="relative w-full h-screen bg-black">
        <BgChange />
      </div>
      <Navbar />
      {/* About Section */}
      <br />
      <section className="md:py-20 py-10 md:px-10 px-4   ">
        <motion.div
          ref={mainRef}
          variants={containerVariant}
          initial="initial"
          animate={isMainInView ? "animate" : "initial"}
          className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 max-w-6xl mx-auto"
        >
          {/* Image Section */}
          <motion.img
            variants={divChildVariant}
            src={aboutImage}
            alt="About Me"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
          />

          {/* Text Section */}
          <motion.div
            variants={divChildVariant}
            className="flex-1 text-center md:text-right"
          >
            <p className="text-base md:text-lg font-light leading-relaxed">
              Adventure seeker, storyteller, and frame-obsessor! Based in the
              stunning Pacific Northwest, with Tacoma as my backyard and
              Seattle's creative vibes fueling my passion. Always ready to
              capture life's breathtaking moments and tales. Whether it's a
              wedding, a brand story, or a personal adventure, I'm here to help
              you tell your story and make it unforgettable! Let's make some
              cinematic memories and become the ultimate storytelling squad!
            </p>
            <h3 className="cursive text-button text-3xl md:text-[60px] lg:text-[80px] leading-tight mt-6">
              With love and prayers, <br /> Bams Visuals
            </h3>
          </motion.div>
        </motion.div>
      </section>
      {/* My Style Section */}
      <section className="md:py-20 py-10 md:px-10 px-4">
        <motion.div
          ref={subRef}
          variants={containerVariant}
          initial="initial"
          animate={isSubInView ? "animate" : "initial"}
          className="flex md:flex-row flex-col gap-10 md:gap-20"
        >
          <motion.div
            variants={divChildVariant}
            className="flex-1 flex flex-col gap-4"
          >
            <h1 className="font-bold text-3xl md:text-4xl roboto">My Style</h1>
            <p className="text-base md:text-lg font-light">
              My style is a fusion of cinematic flair, documentary grit, and a
              deep love for the human experience. My films are woven with heart,
              soul, and a dash of magic. I chase light, laughter, and tears to
              craft stories that whisper secrets to your soul. With a keen eye
              for the authentic and the unscripted, I weave tales that transport
              you back to the moment it all happened. My films are a symphony of
              emotions, a dance between light and shadow, and a celebration of
              the beauty in the everyday. I don’t just capture moments—I bottle
              up the feelings, the joy, and the tears so you can relive them
              forever. Let’s create films that make your heart skip a beat and
              your soul feel alive.
            </p>
            <button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit font-bold text-white">
              LET'S TALK
            </button>
          </motion.div>
        </motion.div>
      </section>
      <Footer/>
    </main>
  );
};

export default About;
