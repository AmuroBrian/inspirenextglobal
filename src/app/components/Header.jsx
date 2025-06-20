"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: "Home", value: "home", href: "/" },
  { label: "About", value: "about", href: "/#about" },
  { label: "Real Estate", value: "realestate", href: "/#realestate" },
  { label: "Contact", value: "contact", href: "/#contact" },
  { label: "Board of Directors", value: "board", href: "/users" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-2 border-[#ffffff] px-4 sm:px-6 md:px-8 py-5 flex items-center min-h-[72px] sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-4 sm:gap-5 min-w-[180px] sm:min-w-[260px] md:min-w-[360px]">
        <img
          src="logo.png"
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
          <Link
            key={link.value}
            href={link.href}
            className={`
              text-black no-underline font-normal text-lg xl:text-xl md:text-2xl font-inherit transition-all duration-300
              relative px-1
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-gradient-to-r before:from-[#00c853] before:to-[#00b8d4] before:transition-all before:duration-300
              hover:before:w-full hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00c853] hover:to-[#00b8d4]
              ${
                (link.href === '/' && pathname === '/') ||
                (link.href === '/users' && pathname.startsWith('/users'))
                  ? 'font-bold text-[#208704]' : ''
              }
            `}
            style={{
              transitionProperty: 'color, background, border, box-shadow',
              transitionDuration: '300ms',
              transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
            }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Burger Menu Icon */}
      <button
        className="lg:hidden ml-auto focus:outline-none z-50"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          className="block w-8 h-1 bg-[#208704] my-1 rounded transition-all duration-300"
          style={{ transform: menuOpen ? "rotate(45deg) translateY(10px)" : "none" }}
        />
        <span
          className={`block w-8 h-1 bg-[#208704] my-1 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className="block w-8 h-1 bg-[#208704] my-1 rounded transition-all duration-300"
          style={{ transform: menuOpen ? "rotate(-45deg) translateY(-10px)" : "none" }}
        />
      </button>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${menuOpen ? "block opacity-100" : "hidden opacity-0"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col py-10 px-6 gap-6`}>
        <button
          className="absolute top-4 right-4 text-3xl text-[#208704] font-bold focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          &times;
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.value}
            href={link.href}
            className={`text-black no-underline font-medium text-xl py-2 px-1 border-l-4 border-transparent hover:border-[#00c853] transition-all text-left
              ${
                (link.href === '/' && pathname === '/') ||
                (link.href === '/users' && pathname.startsWith('/users'))
                  ? 'font-bold text-[#208704]' : ''
              }
            `}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
