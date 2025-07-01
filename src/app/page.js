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
import LiveNews from "./components/LiveNews";
import Careers from "./components/Careers";

const AnimatedSection = ({ children, id, className, fullWidth = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    },
  };

  const lineHVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.4 },
    },
  };

  const lineVVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.5 },
    },
  };

  const commonLineClasses = "absolute bg-gradient-to-r from-[#208704] to-[#D4AF37] opacity-40";

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`relative text-black py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated background pattern - safe for SSR */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-[length:300px_300px] mix-blend-overlay"></div>
      </motion.div>

      {/* Corner Lines - safe for SSR */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Top Left */}
        <motion.div
          className={`${commonLineClasses} top-6 left-6 w-20 h-px sm:top-8 sm:left-8 sm:w-28`}
          style={{ transformOrigin: "left" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} top-6 left-6 w-px h-20 sm:top-8 sm:left-8 sm:h-28`}
          style={{ transformOrigin: "top" }}
          variants={lineVVariants}
        />
        {/* Top Right */}
        <motion.div
          className={`${commonLineClasses} top-6 right-6 w-20 h-px sm:top-8 sm:right-8 sm:w-28`}
          style={{ transformOrigin: "right" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} top-6 right-6 w-px h-20 sm:top-8 sm:right-8 sm:h-28`}
          style={{ transformOrigin: "top" }}
          variants={lineVVariants}
        />
        {/* Bottom Left */}
        <motion.div
          className={`${commonLineClasses} bottom-6 left-6 w-20 h-px sm:bottom-8 sm:left-8 sm:w-28`}
          style={{ transformOrigin: "left" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} bottom-6 left-6 w-px h-20 sm:bottom-8 sm:left-8 sm:h-28`}
          style={{ transformOrigin: "bottom" }}
          variants={lineVVariants}
        />
        {/* Bottom Right */}
        <motion.div
          className={`${commonLineClasses} bottom-6 right-6 w-20 h-px sm:bottom-8 sm:right-8 sm:w-28`}
          style={{ transformOrigin: "right" }}
          variants={lineHVariants}
        />
        <motion.div
          className={`${commonLineClasses} bottom-6 right-6 w-px h-20 sm:bottom-8 sm:right-8 sm:h-28`}
          style={{ transformOrigin: "bottom" }}
          variants={lineVVariants}
        />
      </motion.div>

      {/* Floating decorative elements - client-side only */}
      {typeof window !== 'undefined' && (
        <>
          <motion.div 
            className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-[#D4AF37] opacity-10 blur-xl"
            animate={isInView ? { 
              x: [0, 20, 0],
              y: [0, 20, 0],
              rotate: [0, 10, 0]
            } : {}}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-[#208704] opacity-10 blur-xl"
            animate={isInView ? { 
              x: [0, -20, 0],
              y: [0, -20, 0],
              rotate: [0, -10, 0]
            } : {}}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}

      {fullWidth ? (
        children
      ) : (
        <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-8 md:px-10 z-20">
          {children}
        </div>
      )}
    </motion.section>
  );
};

export default function Page() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.2 });

  // Typing animation for the whole heading
  const fullText = "Welcome to the Inspire Next Global Inc.";
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.preload = "auto";
    
    const handleLoadedData = () => {
      video.play().catch(e => console.log("Autoplay prevented:", e));
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(e => console.log("Playback resume error:", e));
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length + 1));
        }, 35);
      } else {
        setTimeout(() => setTyping(false), 1000);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, fullText]);

  // Floating particles effect - client-side only
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isClient) {
      setParticles(
        Array.from({ length: 20 }).map((_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
        }))
      );
    }
  }, [isClient]);

  return (
    <>
      {/* Animated gradient background - safe for SSR */}
      <motion.div 
        className="fixed inset-0 -z-10 pointer-events-none"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.8, 0.9, 0.8]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: 'reverse', 
          ease: 'linear' 
        }}
        style={{
          background: 'linear-gradient(135deg, #F8F8F8 0%, #F0F0F0 50%, #F8F8F8 100%)',
          backgroundSize: '300% 300%',
        }}
      />

      {/* Floating particles - client-side only */}
      {isClient && (
        <motion.div 
          className="fixed inset-0 -z-20 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-[#D4AF37] opacity-20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -100, -200, -300],
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.4, 0],
              }}
              transition={{
                duration: Math.max(0.7, particle.duration * 0.4),
                delay: particle.delay * 0.4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* HERO SECTION */}
      <main
        ref={heroRef}
        id="home"
        className="relative w-full min-h-screen sm:min-h-[80vh] h-auto max-h-[1200px] overflow-hidden flex items-center justify-start bg-gray-800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/90 z-0" />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          src="/productslide.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="auto"
          poster="/video-poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <div
          className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-15 pointer-events-none"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200,60 Q260,80 300,150 Q340,220 270,270 Q200,320 130,270 Q60,220 100,150 Q140,80 200,60 Z"
              fill="#D4AF37"
              fillOpacity="0.18"
            />
          </svg>
        </div>
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex flex-col items-start text-left px-8 sm:px-12 md:px-16 lg:px-24 z-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-6 w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#208704] rounded-full"
          />
          <motion.h1
            initial={false}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg max-w-4xl text-left leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/90">
              {displayed}
            </span>
            <span className="text-[#D4AF37] animate-pulse">
              {displayed.length < fullText.length ? "|" : ""}
            </span>
          </motion.h1>
          <motion.span
            initial={false}
            animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.15, delay: 0.08, ease: "easeOut" }}
            className="inline-block bg-gradient-to-r from-[#208704] to-[#1A6F03] text-white uppercase font-bold tracking-wider rounded-lg px-8 py-4 mt-4 shadow-xl text-lg sm:text-xl md:text-2xl hover:shadow-[#D4AF37]/30 hover:translate-y-[-2px] transition-all duration-300"
            style={{ letterSpacing: "0.1em" }}
          >
            BRINGING JAPAN CLOSER TO EVERY FILIPINO HOME AND BUSINESS
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="mt-12 flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-gray-900 font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Learn More
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(32, 135, 4, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </main>
          
      {/* ABOUT SECTION */}
     <section id="about" className="bg-gray-50">
      <About />
     </section>
      {/* MISSION SECTION */}
      <section className="bg-white">
        <Mission />
      </section>  
      
      {/* OrgChart Section */}
      <section className="bg-gray-50">
        <OrgChart />
      </section>
      
      {/* Message Section */}
      <section className="bg-white">
        <Message />
      </section>
      
      <section className="bg-gray-50">
        <Chart />
      </section>

      {/* BUSINESS SECTION */}
      <section className="bg-gray-50">
        <Bussec />
      </section>

      {/* Real Estate Section */}
      <section className="bg-white">
        <Realestate />
      </section>

      {/* COMPANY UNDER SECTION */}
      <section id="product" className="bg-gray-50">
        <Companyunder />
      </section>

      <section  className="bg-gray-50">
        <Careers />
      </section>


      {/* CORPORATE SECTION */}
      <section className="bg-white">
        <Corporate />
      </section>

      <section className="bg-gray-50">
        <LiveNews />
      </section>
      
      {/* CONTACT SECTION */}
      <section id="contact" className="bg-white">
        <Contact />
      </section>
  
      <section className="bg-gray-50">
        <Policy />
      </section>    

      {/* Back to top button - client-side only */}
      {isClient && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C9A227] rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </>
  );
}