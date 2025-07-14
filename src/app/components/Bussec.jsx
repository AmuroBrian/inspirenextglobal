import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI & Technology",
    img: "/ai.jpg",
    desc: "Advanced AI solutions to transform your business processes."
  },
  {
    title: "Business Consultation",
    img: "/business.png",
    desc: "Expert guidance for growth and operational efficiency."
  },
  {
    title: "Personal Assessment",
    img: "/test.png",
    desc: "Discover strengths through scientific assessments."
  },
  {
    title: "Office & Commercial",
    img: "/office.jpg",
    desc: "Tailored real estate solutions for your business."
  },
  {
    title: "Property Management",
    img: "/property.png",
    desc: "End-to-end property management services."
  },
  {
    title: "Construction",
    img: "/construction.png",
    desc: "Quality-driven planning to execution."
  },
  {
    title: "Logistics",
    img: "/logistic.png",
    desc: "Streamline your supply chain operations."
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const Features = () => (
  <section className="py-16">
    {/* Minimal Header */}
    <div className="max-w-4xl mx-auto text-center px-4 mb-12">
      <h2 className="text-3xl font-light text-gray-900 mb-3">
        Our <span className="font-medium text-yellow-60">Services</span>
      </h2>
      <div className="w-12 h-0.5 bg-amber-400 mx-auto"/>
    </div>

    {/* Clean Card Grid */}
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ title, img, desc }) => (
          <motion.div
            key={title}
            className="bg-white rounded-none overflow-hidden border border-gray-100 hover:border-amber-100 transition-colors duration-200"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-normal text-gray-800 mb-3">
                {title}
              </h3>
              <p className="text-gray-500 font-light le  ading-relaxed">
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