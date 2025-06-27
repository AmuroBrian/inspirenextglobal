"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Desknet's Neo",
    img: "/desk.png",
    desc: "Japan's leading groupware solution now available in the Philippines, offering seamless collaboration for businesses.",
    features: ["Cloud-based", "Mobile access", "Document management"],
    category: "Business Solutions",
    origin: "Japan"
  },
  {
    name: "SQRC® (Security QR Code)",
    img: "/denso.png",
    desc: "Advanced secure QR technology from Japan, providing encrypted data protection for Philippine businesses.",
    features: ["256-bit encryption", "Access control", "Usage analytics"],
    category: "Security Technology",
    origin: "Japan"
  },
  {
    name: "Toyota Auto Auction",
    img: "/toyota.png",
    desc: "Japanese vehicle auction platform now serving the Philippine market with quality-inspected used cars.",
    features: ["Vehicle inspection reports", "Bidding platform", "Dealer network"],
    category: "Automotive",
    origin: "Japan"
  },
  {
    name: "Alpha-HT Cooling",
    img: "/aplha.png",
    desc: "Energy-efficient Japanese cooling technology adapted for Philippine climates.",
    features: ["Low power consumption", "Smart temperature control", "Eco-friendly"],
    category: "Home Appliances",
    origin: "Japan"
  },
  {
    name: "Inspire Cosmetics",
    img: "/ibeauty.png",
    desc: "Japanese skincare formulations now available for Filipino consumers.",
    features: ["Natural ingredients", "Dermatologist tested", "For all skin types"],
    category: "Beauty",
    origin: "Japan"
  },
  {
    name: "Global Mobility Service Inc",
    img: "/gms.png",
    desc: "GMS (Global Mobility Service) is a mobility-focused FinTech company that empowers underserved populations by enabling access to vehicle financing through innovative IoT technology and data-driven platforms. By combining mobility services with financial solutions, GMS helps create job opportunities and promotes financial inclusion for individuals traditionally excluded from credit and leasing systems.GMS (Global Mobility Service) is a mobility-focused FinTech company that empowers underserved populations by enabling access to vehicle financing through innovative IoT technology and data-driven platforms. By combining mobility services with financial solutions, GMS helps create job opportunities and promotes financial inclusion for individuals traditionally excluded from credit and leasing systems.",
    features: ["256-bit encryption", "Access control", "Usage analytics"],
    category: "Security Technology",
    origin: "Japan"
  },
];

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [expanded, setExpanded] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { 
      ...formData, 
      product: selectedProduct?.name 
    });
    setModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const toggleExpand = (name) => {
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bringing <span className="text-[#D4AF37]">Japan</span> to the Philippines
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our exclusive partnership with leading Japanese manufacturers provides Philippine consumers access to the latest innovations in technology, beauty, and business solutions.
          </motion.p>
          
          {/* Value Propositions */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { 
                title: "Authentic Quality", 
                desc: "100% genuine products directly from Japan",
                icon: (
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "Local Accessibility", 
                desc: "Available in Philippines with local support",
                icon: (
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              { 
                title: "Innovation Focus", 
                desc: "Cutting-edge Japanese technology",
                icon: (
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: "Cultural Bridge", 
                desc: "Connecting Japanese excellence with Filipinos",
                icon: (
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#2F3E46] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Products Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Premium <span className="text-[#D4AF37]">Japanese</span> Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully selected for the Philippine market
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, idx) => {
              const isLong = company.desc && company.desc.length > 150;
              const showFull = expanded[company.name];
              const shortDesc = isLong ? company.desc.slice(0, 150) + '...' : company.desc;
              return (
                <motion.div
                  key={company.name}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all flex flex-col group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                    <img 
                      src={company.img}
                      alt={company.name}
                      className={`${company.name === 'Cysay' ? 'h-40 sm:h-52' : 'h-32'} object-contain max-w-full transition-transform duration-300 group-hover:scale-110`} 
                    />
                    {/* Origin removed as requested */}
                    {company.category && (
                      <div className="absolute top-4 right-4 bg-[#2F3E46] text-white text-xs px-2 py-1 rounded">
                        {company.category}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {isLong && !showFull ? (
                          <>
                            {shortDesc} <button className="text-[#D4AF37] underline ml-1" onClick={() => toggleExpand(company.name)}>See more</button>
                          </>
                        ) : isLong && showFull ? (
                          <>
                            {company.desc} <button className="text-[#D4AF37] underline ml-1" onClick={() => toggleExpand(company.name)}>See less</button>
                          </>
                        ) : (
                          company.desc
                        )}
                      </p>
                      {/* Features removed as requested */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Inquire Now Container */}
          <div className="flex justify-center mt-12">
            <button
              className="px-10 py-4 bg-[#D4AF37] hover:bg-[#c19b30] text-white font-bold rounded-full shadow-lg text-xl transition-all duration-300 border-2 border-[#D4AF37] hover:border-[#c19b30]"
              onClick={() => {
                setSelectedProduct(null);
                setModalOpen(true);
              }}
            >
              Inquire Now
            </button>
          </div>
        </div>

        {/* Authenticity Guarantee */}
        <motion.div 
          className="bg-[#2F3E46] text-white rounded-xl p-8 md:p-12 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">100% Authentic Japanese Products</h2>
            <p className="text-gray-300 mb-6">
              All our products are sourced directly from Japan with complete documentation and quality guarantees.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 p-4 rounded-lg inline-flex items-center">
                <svg className="w-8 h-8 mr-2 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">Certified Authenticity</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Inquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProduct?.name ? `Inquire About ${selectedProduct.name}` : 'General Inquiry'}
                </h3>
                <p className="text-gray-600">Our team will contact you with more details</p>
              </div>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setModalOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3" 
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                ></textarea>
              </div>
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-[#D4AF37] text-white py-3 rounded-lg font-bold hover:bg-[#c19b30] transition-colors"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}