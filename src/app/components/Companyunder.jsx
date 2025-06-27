import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    iconBg: 'bg-[#D4AF37]/20',
    iconStroke: '#D4AF37',
    title: 'Lightning Fast',
    desc: 'Seamlessly access Japan’s cutting-edge tech in the Philippines—our streamlined logistics and advanced systems deliver solutions at unmatched speed.'
  },
  {
    iconBg: 'bg-[#2F3E46]/20',
    iconStroke: '#2F3E46',
    title: 'Secure by Design',
    desc: 'We bring enterprise‑grade Japanese encryption like SQRC® to protect your data—built for peace of mind in every Filipino household and business.'
  },
  {
    iconBg: 'bg-[#D4AF37]/20',
    iconStroke: '#D4AF37',
    title: 'Reliable',
    desc: 'Backed by robust Japanese systems and a 99.9% uptime promise, our services ensure smooth operations—from real estate platforms to AI tools.'
  },
  {
    iconBg: 'bg-[#2F3E46]/20',
    iconStroke: '#2F3E46',
    title: 'Easy to Use',
    desc: 'Our suite of Japanese‑designed interfaces—like Desknet’s Neo—are fully localized, intuitive, and ready to use out of the box in the Philippine context.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const Companyunder = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  return (
    <div className="relative min-h-screen py-12 px-2 sm:py-16 sm:px-4 lg:px-8 bg-gradient-to-b from-[#F5F5F5] to-[#E8E8E8] overflow-visible">
      {/* Animated background shapes */}
      {isMounted && (
        <>
          <motion.div
            className="fixed -left-32 -top-32 w-80 h-80 -z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1 }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="180" fill="#D4AF37" />
            </svg>
          </motion.div>
          <motion.div
            className="fixed right-0 top-1/3 w-64 h-64 -z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            transition={{ duration: 1 }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <rect x="40" y="40" width="320" height="320" rx="60" fill="#2F3E46" />
            </svg>
          </motion.div>
        </>
      )}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.header
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{ color: '#2F3E46', letterSpacing: '-0.03em' }}
            variants={itemVariants}
          >
            Our Innovative Product
          </motion.h1>
          <div className="flex justify-center mt-2 mb-6">
            <span className="inline-block w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
          </div>
          <motion.p className="text-xl text-gray-700 font-semibold" variants={itemVariants}>
            Transforming the way you work with cutting-edge technology
          </motion.p>
        </motion.header>

        {/* Product Features */}
        <motion.section
          className="grid md:grid-cols-2 gap-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          variants={containerVariants}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-2xl shadow-xl p-8 border border-[#D4AF37] bg-white/60 backdrop-blur-lg transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.025, boxShadow: '0 8px 32px 0 rgba(44,62,70,0.10)' }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto ${f.iconBg}`}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={f.iconStroke}>
                  {/* Custom icon for each feature */}
                  {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />}
                  {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />}
                  {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                  {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center" style={{ color: '#2F3E46' }}>{f.title}</h3>
              <p className="text-gray-700 text-center font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Product Description */}
        <motion.section
          className="bg-white/70 rounded-2xl shadow-xl overflow-hidden mb-12 border border-[#D4AF37] backdrop-blur-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-64 w-full object-cover md:w-64 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                src="/product.png"
                alt="Desknet's Neo interface"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm font-semibold mb-1" style={{ color: '#D4AF37' }}>Product Highlight</div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#2F3E46' }}>
                Desknet's Neo
              </h2>
              <p className="mt-2 text-gray-700 mb-4 font-medium">
                Japan's leading groupware solution now available in the Philippines, offering seamless collaboration for businesses.
              </p>
              <div className="mt-6">
                <Link href="/products">
                  <motion.button
                    className="px-8 py-3 bg-[#D4AF37] hover:bg-[#2F3E46] text-[#2F3E46] hover:text-[#D4AF37] font-bold rounded-full shadow-md transition-all duration-300 text-lg border-2 border-[#D4AF37] hover:border-[#2F3E46]"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    See Our Product in Action
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Companyunder;