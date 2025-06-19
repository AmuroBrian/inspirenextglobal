import React from "react";
import { motion } from "framer-motion";

const fadeSlide = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring", stiffness: 60 } },
};

const MissionVision = () => (
  <section className="bg-white min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={fadeSlide}
      className="flex flex-col items-center mb-10 sm:mb-14"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#208704] mb-3 sm:mb-4">
        Mission & Vision
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl text-center">
        Driving purpose and future aspirations of our company.
      </p>
    </motion.div>

    {/* Mission */}
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeSlide}
        className="flex-1 max-w-full lg:max-w-[50%]"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#b99a5b] mb-3 sm:mb-4 md:mb-5">
          Mission
        </h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8">
          At Inspire Next Global Inc., we’re here to open doors—to introduce thoughtful, trusted Japanese
solutions that help Filipino businesses and professionals work smarter and live better. Whether
it’s intuitive IT platforms that make everyday tasks smoother, skincare software that supports
beauty experts in understanding and caring for their clients, or practical tools that bring more
clarity and flow to the workplace—we’re all about making innovation feel personal. We
collaborate closely with our Japanese partners to ensure everything we offer is not just highquality, but also meaningful and relevant here in the Philippines. With a focus on localization
and a heart for service, we don’t just deliver systems—we build connections that truly inspire
what’s next.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, type: "spring", stiffness: 60 } }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 w-full max-w-md flex justify-center"
      >
        <img
          src="/Missionpic.png"
          alt="Mission"
          className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-60 md:h-72"
        />
      </motion.div>
    </div>

    {/* Vision */}
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, type: "spring", stiffness: 60 } }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 w-full max-w-md flex justify-center order-1 lg:order-2"
      >
        <img
          src="/vision.png"
          alt="Vision"
          className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-60 md:h-72"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeSlide}
        className="flex-1 max-w-full lg:max-w-[50%] order-2 lg:order-1"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#b99a5b] mb-3 sm:mb-4 md:mb-5">
          Vision
        </h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8">
          At Inspire Next Global Inc., we see ourselves as a bridge—connecting the brilliance of
Japanese innovation with the unique needs of the Filipino market. Our vision is to
make everyday life simpler, smarter, and more fulfilling by introducing reliable
technology and wellness solutions that truly make a difference. Whether it’s helping
businesses work more efficiently or supporting individuals in caring for themselves
better, we believe trusted systems from Japan can uplift the way Filipinos live, work,
and connect with one another.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MissionVision;