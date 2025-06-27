"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ImageModal({ src, alt, open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-full max-h-full" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} className="max-w-[95vw] max-h-[80vh] rounded-lg shadow-lg" />
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-800 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function OrganizationalChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.5 }
        }
      }}
      className="max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16"
    >
      <motion.h1 
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 tracking-tight"
        style={{ color: '#2F3E46', letterSpacing: '-0.03em' }}
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.6 }
          }
        }}
      >
        <span>Organizational </span>
        <span style={{ color: '#D4AF37' }}>Charts</span>
      </motion.h1>
      
      <div className="space-y-8 sm:space-y-12 md:space-y-20">
        <ChartSection 
          title="Business Model Chart" 
          items={businessModelItems} 
          defaultColor="#D4AF37"
        />
        <ChartSection 
          title="Workflow Chart" 
          items={workflowItems} 
          defaultColor="#2F3E46"
          onViewImage={() => setModalOpen(true)}
        />
        <ImageModal src="/companychrat.png" alt="Company Chart" open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </motion.div>
  );
}

function ChartSection({ title, items, defaultColor, onViewImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      className="rounded-2xl shadow-2xl overflow-hidden bg-white/60 border-2"
      style={{
        borderColor: defaultColor,
        backdropFilter: 'blur(8px)'
      }}
    >
      <motion.div className="p-4 sm:p-8 pb-2 sm:pb-4">
        <motion.h2 
          className="text-lg sm:text-xl md:text-3xl font-bold mb-1 sm:mb-2"
          style={{ color: defaultColor }}
          variants={{
            hidden: { x: -20, opacity: 0 },
            visible: { 
              x: 0, 
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 }
            }
          }}
        >
          {title}
        </motion.h2>
        <div className="flex justify-start mb-4 sm:mb-6">
          <span className="inline-block w-12 sm:w-20 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${defaultColor} 0%, #2F3E46 100%)` }} />
        </div>
      </motion.div>
      {/* Show the image only in the Workflow Chart section and only if an FAQ is open */}
      {title === "Workflow Chart" && openIndex !== null && (
        <div className="flex flex-col items-center my-4 sm:my-6 px-1 sm:px-2">
          <img 
            src="/companychrat.png" 
            alt="Company Chart" 
            className="w-full max-w-[220px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl shadow-md mx-auto" 
          />
          <button
            className="mt-2 px-4 py-2 bg-[#D4AF37] text-[#2F3E46] font-semibold rounded-full shadow hover:bg-[#C9A227] transition-colors text-sm"
            onClick={onViewImage}
          >
            View Image
          </button>
        </div>
      )}
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
            color={defaultColor}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </motion.section>
  );
}

function FAQItem({ question, answer, color, index, isOpen, onToggle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut"
          }
        }
      }}
      className="transition-all duration-200"
    >
      <motion.button
        whileHover={{ scale: 1.01, backgroundColor: '#F9F6EF' }}
        whileTap={{ scale: 0.99 }}
        className={`w-full text-left p-4 sm:p-6 flex justify-between items-center transition-colors rounded-xl ${isOpen ? 'font-semibold' : ''}`}
        onClick={onToggle}
        style={isOpen ? { color, backgroundColor: '#F9F6EF' } : { color: '#2F3E46', backgroundColor: 'transparent' }}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1, 
            height: "auto",
            transition: { duration: 0.3 }
          }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 bg-white/80 rounded-b-xl overflow-hidden"
        >
          <p className="text-gray-800 whitespace-pre-line">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

// Business Model Content
const businessModelItems = [
  {
    question: "How We Create Value?",
    answer: "We build strong, purposeful relationships to bring trusted Japanese innovations closer to the Filipino market."
  },
  {
    question: "Who We Work With?",
    answer: "We work with Japanese tech developers, Skincare providers and Logistics and support partners."
  },
  {
    question: "What We Do?",
    answer: "We source and tailor solutions for local relevance. We onboard and train clients with care. We provide hands-on support from start to finish."
  },
  {
    question: "What We Offer?",
    answer: "We offer IT platforms that simplify daily operations, skincare that support personalized client care and we provide tools that bring clarity, flow and confidence to business."
  },
  {
    question: "Who We Serve?",
    answer: "We serve Wellness Clinics, Small to Medium enterprises and Corporate teams."
  },
  {
    question: "How We Reach Them?",
    answer: "We directly communicate with our clients. We use website and social media platforms in reaching out. We reach them by referrals and industry events."
  },
  {
    question: "How We Earn?",
    answer: "We generate revenue by offering software licensing, service subscriptions, and strategic consulting tailored to our clients' evolving needs."
  }
];

// Workflow Content
const workflowItems = [
  {
    question: "Client Onboarding Process",
    answer: `At Inspire Next Global Inc., our onboarding process is all about making our clients feel supported from day one. 

1. Initial Inquiry - Everything starts with a simple inquiry, where we listen and get a sense of what they truly need.
2. Consultation - We move into a one-on-one consultation to align expectations and goals.
3. Needs Assessment - We perform a detailed needs assessment to offer the right solution.
4. Product Demo - We follow up with a hands-on demo so clients can see things in action.
5. Contract Signing - We proceed with formal agreements once we're aligned.
6. Setup & Configuration - We tailor the system configuration to their operations.
7. Training - We provide thorough training to ensure team confidence.
8. Ongoing Support - We offer consistent support post-implementation, always being one message or call away.`
  }
];