"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.9 } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.9 } }
};
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.9 } }
};

export default function CompanyProfile() {
  return (
    <main className="min-h-screen py-16 px-2">
      <motion.div
        className="max-w-6xl mx-auto rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row gap-12 bg-[#F5F5F5] hover:scale-[1.015] transition-all duration-300"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left: Contact */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 text-[#2F3E46]"
        >
          <h2 className="text-3xl font-extrabold mb-2 tracking-tight" style={{ color: '#2F3E46' }}>
            <span>Contact</span>
          </h2>
          <div className="flex justify-start mt-2 mb-6">
            <span className="inline-block w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="font-semibold">Website:</span>
            <a href="https://inspirenextglobal.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline hover:text-[#2F3E46] transition">
              inspirenextglobal.com
            </a>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Telephone No.:</span>
            <span className="ml-2">02-8538-5054 / 02-77509605 / +639946529009</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Email:</span>
            <a href="mailto:info@inspirenextglobal.com" className="ml-2 text-[#D4AF37] underline hover:text-[#2F3E46] transition">
              info@inspirenextglobal.com
            </a>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Facebook:</span>
            <a href="https://facebook.com/InspireNextGlobalInc" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#D4AF37] underline hover:text-[#2F3E46] transition">
              Inspire Next Global Inc.
            </a>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Instagram:</span>
            <a href="https://instagram.com/inspire.next.global.inc" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#D4AF37] underline hover:text-[#2F3E46] transition">
              @inspire.next.global.inc
            </a>
          </div>
          <div>
            <span className="font-semibold">Tiktok:</span>
            <a href="https://tiktok.com/@inspire.next.glob" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#D4AF37] underline hover:text-[#2F3E46] transition">
              @inspire.next.glob
            </a>
          </div>
        </motion.div>
        {/* Right: Address */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 text-[#2F3E46]"
        >
          <h2 className="text-3xl font-extrabold mb-2 tracking-tight" style={{ color: '#2F3E46' }}>
            <span>Address</span>
          </h2>
          <div className="flex justify-start mt-2 mb-6">
            <span className="inline-block w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
          </div>
          <div className="mb-5 bg-white rounded-lg p-4 shadow border border-[#e9e3d3]">
            <b>HEAD OFFICE:</b>
            <div className="ml-2">
              MAIN OFFICE: 6F Alliance Global Tower, 11th Avenue, corner 36th St, Taguig, Metro Manila
            </div>
          </div>
          <div className="mb-5 bg-white rounded-lg p-4 shadow border border-[#e9e3d3]">
            <b>SATELLITE OFFICE:</b>
            <div className="ml-2">
              1209 Mountain Road PL NE STE N Bernalillo County Albuquerque, NM, 87110, USA
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow border border-[#e9e3d3]">
            <b>SATELLITE OFFICE:</b>
            <div className="ml-2">
              20th floor, Trust Tower Main Building, 1-8-3 Marunouchi, Chiyoda-ku, Tokyo 100-8283
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Map Section Below */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl"
      >
        <iframe
          title="Company Offices Map"
          src="https://www.google.com/maps?q=6F+Alliance+Global+Tower,11th+Avenue,corner+36th+St,Taguig,Metro+Manila&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </main>
  );
}