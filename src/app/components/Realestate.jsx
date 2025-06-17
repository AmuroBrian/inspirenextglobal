import React, { useState } from "react";
import { motion } from "framer-motion";

const img = "/realestate.png"; // Replace with your actual image path

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
      className="relative flex flex-col lg:flex-row items-center justify-between w-full min-h-[400px] bg-white px-0 lg:px-24 py-12 gap-12"
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
      <div className="flex-shrink-0 w-full lg:w-[44%] h-[320px] rounded-lg overflow-hidden shadow-lg">
        <img
          src={img}
          alt="Real Estate Marketing"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Text Side */}
      <div className="flex-1 flex flex-col justify-center items-start px-6">
        <h2 className="text-[#b99a5b] text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Real Estate Marketing
        </h2>
        <p className="text-gray-700 text-lg mb-4 max-w-xl leading-7">
          Maximize your property’s exposure and value through innovative marketing strategies, digital campaigns, and targeted outreach. Our team leverages the latest tools and market insights to connect your properties with the right buyers and investors, ensuring successful results in a competitive market.
        </p>
        <motion.a
          href="https://inspire-real-estate.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          initial="initial"
          animate={hover ? "hover" : "initial"}
          className="bg-[#039c00] text-white font-semibold px-7 py-3 mt-2 rounded shadow-md transition-all inline-block"
          style={{ textDecoration: "none" }}
        >
          Learn More
        </motion.a>
      </div>
    </motion.section>
  );
};

export default RealEstateMarketingFeature;