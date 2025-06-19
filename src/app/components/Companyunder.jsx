import React from "react";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Desknet's Neo",
    img: "/neo.png",
    desc: "Desknet's NEO is a cloud-based groupware popular in Japan, offering businesses a customizable platform for collaboration, communication, and workflow management.",
  },
  {
    name: "SQRC® (Security QR Code)",
    img: "/denso.png",
    desc: "SQRC (Secure QR Code) is a more secure variant of the traditional QR code. It allows for the storage of encrypted data, which can only be accessed by those with the proper authorization, providing enhanced security for sensitive or private information.",
  },
  {
    name: "Toyota Auto Auction",
    img: "/toyota.png",
    desc: "TAA (Toyota Auto Auction) is a vehicle auction platform operated by Toyota, offering a wide selection of used cars through a secure and efficient bidding system. It provides dealers with reliable access to quality-inspected vehicles, streamlining the wholesale car buying process with transparency and trust.",
  },
  {
    name: "Global Mobility Service Inc",
    img: "/gms.png",
    desc: "GMS (Global Mobility Service) is a mobility-focused FinTech company that empowers underserved populations by enabling access to vehicle financing through innovative IoT technology and data-driven platforms. By combining mobility services with financial solutions, GMS helps create job opportunities and promotes financial inclusion for individuals traditionally excluded from credit and leasing systems.",
  },
  {
    name: "Alpha-HT",
    img: "/alpha.png",
    desc: "Alpha-HT is committed to transforming the way we power our world. By integrating a-HT technology, our air coolers provide a sustainable, cost-effective solution for a more comfortable and ecofriendly future, while reducing your energy consumption.",
  },
  {
    name: "Inspire Cosmetics",
    img: "/images/inspire-logistics.jpg",
    desc: "Focuses on making your skin glowy and bright while still having a natural skin moisture will also have products that make your skin younger and healthier. Our products are made with natural ingredients that are safe for all skin types, including sensitive skin.  We believe that everyone deserves to feel confident and beautiful in their own skin, and our products are designed to help you achieve that.",
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
  <section className="relative py-16 ">
    {/* Decorative blurred shapes */}
    <div className="absolute top-0 left-0 w-40 h-40 bg-[#e3b877]/30 rounded-full blur-2xl pointer-events-none z-0"></div>
    <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#208704]/20 rounded-full blur-2xl pointer-events-none z-0"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#ffffff] text-center drop-shadow-xl tracking-tight">
        Companies Under Inspire
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#fefefe] text-center">
        J-TECH
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {companies.map((company, idx) => (
          <motion.div
            key={company.name}
            className="bg-white/80 rounded-xl shadow-2xl border border-[#000000] p-0 flex flex-col items-center hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            custom={idx}
          >
            <motion.img
              src={company.img}
              alt={company.name}
              className="w-full h-44 object-cover rounded-t-xl"
              style={{ minHeight: "176px", background: "#eee" }}
              initial={{ scale: 0.96, opacity: 0.85 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.07 + 0.15, type: "spring" }}
            />
            <div className="p-5 flex-1 flex flex-col items-center text-center">
              <h3 className="font-bold text-xl text-[#208704] mb-2">{company.name}</h3>
              <p className="text-gray-700 text-base">{company.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InspireCompaniesGrid;