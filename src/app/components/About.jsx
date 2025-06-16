"use client";
import React, { useRef, useEffect, useState } from "react";

export default function CompanyOverviewSection() {
  // Slide-in animation logic on scroll (every time it enters viewport)
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        setVisible(inView);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger on mount in case already in view
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#f7f7f7] min-h-screen py-12 px-2 relative">
      {/* Header with gold label */}
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="mb-10">
          <div className="inline-block bg-[#048e1b] px-7 py-2 rounded-t-md shadow text-white text-3xl font-bold font-sans drop-shadow-md">
            COMPANY OVERVIEW
          </div>
        </div>
        {/* Card-like content and image */}
        <div className="relative">
          {/* Offset background card for depth effect */}
          <div className="absolute top-8 left-8 w-full h-full bg-white rounded-lg shadow-lg z-0"></div>
          <div
            ref={cardRef}
            className={`
              relative flex flex-col md:flex-row bg-white rounded-lg shadow-2xl z-10 overflow-hidden w-full max-w-[1500px] mx-auto min-h-[420px]
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
          >
            {/* Text content */}
            <div className="flex-1 p-8 flex flex-col justify-center min-w-[350px]">
              <div className="text-lg md:text-xl text-[#222] space-y-5">
                <p>
                  <b>Inspire Next Global Inc.</b> is a visionary management and company
                  with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and
                  specialized services - serving both private and public sector.
                </p>
                <p>
                  In true adherence to the Conglomerate Model, it orchestrates a cohesive ecosystem, where the company operates as the central financial hub, capitalizing and harmonizing its subsidiaries and affiliates to drive innovation, efficiency and collaboration.
                </p>
                <p>
                  This forward-thinking entity is on a mission to make a direct and meaningful impact on the lives of individuals, while also wielding its influence to create positive shifts in geopolitics.
                </p>
                <p>
                  Simultaneously, it remains dedicated to delivering substantial returns to its valued shareholders.
                </p>
              </div>
            </div>
            {/* Image - fills right side */}
          <div className="flex-[1.5] min-w-[400px] lg:w-[900px] h-[420px] md:h-auto">
  <img
    src="/tower.jpg" // Replace with your image path
    alt="Company Overview"
    className="object-cover w-full h-full"
  />
</div>
          </div>
        </div>
      </div>
      {/* Bottom right gold box accent */}
      <div className="hidden md:block absolute right-0 bottom-0 w-[280px] h-[120px] bg-[#e0b21c] rounded-tl-2xl z-0"></div>
      {/* Slide animation utility (for older Tailwind, you may need custom CSS) */}
      <style jsx global>{`
        .-translate-x-20 { transform: translateX(-5rem); }
        .translate-x-0 { transform: translateX(0); }
        .transition-all { transition-property: all; }
        .duration-700 { transition-duration: 700ms; }
        .ease-out { transition-timing-function: cubic-bezier(0,0,0.2,1); }
      `}</style>
    </section>
  );
}