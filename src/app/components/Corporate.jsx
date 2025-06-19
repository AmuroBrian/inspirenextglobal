"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images for each company (replace with your actual image paths in `/public`)
const structureData = {
  parent: {
    name: "Inspire Holdings Incorporated",
    img: "/inspireholding.png",
  },
  group: [
    {
      name: "Inspire Alliance Fund Group Inc.",
      img: "/inspirealliancelogo.png",
    },
    {
      name: "UnionNetBank Advisory Service",
      img: "/netunion.png",
    },
    {
      name: "Inspire Union Advisory",
      img: "/insunionbank.png",
    },
    {
      name: "Inspire BPI Advisory",
      img: "/bpi.png",
    },
    {
      name: "Inspire Holdings LLC (USA)",
      img: "/inspire.jpg",
    },
    {
      name: "Inspire Connect LLC (Japan)",
      img: "/inspire.jpg",
    },
    {
      name: "Inspire GMS Finance Corporation",
      img: "/gmsl.png",
    },
    {
      name: "GMFastCash Lending Corporation",
      img: "/gmfast.png",
    },
    {
      name: "XANA LLC (Philippines)",
      img: "/xana.png",
    },
    {
      name: "Clinica de Bereza beauty clinic",
      img: "/beauty.png",
    },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const placeholder = "/placeholder-logo.svg"; // You should provide a simple SVG/PNG here

function LogoImg({ src, alt, style, ...props }) {
  const [error, setError] = useState(false);
  return (
    <img
      src={error ? placeholder : src}
      alt={alt}
      onError={() => setError(true)}
      className="object-contain w-full h-full bg-white"
      style={style}
      {...props}
    />
  );
}

export default function CorporateStructure() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <main className="min-h-screen py-12 px-2 sm:px-4 bg-[#ffffff]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-[#8db249] mb-4 tracking-tight">
          Corporate Structure of Inspire Next Global Inc.
        </h1>
        <p className="text-base xs:text-lg text-gray-700 max-w-2xl mx-auto">
          See our parent company and group companies below.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Parent Company */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-4 xs:p-6 md:p-10 flex flex-col items-center relative"
        >
          <motion.div
            className="w-full max-w-[500px] h-[180px] sm:h-[230px] mb-6 shadow-sm cursor-zoom-in flex items-center justify-center"
            style={{
              background: "#fff",
              border: "1px solid #e5f2d6",
              borderRadius: 16,
              overflow: "hidden",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true, amount: 0.3 }}
            onClick={() => setZoomed(true)}
            title="Click to zoom"
          >
            <LogoImg
              src={structureData.parent.img}
              alt={structureData.parent.name}
              style={{
                maxHeight: "90%",
                maxWidth: "90%",
                margin: "auto",
              }}
            />
          </motion.div>
          <AnimatePresence>
            {zoomed && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomed(false)}
              >
                <motion.img
                  src={structureData.parent.img}
                  alt={structureData.parent.name}
                  className="max-w-[96vw] max-h-[90vh]  border-4 border-white shadow-2xl cursor-zoom-out bg-white"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  onClick={e => {
                    e.stopPropagation();
                    setZoomed(false);
                  }}
                  title="Click to close"
                  style={{ background: "#fff" }}
                />
                <button
                  className="absolute top-8 right-8 bg-white/90 text-[#8db249] font-bold text-lg  px-4 py-2 shadow hover:bg-white/100 transition-colors"
                  onClick={() => setZoomed(false)}
                  tabIndex={0}
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <h2 className="text-lg xs:text-xl font-bold text-[#6a9732] uppercase tracking-wide mb-2 text-center">
            Parent Company / Major Shareholder
          </h2>
          <div className="text-[#466324] font-semibold text-lg xs:text-2xl text-center">
            {structureData.parent.name}
          </div>
        </motion.section>

        {/* Group Companies */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg xs:text-xl font-bold text-[#6a9732] uppercase tracking-wide mb-6 md:mb-8 text-center"
          >
            Group Companies
          </motion.h2>
          <ul className="grid gap-6 xs:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {structureData.group.map((company, idx) => (
              <motion.li
                key={company.name}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 xs:p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 justify-center"
                style={{ minHeight: 280 }} // Increased card height
              >
                {/* Expanded group logo container */}
                <div
                  className="w-full"
                  style={{
                    height: 180, // Increased logo container height
                    background: "#fff",
                    borderRadius: 12,
                    border: "1px solid #e5f2d6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    overflow: "hidden",
                  }}
                >
                  <LogoImg
                    src={company.img}
                    alt={company.name}
                    style={{
                      maxHeight: "95%",
                      maxWidth: "95%",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                </div>
                <span className="text-[#3e5e18] text-base xs:text-lg font-semibold text-center break-words">{company.name}</span>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
      <style jsx>{`
        main {
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        }
      `}</style>
    </main>
  );
}