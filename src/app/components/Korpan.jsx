"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Korpan = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: 'beforeChildren'
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F5F5] to-white overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -left-32 -top-32 w-80 h-80 -z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="180" fill="#D4AF37" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute right-0 top-1/3 w-64 h-64 -z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <rect x="40" y="40" width="320" height="320" rx="60" fill="#2F3E46" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Left Side - Flag Image Section */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-1/3 flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#2F3E46]/20 rounded-full blur-3xl -z-10" />
              
              {/* Flag Image Container */}
              <motion.div
                className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30 bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/flag.png"
                  alt="Japanese and Korean Flags"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content Section */}
          <motion.div
            className="flex-1 w-full lg:w-2/3 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Header */}
              <motion.div
                className="uppercase tracking-wider text-xs sm:text-sm md:text-base font-semibold"
                style={{ color: '#2F3E46' }}
                variants={itemVariants}
              >
                ELITE PROFESSIONALS
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight px-2 sm:px-0"
                style={{ color: '#2F3E46' }}
                variants={itemVariants}
              >
                Elite Japanese & Korean Professionals Supporting You
              </motion.h2>

              {/* Decorative Line */}
              <motion.div
                className="w-24 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }}
                variants={itemVariants}
              />

              {/* Description */}
              <motion.div
                className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 sm:px-0"
                variants={itemVariants}
              >
                <p className="font-medium">
                  Our Japanese and Korean staff are available to support you.
                </p>
                <p className="font-medium">
                  Our team includes experienced professionals such as former bankers, individuals with backgrounds at major securities firms, and those who have held executive positions at leading hotels.
                </p>
                <p className="font-semibold" style={{ color: '#2F3E46' }}>
                  Please feel free to contact us with confidence.
                </p>
              </motion.div>

              {/* Recruitment Notice */}
              <motion.div
                className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border-2 border-[#D4AF37]/30 mx-2 sm:mx-0"
                variants={itemVariants}
              >
                <p className="text-base sm:text-lg md:text-xl font-semibold" style={{ color: '#2F3E46' }}>
                  At the same time, we are actively recruiting Japanese and Korean staff.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="mt-6 sm:mt-8 flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg md:text-xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Korpan;

