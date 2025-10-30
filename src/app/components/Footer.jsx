import React from 'react';
import Link from "next/link";

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/inspirenextglobalinc',
    icon: (
      <svg width="20" height="20" fill="currentColor" className="text-[#e3b877]" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/inspirenextglobal_inc/',
    icon: (
      <svg width="20" height="20" fill="currentColor" className="text-[#e3b877]" viewBox="0 0 24 24" style={{ display: 'block', margin: 'auto' }}>
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    )
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@inspirenextglobal',
    icon: (
      <svg width="20" height="20" fill="currentColor" className="text-[#e3b877]" viewBox="0 0 24 24"><path d="M12.004 2.002c-5.523 0-10 4.477-10 10 0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm0 18.182c-4.517 0-8.182-3.665-8.182-8.182 0-4.517 3.665-8.182 8.182-8.182 4.517 0 8.182 3.665 8.182 8.182 0 4.517-3.665 8.182-8.182 8.182zm2.182-8.182c0-1.205-.977-2.182-2.182-2.182s-2.182.977-2.182 2.182c0 1.205.977 2.182 2.182 2.182s2.182-.977 2.182-2.182zm-2.182-3.273c-1.808 0-3.273 1.465-3.273 3.273s1.465 3.273 3.273 3.273 3.273-1.465 3.273-3.273-1.465-3.273-3.273-3.273z"/></svg>
    )
  }
];

const partners = [
  "Inspire Holdings Inc",
  "Inspire Alliance Fund Group"
];

const Footer = () => {
  return (
    <footer className="relative z-10 backdrop-blur-lg bg-[#18191b]/80 border-t border-[#232323] mt-auto overflow-hidden">
      {/* Animated Gradient Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120vw] h-60 bg-gradient-to-r from-[#e3b877]/30 via-[#232323]/40 to-[#e3b877]/30 blur-2xl opacity-60 animate-pulse" />
      </div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-16 px-4 sm:px-8 pt-14 pb-8">
        {/* Left Block */}
        <div className="md:w-1/2">
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight drop-shadow-lg">INSPIRE NEXT GLOBAL INC</h2>
          <p className="mb-5 text-sm sm:text-base leading-relaxed text-[#b0b1b4]/90">
            Inspire Next Global Inc is a visionary management and company
            with diverse interests spanning construction and development,
            healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and
            specialized services - serving both private and public sector.
          </p>
          <Link href="/users" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#e3b877] text-[#18191b] font-semibold shadow-md hover:bg-[#f5d9a6] transition-all duration-200">
            Read more <span className="ml-1">→</span>
          </Link>
        </div>
        {/* Social Block */}
        <div className="md:w-1/2 flex flex-col items-start md:items-end">
          <h3 className="text-white font-semibold mb-3 text-lg">Connect with us</h3>
          <div className="flex gap-4 mb-4">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-[#232323]/60 hover:bg-[#e3b877] transition-colors duration-200 shadow-md">
                <span className="sr-only">{link.name}</span>
                <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
              </a>
            ))}
          </div>
          <ul className="space-y-1 mb-4 text-left md:text-right text-sm sm:text-base break-all">
            <li>
              <span className="font-medium text-[#e3b877]">Telephone:02-5322 1002</span>  
            </li>
            <li>
              <a href="mailto:inspirenextglobal@gmail.com" className="hover:underline text-[#e3b877]">
                Email: inspirenextglobal@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="border-t border-[#232323]/70 my-4" />
      </div>
      {/* Partners Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          <span className="font-medium text-[#b0b1b4] text-sm sm:text-base">Our Partners:</span>
          {partners.map((name) => (
            name === "Inspire Holdings Inc" ? (
              <a
                key={name}
                href="https://inspireholdings.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-[#232323]/60 text-[#e3b877] font-semibold text-xs sm:text-sm shadow-sm border border-[#e3b877]/30 hover:underline"
              >
                {name}
              </a>
            ) : (
              <span key={name} className="px-3 py-1 rounded-full bg-[#232323]/60 text-[#e3b877] font-semibold text-xs sm:text-sm shadow-sm border border-[#e3b877]/30">
                {name}
              </span>
            )
          ))}
          
        </div>
        <div className="text-xs text-[#b0b1b4]/70 mt-2 md:mt-0">© {new Date().getFullYear()} Inspire Next Global Inc. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;