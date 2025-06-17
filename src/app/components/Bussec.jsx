import React from "react";
import { motion } from "framer-motion";

// Replace these with your actual image imports or paths:
const features = [
  {
    title: "AI & TECHNOLOGY",
    img: "/ai.jpg",
    desc:
      "Harness advanced artificial intelligence and technology solutions tailored to optimize and transform your business processes, decision-making, and customer engagement."
  },
  {
    title: "BUSINESS CONSULTATION",
    img: "/business.png",
    desc:
      "Receive expert guidance for your business growth, market entry, strategic planning, and operational efficiency from our experienced consultants."
  },
  {
    title: "PERSONAL APTITUDE ASSESSMENT",
    img: "/test.png",
    desc:
      "Discover individual strengths and talents through scientifically designed assessments that help guide personal and career development."
  },
  {
    title: "OFFICE & COMMERCIAL",
    img: "/office.jpg",
    desc:
      "Find ideal office and commercial spaces with our comprehensive property listings and tailored real estate solutions for your business."
  },
  
  {
    title: "PROPERTY MANAGEMENT",
    img: "/property.png",
    desc:
      "Enjoy hassle-free property management with our end-to-end services, including tenant relations, maintenance, and financial administration."
  },
  {
    title: "CONSTRUCTION",
    img: "/construction.png",
    desc:
      "Benefit from quality-driven construction solutions, from project planning and design to execution and delivery, ensuring your vision is realized on time and on budget."
  },
  {
    title: "LOGISTICS",
    img: "/logistic.png",
    desc:
      "Streamline your supply chain and distribution with our reliable logistics services, offering efficiency, transparency, and scalability for your business needs."
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.18, duration: 0.9 }
  }
};

const Features = () => (
  <section className="bg-[#ffffff] min-h-screen pb-20">
    {/* Section Header */}
    <div className="pt-12 pl-12">
      <span className="inline-block bg-[#039c00] text-white text-4xl font-bold px-7 py-2 rounded-sm shadow" style={{ letterSpacing: "-1px" }}>
        Business Sections
      </span>
    </div>

    {/* Features Grid */}
    <div className="mt-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full px-8">
        {features.map(({ title, img, desc }, idx) => (
          <motion.div
            key={title}
            className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.25 }}
            variants={cardVariants}
          >
            <img
              src={img}
              alt={title}
              className="object-cover w-full h-56"
              style={{ minHeight: "224px", background: "#eee" }}
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-[#000000] text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;