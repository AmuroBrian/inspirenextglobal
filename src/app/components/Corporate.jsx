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

const Lightbox = ({ src, alt, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
        >
            <img
                src={src}
                alt={alt}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg bg-white"
            />
            <button
                onClick={onClose}
                className="absolute -top-3 -right-3 bg-white rounded-full p-2 text-black "
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </motion.div>
    </motion.div>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, type: "spring", stiffness: 90 },
  }),
};

export default function CorporateStructure() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <>
      <AnimatePresence>
        {zoomedImage && <Lightbox src={zoomedImage} alt="Corporate Logo" onClose={() => setZoomedImage(null)} />}
      </AnimatePresence>

      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white-">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight" style={{ color: '#2F3E46', letterSpacing: '-0.03em' }}>
            <span>Our </span>
            <span style={{ color: '#D4AF37' }}>Corporate Structure</span>
          </h1>
          <div className="flex justify-center mt-2 mb-6">
            <span className="inline-block w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
          </div>
          <p className="text-lg text-[#2F3E46]/90 max-w-3xl mx-auto">
            Inspire Next Global Inc. is supported by a robust network of holding and group companies, driving innovation and growth across diverse sectors.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          {/* Parent Company */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-3xl"
          >
            <h2 className="text-xl font-bold text-[#2F3E46] uppercase tracking-wider mb-4 text-center">
              Parent Company & Major Shareholder
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] max-w-3xl mx-auto"
              onClick={() => setZoomedImage(structureData.parent.img)}
            >
              <div className="w-52 h-52 flex-shrink-0 bg-white rounded-lg flex items-center justify-center p-2">
                <img
                  src={structureData.parent.img}
                  alt={structureData.parent.name}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-[#2F3E46]">
                  {structureData.parent.name}
                </h3>
                <p className="text-[#2F3E46]/70 mt-1">Click to see logo</p>
              </div>
            </motion.div>
          </motion.section>

          {/* Group Companies */}
          <section className="w-full max-w-full">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.5 }}
              className="text-xl font-bold text-[#2F3E46] uppercase tracking-wider mb-8 text-center"
            >
              Group Companies
            </motion.h2>
            <ul className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-2 sm:px-4 md:px-8">
              {structureData.group.map((company, idx) => (
                <motion.li
                  key={company.name}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-2xl p-10 flex flex-col items-center justify-start h-96 transition-all duration-300 hover:bg-[#ececec] hover:scale-[1.04] shadow-lg"
                >
                  <div className="w-full h-48 mb-6 bg-white rounded-lg flex items-center justify-center">
                    <img
                      src={company.img}
                      alt={company.name}
                      className="object-contain max-h-40 max-w-40"
                    />
                  </div>
                  <span className="text-[#2F3E46] font-bold text-center text-lg flex-grow flex items-center">
                    {company.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}