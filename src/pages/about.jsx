import { useRef } from "react";
import style from "../assets/images/about.svg";
import { motion, useInView } from "framer-motion";

const containerVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4, delayChildren: 0.3, staggerChildren: 0.4, type: "spring"
        }
    }
}

const divChildVariant = {
    initial: {
        scale: 0,
        origin: "top"
    },
    animate: {
        scale: 1,
        origin: "top"
    }
}

const About = () => {
    const ref = useRef(null);
    const subRef = useRef(null)
    const isInView = useInView(ref, {once: true})
    const SubisInView = useInView(subRef, {once: true})
  return (
    <main className="">
        <div className="md:py-20 py-10 md:px-10 px-4">
            <motion.div ref={ref} variants={containerVariant} initial="initial" animate={isInView ? "animate" : "initial"} className="flex md:flex-row flex-col gap-10 md:gap-20">
                <motion.div variants={divChildVariant} className="bg-[#907E69] md:w-1/2 h-[500px]"></motion.div>
                <motion.div variants={divChildVariant} className="flex-1 text-right">
                    <p className="text-base md:text-lg font-light">Adventure seeker, storyteller, and frame-obsessor! Based in the stunning Pacific Northwest, with Tacoma as my backyard and Seattle&apos;s creative vibes fueling my passion. Always ready to capture life&apos;s breathtaking moments and tales. Whether it&apos;s a wedding, a brand story, or a personal adventure, I&apos;m here to help you tell your story and make it unforgettable! Let&apos;s make some cinematic memories and become the ultimate storytelling squad!</p>
                    <h3 className="cursive text-button text-3xl md:text-[80px] leading-[100px]">with love and prayers ,Bams Visuals</h3>
                </motion.div>
            </motion.div>
        </div>

        <div className="md:py-20 py-10 md:px-10 px-4">
            <motion.div ref={subRef} variants={containerVariant} initial="initial" animate={SubisInView ? "animate" : "initial"} className="flex md:flex-row flex-col gap-10 md:gap-20">
                <motion.div variants={divChildVariant} className="flex-1 flex flex-col gap-4">
                    <h1 className="font-bold text-3xl md:text-4xl roboto">My Style</h1>
                    <p className="text-base md:text-lg font-light"> My style is a fusion of cinematic flair, documentary grit, and a deep love for the human experience. My films are woven with heart, soul, and a dash of magic. I chase light, laughter, and tears to craft stories that whisper secrets to your soul. With a keen eye for the authentic and the unscripted, I weave tales that transport you back to the moment it all happened. My films are a symphony of emotions, a dance between light and shadow, and a celebration of the beauty in the everyday. I don&apos;st just capture moments, I bottle up the feelings, the joy, and the tears, so you can relive them forever. Let&apos;s create films that make your heart skip a beat and your soul feel alive.</p>
                    <button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit font-bold text-white">LETS TALK</button>
                </motion.div>
                <motion.img variants={divChildVariant} src={style} alt="" />
            </motion.div>
        </div>
    </main>
  )
}

export default About