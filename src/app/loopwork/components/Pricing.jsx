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

          {/* Additional Storage Section */}
          <motion.div
            className="mt-20 mb-16"
            variants={itemVariants}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
              Additional Strorage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expand your storage capacity with our flexible pricing options
              </p>
            </div>

            {/* Enhanced Pricing Table */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-300"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Header Row */}
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-[#0A3D74]/10">
                      <th className="px-8 py-6 text-left font-bold text-xl text-[#0A3D74]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#0A3D74] to-[#083058] rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <span>PER COMPANY</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-left font-bold text-xl text-[#0A3D74]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#0A3D74] to-[#083058] rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span>PER USER</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* Content Row */}
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-8 py-10 border-r-2 border-gray-100">
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#0A3D74]/10 to-[#083058]/10 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-[#0A3D74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-3xl font-extrabold text-gray-900">10 GB</p>
                              <p className="text-sm text-gray-600 font-medium">Additional Storage</p>
                            </div>
                          </div>
                          <div className="space-y-4 pt-4">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                              <p className="text-2xl font-bold text-gray-900">PHP 149.99</p>
                              <p className="text-sm text-gray-600 mt-1">per month</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#0A3D74]/5 to-[#083058]/5 rounded-xl p-4 border-2 border-[#0A3D74]/20 relative overflow-hidden">
                              <div className="absolute top-2 right-2">
                                <span className="bg-[#0A3D74] text-white text-xs font-bold px-2 py-1 rounded-full">BEST VALUE</span>
                              </div>
                              <p className="text-2xl font-bold text-gray-900 mt-2">PHP 1564.50</p>
                              <p className="text-sm text-gray-600 mt-1">per annual</p>
                              <p className="text-xs text-[#0A3D74] font-semibold mt-2 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Includes free 3 months
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-10">
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#0A3D74]/10 to-[#083058]/10 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-[#0A3D74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-3xl font-extrabold text-gray-900">1 GB</p>
                              <p className="text-sm text-gray-600 font-medium">Additional Storage</p>
                            </div>
                          </div>
                          <div className="pt-4">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                              <p className="text-2xl font-bold text-gray-900">PHP 59.99</p>
                              <p className="text-sm text-gray-600 mt-1">per month</p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

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
