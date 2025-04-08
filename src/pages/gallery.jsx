import gallery_one from "../assets/images/screencapture-player-vimeo-video-1018523334-2025-03-20-11_34_49.png";
import gallery_three from "../assets/images/screencapture-player-vimeo-video-1021627312-2025-03-20-11_54_39.png";
import gallery_four from "../assets/images/newnew.png";
import gallery_eight from "../assets/images/screencapture-vimeo-1021620397-2025-03-08-21_28_49.png";
import gallery_seven from "../assets/images/screencapture-vimeo-1030637546-2025-03-08-21_24_18.png";
import gallery_six from "../assets/images/gallery6.jpeg";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const videos = [
  {
    url: "https://player.vimeo.com/video/1010058915?h=c7c983dfc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    light: gallery_four,
    title: "DAUGHTER VS MOM - MOVIE",
    description: "A mother and daughter are forced to live together in a small apartment after the mother"
  },
  {
    url: "https://player.vimeo.com/video/1021627312?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    light: gallery_three,
    title: "INTO YOUR HEART - MOVIE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  },
  {
    url: "https://player.vimeo.com/video/1018523334?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    light: gallery_one,
    title: "SCHOOL LIFE - MOVIE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  },
  {
    url: "https://vimeo.com/1030637546",
    light: gallery_seven,
    title: "LOVER ON THE BUSS - MUSIC VIDEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  },
  {
    url: "https://vimeo.com/1021620397",
    light: gallery_eight,
    title: "ENDLESS HAPPYNES - MUSIC VIDEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  },
  {
    url: "https://vimeo.com/990177049/e349d31ec3",
    light: gallery_six,
    title: "GREAT SUMMER - TVC",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  },
];

const Gallery = () => {
  return (
    <section className="bg-black text-white lg:p-32 p-10">
      <div className="">
        <div className="text-center py-12 flex flex-col gap-4">
          <h1 className="font-quicksand text-lg uppercase text-text_gold">portflio</h1>
          <p className="md:text-[38px] font-cormorant font-bold text-base">
            OUR LATEST PROJECT
          </p>
          <p className="text-white font-open_sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <motion.div
          id="works"
          className="gap-10 grid lg:grid-cols-3 grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="relative w-full overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ReactPlayer
                url={video.url}
                width="100%"
                height={300}
                controls={true}
                light={video.light}
                className="w-full"
              // playIcon={
              //   <motion.button
              //     className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white rounded-full shadow-md transition-all ease-in-out transform hover:scale-110 hover:rotate-3"
              //     whileHover={{ scale: 1.15, rotate: -2 }}
              //     whileTap={{ scale: 0.9 }}
              //   >
              //     PLAY VIDEO
              //   </motion.button>
              // }
              />
              <div className="flex flex-col items-start justify-between gap-2 py-3">
                <h2 className="font-cormorant text-2xl font-bold line-clamp-1">{video.title}</h2>
                <p className="font-semibold text-lg font-quicksand text-text_gold">SINONPSIS</p>
                <p>{video.description}</p>
                <button className="border-2 border-text_gold text-text_gold p-4 font-quicksand font-bold">READ MORE</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="py-20">
          <div className="flex gap-14 lg:flex-nowrap flex-wrap bg-[url('./assets/images/servicebg.png')] bg-cover bg-fixed p-10">
            <div className="lg:flex-[2] flex-1">
              <h2 className="font-quicksand font-bold text-lg tracking-[30%] text-text_gold">HAVE IDEA IN YOUR MIND ?</h2>
              <p className="font-cormorant text-white font-bold text-[48px]">LETS HAVE A PROJECT WITH BAM VISUALS</p>
            </div>
            <div className="flex-1 flex flex-col gap-4 items-start">
              <p className="font-open_sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button className="border-2 border-text_gold text-text_gold p-4 font-quicksand font-bold">CONTACT US</button>
            </div>
          </div>
        </div>

        {/* <div className="text-center md:py-20 py-10">
          <h1 className="cursive md:text-6xl text-3xl md:my-6 my-3">
            Can’t wait to chat with you!!
          </h1>
          <Link to="/contact">
            <button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 mx-auto p-4 w-fit font-bold text-white">
              LET'S TALK
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
