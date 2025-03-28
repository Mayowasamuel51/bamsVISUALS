import { motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Helmet } from 'react-helmet';
import '../styles/home.css';
// import image from "../assets/images/test.webp"
import image from "../assets/images/show.webp"
import Gallery from './gallery';
const Home = () => {
    return (
        <motion.main 
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <div>
                <Gallery/>.
            </div>
            {/* Hero Section */}
            {/* <div className="hero text-center flex flex-col py-20 md:px-20 px-4 lg:w-[70%] w-full lg:mx-auto">
                <h1 className="cursive text-4xl md:text-6xl">Capturing life’s precious moments, one frame at a time</h1>
                <p className="md:text-xl text-base font-light">Bams Visuals is widely considered one of the top 3 African wedding videographers in the world. We routinely travel documenting and crafting beautiful luxury films for clients around the United States. Our style is a fusion of cinematic flair, documentary grit, and a deep love for the human experience.</p>
            </div> */}
            
            {/* Testimonial Carousel */}
             {/* <div className='testimonial md:py-28 py-10'>
                <div className='relative z-10 bg-[#F6E7BE] lg:w-[700px] w-[90%] mx-auto cursor-grab'>
                    <Splide options={{
                        type: 'loop',
                        perPage: 1,
                        perMove: 1,
                        autoplay: true,
                        arrows: false,
                        speed: 3000,
                        interval: 4000,
                        drag: 'free',
                        snap: true,
                    }}>
                        <SplideSlide>
                            <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                                <p className='md:text-base text-sm font-light md:leading-[1.5]'>Absolutely THE BEST videographer out there!!! Bams captured our special day with such grace and elegance. His talent is unmatched and his kindness is contagious! I can&apos;t recommend him enough - he&apos;s a gem! We received our sneak peek within a week and I&apos;m OBSESSED with the footage. Can&apos;t wait to see the final product.</p>
                                <h3 className="cursive text-3xl md:text-5xl">Adetola & Henry</h3>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                                <p className='md:text-base text-sm font-light md:leading-[1.5]'>Working with Bams was an absolute dream! He captured our love story with such passion and creativity. The final film is a masterpiece! I&apos;ve never seen anything so beautiful. Bams is a true artist and I&apos;m so grateful to have had him as a part of our special day. Highly recommend him to anyone looking for a talented and dedicated videographer.</p>
                                <h3 className="cursive text-3xl md:text-5xl">Ari & Micheal</h3>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                                <p className='md:text-base text-sm font-light md:leading-[1.5]'>Where do I even begin? Bams is a rockstar videographer who went above and beyond to capture our wedding day. His energy is infectious and talent undeniable. We just received our highlight reel and it&apos;s pure magic! I&apos;ve watched it a million times already. If you&apos;re looking for a videographer who will deliver exceptional quality and service, look no further!</p>
                                <h3 className="cursive text-3xl md:text-5xl">Simone & Deji</h3>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>  */}
           
        </motion.main>
    );
}

export default Home;
