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
      url: "https://inspire-alliance.com/", 
    },
    {
      name: "UnionNetBank Advisory Service",
      img: "/netunion.png",
    },
    // {
    //   name: "Inspire Union Advisory",
    //   img: "/insunionbank.png",
    // },
    // {
    //   name: "Inspire BPI Advisory",
    //   img: "/bpi.png",
    // },
    {
      name: "Inspire Holdings LLC (USA)",
      img: "/inspire.jpg",
    },
    {
      name: "Inspire Connect LLC (Japan)",
      img: "/inspire.jpg",
      url: "https://www.inspire-connect.jp/",
    },
    {
      name: "Inspire GMS Finance Corporation",
      img: "/gmsl.png",
      url: "https://www.global-mobility-service.com/company/",
    },
    {
      name: "GMFastCash Lending Corporation",
      img: "/gmfast.png",
    },
    {
      name: "XANA LLC (Philippines)",
      img: "/xana.png",
      url: "https://xana.net/",
    },
    {
      name: "Clinica de Bereza beauty clinic",
      img: "/beauty.png",
      url: "https://clinicadebeleza.com/about-us/",
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
            <a
              href="https://inspireholdings.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="block-group bg-white border border-[#E0E0E0] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] max-w-3xl mx-auto relative"
            >
              <div className="w-52 h-52 flex-shrink-0 bg-white rounded-lg flex items-center justify-center p-2 relative">
                <img
                  src={structureData.parent.img}
                  alt={structureData.parent.name}
                  className="object-contain max-w-full max-h-full"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#18191b]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-[#e3b877] text-lg font-bold tracking-wide">Visit Site</span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-[#2F3E46]">
                  {structureData.parent.name}
                </h3>
                <p className="text-[#2F3E46]/70 mt-1">&nbsp;</p>
              </div>
            </a>
          </motion.section>

          
          <section className="py-16">
            {/* Minimal Header */}
            <div className="max-w-4xl mx-auto text-center px-4 mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-3">
                Our <span className="font-medium text-yellow-60">Group Companies</span>
              </h2>
              <div className="w-12 h-0.5 bg-amber-400 mx-auto"/>
            </div>

            {/* Clean Card Grid */}
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {structureData.group.map((company, idx) => (
                  company.url ? (
                    <a
                      key={company.name}
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group relative"
                    >
                      <motion.div
                        className="bg-white rounded-none overflow-hidden border border-gray-100 hover:border-amber-100 transition-colors duration-200 hover:shadow-lg"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInUp}
                      >
                        <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-white relative">
                          <img
                            src={company.img}
                            alt={company.name}
                            className="w-full h-full object-contain p-6"
                            loading="lazy"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-[#18191b]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#e3b877] text-lg font-bold tracking-wide">Visit Site</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-normal text-gray-800 mb-3">
                            {company.name}
                          </h3>
                        </div>
                      </motion.div>
                    </a>
                  ) : (
                    <motion.div
                      key={company.name}
                      className="bg-white rounded-none overflow-hidden border border-gray-100 hover:border-amber-100 transition-colors duration-200"
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.1 }}
                      variants={fadeInUp}
                    >
                      <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-white">
                        <img
                          src={company.img}
                          alt={company.name}
                          className="w-full h-full object-contain p-6"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-normal text-gray-800 mb-3">
                          {company.name}
                        </h3>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}