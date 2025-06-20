import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#18191b] text-[#b0b1b4] pt-12 pb-6 px-4 sm:px-6 border-t border-[#232323] mt-auto">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
        {/* Left Block */}
        <div className="md:w-1/2">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">INSPIRE NEXT GLOBAL INC</h2>
          <p className="mb-4 text-sm sm:text-base">
            Inspire Next Global Inc is a visionary management and company
            with diverse interests spanning construction and development,
            healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and
            specialized services - serving both private and public sector.
          </p>
          <Link href="/users" className="text-[#e3b877] font-medium hover:underline inline-flex items-center">
            read more <span className="ml-1">→</span>
          </Link>
        </div>
        {/* Social Block */}
        <div className="md:w-1/2 flex flex-col items-start md:items-end">
          <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">Social</h3>
          <ul className="space-y-1 mb-4 text-left md:text-right text-sm sm:text-base break-all">
            <li>
              <a href="https://web.facebook.com/inspirenextglobalinc" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Facebook: inspirenextglobalinc
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/inspirenextglobal_inc/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Instagram: inspirenextglobal_inc
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@inspirenextglobal" className="hover:underline" target="_blank" rel="noopener noreferrer">
                TikTok: @inspirenextglobal
              </a>
            </li>
            <li>
              <span>Telephone: 02-8538-5054 / 02-77509605 / +639946529009</span>
            </li>
            <li>
              <a href="mailto:info@inspirenextglobal.com" className="hover:underline">
                Email: info@inspirenextglobal.com
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 md:gap-6 md:justify-end w-full">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Compliances</a>
          </div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 border-t border-[#232323] pt-4 sm:pt-6 pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-2 md:mb-0 flex items-center flex-wrap gap-2 sm:gap-3">
            <span className="font-medium text-[#b0b1b4] text-sm sm:text-base">Our Partner:</span>
            <span className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              {["Inspire Holdings Inc", "Inspire Alliance Fund Group"].map((name) => (
                <span key={name} className="flex items-center gap-1">
                  <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-[#b0b1b4] mr-1"></span>
                  {name}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;