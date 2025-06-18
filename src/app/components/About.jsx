import React from "react";
import { motion } from "framer-motion";

const aboutImage = "tower.jpg"; // Use your actual image path

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const slideVariant = {
  hidden: { x: -120, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70, damping: 18 } },
  exit: { x: -120, opacity: 0, transition: { duration: 0.5 } }
};

const imageVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 16, delay: 0.3 } }
};

const labelVariant = {
  hidden: { y: -40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.2 } }
};

const About = () => (
  <section className="bg-white-100 w-full min-h-[auto] pb-8 sm:pb-12 md:pb-24">
    {/* Gold label */}
    <motion.div
      variants={labelVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="pt-6 sm:pt-8 md:pt-12 pl-4 sm:pl-6 md:pl-12"
    >
      <span
        className="inline-block bg-[#208704] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-sm shadow"
        style={{ letterSpacing: "-1px" }}
      >
        About
      </span>
    </motion.div>

    {/* Card */}
    <div className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-0 flex justify-center">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-full md:max-w-5xl min-h-[280px] sm:min-h-[320px] md:min-h-[440px] overflow-hidden mx-2 sm:mx-4"
      >
        {/* Text - moved first on mobile */}
        <motion.div
          variants={slideVariant}
          className="flex flex-col justify-center flex-1 px-4 sm:px-5 md:px-8 lg:px-10 py-4 sm:py-5 md:py-8 lg:py-10 order-2 md:order-1"
        >
          <div className="text-gray-700 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 md:leading-8">
            <b>Inspire Next Global Inc.</b> is a visionary management company
            with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and
            specialized services - serving both private and public sector.<br /><br />
            In true adherence to the Conglomerate Model, it orchestrates a cohesive ecosystem, where the company operates as the central financial hub,
            capitalizing and harmonizing its subsidiaries and affiliates to drive innovation, efficiency and collaboration.<br /><br />
            This forward-thinking entity is on a mission to make a direct and meaningful impact on the lives of individuals, while also wielding
            its influence to create positive shifts in geopolitics.<br /><br />
            Simultaneously, it remains dedicated to delivering substantial returns to its valued shareholders.
          </div>
        </motion.div>

        {/* Image - moved second on mobile */}
        <motion.div
          variants={imageVariant}
          className="flex-1 min-h-[200px] sm:min-h-[250px] md:min-h-[440px] max-h-[300px] sm:max-h-[350px] md:max-h-[none] w-full md:w-[48%] order-1 md:order-2"
        >
          <img
            src={aboutImage}
            alt="About Inspire Next Global Inc."
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;