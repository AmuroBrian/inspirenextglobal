"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import About from "./components/About";
import Mission from "./components/Mission";
import Bussec from "./components/Bussec";
import Realestate from "./components/Realestate";
import Companyunder from "./components/Companyunder";
import Message from "./components/Message";
import OrgChart from "./components/OrgChart";
import Contact from "./components/Contact";
import Corporate from "./components/Corporate";
import Policy from "./components/Policy";
import Chart from "./components/Chart";

const AnimatedSection = ({ children, id, className, fullWidth = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const lineHVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  const lineVVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
    },
  };

  const commonLineClasses = "absolute bg-[#208704] opacity-30";

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`relative text-black py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
    >
      {/* Corner Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Top Left */}
        <motion.div
          className={`${commonLineClasses} top-4 left-4 w-16 h-px sm:top-6 sm:left-6 sm:w-24`}
          style={{ transformOrigin: "left" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} top-4 left-4 w-px h-16 sm:top-6 sm:left-6 sm:h-24`}
          style={{ transformOrigin: "top" }}
          variants={lineVVariants}
        />
        {/* Top Right */}
        <motion.div
          className={`${commonLineClasses} top-4 right-4 w-16 h-px sm:top-6 sm:right-6 sm:w-24`}
          style={{ transformOrigin: "right" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} top-4 right-4 w-px h-16 sm:top-6 sm:right-6 sm:h-24`}
          style={{ transformOrigin: "top" }}
          variants={lineVVariants}
        />
        {/* Bottom Left */}
        <motion.div
          className={`${commonLineClasses} bottom-4 left-4 w-16 h-px sm:bottom-6 sm:left-6 sm:w-24`}
          style={{ transformOrigin: "left" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} bottom-4 left-4 w-px h-16 sm:bottom-6 sm:left-6 sm:h-24`}
          style={{ transformOrigin: "bottom" }}
          variants={lineVVariants}
        />
        {/* Bottom Right */}
        <motion.div
          className={`${commonLineClasses} bottom-4 right-4 w-16 h-px sm:bottom-6 sm:right-6 sm:w-24`}
          style={{ transformOrigin: "right" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} bottom-4 right-4 w-px h-16 sm:bottom-6 sm:right-6 sm:h-24`}
          style={{ transformOrigin: "bottom" }}
          variants={lineVVariants}
        />
      </motion.div>

      {fullWidth ? (
        children
      ) : (
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 z-20">
          {children}
        </div>
      )}
    </motion.section>
  );
};

// Animated SVG Shape Background for sections
const SectionShapes = ({ colorSet = 1 }) => {
  const colors =
    colorSet === 2
      ? ["#b3e5fc", "#ffccbc", "#d1c4e9", "#b2dfdb"]
      : colorSet === 3
      ? ["#c8e6c9", "#ffecb3", "#b39ddb", "#80cbc4"]
      : ["#79f5d0", "#8bb5f8", "#ffe199", "#e9b8fc"];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const blobData = [
    {
      style: { 
        top: "5%", 
        left: "10%", 
        width: "12rem", 
        height: "12rem",
        backgroundColor: colors[0] 
      },
      animation: { 
        x: [0, 50, -30, 0], 
        y: [0, -40, 60, 0], 
        rotate: [0, 90, -40, 0], 
        scale: [1, 1.1, 1, 1.1, 1] 
      },
      transition: { duration: 25 },
    },
    {
      style: { 
        top: "60%", 
        left: "20%", 
        width: "10rem", 
        height: "10rem", 
        backgroundColor: colors[1] 
      },
      animation: { 
        x: [0, -30, 40, 0], 
        y: [0, 60, -20, 0], 
        rotate: [0, -80, 50, 0], 
        scale: [1, 1.2, 1, 1.2, 1] 
      },
      transition: { duration: 30 },
    },
    {
      style: { 
        top: "30%", 
        left: "75%", 
        width: "14rem", 
        height: "14rem", 
        backgroundColor: colors[2] 
      },
      animation: { 
        x: [0, 40, -50, 0], 
        y: [0, -50, 30, 0], 
        rotate: [0, 60, -100, 0], 
        scale: [1, 1.1, 1.2, 1.1, 1] 
      },
      transition: { duration: 35 },
    },
    {
      style: { 
        top: "80%", 
        left: "60%", 
        width: "12rem", 
        height: "12rem", 
        backgroundColor: colors[3] || colors[0] 
      },
      animation: { 
        x: [0, -40, 30, 0], 
        y: [0, 50, -40, 0], 
        rotate: [0, -70, 110, 0], 
        scale: [1, 1.2, 1.1, 1.2, 1] 
      },
      transition: { duration: 28 },
    },
  ];

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {blobData.map((blob, i) => (
        <motion.div
            key={i}
          className="absolute rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
          style={{ ...blob.style, opacity: 0 }}
          animate={
            isInView
              ? {
                  ...blob.animation,
                  opacity: colorSet === 1 ? 0.3 : 0.15,
                  transition: {
                    ...blob.transition,
              repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }
              : { opacity: 0 }
          }
          />
        ))}
    </div>
  );
};

export default function Page() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.2 });
  const [videoSrc, setVideoSrc] = useState("/friendly.mp4");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideoSrc("/mobile.mp4");
      } else {
        setVideoSrc("/friendly.mp4");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const otherHeroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8 + i * 0.2,
      },
    }),
  };

  const heroTitle = "WELCOME TO THE INSPIRE NEXT GLOBAL INC";

  return (
    <>
      {/* HERO SECTION */}
      <main
        ref={heroRef}
        id="home"
        className="relative w-full min-h-[80vh] h-screen max-h-[1200px] overflow-hidden flex items-center justify-start bg-white"
      >
        <div className="absolute inset-0 w-full h-full bg-white z-0" />
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          loop={true}
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <SectionShapes colorSet={1} />
        <div className="relative z-20 text-left w-full max-w-7xl px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight"
            style={{ wordBreak: "break-word" }}
            variants={titleContainerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            {heroTitle.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            custom={0}
            variants={otherHeroItemVariants}
            className="text-white text-lg sm:text-xl md:text-2xl  lg:text-3xl max-w-6xl font-medium leading-relaxed"
            style={{ wordBreak: "break-word" }}
          >
           Bringing Japan Closer to Every Filipino Home and Business
          </motion.p>
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            custom={1}
            variants={otherHeroItemVariants}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <a
              href="/#about"
              className="inline-block bg-gradient-to-r from-[#00c853] to-[#00b8d4] text-white font-bold text-base sm:text-lg md:text-xl px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-gray-100">
          <About />
      </section>
      
      {/* MISSION SECTION */}
      <section className="bg-white">
          <Mission />
      </section>  
      
      {/* OrgChart Section */}
      <section className="bg-gray-100">
          <OrgChart />
      </section>
      
      {/* Message Section */}
      <section className="bg-white">
          <Message />
      </section>
      
      <section className="bg-gray-100">
        <Chart />
      </section>

      {/* BUSINESS SECTION */}
      <section className="bg-gray-100">
          <Bussec />
      </section>

      {/* Real Estate Section */}
      <section id="realestate" className="bg-gray-100">
          <Realestate />
      </section>

      {/* COMPANY UNDER SECTION */}
      <section className="bg-white">
          <Companyunder />
      </section>

      {/* CORPORATE SECTION */}
      <section className="bg-gray-100">
          <Corporate />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-white">
          <Contact />
      </section>
  
      <section className="bg-gray-100">
    <Policy />
  </section>
    </>
  );
}