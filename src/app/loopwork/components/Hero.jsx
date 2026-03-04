"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
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
      ease: "easeOut"
    }
  }
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A3D74]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3D74]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-[#0A3D74] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">LW</span>
              </div>
              <span className="text-[#0A3D74] font-bold text-2xl uppercase tracking-wider">LoopWork</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Work Faster, Loop Faster{" "}
              <span className="text-[#0A3D74]">with your Team</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              All-in-one workflow and collaboration software solution designed to help companies systematize, synchronize, and monitor their internal operations with ease.
            </p>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#0A3D74] rounded-full"></span>
              OVERVIEW
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                LoopWork is an all-in-one workflow and collaboration software solution designed to help companies systematize, synchronize, and monitor their internal operations with ease. It centralizes essential business tools in one platform, including workflow management, scheduling, task tracking, communication, and reporting, enabling teams to work smarter and stay connected, wherever they are.
              </p>
              <p>
                Developed by <span className="font-semibold text-[#0A3D74]">Inspire Next Global Inc.</span>, LoopWork goes beyond typical workflow tools by offering built-in productivity tools such as Schedule, To-Do List, Minutes, Information, and Time Card, as well as advanced communication and collaboration features.
              </p>
            </div>
          </motion.div>

          {/* Exclusive Tools Section */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Exclusive Integrated Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* AppEasy Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200"
              >
                <div className="w-16 h-16 bg-[#0A3D74] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">AppEasy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A customizable workspace builder where companies can create their own applications or forms to fit specific business processes.
                </p>
                <div className="bg-white/60 rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0A3D74] mb-2">Key Feature:</p>
                  <p className="text-gray-700">
                    With its <span className="font-semibold">no-code support</span>, users can enjoy an easy process of application building.
                  </p>
                </div>
              </motion.div>

              {/* ChatZoom Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200"
              >
                <div className="w-16 h-16 bg-[#0A3D74] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">ChatZoom</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A built-in virtual meeting and video conferencing tool similar to Zoom or Google Meet.
                </p>
                <div className="bg-white/60 rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0A3D74] mb-2">Key Benefit:</p>
                  <p className="text-gray-700">
                    Allows teams to conduct meetings and discussions <span className="font-semibold">without leaving the platform</span>.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Accessibility & Target Audience Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Accessibility */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0A3D74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                ACCESSIBILITY
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The platform is accessible through any modern web browser, allowing users to work anytime, anywhere, whether in the office or working remotely.
              </p>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0A3D74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                WHO IS LoopWork FOR?
              </h2>
              <p className="text-lg text-gray-700 mb-4">LoopWork is ideal for:</p>
              <ul className="space-y-2">
                {[
                  "Operations and Project Managers",
                  "HR and Administrative Teams",
                  "Department Heads",
                  "Small to Medium Enterprises",
                  "Growing organizations with distributed or remote teams"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0A3D74] font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Key Benefits Section */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              KEY BENEFITS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Centralized Platform",
                  description: "Centralizes workflows, communication, and productivity tools in one unified platform"
                },
                {
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  title: "Enhanced Collaboration",
                  description: "Improves team collaboration through built-in scheduling, task management, and virtual meetings"
                },
                {
                  icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                  title: "Real-Time Visibility",
                  description: "Enhances operational visibility with real-time monitoring of tasks, projects, and attendance"
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Process Automation",
                  description: "Reduces manual processes by automating routine administrative workflows"
                },
                {
                  icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
                  title: "Custom Business Processes",
                  description: "Supports custom business processes using the no-code AppEasy builder"
                },
                {
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  title: "Faster Decision-Making",
                  description: "Enables faster decision-making through organized data, reports, and activity tracking"
                },
                {
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                  title: "Productivity Boost",
                  description: "Boosts productivity for both in-office and remote teams"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#0A3D74]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0A3D74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
