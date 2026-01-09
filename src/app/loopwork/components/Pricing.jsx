"use client";
import React from "react";
import { motion } from "framer-motion";

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

const Pricing = () => {
  const basicFeatures = [
    "Schedule",
    "Time Card",
    "To-Do List",
    "Minutes",
    "Information",
    "User Directory",
    "Address Book",
    "Facility Reservation",
    "Visitor Management",
    "Document Management",
    "Questionnaire",
    "Project Management",
    "Inventory Management",
    "Workflow"
  ];

  const premiumFeatures = [
    "AppEasy",
    "ChatZoom"
  ];

  return (
    <div className="relative py-20 px-4 sm:py-28 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A3D74]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3D74]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#0A3D74]/10 rounded-full border border-[#0A3D74]/20">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A3D74] to-[#083058] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LW</span>
              </div>
              <span className="text-[#0A3D74] font-semibold text-sm uppercase tracking-wider">LoopWork</span>
            </div>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Select the perfect account type for your business needs. All plans include comprehensive workflow management tools.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
            {/* Basic Account */}
            <motion.div
              className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A3D74]/5 rounded-full blur-2xl -z-0"></div>
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Standard</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Basic Account</h3>
                  <p className="text-gray-600 text-sm">Essential workflow management tools</p>
                </div>

                {/* Pricing */}
                <div className="mb-8 pb-8 border-b-2 border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-gray-900">PHP 250</span>
                    <span className="text-gray-500 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Billed monthly</p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Included Features</h4>
                  <ul className="space-y-3">
                    {basicFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0A3D74]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[#0A3D74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3.5 px-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            </motion.div>

            {/* Premium Account */}
            <motion.div
              className="bg-gradient-to-br from-[#0A3D74] to-[#083058] rounded-3xl border-2 border-[#0A3D74] p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Recommended Badge */}
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-[#D4AF37] to-[#C9A030] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-20">
                RECOMMENDED
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-0"></div>
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">Premium</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Premium Account</h3>
                  <p className="text-white/80 text-sm">Complete solution with advanced features</p>
                </div>

                {/* Pricing */}
                <div className="mb-8 pb-8 border-b-2 border-white/20">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">PHP 360</span>
                    <span className="text-white/70 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-white/70 mt-2">Billed monthly</p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">All Basic Features, Plus:</h4>
                  <ul className="space-y-3">
                    {premiumFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-sm leading-relaxed font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-xs text-white/70">
                      <strong className="text-white">+</strong> All 14 Basic Account features included
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3.5 px-6 bg-white hover:bg-gray-100 text-[#0A3D74] font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need More Information?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Explore all features and capabilities of LoopWork with our interactive demo platform.
              </p>
              <a
                href="https://inspire-loopwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A3D74] to-[#083058] hover:from-[#083058] hover:to-[#0A3D74] text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Full Features
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
