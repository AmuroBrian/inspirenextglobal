import React, { useState } from "react";
import { motion } from "framer-motion";

const img = "/realestate.png";

// Animation variants
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

const RealEstateMarketingFeature = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.section
      className="
        relative flex flex-col-reverse lg:flex-row items-center justify-between w-full 
        min-h-[420px] md:min-h-[480px] px-3 sm:px-8 lg:px-28 py-10 lg:py-16 gap-8 lg:gap-16 
        bg-gradient-to-br from-[#f4efe6] via-[#faf8f4] to-[#f0f4ee] rounded-3xl shadow-xl
        border border-[#ece3d8]/70"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      {/* Image Side */}
      <motion.div
        className="
          flex-shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[44%] h-[220px] sm:h-[300px] md:h-[360px] 
          rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 130, damping: 13 }}
      >
        <img
          src={img}
          alt="Real Estate Marketing"
          className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
          draggable={false}
        />
      </motion.div>

      {/* Text Side */}
      <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-6 md:px-10">
        <h2 className="
          text-[#b99a5b] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 md:mb-5 
          tracking-tight drop-shadow-sm"
        >
          Welcome to <span className="bg-gradient-to-r from-[#b99a5b] to-[#039c00] bg-clip-text text-transparent">Inspire Real Estate</span>
        </h2>
        <h3 className="text-gray-900 text-lg sm:text-2xl md:text-3xl font-semibold mb-3">
          Your Trusted Partner in Property Hunting
        </h3>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 max-w-2xl leading-7 sm:leading-8">
          Discover a curated collection of <span className="font-bold text-[#039c00]">residential</span> and <span className="font-bold text-[#b99a5b]">commercial</span> properties tailored to your lifestyle and investment goals.<br />
          Enjoy a visually stunning, easy-to-use interface—making your dream space just a click away.
        </p>
        <motion.a
          href="https://inspire-real-estate.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          initial="initial"
          animate={hover ? "hover" : "initial"}
          className="
            bg-gradient-to-r from-[#039c00] to-[#b99a5b] text-white font-bold px-9 py-3 
            rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-[#b99a5b] focus:ring-offset-2"
        >
          Learn More
        </motion.a>
      </div>
    </motion.section>
  );
};

export default RealEstateMarketingFeature;