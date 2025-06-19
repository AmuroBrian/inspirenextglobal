"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};
const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};
const sectionVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.14, duration: 0.85 }
  }
};

export default function OrgChartAndRealEstatePage() {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      {/* Section Title */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#208704] mb-3 drop-shadow">
          Organizational Structure
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          See how our teams and leadership are organized for optimal efficiency and collaboration.
        </p>
      </motion.div>

      {/* Org Chart Images as Cards */}
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch mb-14">
        <motion.div
          className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center group transition hover:shadow-2xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="mb-4 text-[#039c00] font-bold text-xl tracking-tight">Corporate Structure</span>
          <div className="w-full flex-1 flex items-center justify-center">
            <Image
              src="/1.png"
              alt="Corporate Structure"
              width={600}
              height={450}
              className="w-full h-auto object-contain rounded-xl transition group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center group transition hover:shadow-2xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="mb-4 text-[#039c00] font-bold text-xl tracking-tight">Marketing & Operations</span>
          <div className="w-full flex-1 flex items-center justify-center">
            <Image
              src="/ORGCHART1.jpg"
              alt="Marketing and Operations"
              width={600}
              height={450}
              className="w-full h-auto object-contain rounded-xl transition group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Real Estate Marketing Feature */}
      <motion.section
        className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto min-h-[400px] bg-white px-2 sm:px-4 lg:px-24 py-8 lg:py-12 gap-8 lg:gap-12 mb-12"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.11)"
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Image Side */}
        <div className="flex-shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[44%] h-[200px] sm:h-[260px] md:h-[320px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="/board.png"
            alt="Real Estate Marketing"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Side */}
        <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-4 md:px-6">
          <h2 className="text-[#b99a5b] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-tight">
            Inspire Board of Directors
          </h2>
          <h3 className="text-gray-800 text-lg sm:text-xl md:text-2xl font-bold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </h3>
          <p className="text-gray-700 text-base sm:text-lg mb-4 max-w-xl leading-6 sm:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate={hover ? "hover" : "initial"}
          >
            <Link
              href="/users"
              className="bg-[#039c00] text-white font-semibold px-7 py-3 mt-2 rounded shadow-md transition-all inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}