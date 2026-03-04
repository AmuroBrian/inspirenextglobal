import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

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
  const [showForm, setShowForm] = useState(null); // Track which product form to show
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    jobTitle: '',
    companyName: '',
    phoneNumber: '',
    employeeCount: '',
    country: ''
  });
  const containerRef = useRef(null);
  const loopworkFormRef = useRef(null);
  const deskhrxFormRef = useRef(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_5oiilwo';
  const EMAILJS_PUBLIC_KEY = '8nV8GppQ82RWajpEo';
  // Template IDs for different products
  const EMAILJS_TEMPLATE_LOOPWORK = 'template_ysatn6w';
  const EMAILJS_TEMPLATE_DESKHRX = 'template_4pa6agj';
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animations for scroll-based movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values for different elements
  const y1 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 150]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const x1 = useTransform(smoothProgress, [0, 1], [0, 150]);
  const x2 = useTransform(smoothProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [0, -45]);
  const opacity1 = useTransform(smoothProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);
  const opacity2 = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.4, 0.2]);

  const handleLogoClick = (product) => {
    if (selectedPricing === product) {
      setSelectedPricing(null); // Close if same logo clicked
    } else {
      setSelectedPricing(product); // Show pricing
    }
  };

  const handleGetDemo = (product) => {
    setShowForm(product);
    setSelectedPricing(null); // Close pricing if open
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Determine which form is being submitted
      const currentFormRef = showForm === 'LoopWork' ? loopworkFormRef : deskhrxFormRef;
      const productName = showForm === 'LoopWork' ? 'LoopWork' : 'DeskHRX';
      const templateId = showForm === 'LoopWork' ? EMAILJS_TEMPLATE_LOOPWORK : EMAILJS_TEMPLATE_DESKHRX;
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        workEmail: formData.workEmail,
        jobTitle: formData.jobTitle,
        companyName: formData.companyName,
        phoneNumber: formData.phoneNumber,
        employeeCount: formData.employeeCount,
        country: formData.country,
        productName: productName,
        timestamp: new Date().toLocaleString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };

      // Send email via EmailJS with product-specific template
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        templateId,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success message
      setSubmitMessage({ type: 'success', text: 'Thank you! We will contact you soon.' });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        workEmail: '',
        jobTitle: '',
        companyName: '',
        phoneNumber: '',
        employeeCount: '',
        country: ''
      });

      // Close form after 2 seconds
      setTimeout(() => {
        setShowForm(null);
        setSubmitMessage(null);
      }, 2000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage({ 
        type: 'error', 
        text: 'Failed to send request. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen py-20 px-4 sm:py-28 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large floating circles with parallax */}
        <motion.div
          style={{ y: y1, x: x1, rotate: rotate1, opacity: opacity1 }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0A3D74]/20 to-[#0A3D74]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          style={{ y: y2, x: x2, rotate: rotate2, opacity: opacity2 }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          style={{ y: y3, opacity: opacity1 }}
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Medium floating shapes */}
        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, -80]), opacity: opacity2 }}
          className="absolute top-40 right-1/4 w-64 h-64 bg-[#0A3D74]/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, 100]), opacity: opacity1 }}
          className="absolute bottom-40 left-1/3 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5
          }}
        />

        {/* Small floating particles */}
        {[...Array(6)].map((_, i) => {
          const particleY = useTransform(smoothProgress, [0, 1], [0, (i % 2 === 0 ? -50 : 50) * (i + 1)]);
          const particleX = useTransform(smoothProgress, [0, 1], [0, (i % 2 === 0 ? 30 : -30) * (i + 1)]);
          return (
            <motion.div
              key={i}
              className={`absolute w-32 h-32 rounded-full blur-xl ${
                i % 3 === 0 ? 'bg-[#0A3D74]/15' : i % 3 === 1 ? 'bg-[#D4AF37]/15' : 'bg-blue-300/10'
              }`}
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 12}%`,
                y: particleY,
                x: particleX,
                opacity: opacity1
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          );
        })}

        {/* Animated gradient overlay */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/5 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Centered Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20 sm:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A3D74]/10 text-[#0A3D74] text-sm font-semibold rounded-full border border-[#0A3D74]/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Enterprise Solutions
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
            style={{ letterSpacing: '-0.03em' }}
            variants={itemVariants}
          >
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A3D74] to-[#0A3D74]/70 mt-2">
              with Enterprise Technology
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium"
            variants={itemVariants}
          >
            As a modern business, your workflow and team management are at the center of your success. Empower your organization with technology solutions that match in quality and performance.
          </motion.p>
        </motion.div>

        {/* Product Sections - Zigzag Layout */}
        <div className="space-y-28 md:space-y-36 max-w-7xl mx-auto">
          {/* LoopWork Section - Text Left, Image Right */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="relative py-16 md:py-24"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-20 overflow-hidden relative">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0A3D74]/5 to-transparent rounded-full blur-3xl -z-0"></div>
              <AnimatePresence mode="wait">
                {showForm !== 'LoopWork' ? (
                  <motion.div
                    key="loopwork-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                  >
                    {/* Left Column - Content */}
                    <motion.div
                      variants={itemVariants}
                      className="space-y-8 lg:pr-8 relative z-10"
                    >
                      <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#0A3D74]/5 rounded-xl border border-[#0A3D74]/10">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#0A3D74] to-[#083058] rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xl">LW</span>
                        </div>
                        <div>
                          <span className="text-[#0A3D74] font-bold text-base uppercase tracking-wider block">LoopWork</span>
                          <span className="text-gray-500 text-xs font-medium">Workflow Management</span>
                        </div>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Streamline Your
                        <span className="block text-[#0A3D74] mt-2">Workflow</span>
                      </h2>
                      
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
                        Comprehensive business management solution that helps you manage schedules, track time, organize tasks, and collaborate effectively with your team. All the essential tools you need in one seamless platform.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                          onClick={() => handleGetDemo('LoopWork')}
                          className="group bg-gradient-to-r from-[#0A3D74] to-[#083058] hover:from-[#083058] hover:to-[#0A3D74] text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <span>Get Demo</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                        <Link
                          href="/loopwork"
                          className="inline-block bg-white border-2 border-[#0A3D74] text-[#0A3D74] hover:bg-[#0A3D74] hover:text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-center"
                        >
                          See Features
                        </Link>
                      </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                      variants={itemVariants}
                      className="relative z-10"
                    >
                      <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D74]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src="/itech/68.png"
                          alt="LoopWork Product"
                          fill
                          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="loopwork-form"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16"
                  >
                    {/* Left Column - Benefits */}
                    <div className="bg-gradient-to-br from-[#0A3D74]/10 via-[#0A3D74]/5 to-transparent rounded-2xl p-8 md:p-10 flex flex-col justify-center border border-[#0A3D74]/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A3D74]/5 rounded-full blur-3xl -z-0"></div>
                      <button
                        onClick={() => setShowForm(null)}
                        className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-200 text-gray-600 mb-6 self-end hover:scale-110 z-10"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#0A3D74] relative z-10">
                        Get LoopWork Plans and Pricing
                      </h2>
                      
                      <ul className="space-y-5 relative z-10">
                        <li className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/50">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#0A3D74] to-[#083058] shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Comprehensive</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Take care of everything workflow, scheduling, and team management in one platform.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/50">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#0A3D74] to-[#083058] shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Flexible</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Find the perfect fit with multiple plan options and add-ons tailored to your needs.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/50">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#0A3D74] to-[#083058] shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1">One Low Monthly Payment</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Pay per month. Automatic volume discounts available.</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Right Column - Form */}
                    <div className="flex flex-col justify-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                      <div className="mb-8">
                        <h3 className="text-2xl font-extrabold mb-2 text-gray-900">
                          Get Pricing
                        </h3>
                        <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                      </div>
                      
                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="workEmail"
                            name="workEmail"
                            required
                            value={formData.workEmail}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="john.doe@company.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            required
                            value={formData.jobTitle}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="HR Manager"
                          />
                        </div>

                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="Acme Corporation"
                          />
                        </div>

                        <div>
                          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                              Employee Count <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="employeeCount"
                              name="employeeCount"
                              required
                              value={formData.employeeCount}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            >
                              <option value="">Select...</option>
                              <option value="1-10">1-10</option>
                              <option value="11-50">11-50</option>
                              <option value="51-100">51-100</option>
                              <option value="101-250">101-250</option>
                              <option value="251-500">251-500</option>
                              <option value="501+">501+</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                              Country <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="country"
                              name="country"
                              required
                              value={formData.country}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A3D74] focus:border-[#0A3D74] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            >
                              <option value="">Select...</option>
                              <option value="Philippines">Philippines</option>
                              <option value="United States">United States</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 mt-4">
                          I authorize LoopWork to keep me informed about its products, services and events through emails and phone calls. My data will be handled according to the{' '}
                          <a href="#" className="underline text-[#0A3D74] hover:opacity-80">
                            Privacy Notice
                          </a>.
                        </p>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-r from-[#0A3D74] to-[#083058] hover:from-[#083058] hover:to-[#0A3D74] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            'Submit Request'
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>

          {/* DeskHRX Section - Image Left, Text Right (Zigzag) */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="relative py-16 md:py-24"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-20 overflow-hidden relative">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl -z-0"></div>
              <AnimatePresence mode="wait">
                {showForm !== 'DeskHRX' ? (
                  <motion.div
                    key="deskhrx-content"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                  >
                    {/* Left Column - Image */}
                    <motion.div
                      variants={itemVariants}
                      className="relative order-2 lg:order-1 z-10"
                    >
                      <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border border-amber-100 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src="/itech/67.png"
                          alt="DeskHRX Product"
                          fill
                          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                      variants={itemVariants}
                      className="space-y-8 lg:pl-8 order-1 lg:order-2 relative z-10"
                    >
                      <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#D4AF37]/5 rounded-xl border border-[#D4AF37]/10">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#C9A030] rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#D4AF37] font-bold text-base uppercase tracking-wider block">DeskHRX</div>
                          <div className="text-gray-500 text-xs font-medium">Smart HR & Finance</div>
                        </div>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Transform Your
                        <span className="block text-[#D4AF37] mt-2">Workforce</span>
                      </h2>
                      
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
                        Enterprise-grade HR and payroll solution designed to simplify workforce management. Manage employees, process payroll, track attendance, and handle all your human resources needs efficiently and securely.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                          onClick={() => handleGetDemo('DeskHRX')}
                          className="group bg-gradient-to-r from-[#D4AF37] to-[#C9A030] hover:from-[#C19D2E] hover:to-[#B8932C] text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <span>Get Demo</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                        <Link
                          href="/deskHRX"
                          className="inline-block bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-center"
                        >
                          See Features
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="deskhrx-form"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16"
                  >
                    {/* Left Column - Benefits */}
                    <div className="bg-gradient-to-br from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent rounded-2xl p-8 md:p-10 flex flex-col justify-center border border-[#D4AF37]/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -z-0"></div>
                      <button
                        onClick={() => setShowForm(null)}
                        className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-200 text-gray-600 mb-6 self-end hover:scale-110 z-10"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#D4AF37] relative z-10">
                        Get DeskHRX Plans and Pricing
                      </h2>
                      
                      <ul className="space-y-5 relative z-10">
                        <li className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/50">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#D4AF37] to-[#C9A030] shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Comprehensive</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Take care of everything HR, payroll, and benefits in one platform.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/50">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#D4AF37] to-[#C9A030] shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Flexible</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Find the perfect fit with multiple plan options and add-ons tailored to your needs.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/50">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#D4AF37] to-[#C9A030] shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1">One Low Monthly Payment</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Pay per employee, per month. Automatic volume discounts.</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Right Column - Form */}
                    <div className="flex flex-col justify-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                      <div className="mb-8">
                        <h3 className="text-2xl font-extrabold mb-2 text-gray-900">
                          Get Pricing
                        </h3>
                        <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                      </div>
                      
                      {/* Success/Error Message */}
                      {submitMessage && (
                        <div className={`mb-6 p-4 rounded-xl ${
                          submitMessage.type === 'success' 
                            ? 'bg-green-50 border border-green-200 text-green-800' 
                            : 'bg-red-50 border border-red-200 text-red-800'
                        }`}>
                          <p className="text-sm font-medium">{submitMessage.text}</p>
                        </div>
                      )}
                      
                      <form ref={deskhrxFormRef} onSubmit={handleFormSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="firstName-deskhrx"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="lastName-deskhrx"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="workEmail-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="workEmail-deskhrx"
                            name="workEmail"
                            required
                            value={formData.workEmail}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="john.doe@company.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="jobTitle-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="jobTitle-deskhrx"
                            name="jobTitle"
                            required
                            value={formData.jobTitle}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="HR Manager"
                          />
                        </div>

                        <div>
                          <label htmlFor="companyName-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="companyName-deskhrx"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="Acme Corporation"
                          />
                        </div>

                        <div>
                          <label htmlFor="phoneNumber-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber-deskhrx"
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="employeeCount-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                              Employee Count <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="employeeCount-deskhrx"
                              name="employeeCount"
                              required
                              value={formData.employeeCount}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            >
                              <option value="">Select...</option>
                              <option value="1-10">1-10</option>
                              <option value="11-50">11-50</option>
                              <option value="51-100">51-100</option>
                              <option value="101-250">101-250</option>
                              <option value="251-500">251-500</option>
                              <option value="501+">501+</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="country-deskhrx" className="block text-sm font-medium text-gray-700 mb-1">
                              Country <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="country-deskhrx"
                              name="country"
                              required
                              value={formData.country}
                              onChange={handleFormChange}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                            >
                              <option value="">Select...</option>
                              <option value="Philippines">Philippines</option>
                              <option value="United States">United States</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 mt-4">
                          I authorize DeskHRX to keep me informed about its products, services and events through emails and phone calls. My data will be handled according to the{' '}
                          <a href="#" className="underline text-[#D4AF37] hover:opacity-80">
                            Privacy Notice
                          </a>.
                        </p>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-r from-[#D4AF37] to-[#C9A030] hover:from-[#C19D2E] hover:to-[#B8932C] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            'Submit Request'
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>

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