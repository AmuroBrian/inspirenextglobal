"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import BoardofDirector from "./components/BoardofDirector";

// Sliding rectangle component (left)
function SlidingRectangleLeft() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 0.16 } : {}}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="absolute top-1/3 left-0 h-24 sm:h-32 md:h-40 w-1/2 sm:w-1/3 lg:w-1/4 bg-[#8db249] rounded-xl shadow-xl pointer-events-none z-0"
    />
  );
}

// Sliding rectangle component (right)
function SlidingRectangleRight() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 0.13 } : {}}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="absolute bottom-1/4 right-0 h-20 sm:h-28 md:h-32 w-1/3 sm:w-1/4 lg:w-1/5 bg-[#fed7d7] rounded-lg shadow-xl pointer-events-none z-0"
    />
  );
}

export default function BoardOfDirectorsPage() {
  return (
    <section className="relative bg-white w-full min-h-screen pb-8 sm:pb-12 md:pb-24 flex flex-col items-center overflow-hidden">
      {/* Sliding decorative rectangles */}
      <SlidingRectangleLeft />
      <SlidingRectangleRight />
      <div className="relative w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 z-10">
        <BoardofDirector />
      </div>
    </section>
  );
}