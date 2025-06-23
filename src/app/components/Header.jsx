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
  { label: "Board of Directors", value: "board", href: "/users" },
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

    // Initial check
    checkMobile();
    handleScroll();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className={`
        bg-white/60 backdrop-blur-lg border-b border-[#D4AF37]/20 
        px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4
        flex items-center justify-between
        transition-all duration-300
        shadow-2xl rounded-b-2xl
        min-h-[70px] md:min-h-[80px] lg:min-h-[90px]
      `}>
      {/* Logo Section */}
        <div className="flex-shrink-0 z-50">
          <Link href="/">
            <img
              src="LOGOINGI.jpg"
              alt="Inspire Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 transition-all duration-300 cursor-pointer"
              style={{ borderRadius: '0.75rem', boxShadow: '0 2px 16px 0 rgba(47,62,70,0.10)' }}
            />
          </Link>
        </div>

      {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.value}
            href={link.href}
            className={`
                text-[#2F3E46] hover:text-[#D4AF37] no-underline font-semibold 
                text-base md:text-lg xl:text-xl 
                relative px-1 md:px-2 py-1 md:py-2
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] 
                after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#2F3E46] 
                after:transition-all after:duration-300 hover:after:w-full
                transition-colors duration-200
              ${
                (link.href === '/' && pathname === '/') ||
                  (link.href !== '/' && pathname.startsWith(link.href))
                    ? 'font-bold text-[#D4AF37] after:w-full' 
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
          className="lg:hidden focus:outline-none z-50 p-2 -mr-2"
        aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5 sm:space-y-2">
            <motion.span
              className={`block w-6 sm:w-7 md:w-8 h-0.5 sm:h-1 bg-[#2F3E46]`}
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 8 : 0,
                width: menuOpen ? '1.75rem' : '1.5rem'
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block w-6 sm:w-7 md:w-8 h-0.5 sm:h-1 bg-[#2F3E46]`}
              animate={{
                opacity: menuOpen ? 0 : 1,
                width: menuOpen ? 0 : '1.5rem'
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block w-6 sm:w-7 md:w-8 h-0.5 sm:h-1 bg-[#2F3E46]`}
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -8 : 0,
                width: menuOpen ? '1.75rem' : '1.5rem'
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
                className="fixed inset-0 bg-black/30 z-40"
        onClick={() => setMenuOpen(false)}
      />

              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                className={`
                  fixed top-0 right-0 w-4/5 max-w-sm h-full 
                  bg-white/90 backdrop-blur-lg shadow-2xl z-50 
                  flex flex-col pt-24 px-6 gap-4 rounded-l-2xl
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
                          block text-[#2F3E46] no-underline font-semibold 
                          text-lg py-3 px-4 rounded-lg
                          transition-all duration-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]
              ${
                (link.href === '/' && pathname === '/') ||
                            (link.href !== '/' && pathname.startsWith(link.href))
                              ? 'font-bold text-[#D4AF37] bg-[#D4AF37]/10' 
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