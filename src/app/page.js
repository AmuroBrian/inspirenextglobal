"use client";
import React, { useRef, useEffect, useState } from "react";
import About from "./components/About";

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

export default function Page() {
  const [titleRef, showTitle] = useScrollFadeIn();
  const [descRef, showDesc] = useScrollFadeIn();

  return (
    <>
      {/* HERO SECTION */}
      <main className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-white">
        {/* White Background Layer */}
        <div className="absolute inset-0 w-full h-full bg-white z-0" />

        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/eco.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Animated Text */}
        <div className="relative z-20 text-center w-full px-4 flex flex-col items-center justify-center">
          <h1
            ref={titleRef}
            className={`text-white text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 
              ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            WELCOME TO THE INSPIRE NEXT GLOBAL INC
          </h1>
          <p
            ref={descRef}
            className={`text-white text-2xl md:text-3xl font-medium transition-all duration-1000 delay-300
              ${showDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Inspire Next Global Inc is a visionary management and company
            with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and
            specialized services - serving both private and public sector.
          </p>
        </div>
        
        {/* Animation CSS */}
        <style jsx global>{`
          .opacity-0 { opacity: 0; }
          .opacity-100 { opacity: 1; }
          .translate-y-0 { transform: translateY(0); }
          .translate-y-10 { transform: translateY(40px); }
          .transition-all {
            transition-property: opacity, transform;
          }
          .duration-1000 {
            transition-duration: 1s;
          }
          .delay-300 {
            transition-delay: 0.3s;
          }
        `}</style>
      </main>

      {/* ABOUT SECTION */}
      <section className="bg-[#ffffff] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <About />
        </div>
      </section>
    </>
  );
}