import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonial = [
  {
    text: "Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis, nibh in venenatis iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam",
    author: "Jethro Jeff",
    role: "Designer",
  },
  {
    text: "Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis, nibh in venenatis iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam",
    author: "Mayor Black",
    role: "Developer",
  },
  {
    text: "Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis, nibh in venenatis iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam",
    author: "Jethro Ademola",
    role: "whatever",
  },
];

const Testimonial = () => {
  return (
    <section className="lg:p-32 p-10 bg-dark space-y-10 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-bold font-quicksand tracking-widest text-text_gold uppercase"
        >
          Testimonial
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[48px] font-bold text-white font-cormorant"
        >
          WHAT THEY SAY ABOUT OUR STUDIO ?
        </motion.h1>
        <p className="text-white font-open_sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className="">
        <div className="relative ">
          <div className="flex lg:flex-nowrap flex-wrap gap-4">
            {testimonial?.map((text, index) => (
              <div
                key={index}
                className="bg-dark2 p-6 flex flex-col gap-4 justify-between"
              >
                <FaStar color="gold" />
                <p className="md:text-base text-sm font-light md:leading-[1.5] text-white font-open_sans">
                  {text.text}
                </p>
                <h3 className="text-lg font-semibold font-quicksand text-text_gold">
                  {text.author}
                </h3>
                <p className="text-white">{text.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
