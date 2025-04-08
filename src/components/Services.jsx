import { motion } from "framer-motion";
import { FaFilm, FaMusic  } from "react-icons/fa";
import { MdSmartDisplay } from "react-icons/md";
import { ImVideoCamera } from "react-icons/im";

const services = [
  {
    title: "FILM PRODUCTION",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: <FaFilm />,
  },
  {
    title: "MUSIC VIDEO",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: <MdSmartDisplay />,
  },
  {
    title: "INTERVIEWS",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: <ImVideoCamera />,
  },
  {
    title: "CREATIVE DIRECTION",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    icon: <FaMusic />,
  },
];

const Services = () => {
  return (
    <section className="w-full bg-dark2 py-32 px-6 md:px-20">
      <div className="text-center space-y-16 py-20 px-10 bg-[url('./assets/images/servicebg.png')] bg-contain bg-fixed">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-bold font-quicksand tracking-widest text-text_gold uppercase"
          >
            SERVICE
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[48px] font-bold text-white font-cormorant"
          >
            WHAT SERVICE WE OFFER ?
          </motion.h1>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 border border-text_gold p-3"
            >
              <div className="text-5xl">{service.icon}</div>
              <div className="text-left">
                <h3 className="text-white text-[21px] font-bold font-cormorant text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-white font-open_sans font-normal text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
