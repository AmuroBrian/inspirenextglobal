import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Highlighted logos - displayed separately
const highlightedLogos = [
  { src: '/itech/67.png', product: 'DeskHRX' },
  { src: '/itech/68.png', product: 'LoopWork' }
];

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
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const Companyunder = () => {
  const [selectedPricing, setSelectedPricing] = useState(null);

  const handleLogoClick = (product) => {
    if (selectedPricing === product) {
      setSelectedPricing(null); // Close if same logo clicked
    } else {
      setSelectedPricing(product); // Show pricing
    }
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle Professional Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#D4AF37 1px, transparent 1px),
              linear-gradient(90deg, #D4AF37 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Minimal Geometric Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2F3E46]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Central Content */}
        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center justify-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* I-TECH Logo */}
          <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <Image
                src="/itech/2.png"
                alt="I-TECH Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-wider text-[#D4AF37] font-semibold mb-3"
            variants={itemVariants}
          >
            Inspire Technology
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            style={{ letterSpacing: '-0.03em' }}
            variants={itemVariants}
          >
            What is I-TECH?
          </motion.h1>

          {/* Description */}
          <motion.div
            className="space-y-4 max-w-3xl"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              I-TECH stands at the forefront of technological excellence, bringing cutting-edge solutions that inspire transformation. We bridge innovation and real-world application, empowering businesses and individuals to connect, collaborate, and thrive in an ever-evolving digital landscape.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              I-TECH represents our core mission: to <span className="text-[#D4AF37] font-bold">inspire</span> innovation and transformation through cutting-edge <span className="text-[#D4AF37] font-bold">technology</span>. We don't just deliver solutions—we ignite possibilities, bridge connections, and empower organizations to reach their full potential in the digital age.
            </p>
          </motion.div>
        </motion.div>

        {/* Highlighted Logos Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3"
              style={{ letterSpacing: '-0.02em' }}
              variants={itemVariants}
            >
              Featured Products
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-500"
              variants={itemVariants}
            >
              Click on the logos to view the pricing
            </motion.p>
          </motion.div>
         
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 justify-center items-center min-h-[450px]">
            {highlightedLogos.map((logo, index) => (
              <motion.div
                key={`highlighted-${index}`}
                className="relative group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={() => handleLogoClick(logo.product)}
              >
                <div className={`relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-white rounded-3xl p-10 border transition-all duration-300 ${
                  selectedPricing === logo.product 
                    ? 'border-[#D4AF37] shadow-2xl ring-2 ring-[#D4AF37]/30' 
                    : 'border-gray-200 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/50'
                }`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.product}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 72vw, (max-width: 768px) 40vw, 28vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Sections - Show based on selected logo */}
        {selectedPricing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-20 sm:mt-32"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setSelectedPricing(null)}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium text-sm transition-all duration-200 hover:shadow-md"
              >
                ✕ Close
              </button>
            </div>

            {/* LoopWork Pricing */}
            {selectedPricing === 'LoopWork' && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-5xl mx-auto"
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                  variants={itemVariants}
                >
                  LoopWork Pricing
                </motion.h2>
            <motion.p
              className="text-center text-gray-500 mb-10 text-base"
              variants={itemVariants}
            >
              TYPES OF ACCOUNT: There are two types of accounts in LoopWork:
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Account */}
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 bg-blue-50 py-4 px-6 rounded-xl text-center border border-blue-100">
                  BASIC ACCOUNT
                </h3>
                <ul className="space-y-3 mb-8 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Schedule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Time Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>To-Do List</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Minutes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>User Directory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Address Book</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Facility Reservation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Visitor Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Document Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Questionnaire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Project Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Inventory Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Workflow</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t-2 border-gray-100">
                  <p className="text-3xl font-extrabold text-gray-900 text-center">
                    PHP 250<span className="text-lg font-normal text-gray-500">/per month</span>
                  </p>
                </div>
              </motion.div>

              {/* Premium Account */}
              <motion.div
                className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="absolute -top-3 right-6 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </div>
                <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-[#D4AF37] to-[#C9A030] py-4 px-6 rounded-xl text-center shadow-md">
                  PREMIUM ACCOUNT
                </h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4 font-medium">All Basic Account features, plus:</p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-[#D4AF37] font-bold">•</span>
                      <span>AppEasy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#D4AF37] font-bold">•</span>
                      <span>ChatZoom</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t-2 border-gray-100">
                  <p className="text-3xl font-extrabold text-gray-900 text-center">
                    PHP 360<span className="text-lg font-normal text-gray-500">/per month</span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* LoopWork Link to Features */}
            <motion.div
              className="text-center mt-10"
              variants={itemVariants}
            >
              <a
                href="https://loopwork-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A030] text-[#2F3E46] rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                To see more features, click this link
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
            )}

            {/* DeskHRX Pricing */}
            {selectedPricing === 'DeskHRX' && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-6xl mx-auto"
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                  variants={itemVariants}
                >
                  DeskHRX Pricing
                </motion.h2>
            <motion.p
              className="text-center text-gray-500 mb-10 text-base"
              variants={itemVariants}
            >
              CHOOSE YOUR PLAN - TRANSFORM YOUR WORKFORCE MANAGEMENT
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Silver Plan */}
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-600">SILVER</h3>
                </div>
                <div className="text-center mb-6">
                  <p className="text-xl font-bold text-gray-900">Starts at PHP 1,000 / month</p>
                  <p className="text-sm text-gray-600 mt-2">+ PHP 100 / employee per month</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">For 20 - 50 Employees</p>
                </div>
                <ul className="space-y-3 mb-6 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>200 emails per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Full Payroll Functions</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <p className="text-sm font-bold text-[#D4AF37] text-center">
                    + 5 FREE employee accounts
                  </p>
                </div>
              </motion.div>

              {/* Gold Plan */}
              <motion.div
                className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 relative"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#C9A030] text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-[#C9A030] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#D4AF37]">GOLD</h3>
                </div>
                <div className="text-center mb-6">
                  <p className="text-xl font-bold text-gray-900">Starts at PHP 1,000 / month</p>
                  <p className="text-sm text-gray-600 mt-2">+ PHP 150 / employee per month</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">For 50 - 80 Employees</p>
                </div>
                <ul className="space-y-3 mb-6 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>200 emails per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Full Payroll Functions</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <p className="text-sm font-bold text-[#D4AF37] text-center">
                    + 10 FREE employee accounts
                  </p>
                </div>
              </motion.div>

              {/* Platinum Plan */}
              <motion.div
                className="bg-white rounded-2xl border border-purple-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-purple-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-purple-600">PLATINUM</h3>
                </div>
                <div className="text-center mb-6">
                  <p className="text-xl font-bold text-gray-900">Starts at PHP 1,000 / month</p>
                  <p className="text-sm text-gray-600 mt-2">+ PHP 200 / employee per month</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">For 80 - 100+ Employees</p>
                </div>
                <ul className="space-y-3 mb-6 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>200 emails per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Full Payroll Functions</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <p className="text-sm font-bold text-purple-600 text-center">
                    10% LESS / monthly bill
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* DeskHRX Link to Features */}
            <motion.div
              className="text-center mt-10"
              variants={itemVariants}
            >
              <a
                href="https://inspireerssaas.vercel.app/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A030] text-[#2F3E46] rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                To see more features, click this link
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
            )}

            {/* Contact Information */}
            <motion.div
              className="text-center mt-16 pt-12 border-t border-gray-200"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-700">
                <a 
                  href="tel:+63253221002"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-base">(02) 5322 1002</span>
                </a>
                <a 
                  href="mailto:inspirenextglobal@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-base">inspirenextglobal@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Companyunder;