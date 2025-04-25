import { Link } from "react-router-dom";
import film1 from "../assets/images/Snapinsta.webp"
import film2 from "../assets/images/show.webp"
import film3 from "../assets/images/test.webp"
import { motion } from 'framer-motion';
import { fadeIn } from "../hooks/variants";


const Films = () => {
    return (
        <section className='bg-dark2 lg:p-32 md:p-10 p-4 overflow-hidden'>
            <div>
                <motion.p variants={fadeIn("right", 0.1, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-base text-text_gold font-bold font-quicksand">PORTFOLIO</motion.p>
                <motion.h1 variants={fadeIn("right", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className='font-bold font-cormorant text-[48px] text-white'>FILMS</motion.h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center py-20">
                <div>
                    <img src={film1} alt="film1" className="h-64 object-cover w-full" />
                    {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
                </div>
                <div>
                    <img src={film2} alt="film2" className="h-80 object-cover w-full" />
                    {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
                </div>
                <div>
                    <img src={film3} alt="film3" className="h-64 object-cover w-full" />
                    {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
                <p className="flex-1 font-open_sans font-normal text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus velit, iaculis quis mauris et, dignissim hendrerit ex. Nulla ultrices vel tellus lacinia pharetra. Integer commodo ligula lobortis sapien vehicula placerat eu id tellus. Ut faucibus neque eget dui rutrum, in hendrerit diam euismod. Nam congue diam nulla, vitae sagittis lorem bibendum eu. Curabitur eu ex pulvinar massa convallis ornare.</p>
                <div className="flex-1 flex flex-col gap-4">
                    <p className="font-open_sans font-normal text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin interdum dignissim maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    <div className="flex md:flex-row flex-col gap-10">
                        <Link to="/gallery">
                            <button className="font-quicksand border-2 border-text_gold hover:bg-text_gold hover:text-black duration-300 text-text_gold p-4">SEE ALL PROJECT</button>
                        </Link>
                        <Link to="/contact">
                            <button className="font-quicksand border-2 border-dark2 hover:border-text_gold duration-300 p-4 text-white">START YOUR PROJECT</button>7
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Films