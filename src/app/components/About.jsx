import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const AboutPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Predefined leaf configuration
  const LEAF_CONFIG = [
    { left: 17.5, top: 28.0, width: 46.8, rotate: 139.6, parallax: 0.2 },
    { left: 95.0, top: 19.6, width: 48.5, rotate: 164.1, parallax: 0.3 },
    { left: 57.8, top: 87.7, width: 55.5, rotate: 1.4, parallax: 0.1 },
    { left: 57.0, top: 86.3, width: 47.5, rotate: 183.6, parallax: 0.4 },
    { left: 70.1, top: 80.5, width: 28.6, rotate: 202.7, parallax: 0.15 },
    { left: 27.8, top: 12.9, width: 38.0, rotate: 355.8, parallax: 0.25 },
    { left: 30.0, top: 4.6, width: 26.8, rotate: 97.3, parallax: 0.35 },
    { left: 90.8, top: 83.8, width: 28.2, rotate: 124.5, parallax: 0.18 },
    { left: 52.6, top: 50.9, width: 27.6, rotate: 119.8, parallax: 0.22 },
    { left: 13.7, top: 96.6, width: 54.8, rotate: 183.2, parallax: 0.12 },
    { left: 86.5, top: 47.0, width: 21.1, rotate: 153.3, parallax: 0.28 },
    { left: 90.1, top: 15.6, width: 42.4, rotate: 267.0, parallax: 0.32 }
  ];

  // Create all transforms upfront
  const leafTransforms = LEAF_CONFIG.map(leaf => ({
    y: useTransform(scrollYProgress, [0, 1], [0, -100 * leaf.parallax]),
    x: useTransform(scrollYProgress, [0, 1], [0, 50 * leaf.parallax])
  }));

  // Create particle data
  const PARTICLES = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    yTransform: useTransform(scrollYProgress, [0, 1], [0, -200 * (Math.random() * 0.5 + 0.5)]),
    xTransform: useTransform(scrollYProgress, [0, 1], [0, 100 * (Math.random() * 0.5 + 0.5)])
  }));

  // Background transforms
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Modern shape transforms
  const shape1Transform = {
    y: useTransform(scrollYProgress, [0, 1], [0, -150]),
    rotate: useTransform(scrollYProgress, [0, 1], [0, 15])
  };

  const shape2Transform = {
    y: useTransform(scrollYProgress, [0, 1], [0, -80]),
    x: useTransform(scrollYProgress, [0, 1], [0, 50]),
    rotate: useTransform(scrollYProgress, [0, 1], [0, -10])
  };

  const shape3Transform = {
    y: useTransform(scrollYProgress, [0, 1], [0, -200]),
    x: useTransform(scrollYProgress, [0, 1], [0, -30])
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const leafVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Modern shapes outside container */}
      <motion.div 
        className="fixed -left-40 -top-40 w-96 h-96 -z-20"
        style={shape1Transform}
      >
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path 
            d="M250,50 C350,150 400,200 450,250 C400,300 350,350 250,450 C150,350 100,300 50,250 C100,200 150,150 250,50 Z" 
            fill="#2F3E46" 
            fillOpacity="0.05"
            stroke="#D4AF37"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div 
        className="fixed -right-20 top-1/4 w-64 h-64 -z-20"
        style={shape2Transform}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <rect 
            x="50" y="50" 
            width="300" height="300" 
            rx="30" 
            fill="#D4AF37" 
            fillOpacity="0.05"
            stroke="#2F3E46"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div 
        className="fixed left-1/4 -bottom-40 w-80 h-80 -z-20"
        style={shape3Transform}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <polygon 
            points="200,50 350,350 50,350" 
            fill="#2F3E46" 
            fillOpacity="0.05"
            stroke="#D4AF37"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Animated gradient background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 50%, #F5F5F5 100%)',
          backgroundSize: '400% 400%',
          y: yRange
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
      />

      {/* Subtle grid pattern */}
      <motion.div 
        className="fixed inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #2F3E46 1px, transparent 1px), linear-gradient(to bottom, #2F3E46 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          y: yRange
        }}
      />

      {/* Background leaves */}
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
                transform: `rotate(${leaf.rotate}deg)`,
                y: leafTransforms[i].y,
                x: leafTransforms[i].x
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                rotate: [leaf.rotate, leaf.rotate + Math.random() * 60 - 30]
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              <svg viewBox="0 0 100 100" style={{ color: '#2F3E46', opacity: 0.15 }}>
                <path d="M50,5 C60,35 90,35 95,50 C90,65 60,65 50,95 C40,65 10,65 5,50 C10,35 40,35 50,5 Z" fill="currentColor"/>
              </svg>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Floating particles */}
      {isMounted && (
        <motion.div className="fixed inset-0 pointer-events-none overflow-hidden">
          {PARTICLES.map(particle => (
            <motion.div
              key={`particle-${particle.id}`}
              className="absolute rounded-full"
              style={{
                backgroundColor: '#D4AF37',
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: particle.opacity,
                y: particle.yTransform,
                x: particle.xTransform
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      )}

      <motion.div 
        className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundColor: 'rgba(245, 245, 245, 0.85)'
        }}
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <motion.header 
            className="text-center mb-20 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
              style={{ color: '#2F3E46', letterSpacing: '-0.03em' }}
              variants={itemVariants}
            >
              <span>About </span>
              <span style={{ color: '#D4AF37' }}>Inspire</span>
              <span> Next Global</span>
            </motion.h1>
            <div className="flex justify-center mt-2 mb-6">
              <span className="inline-block w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
            </div>
            <motion.p 
              className="text-2xl font-semibold text-gray-700"
              variants={itemVariants}
            >
              Growing a brighter future together
            </motion.p>
          </motion.header>

          {/* Main content cards */}
          <motion.main 
            className="grid md:grid-cols-2 gap-12 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Card 1 */}
            <motion.section 
              className="rounded-2xl shadow-xl p-10 border border-[#D4AF37] bg-white/60 backdrop-blur-lg transition-all duration-300 relative overflow-hidden hover:scale-[1.025] hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
              <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#2F3E46' }} />
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 mx-auto bg-[#D4AF37]/20">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#D4AF37">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#2F3E46' }}>
                BRIDGING INNOVATION AND EVERYDAY LIFE
              </h2>
              <p className="text-lg font-medium text-gray-700 leading-relaxed mb-4">
                <span className="block mb-2 text-xl font-bold" style={{ color: '#2F3E46' }}>INSPIRE NEXT GLOBAL INC.</span>
                <span className="block mb-2" style={{ color: '#D4AF37' }}>BRINGING JAPAN CLOSER TO EVERY FILIPINO HOME AND BUSINESS</span>
                AT INSPIRE NEXT GLOBAL INC., WE BELIEVE THAT INNOVATION SHOULD BE INSPIRING, ATTAINABLE, AND LIFE-ENHANCING. WE EXIST TO BRIDGE THE DISTANCE BETWEEN JAPAN'S CUTTING-EDGE TECHNOLOGIES AND THE EVOLVING NEEDS OF FILIPINO INDIVIDUALS, FAMILIES, AND BUSINESSES.
              </p>
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                OUR JOURNEY STARTED WITH A CLEAR VISION: TO SHARE THE EXCELLENCE OF JAPANESE CRAFTSMANSHIP WITH THE PHILIPPINE MARKET. JAPAN IS KNOWN GLOBALLY FOR ITS ATTENTION TO DETAIL, SUPERIOR QUALITY, AND FORWARD-THINKING DESIGN.
              </p>
            </motion.section>

            {/* Card 2 */}
            <motion.section 
              className="rounded-2xl shadow-xl p-10 border border-[#D4AF37] bg-white/60 backdrop-blur-lg transition-all duration-300 relative overflow-hidden hover:scale-[1.025] hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#2F3E46' }} />
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 mx-auto bg-[#D4AF37]/20">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#D4AF37">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#2F3E46' }}>
                WHERE GLOBAL EXCELLENCE MEETS EVERYDAY LIFE
              </h2>
              <p className="text-lg font-medium text-gray-700 leading-relaxed mb-4">
                WE UNDERSTAND THAT TRUST ISN'T EARNED OVERNIGHT. THAT'S WHY WE GO THE EXTRA MILE TO ENSURE EVERY ITEM WE BRING IN IS NOT ONLY HIGH IN QUALITY BUT ALSO PRICED WITH FAIRNESS IN MIND.
              </p>
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                MORE THAN A DISTRIBUTOR, WE SEE OURSELVES AS ENABLERS OF PROGRESS. WE WANT TO HELP FAMILIES FEEL MORE CONFIDENT. WE WANT TO HELP BUSINESSES GROW SMARTER. AND WE WANT EVERY INTERACTION WITH OUR BRAND TO FEEL PERSONAL, AUTHENTIC, AND ROOTED IN CARE.
              </p>
              <p className="text-xl font-bold mt-8 text-center" style={{ color: '#D4AF37' }}>
                BECAUSE FOR US, IT'S NOT JUST ABOUT IMPORTING PRODUCTS—IT'S ABOUT DELIVERING PURPOSE.
              </p>
            </motion.section>
          </motion.main>

          {/* Call to action */}
          <motion.footer 
            className="rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden bg-[#2F3E46]/95"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
            <motion.h2 
              className="text-3xl font-extrabold mb-6 relative z-10"
              style={{ color: '#F8F9FA' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              YOU WANT TO LEARN MORE ABOUT US?
            </motion.h2>
            <motion.p 
              className="mb-8 max-w-2xl mx-auto text-xl font-semibold relative z-10"
              style={{ color: '#F8F9FA' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
            >
              EVERY SMALL ACTION CONTRIBUTES TO A LARGER CHANGE. LET'S WORK TOGETHER TO CREATE A SUSTAINABLE FUTURE FOR GENERATIONS TO COME.
            </motion.p>
            <Link href="/users">
              <motion.button 
                className="font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg text-xl relative z-10"
                style={{ 
                  background: 'linear-gradient(90deg, #D4AF37 0%, #F8F9FA 100%)',
                  color: '#2F3E46',
                  border: '2px solid #D4AF37'
                }}
                whileHover={{ 
                  scale: 1.07, 
                  background: 'linear-gradient(90deg, #F8F9FA 0%, #D4AF37 100%)',
                  color: '#2F3E46'
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                LEARN MORE ABOUT US
              </motion.button>
            </Link>
          </motion.footer>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;