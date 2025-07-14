"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
            <Image
                src={src}
                alt={alt}
                width={1200}
                height={900}
                className="w-full h-auto max-w-[98vw] max-h-[70vh] object-contain rounded-lg"
            />
            <button
                onClick={onClose}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-[#2F3E46] shadow-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </motion.div>
    </motion.div>
);

const LEAF_CONFIG = [
    { left: 17.5, top: 28.0, width: 46.8, rotate: 139.6 }, 
    { left: 95.0, top: 19.6, width: 48.5, rotate: 164.1 },
    // ... (keep other leaf configs the same)
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const leafVariants = {
    float: { y: [-10, 10, -10], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
};

export default function OrgChart() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

  return (
        <>
            <AnimatePresence>
                {lightboxImage && (
                    <Lightbox
                        src={lightboxImage}
                        alt="Organizational Chart"
                        onClose={() => setLightboxImage(null)}
                    />
                )}
            </AnimatePresence>

            <div className="relative overflow-hidden">
                {isMounted && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {LEAF_CONFIG.map((leaf, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{ 
                                    left: `${leaf.left}%`, 
                                    top: `${leaf.top}%`, 
                                    width: `${leaf.width}px`, 
                                    transform: `rotate(${leaf.rotate}deg)` 
                                }}
                                animate={{ 
                                    y: [0, Math.random() * 100 - 50], 
                                    x: [0, Math.random() * 100 - 50], 
                                    rotate: [leaf.rotate, leaf.rotate + Math.random() * 360] 
                                }}
                                transition={{ 
                                    duration: Math.random() * 20 + 10, 
                                    repeat: Infinity, 
                                    repeatType: "reverse", 
                                    ease: "linear" 
                                }}
                            >
                                <svg viewBox="0 0 100 100" className="text-[#2F3E46]/20">
                                    <path d="M50,5 C60,35 90,35 95,50 C90,65 60,65 50,95 C40,65 10,65 5,50 C10,35 40,35 50,5 Z" fill="currentColor" />
                                </svg>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

      <motion.div
                    className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative"
                    style={{ backgroundColor: 'rgba(245,245,245,0.85)' }}
                >
                    <div className="max-w-7xl mx-auto relative">
                        <motion.header
                            className="text-center mb-6 sm:mb-12 relative w-full px-2"
        initial="hidden"
        whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            <motion.h1 
                                className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#2F3E46] break-words w-full"
                                style={{ letterSpacing: '-0.03em', wordBreak: 'break-word' }}
                                variants={itemVariants}
                            >
                                Organizational <span style={{ color: '#D4AF37' }}>Structure</span>
                            </motion.h1>
                            <div className="flex justify-center mt-2 mb-6">
                              <span className="inline-block w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
                            </div>
                            <motion.p 
                                className="text-base sm:text-lg md:text-2xl font-semibold text-[#2F3E46]/80 break-words"
                                variants={itemVariants}
                            >
                                Designed for efficiency, collaboration, and sustainable growth.
                            </motion.p>
                        </motion.header>

                        <motion.main
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mb-8 w-full"
          initial="hidden"
          whileInView="visible"
                            viewport={{ once: false, margin: '-100px' }}
                            variants={containerVariants}
                        >
                            <motion.section
                                className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl p-2 sm:p-4 md:p-8 border-2 border-[#D4AF37] flex flex-col transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl w-full"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div 
                                    className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </motion.div>
                                <h2 className="text-2xl font-semibold text-[#2F3E46] mb-4 text-center">Corporate Governance Structure</h2>
                                <div 
                                    className="w-full aspect-[4/3] rounded-lg overflow-hidden my-3 sm:my-4 cursor-pointer bg-white flex items-center justify-center"
                                    onClick={() => setLightboxImage('/1.png')}
                                >
            <Image
              src="/1.png"
                                        alt="Corporate Governance Structure" 
              width={600}
              height={450}
                                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 max-h-[180px] sm:max-h-[260px] md:max-h-[320px]"
            />
          </div>
                                <button 
                                    onClick={() => setLightboxImage('/1.png')} 
                                    className="mt-auto bg-[#D4AF37] text-[#2F3E46] font-semibold px-6 py-2 rounded-full hover:bg-[#D4AF37]/90 transition-colors duration-300 shadow-lg self-center"
                                >
                                    View Larger
                                </button>
                            </motion.section>

                            <motion.section
                                className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl p-2 sm:p-4 md:p-8 border-2 border-[#D4AF37] flex flex-col transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl w-full"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div 
                                    className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
        </motion.div>
                                <h2 className="text-2xl font-semibold text-[#2F3E46] mb-4 text-center">Marketing & Operations Structure</h2>
                                <div 
                                    className="w-full aspect-[4/3] rounded-lg overflow-hidden my-3 sm:my-4 cursor-pointer bg-white flex items-center justify-center"
                                    onClick={() => setLightboxImage('/orga.jpg')}
                                >
            <Image
              src="/orga.jpg"
                                        alt="Marketing & Operations Structure" 
              width={600}
              height={450}
                                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 max-h-[180px] sm:max-h-[260px] md:max-h-[320px]"
            />
          </div>
                                <button 
                                    onClick={() => setLightboxImage('/orga.jpg')} 
                                    className="mt-auto bg-[#D4AF37] text-[#2F3E46] font-semibold px-6 py-2 rounded-full hover:bg-[#D4AF37]/90 transition-colors duration-300 shadow-lg self-center"
                                >
                                    View Larger
                                </button>
                            </motion.section>
                        </motion.main>

      <motion.section
                            className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl p-2 sm:p-6 md:p-10 border-2 border-[#D4AF37] flex flex-col lg:flex-row items-center gap-4 sm:gap-8 mt-8 w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: '-100px' }}
                            variants={itemVariants}
                        >
                            <div className="flex-shrink-0 w-full lg:w-2/5 rounded-lg overflow-hidden shadow-md">
                                <div className="aspect-[4/3] w-full h-full flex items-center justify-center bg-white">
                                  <Image 
            src="/board.png"
                                    alt="Board of Directors" 
                                    width={500} 
                                    height={500} 
                                    className="object-contain w-full h-full max-h-[140px] sm:max-h-[220px] md:max-h-[320px]"
                                  />
                                </div>
        </div>
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E46] mb-4">
                                    Our <span style={{ color: '#D4AF37' }}>Board of Directors</span>
          </h2>
                                <p className="text-[#2F3E46]/90 text-base md:text-lg mb-6 leading-relaxed">
                                    Our Board of Directors comprises distinguished leaders who bring diverse expertise in corporate governance, strategic planning, and operational excellence.
                                </p>
                                <p className="text-[#2F3E46]/90 text-base md:text-lg mb-6 leading-relaxed">
                                    With decades of collective experience across multiple industries, our board members guide our long-term strategy while ensuring we remain accountable to all stakeholders.
                                </p>
                                <Link href="/users">
                                    <motion.button
                                        className="bg-[#D4AF37] text-[#2F3E46] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[#D4AF37]/90 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Meet Our Board Members
                                    </motion.button>
            </Link>
        </div>
      </motion.section>
    </div>
                </motion.div>
            </div>
        </>
  );
}