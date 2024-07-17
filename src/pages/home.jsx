import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main className="">
            <div className="home min-h-screen flex justify-center items-center">
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, stiffness: 500, damping: 10 }} className="relative z-10 text-white text-center flex flex-col gap-5">
                    <h1 className="md:text-4xl text-2xl font-semibold">Crafting cinematic tales that inspire </h1>
                    <button className="bg-button  p-4 w-fit mx-auto font-bold md:px-12 md:py-6">SEE MY WORKS</button>
                </motion.div>
            </div>
            <div className="text-center flex flex-col py-20 md:px-20 px-4 lg:w-[70%] w-full lg:mx-auto">
                <h1 className="cursive text-3xl md:text-6xl">Capturing life’s precious moments, one frame at a time</h1>
                <p className="md:text-xl text-sm">Bams Visuals is widely considered one of the top 3 African wedding videographers in the world. We routinely travel documenting and crafting beautiful luxury films for clients around the United States. Our style is a fusion of cinematic flair, documentary grit, and a deep love for the human experience</p>
            </div>
            <div className='testimonial md:py-28 py-10'>
                <div className='relative z-10 bg-[#F6E7BE] lg:w-[700px] w-[90%] mx-auto'>
                    <Splide options={{
                        type: 'loop',
                        perPage: 1,
                        perMove: 1,
                        autoplay: true,
                        arrows: false,
                        speed: 3000,
                        interval: 4000,
                    }}>
                        <SplideSlide>
                            <div className="text-center px-4 py-6 md:px-10 md:py-24 flex flex-col justify-between">
                                <p className='md:text-base text-sm'>Absolutely THE BEST videographer out there!!! Bams captured our special day with such grace and elegance. His talent is unmatched and his kindness is contagious! I can&apos;t recommend him enough - he&apos;s a gem! We received our sneak peek within a week and I&apos;m OBSESSED with the footage. Can&apos;t wait to see the final product</p>
                                <h3 className="cursive text-3xl md:text-5xl">Adetola & Henry</h3>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="text-center px-4 py-6 md:px-10 md:py-24 flex flex-col justify-between">
                                <p className='md:text-base text-sm'>Absolutely THE BEST videographer out there!!! Bams captured our special day with such grace and elegance. His talent is unmatched and his kindness is contagious! I can&apos;t recommend him enough - he&apos;s a gem! We received our sneak peek within a week and I&apos;m OBSESSED with the footage. Can&apos;t wait to see the final product</p>
                                <h3 className="cursive text-3xl md:text-5xl">Adetola & Henry</h3>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="text-center px-4 py-6 md:px-10 md:py-24 flex flex-col justify-between">
                                <p className='md:text-base text-sm'>Absolutely THE BEST videographer out there!!! Bams captured our special day with such grace and elegance. His talent is unmatched and his kindness is contagious! I can&apos;t recommend him enough - he&apos;s a gem! We received our sneak peek within a week and I&apos;m OBSESSED with the footage. Can&apos;t wait to see the final product</p>
                                <h3 className="cursive text-3xl md:text-5xl">Adetola & Henry</h3>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </main>
    )
}

export default Home