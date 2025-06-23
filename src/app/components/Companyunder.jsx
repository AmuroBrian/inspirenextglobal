import React from "react";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Desknet's Neo",
    img: "/desk.png",
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
    img: "/aplha.png",
    desc: "Alpha-HT is committed to transforming the way we power our world. By integrating a-HT technology, our air coolers provide a sustainable, cost-effective solution for a more comfortable and ecofriendly future, while reducing your energy consumption.",
  },
  {
    name: "Inspire Cosmetics",
    img: "/ibeauty.png",
    desc: "Focuses on making your skin glowy and bright while still having a natural skin moisture will also have products that make your skin younger and healthier. Our products are made with natural ingredients that are safe for all skin types, including sensitive skin.  We believe that everyone deserves to feel confident and beautiful in their own skin, and our products are designed to help you achieve that.",
  },
];

const titleVariants = {
  offscreen: { opacity: 0, y: -40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const subtitleVariants = {
  ...titleVariants,
  onscreen: {
    ...titleVariants.onscreen,
    transition: { ...titleVariants.onscreen.transition, delay: 0.2 },
  },
};

const cardVariants = {
  offscreen: { opacity: 0, y: 50, scale: 0.95 },
  onscreen: (idx) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      bounce: 0.18, 
      duration: 0.7, 
      delay: idx * 0.1,
      staggerChildren: 0.15,
    },
  }),
};

const imageVariants = {
  offscreen: { opacity: 0, scale: 0.8 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const textContentVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const InspireCompaniesGrid = () => (
  <section className="relative py-16 ">
    {/* Decorative blurred shapes */}
    <div className="absolute top-0 left-0 w-40 h-40 bg-[#e3b877]/30 rounded-full blur-2xl pointer-events-none z-0"></div>
    <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#208704]/20 rounded-full blur-2xl pointer-events-none z-0"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-2 text-[#2F3E46] text-center drop-shadow-xl tracking-tight"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <span>Companies Under </span>
        <span style={{ color: '#D4AF37' }}>Inspire</span>
      </motion.h1>
      <div className="flex justify-center mt-2 mb-8">
        <span className="inline-block w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
      </div>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-[#2F3E46] text-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={subtitleVariants}
      >
        J-TECH
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {companies.map((company, idx) => (
          <motion.div
            key={company.name}
            className="bg-[#F5F5F5] rounded-2xl shadow-2xl p-0 flex flex-col items-center hover:scale-[1.025] hover:shadow-2xl transition-all duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            custom={idx}
          >
            <motion.img
              src={company.img}
              alt={company.name}
              className="w-full h-44 object-cover rounded-t-2xl"
              style={{ minHeight: "176px", background: "#eee" }}
              variants={imageVariants}
            />
            <motion.div
              className="p-6 flex-1 flex flex-col items-center text-center"
              variants={{
                onscreen: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.h3
                className="font-bold text-xl text-[#2F3E46] mb-2"
                variants={textContentVariants}
              >
                {company.name}
              </motion.h3>
              <motion.p
                className="text-[#2F3E46]/90 text-base"
                variants={textContentVariants}
              >
                {company.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InspireCompaniesGrid;