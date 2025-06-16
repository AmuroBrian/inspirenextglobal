"use client";
import React from 'react';

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Private Policy", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  return (
    <nav
      className="bg-white border-2 border-[#ffffff] px-8 py-5 flex items-center min-h-[84px] sticky top-0 z-50"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-5 min-w-[360px]">
        <img
          src="logo.png" // Replace with your logo path
          alt="Inspire Logo"
          className="w-16 h-16 rounded-full bg-[#c2a050] object-cover"
        />
        <div className="text-white">
          <div className="text-[2.2rem] md:text-[2.5rem] text-black font-bold leading-none font-serif">
            INSPIRE
          </div>
          <div className="text-base md:text-lg font-normal text-black leading-none font-serif mt-1">
            NEXT GLOBAL INC
          </div>
        </div>
      </div>
      {/* Navigation Links */}
      <div className="flex items-center gap-12 ml-auto">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={
              `text-black no-underline font-normal text-xl md:text-2xl font-inherit transition-all duration-300
              relative
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-gradient-to-r before:from-[#00c853] before:to-[#00b8d4] before:transition-all before:duration-300
              hover:before:w-full hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00c853] hover:to-[#00b8d4]`
            }
            style={{
              transitionProperty: 'color, background, border, box-shadow',
              transitionDuration: '300ms',
              transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="bg-[#dfb112] text-white px-10 py-3 rounded-lg font-semibold text-xl md:text-2xl no-underline hover:bg-[#f9e076] transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
          style={{
            boxShadow: "0 2px 16px 0 rgba(223,177,18,0.14)",
            transitionProperty: 'background, box-shadow, transform',
            transitionDuration: '300ms',
            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
          }}
        >
          Real Estate
        </a>
      </div>
    </nav>
  );
};

export default Header;