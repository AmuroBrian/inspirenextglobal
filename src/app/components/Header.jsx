"use client";
import React, { useState } from 'react';

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Private Policy", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-2 border-[#ffffff] px-4 sm:px-6 md:px-8 py-5 flex items-center min-h-[72px] sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-4 sm:gap-5 min-w-[180px] sm:min-w-[260px] md:min-w-[360px]">
        <img
          src="logo.png" // Replace with your logo path
          alt="Inspire Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#c2a050] object-cover"
        />
        <div className="text-white">
          <div className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] text-black font-bold leading-none font-serif">
            INSPIRE
          </div>
          <div className="text-xs sm:text-base md:text-lg font-normal text-black leading-none font-serif mt-1">
            NEXT GLOBAL INC
          </div>
        </div>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-12 ml-auto">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={
              `text-black no-underline font-normal text-lg xl:text-xl md:text-2xl font-inherit transition-all duration-300
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
          className="bg-[#dfb112] text-white px-6 xl:px-10 py-2 xl:py-3 rounded-lg font-semibold text-lg xl:text-xl md:text-2xl no-underline hover:bg-[#f9e076] transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
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
      {/* Burger Menu Icon */}
      <button
        className="lg:hidden ml-auto focus:outline-none z-50"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="block w-8 h-1 bg-[#208704] my-1 rounded transition-all duration-300"
          style={{
            transform: menuOpen ? "rotate(45deg) translateY(10px)" : "none"
          }}
        />
        <span className={`block w-8 h-1 bg-[#208704] my-1 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className="block w-8 h-1 bg-[#208704] my-1 rounded transition-all duration-300"
          style={{
            transform: menuOpen ? "rotate(-45deg) translateY(-10px)" : "none"
          }}
        />
      </button>
      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${menuOpen ? "block opacity-100" : "hidden opacity-0"}`} onClick={() => setMenuOpen(false)} />
      <div className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col py-10 px-6 gap-6`}>
        <button className="absolute top-4 right-4 text-3xl text-[#208704] font-bold focus:outline-none" onClick={() => setMenuOpen(false)} aria-label="Close Menu">&times;</button>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-black no-underline font-medium text-xl py-2 px-1 border-l-4 border-transparent hover:border-[#00c853] transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="bg-[#dfb112] text-white px-6 py-3 mt-4 rounded-lg font-semibold text-xl no-underline hover:bg-[#f9e076] transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
          style={{
            boxShadow: "0 2px 16px 0 rgba(223,177,18,0.14)",
            transitionProperty: 'background, box-shadow, transform',
            transitionDuration: '300ms',
            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
          }}
          onClick={() => setMenuOpen(false)}
        >
          Real Estate
        </a>
      </div>
    </nav>
  );
};

export default Header;