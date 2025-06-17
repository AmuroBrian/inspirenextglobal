import React from "react";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Inspire Construction",
    img: "/images/inspire-construction.jpg",
    desc: "Delivering quality-driven construction solutions for projects of all scales.",
  },
  {
    name: "Inspire Healthcare",
    img: "/images/inspire-healthcare.jpg",
    desc: "Innovative healthcare and pharmaceutical services for modern communities.",
  },
  {
    name: "Inspire Gaming",
    img: "/images/inspire-gaming.jpg",
    desc: "Engaging entertainment and gaming experiences for global audiences.",
  },
  {
    name: "Inspire Agriculture",
    img: "/images/inspire-agriculture.jpg",
    desc: "Empowering agriculture trading and smart farming solutions.",
  },
  {
    name: "Inspire Consulting",
    img: "/images/inspire-consulting.jpg",
    desc: "Expert business strategies and consultation for your growth.",
  },
  {
    name: "Inspire Logistics",
    img: "/images/inspire-logistics.jpg",
    desc: "Reliable logistics and supply chain management for seamless operations.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (idx) => ({
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      bounce: 0.18, 
      duration: 0.7, 
      delay: idx * 0.07 
    }
  })
};

const InspireCompaniesGrid = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10 text-[#ffffff] text-center">
        Companies Under Inspire
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {companies.map((company, idx) => (
          <motion.div
            key={company.name}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            custom={idx}
          >
            <motion.img
              src={company.img}
              alt={company.name}
              className="w-full h-44 object-cover"
              style={{ minHeight: "176px", background: "#eee" }}
              initial={{ scale: 0.96, opacity: 0.85 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.07 + 0.15, type: "spring" }}
            />
            <div className="p-5 flex-1 flex flex-col items-center text-center">
              <h3 className="font-bold text-xl text-[#208704] mb-2">{company.name}</h3>
              <p className="text-gray-600 text-base">{company.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InspireCompaniesGrid;