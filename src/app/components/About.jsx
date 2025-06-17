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
  <section className="bg-white-100 w-[1500px] min-h-screen pb-24">
    {/* Gold label */}
    <motion.div
      variants={labelVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="pt-12 pl-12"
    >
      <span
        className="inline-block bg-[#208704] text-white text-3xl font-bold px-7 py-2 rounded-sm shadow"
        style={{ letterSpacing: "-1px" }}
      >
        About
      </span>
    </motion.div>

    {/* Card */}
    <div className="mt-8 flex justify-center">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-white rounded-lg shadow-xl flex flex-row w-[90vw] max-w-5xl min-h-[440px] overflow-hidden"
      >
        {/* Text */}
        <motion.div
          variants={slideVariant}
          className="flex flex-col justify-center flex-1 px-10 py-10"
        >
          <div className="text-gray-700 text-base leading-8">
            <b>Inspire Next Global Inc.</b> is a visionary management and company
            with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and
            specialized services - serving both private and public sector.<br /><br />
            In true adherence to the Conglomerate Model, it orchestrates a cohesive ecosystem, where the company operates as the central financial hub,
            capitalizing and harmonizing its subsidiaries and affiliates to drive innovation, efficiency and collaboration.<br /><br />
            This forward-thinking entity is on a mission to make a direct and meaningful impact on the lives of individuals, while also wielding
            its influence to create positive shifts in geopolitics.<br /><br />
            Simultaenously, it remains dedicated to delivering substantial returns to its valued shareholders.
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariant}
          className="flex-1 h-[770px] w-[1550px]"
        >
          <img
            src={aboutImage}
            alt="About Inspire Next Global Inc."
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;