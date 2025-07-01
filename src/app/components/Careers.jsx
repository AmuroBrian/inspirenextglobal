"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const img = "/career.png";

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    boxShadow: "0 2px 20px 0 rgba(185,154,91,0.18)",
    transition: { duration: 0.3 }
  }
};

const sectionVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.14, duration: 0.85 }
  }
};

const cardGlow =
  "0 4px 32px 0 rgba(31, 38, 135, 0.16), 0 0 0 2px rgba(185,154,91,0.09)";

const JoinOurTeamSection = () => {
  return (
    <motion.section
      className="relative flex flex-col lg:flex-row items-center justify-between w-full min-h-[420px] px-3 sm:px-6 lg:px-28 py-10 lg:py-16 gap-10 lg:gap-16 bg-gradient-to-br from-[#f8f6f1] via-[#f6f6fc] to-[#f9f7f5] rounded-3xl border border-[#ece8df]"
      style={{
        boxShadow: cardGlow
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Image Side */}
      <div className="flex-shrink-0 w-full sm:w-[80%] md:w-[56%] lg:w-[46%] h-[240px] sm:h-[290px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-[#e5e3da] bg-white">
        <img
          src={img}
          alt="Career Opportunities"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Text Side */}
      <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-4 md:px-8">
        <h2 className="text-[#b99a5b] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-5 tracking-tight drop-shadow-lg">
          We're Growing!
        </h2>
        <h3 className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Join Our Team Today
        </h3>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-5 max-w-2xl leading-relaxed">
          We’re currently looking for motivated individuals to fill the following roles:
          <br />
          <strong>• Sales Agent</strong>
          <br />
          <strong>• Sales Associate</strong>
          <br />
          <strong>• Admin Assistant</strong>
          <br /><br />
          If you’re passionate about growth and working in a supportive environment, we’d love to hear from you!
        </p>
        <Link href="./Career">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-[#039c00] hover:bg-[#047c00] focus:bg-[#026d00] text-white font-bold px-8 py-3 mt-2 rounded-full shadow-lg transition-all duration-300 inline-block ring-2 ring-[#b99a5b] ring-opacity-0 hover:ring-opacity-100"
          >
            Apply Now
          </motion.a>
        </Link>
      </div>
    </motion.section>
  );
};

export default JoinOurTeamSection;