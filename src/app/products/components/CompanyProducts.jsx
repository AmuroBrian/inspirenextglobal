"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const companies = [
  {
    name: "Desknet's Neo",
    img: "/desk.png",
    modalImages: ["/desk.png", "/desk-modal-1.png", "/desk-modal-2.png"], // Added for carousel
    desc: "Japan's leading groupware solution now available in the Philippines, offering seamless collaboration for businesses.",
    features: ["Cloud-based", "Mobile access", "Document management"],
    category: "Business Solutions",
    origin: "Japan",
    highlights: [
      "Ranked No. 1 in Customer Satisfaction in the groupware and business chat category by Nikkei Computer for six consecutive years (2018–2023) and by Nikkei BP Government Technology for three consecutive years (2020–2022).",
      "Over 5 million users worldwide as of May 2025, spanning SMEs, large enterprises, government agencies, educational institutions, and local governments.",
      "Hailed as one of the Best Software in Japan 2025, listed on the Section of the Tokyo Stock Exchange.",
    ],
    youtubeLinks: [ // Added YouTube links
      {
        title: "Introduction of Desknet’s NEO by Inspire",
        url: "https://youtu.be/fWlzbEVUTlI?si=qFaXJYnRrCeC0u2C ",
      },
      {
        title: "Desknet’s NEO – Brief introduction about its benefits",
        url: "https://youtu.be/qXz7oF808Mk?si=5RHXScjcxPncSKBv ",
      },
      {
        title: "1 Month Free-Trial Tutorial Process",
        url: "https://youtu.be/jxWSTjLGq5A?si=4uLc9Jx8pgFfraHv ",
      },
    ],
  },
  {
    name: "SQRC® (Security QR Code)",
    img: "/denso.png",
    modalImages: ["/denso.png", "/denso-modal-1.png"], // Added for carousel
    desc: "Advanced secure QR technology from Japan, providing encrypted data protection for Philippine businesses.",
    features: ["256-bit encryption", "Access control", "Usage analytics"],
    category: "Security Technology",
    origin: "Japan",
  },
  {
    name: "Toyota Auto Auction",
    img: "/toyota.png",
    modalImages: ["/toyota.png", "/toyota-modal-1.png"], // Added for carousel
    desc: "Japanese vehicle auction platform now serving the Philippine market with quality-inspected used cars.",
    features: ["Vehicle inspection reports", "Bidding platform", "Dealer network"],
    category: "Automotive",
    origin: "Japan",
  },
  {
    name: "Alpha-HT Cooling",
    img: "/aplha.png",
    modalImages: ["/aplha.png", "/alpha-modal-1.png"], // Added for carousel
    desc: "Energy-efficient Japanese cooling technology adapted for Philippine climates.",
    features: ["Low power consumption", "Smart temperature control", "Eco-friendly"],
    category: "Home Appliances",
    origin: "Japan",
  },
  {
    name: "Inspire Cosmetics",
    img: "/ibeauty.png",
    modalImages: ["/ibeauty.png", "/beauty-modal-1.png"], // Added for carousel
    desc: "Japanese skincare formulations now available for Filipino consumers.",
    features: ["Natural ingredients", "Dermatologist tested", "For all skin types"],
    category: "Beauty",
    origin: "Japan",
  },
  {
    name: "Global Mobility Service Inc",
    img: "/gms.png",
    modalImages: ["/gms.png", "/gms-modal-1.png", "/gms-modal-2.png"], // Added for carousel
    desc: "GMS (Global Mobility Service) is a mobility-focused FinTech company that empowers underserved populations by enabling access to vehicle financing through innovative IoT technology and data-driven platforms. By combining mobility services with financial solutions, GMS helps create job opportunities and promotes financial inclusion for individuals traditionally excluded from credit and leasing systems.",
    features: ["IoT Technology", "Data-driven Platforms", "Financial Inclusion"],
    category: "FinTech",
    origin: "Japan",
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // New state for carousel

  const openModalWithProduct = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); // Reset to the first image when opening modal
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.modalImages) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % selectedProduct.modalImages.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.modalImages) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + selectedProduct.modalImages.length) %
        selectedProduct.modalImages.length
      );
    }
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
            Bringing <span className="text-[#D4AF37]">Japan</span> to the
            Philippines
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our exclusive partnership with leading Japanese manufacturers provides
            Philippine consumers access to the latest innovations in technology,
            beauty, and business solutions.
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
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Local Accessibility",
                desc: "Available in Philippines with local support",
                icon: (
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Innovation Focus",
                desc: "Cutting-edge Japanese technology",
                icon: (
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Cultural Bridge",
                desc: "Connecting Japanese excellence with Filipinos",
                icon: (
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-2">{item.icon}</div>
                <h3 className="font-bold text-[#2F3E46] mb-1">
                  {item.title}
                </h3>
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
            {companies.map((company, idx) => (
              <motion.button
                key={company.name}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all flex flex-col group text-left cursor-pointer focus:outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => openModalWithProduct(company)}
              >
                <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                  <img
                    src={company.img}
                    alt={company.name}
                    className={`${
                      company.name === "Cysay" ? "h-40 sm:h-52" : "h-32"
                    } object-contain max-w-full transition-transform duration-300 group-hover:scale-110`}
                  />
                  {company.category && (
                    <div className="absolute top-4 right-4 bg-[#2F3E46] text-white text-xs px-2 py-1 rounded">
                      {company.category}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {company.desc.length > 150
                        ? company.desc.slice(0, 150) + "..."
                        : company.desc}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          {/* Inquire/Info Container */}
          <div className="flex justify-center mt-12">
            <div className="bg-white border border-[#D4AF37] rounded-xl shadow-lg px-8 py-6 text-center max-w-xl w-full">
              <h3 className="text-xl font-bold text-[#2F3E46] mb-2">
                Interested in a product?
              </h3>
              <p className="text-gray-700 mb-2">
                For product inquiries, please email us at
              </p>
              <a
                href="mailto:inspirenextglobal@gmail.com"
                className="text-[#D4AF37] font-semibold underline text-lg"
              >
                inspirenextglobal@gmail.com
              </a>
            </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              100% Authentic Japanese Products
            </h2>
            <p className="text-gray-300 mb-6">
              All our products are sourced directly from Japan with complete
              documentation and quality guarantees.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 p-4 rounded-lg inline-flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="font-medium">Certified Authenticity</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Single Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProductModal} // Close when clicking outside modal
          >
            <motion.div
              className="bg-white rounded-xl p-4 sm:p-6 md:p-8 max-w-full md:max-w-3xl lg:max-w-4xl w-full mx-auto relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={closeProductModal}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-[#2F3E46] text-center">
                {selectedProduct.name}
              </h2>

              {/* Image Carousel */}
              {selectedProduct.modalImages &&
                selectedProduct.modalImages.length > 0 && (
                  <div className="relative w-full mb-6">
                    <motion.img
                      key={currentImageIndex} // Key for animation re-render
                      src={
                        selectedProduct.modalImages[currentImageIndex] ||
                        selectedProduct.img
                      }
                      alt={`${selectedProduct.name} image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-64 sm:h-80 md:h-96 object-contain mx-auto transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                    {selectedProduct.modalImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full ml-2 hover:bg-black/75 focus:outline-none"
                          aria-label="Previous image"
                        >
                          &#8249;
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full mr-2 hover:bg-black/75 focus:outline-none"
                          aria-label="Next image"
                        >
                          &#8250;
                        </button>
                      </>
                    )}
                    {selectedProduct.modalImages.length > 1 && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                        {selectedProduct.modalImages.map((_, idx) => (
                          <button
                            key={idx}
                            className={`w-3 h-3 rounded-full ${
                              currentImageIndex === idx
                                ? "bg-[#D4AF37]"
                                : "bg-gray-400"
                            }`}
                            onClick={() => setCurrentImageIndex(idx)}
                            aria-label={`Go to image ${idx + 1}`}
                          ></button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              <div className="text-gray-700 mb-4 text-center">
                {selectedProduct.desc}
              </div>
              {selectedProduct.features && (
                <ul className="list-disc list-inside text-gray-600 mb-2">
                  {selectedProduct.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}
              {/* Desknet's Neo highlights */}
              {selectedProduct.name === "Desknet's Neo" && selectedProduct.highlights && (
                <ul className="list-disc list-inside text-[#208704] mb-2 mt-4">
                  {selectedProduct.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}

              {/* YouTube Links Section */}
              {selectedProduct.youtubeLinks && selectedProduct.youtubeLinks.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-[#2F3E46] mb-2">Related Videos:</h3>
                  <ul className="list-disc list-inside text-blue-600">
                    {selectedProduct.youtubeLinks.map((link, i) => (
                      <li key={i} className="mb-1">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="text-sm text-gray-500 text-center mt-4">
                Category: {selectedProduct.category} | Origin:{" "}
                {selectedProduct.origin}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}