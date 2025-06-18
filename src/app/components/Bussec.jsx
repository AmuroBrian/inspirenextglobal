import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI & TECHNOLOGY",
    img: "/ai.jpg",
    desc: "Harness advanced artificial intelligence and technology solutions tailored to optimize and transform your business processes, decision-making, and customer engagement."
  },
  {
    title: "BUSINESS CONSULTATION",
    img: "/business.png",
    desc: "Receive expert guidance for your business growth, market entry, strategic planning, and operational efficiency from our experienced consultants."
  },
  {
    title: "PERSONAL APTITUDE ASSESSMENT",
    img: "/test.png",
    desc: "Discover individual strengths and talents through scientifically designed assessments that help guide personal and career development."
  },
  {
    title: "OFFICE & COMMERCIAL",
    img: "/office.jpg",
    desc: "Find ideal office and commercial spaces with our comprehensive property listings and tailored real estate solutions for your business."
  },
  {
    title: "PROPERTY MANAGEMENT",
    img: "/property.png",
    desc: "Enjoy hassle-free property management with our end-to-end services, including tenant relations, maintenance, and financial administration."
  },
  {
    title: "CONSTRUCTION",
    img: "/construction.png",
    desc: "Benefit from quality-driven construction solutions, from project planning and design to execution and delivery, ensuring your vision is realized on time and on budget."
  },
  {
    title: "LOGISTICS",
    img: "/logistic.png",
    desc: "Streamline your supply chain and distribution with our reliable logistics services, offering efficiency, transparency, and scalability for your business needs."
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

const slideInVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.18, duration: 0.9 }
  }
};

const Features = () => (
  <section className="bg-white min-h-screen pb-12 sm:pb-16 md:pb-20">
    {/* Section Header */}
    <motion.div
      className="pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-8 lg:px-12"
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <span
        className="inline-block bg-[#039c00] text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 sm:px-5 md:px-6 lg:px-7 py-1 sm:py-1.5 md:py-2 rounded-sm shadow"
        style={{ letterSpacing: "-1px" }}
      >
        Business Sections
      </span>
    </motion.div>

    {/* Features Grid */}
    <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl">
        {features.map(({ title, img, desc }) => (
          <motion.div
            key={title}
            className="bg-white rounded-lg shadow-md sm:shadow-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.25 }}
            variants={cardVariants}
          >
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-full min-h-[180px] sm:min-h-[200px] md:min-h-[224px]"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
              <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed sm:leading-loose">
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