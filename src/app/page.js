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
// Helper for scroll-triggered animation
function useScrollFadeIn() {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
        else setShow(false);
      },
      { threshold: 0.25 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, show];
}

// Animated SVG Shape Background for sections
const SectionShapes = ({ colorSet = 1 }) => {
  const colors =
    colorSet === 2
      ? ["#b3e5fc", "#ffccbc", "#d1c4e9", "#ffe082", "#b2dfdb"]
      : colorSet === 3
      ? ["#c8e6c9", "#ffecb3", "#b39ddb", "#ffab91", "#80cbc4"]
      : ["#79f5d0", "#8bb5f8", "#ffe199", "#fed7d7", "#e9b8fc"];

  const floatVariants = {
    initial: { y: 0, scale: 1, opacity: 0 },
    animate: {
      y: [-10, 30, -10],
      scale: [1, 1.08, 1],
      opacity: 0.16,
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
    visible: { opacity: 0.16, transition: { duration: 1 } },
    hidden: { opacity: 0, transition: { duration: 0.4 } }
  };

  const circles = [
    { cx: 200, cy: 200, r: 70, delay: 0 },
    { cx: 1350, cy: 100, r: 48, delay: 1.2 },
    { cx: 700, cy: 460, r: 90, delay: 1.7 },
    { cx: 400, cy: 350, r: 36, delay: 2.4 },
    { cx: 1280, cy: 430, r: 40, delay: 2.8 },
  ];

  const ref = useRef();
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1500 600" fill="none" className="w-full h-full">
        {circles.map((c, i) => (
          <motion.circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill={colors[i % colors.length]}
            style={{ opacity: 0.16 }}
            initial="initial"
            animate={inView ? "animate" : "hidden"}
            variants={floatVariants}
            transition={{
              delay: c.delay,
              duration: 7 + i,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default function Page() {
  const [titleRef, showTitle] = useScrollFadeIn();
  const [descRef, showDesc] = useScrollFadeIn();

  return (
    <>
      {/* HERO SECTION */}
      <main id="home" className="relative w-full min-h-[80vh] h-screen max-h-[1200px] overflow-hidden flex items-center justify-center bg-white">
        <div className="absolute inset-0 w-full h-full bg-white z-0" />
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/eco.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <SectionShapes colorSet={1} />
        <div className="relative z-20 text-center w-full px-4 flex flex-col items-center justify-center">
          <h1
            ref={titleRef}
            className={`text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
              showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ wordBreak: "break-word" }}
          >
            WELCOME TO THE INSPIRE NEXT GLOBAL INC
          </h1>
          <p
            ref={descRef}
            className={`text-white text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium transition-all duration-1000 delay-300 ${
              showDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ wordBreak: "break-word" }}
          >
            Inspire Next Global Inc is a visionary management and company
            with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and
            specialized services - serving both private and public sector.
          </p>
        </div>
        <style jsx global>{`
          .opacity-0 { opacity: 0; }
          .opacity-100 { opacity: 1; }
          .translate-y-0 { transform: translateY(0); }
          .translate-y-10 { transform: translateY(40px); }
          .transition-all { transition-property: opacity, transform; }
          .duration-1000 { transition-duration: 1s; }
          .delay-300 { transition-delay: 0.3s; }
        `}</style>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="relative bg-white text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={2} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <About />
        </div>
      </section>
      {/* MISSION SECTION */}
      <section className="relative bg-[#b4d5bb] text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={3} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <Mission />
        </div>
      </section>  
      {/* OrgChart Section */}
      <section className="relative bg-white text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={3} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <OrgChart />
        </div>
      </section>
      {/* Message Section */}
      <section className="relative bg-[#f9f9f9] text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={2} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <Message />
        </div>
      </section>
      <section className="relative bg-white text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <Chart />
      </section>
      {/* BUSINESS SECTION */}
      <section className="relative bg-[#b4d5bb] text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={1} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <Bussec />
        </div>
      </section>
      {/* Real Estate Section */}
      <section id="realestate" className="relative bg-white text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={2} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <Realestate />
        </div>
      </section>
      {/* COMPANY UNDER SECTION */}
      <section className="relative bg-[#b4d5bb] text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={1} />
        <div className="relative max-w-7x6 w-full mx-auto px-4 sm:px-6 z-20">
          <Companyunder />
        </div>
      </section>
      {/* CORPORATE SECTION */}
      <section className="relative bg-white text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={2} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <Corporate />
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section id="contact" className="relative bg-[#b4d5bb] text-black py-10 sm:py-14 md:py-16 overflow-hidden">
        <SectionShapes colorSet={2} />
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 z-20">
          <Contact />
        </div>
      </section>
  
  <section className="relative bg-white text-black py-10 sm:py-14 md:py-16 overflow-hidden">
    <Policy />
  </section>
    </>
  );
}