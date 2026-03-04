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
  const commonFeatures = [
    "200 emails per month",
    "Full Payroll Functions"
  ];

  return (
    <div className="relative py-20 px-4 sm:py-28 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C9A030] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">DeskHRX</span>
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
              Transform your workforce management with flexible pricing plans designed to scale with your business.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Silver Plan */}
            <motion.div
              className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100/50 rounded-full blur-2xl -z-0"></div>
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Starter</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Silver</h3>
                  <p className="text-gray-600 text-sm">Perfect for small teams</p>
                </div>

                {/* Pricing */}
                <div className="mb-8 pb-8 border-b-2 border-gray-100 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl font-extrabold text-gray-900">PHP 1,000</span>
                    <span className="text-gray-500 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">+ PHP 100 / employee</p>
                  <p className="text-xs text-gray-500 mt-1">For 20 - 50 Employees</p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Included Features</h4>
                  <ul className="space-y-3">
                    {commonFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bonus */}
                <div className="mb-8 p-4 bg-[#D4AF37]/5 rounded-xl border border-[#D4AF37]/20">
                  <p className="text-sm font-bold text-[#D4AF37] text-center">
                    + 5 FREE employee accounts
                  </p>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3.5 px-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            </motion.div>

            {/* Gold Plan */}
            <motion.div
              className="bg-gradient-to-br from-[#D4AF37] to-[#C9A030] rounded-3xl border-2 border-[#D4AF37] p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-[#D4AF37] px-5 py-1.5 rounded-full text-xs font-bold shadow-lg z-20">
                POPULAR
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-0"></div>
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">Professional</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Gold</h3>
                  <p className="text-white/90 text-sm">Best for growing businesses</p>
                </div>

                {/* Pricing */}
                <div className="mb-8 pb-8 border-b-2 border-white/20 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl font-extrabold text-white">PHP 1,000</span>
                    <span className="text-white/70 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-white/90 mt-2">+ PHP 150 / employee</p>
                  <p className="text-xs text-white/80 mt-1">For 50 - 80 Employees</p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Included Features</h4>
                  <ul className="space-y-3">
                    {commonFeatures.map((feature, index) => (
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
                </div>

                {/* Bonus */}
                <div className="mb-8 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                  <p className="text-sm font-bold text-white text-center">
                    + 10 FREE employee accounts
                  </p>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3.5 px-6 bg-white hover:bg-gray-100 text-[#D4AF37] font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div>
            </motion.div>

            {/* Platinum Plan */}
            <motion.div
              className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-2xl -z-0"></div>
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600 text-xs font-semibold uppercase tracking-wider">Enterprise</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Platinum</h3>
                  <p className="text-gray-600 text-sm">For large organizations</p>
                </div>

                {/* Pricing */}
                <div className="mb-8 pb-8 border-b-2 border-gray-100 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl font-extrabold text-gray-900">PHP 1,000</span>
                    <span className="text-gray-500 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">+ PHP 200 / employee</p>
                  <p className="text-xs text-gray-500 mt-1">For 80 - 100+ Employees</p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Included Features</h4>
                  <ul className="space-y-3">
                    {commonFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bonus */}
                <div className="mb-8 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <p className="text-sm font-bold text-purple-600 text-center">
                    10% LESS / monthly bill
                  </p>
                  <p className="text-xs text-purple-500 text-center mt-1">Volume discount</p>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3.5 px-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
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
                Discover all the powerful features and capabilities of DeskHRX with our interactive demo platform.
              </p>
              <a
                href="https://deskhrx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A030] hover:from-[#C19D2E] hover:to-[#B8932C] text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
