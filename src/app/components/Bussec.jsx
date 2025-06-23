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
  <section className="min-h-screen pb-12 sm:pb-16 md:pb-20 lg:pb-24">
    {/* Section Header */}
    <motion.div
      className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center"
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight" style={{ color: '#2F3E46', letterSpacing: '-0.03em' }}>
        <span>Business </span>
        <span style={{ color: '#D4AF37' }}>Sections</span>
      </h2>
      <div className="flex justify-center mt-2 mb-6">
        <span className="inline-block w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
      </div>
    </motion.div>

    {/* Features Grid */}
    <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex justify-center px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl">
        {features.map(({ title, img, desc }) => (
          <motion.div
            key={title}
            className="bg-[#F5F5F5] rounded-2xl shadow-2xl overflow-hidden flex flex-col hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 h-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.25 }}
            variants={cardVariants}
          >
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col">
              <h3 className="text-[#2F3E46] text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">
                {title}
              </h3>
              <p className="text-[#2F3E46]/90 text-base md:text-lg leading-relaxed text-center">
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