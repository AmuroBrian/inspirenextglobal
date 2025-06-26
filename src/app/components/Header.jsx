"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: "Home", value: "home", href: "/" },
  { label: "About", value: "about", href: "/#about" },
  { label: "Real Estate", value: "realestate", href: "/#realestate" },
  { label: "Contact", value: "contact", href: "/#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    checkMobile();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#D4AF37] bg-white">
      {/* Accent bar for brand identity */}
      <div className="w-full h-1 bg-gradient-to-r from-[#208704] via-[#D4AF37] to-[#208704]" />
      <nav className={`
        bg-white border-b-2 border-[#D4AF37]/30
        px-6 sm:px-10 md:px-16 lg:px-20 py-3 md:py-4
        flex items-center justify-between
        transition-all duration-300
        min-h-[70px] md:min-h-[80px] lg:min-h-[90px]
      `}>
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="LOGOINGI.png"
              alt="Inspire Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 2xl:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.value}
              href={link.href}
              className={`
                text-[#2F3E46] hover:text-[#D4AF37] no-underline font-bold
                text-lg md:text-xl xl:text-2xl
                relative px-2 py-1
                after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#208704] after:transition-all after:duration-300
                after:w-0 hover:after:w-full
                transition-colors duration-200
                ${
                  (link.href === '/' && pathname === '/') ||
                  (link.href !== '/' && pathname.startsWith(link.href))
                    ? 'font-extrabold text-[#D4AF37] after:w-full after:h-1' 
                    : ''
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none p-2 -mr-2"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5 sm:space-y-2">
            <motion.span
              className={`block w-8 h-1 bg-[#2F3E46]`}
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 8 : 0,
                width: menuOpen ? '2.25rem' : '2rem'
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block w-8 h-1 bg-[#2F3E46]`}
              animate={{
                opacity: menuOpen ? 0 : 1,
                width: menuOpen ? 0 : '2rem'
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block w-8 h-1 bg-[#2F3E46]`}
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -8 : 0,
                width: menuOpen ? '2.25rem' : '2rem'
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#18191b]/60 z-40"
                onClick={() => setMenuOpen(false)}
              />

              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                className={`
                  fixed top-0 right-0 w-4/5 max-w-sm h-full 
                  bg-white z-50 
                  flex flex-col pt-24 px-8 gap-6
                  border-l-4 border-[#D4AF37]
                `}
              >
                <div className="absolute top-4 right-4">
                  <button
                    className="text-3xl text-[#2F3E46] focus:outline-none"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close Menu"
                  >
                    &times;
                  </button>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.value}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`
                          block text-[#2F3E46] no-underline font-bold 
                          text-xl py-4 px-4
                          border-b-2 border-[#D4AF37]/20
                          transition-all duration-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]
                          ${
                            (link.href === '/' && pathname === '/') ||
                            (link.href !== '/' && pathname.startsWith(link.href))
                              ? 'font-extrabold text-[#D4AF37] bg-[#D4AF37]/10' 
                              : ''
                          }
                        `}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;