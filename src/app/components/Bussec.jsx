import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI & TECHNOLOGY",
    img: "/ai.jpg",
    desc: "Harness advanced artificial intelligence and technology solutions tailored to optimize and transform your business processes."
  },
  {
    title: "BUSINESS CONSULTATION",
    img: "/business.png",
    desc: "Receive expert guidance for your business growth, market entry, and operational efficiency."
  },
  {
    title: "PERSONAL ASSESSMENT",
    img: "/test.png",
    desc: "Discover individual strengths through scientifically designed assessments."
  },
  {
    title: "OFFICE & COMMERCIAL",
    img: "/office.jpg",
    desc: "Find ideal office and commercial spaces with our tailored real estate solutions."
  },
  {
    title: "PROPERTY MANAGEMENT",
    img: "/property.png",
    desc: "Enjoy hassle-free property management with our end-to-end services."
  },
  {
    title: "CONSTRUCTION",
    img: "/construction.png",
    desc: "Quality-driven construction solutions from planning to execution."
  },
  {
    title: "LOGISTICS",
    img: "/logistic.png",
    desc: "Streamline your supply chain with our reliable logistics services."
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 }
  }
};

const slideInVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 }
  }
};

const Features = () => (
  <section className="py-12 sm:py-16 bg-white">
    {/* Section Header - Slim */}
    <motion.div
      className="pt-8 px-4 sm:px-6 text-center"
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
        Business <span className="text-yellow-600">Sections</span>
      </h2>
      <div className="flex justify-center mb-6">
        <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-amber-500 to-gray-700" />
      </div>
    </motion.div>

    {/* Features Grid - Compact */}
    <div className="mt-8 px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {features.map(({ title, img, desc }) => (
          <motion.div
            key={title}
            className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <div className="w-full h-40 sm:h-44 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>


  </section>
);

export default Features;