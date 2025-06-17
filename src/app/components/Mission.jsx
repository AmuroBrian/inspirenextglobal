import React from "react";
import { motion } from "framer-motion";

const missionImage = "mission.jpg"; // Replace with your real image path
const visionImage = "vision.jpg";   // Replace with your real image path

const fadeSlide = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring", stiffness: 60 } },
};

const MissionVision = () => (
  <section className="bg-[#ffffff] min-h-screen py-20">
    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={fadeSlide}
      className="flex flex-col items-center mb-14"
    >
      <h2 className="text-4xl font-extrabold text-[#208704] mb-4">Mission & Vision</h2>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Driving purpose and future aspirations of our company.
      </p>
    </motion.div>

    {/* Mission */}
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12 mb-20 px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeSlide}
        className="flex-1"
      >
        <h3 className="text-3xl font-bold text-[#b99a5b] mb-5">Mission</h3>
        <p className="text-gray-700 text-lg leading-8">
          We pioneer financial innovation without bounds, breaking barriers to empower individuals and businesses globally. 
                As the unwavering partner in success, we catalyze positive change through cutting-edge technology, eco-conscious 
                practices, and unyielding integrity. Our mission is to democratize access to responsible financial solutions, 
                fostering inclusivity and sustainability for a prosperous global economy. Join us as we turn this vision into reality, 
                reshaping the future of finance with impact and purpose.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, type: "spring", stiffness: 60 } }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/Missionpic.png"
          alt="Mission"
          className="rounded-lg shadow-lg object-cover w-full max-w-md h-72"
        />
      </motion.div>
    </div>

    {/* Vision */}
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 px-8">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, type: "spring", stiffness: 60 } }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="vision.png"
          alt="Vision"
          className="rounded-lg shadow-lg object-cover w-full max-w-md h-72"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeSlide}
        className="flex-1"
      >
        <h3 className="text-3xl font-bold text-[#b99a5b] mb-5">Vision</h3>
        <p className="text-gray-700 text-lg leading-8">
          We pioneer financial innovation without bounds, breaking barriers to empower individuals and businesses globally. 
                As the unwavering partner in success, we catalyze positive change through cutting-edge technology, eco-conscious 
                practices, and unyielding integrity. Our mission is to democratize access to responsible financial solutions, 
                fostering inclusivity and sustainability for a prosperous global economy. Join us as we turn this vision into reality, 
                reshaping the future of finance with impact and purpose.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MissionVision;