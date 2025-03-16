import gallery_one from "../assets/images/gallery1.svg";
import gallery_two from "../assets/images/gallery2.svg";
import gallery_three from "../assets/images/gallery3.svg";
import gallery_four from "../assets/images/gallery4.jpeg";
import gallery_five from "../assets/images/gallery5.jpeg";
import gallery_eight from "../assets/images/screencapture-vimeo-1021620397-2025-03-08-21_28_49.png";
import gallery_seven from "../assets/images/screencapture-vimeo-1030637546-2025-03-08-21_24_18.png";
import gallery_six from "../assets/images/gallery6.jpeg";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import Mobilenav from "./mobilenav";
import logo from "../assets/images/logo2.png";
import logo2 from "../assets/images/logo-gold.png";
const videos = [
  { url: "https://vimeo.com/1030637546", light: gallery_seven },
  { url: "https://vimeo.com/1021620397", light: gallery_eight },
  // { url: " https://vimeo.com/1010058915/c7c983dfc5", light: gallery_six },
  { url: "https://vimeo.com/990177049/e349d31ec3", light: gallery_six },

  {
    url: "https://www.dropbox.com/scl/fi/te2r7y8c4j3vq457hvd71/teaser-2160p-1.mp4?rlkey=93s9yy5a7xghggjzfgyx113ub&st=zg4tmxi6&dl=0",
    light: gallery_one,
  },
  {
    url: "https://www.dropbox.com/scl/fi/al3ytsl8ag93mn0ntfz33/IMG_0520.PNG?rlkey=lmow2oxxyv7sp7wwad41ky4h6&st=tghnhjyw&dl=0",
    light: gallery_two,
  },
  { url: "https://vimeo.com/990845187/f49e83fd83", light: gallery_five },
  {
    url: "https://www.dropbox.com/scl/fi/qot2n92kio5msjwank9v5/IMG_0521.jpg?rlkey=1c23u59gb5nz8eqenxazhnwkj&st=k6dob4u6&dl=0",
    light: gallery_three,
  },
  { url: "https://vimeo.com/990179377/a9a9266311", light: gallery_four },
];

const Gallery = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <main className="py-20 ">
        <div className="text-center mb-10 mt-12">
          <h1 className="cursive text-4xl md:text-6xl my-2">Recent Works</h1>
          <p className="md:text-xl text-base font-light italic">
            Explore our latest stories in motion!
          </p>
        </div>

        <div id="works" className="flex flex-wrap justify-center gap-10">
          {videos.map((video, index) => (
            <div key={index} className="relative w-full md:w-1/2 lg:w-1/3">
              <ReactPlayer
                url={video.url}
                width="100%"
                height={400}
                controls={true}
                playing={true}
                light={video.light}
                playIcon={
                  <button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">
                    PLAY VIDEO
                  </button>
                }
              />
            </div>
          ))}
        </div>

        <div className="text-center md:py-20 py-10">
          <h1 className="cursive md:text-6xl text-3xl md:my-6 my-3">
            Can’t wait to chat with you!!
          </h1>
          <Link to="/contact">
            <button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 mx-auto p-4 w-fit font-bold text-white">
              LET'S TALK
            </button>
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Gallery;
