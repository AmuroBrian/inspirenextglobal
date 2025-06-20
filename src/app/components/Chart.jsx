"use client";
import React, { useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function OrganizationalChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
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
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.5 }
        }
      }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      {/* Company Chart Image */}
      <div className="flex justify-center mb-8">
      
      </div>
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-[#3ea96e]"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.6 }
          }
        }}
      >
        Organizational Charts
      </motion.h1>
      
      <div className="space-y-16">
        {/* Business Model Chart */}
        <ChartSection 
          title="Business Model Chart" 
          items={businessModelItems} 
          defaultColor="#3ea96e"
        />
        
        {/* Workflow Chart */}
        <ChartSection 
          title="Workflow Chart" 
          items={workflowItems} 
          defaultColor="#4a8cbf"
        />
      </div>
    </motion.div>
  );
}

function ChartSection({ title, items, defaultColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
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
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <motion.h2 
        className="text-2xl font-bold p-6 text-white" 
        style={{ backgroundColor: defaultColor }}
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
      {/* Show the image only in the Business Model Chart section and only if an FAQ is open */}
      {title === "Business Model Chart" && openIndex !== null && (
        <div className="flex justify-center my-6">
        </div>
      )}
      {/* Show the image only in the Workflow Chart section and only if an FAQ is open */}
      {title === "Workflow Chart" && openIndex !== null && (
        <div className="flex justify-center my-6 px-2">
          <img 
            src="/companychart.jpg" 
            alt="Company Chart" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl shadow-md mx-auto" 
          />
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
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
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
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors ${isOpen ? 'font-semibold' : ''}`}
        onClick={onToggle}
        style={isOpen ? { color } : {}}
      >
        <span className="text-lg">{question}</span>
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
          className="px-6 pb-6 pt-2 bg-gray-50 overflow-hidden"
        >
          <p className="text-gray-700 whitespace-pre-line">{answer}</p>
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