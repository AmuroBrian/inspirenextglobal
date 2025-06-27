import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const AboutPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Predefined leaf configuration (static, no transforms)
  const LEAF_CONFIG = [
    { left: 17.5, top: 28.0, width: 46.8, rotate: 139.6 },
    { left: 95.0, top: 19.6, width: 48.5, rotate: 164.1 },
    { left: 57.8, top: 87.7, width: 55.5, rotate: 1.4 },
    { left: 57.0, top: 86.3, width: 47.5, rotate: 183.6 },
    { left: 70.1, top: 80.5, width: 28.6, rotate: 202.7 },
    { left: 27.8, top: 12.9, width: 38.0, rotate: 355.8 },
    { left: 30.0, top: 4.6, width: 26.8, rotate: 97.3 },
    { left: 90.8, top: 83.8, width: 28.2, rotate: 124.5 },
    { left: 52.6, top: 50.9, width: 27.6, rotate: 119.8 },
    { left: 13.7, top: 96.6, width: 54.8, rotate: 183.2 },
    { left: 86.5, top: 47.0, width: 21.1, rotate: 153.3 },
    { left: 90.1, top: 15.6, width: 42.4, rotate: 267.0 }
  ];

  // Particle data (static, no transforms)
  const PARTICLES = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1
  }));

  return (
    <div className="relative overflow-visible" ref={containerRef}>
      {/* Modern shapes outside container (static) - Made smaller for mobile */}
      <div className="fixed -left-20 -top-20 w-48 h-48 -z-30 sm:-left-40 sm:-top-40 sm:w-96 sm:h-96">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path 
            d="M250,50 C350,150 400,200 450,250 C400,300 350,350 250,450 C150,350 100,300 50,250 C100,200 150,150 250,50 Z" 
            fill="#2F3E46" 
            fillOpacity="0.05"
            stroke="#D4AF37"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="fixed -right-10 top-1/4 w-32 h-32 -z-30 sm:-right-20 sm:w-64 sm:h-64">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <rect 
            x="50" y="50" 
            width="300" height="300" 
            rx="30" 
            fill="#D4AF37" 
            fillOpacity="0.05"
            stroke="#2F3E46"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="fixed left-1/4 -bottom-20 w-40 h-40 -z-30 sm:-bottom-40 sm:w-80 sm:h-80">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <polygon 
            points="200,50 350,350 50,350" 
            fill="#2F3E46" 
            fillOpacity="0.05"
            stroke="#D4AF37"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Animated gradient background (static) */}
      <div 
        className="fixed inset-0 -z-20"
        style={{
          background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 50%, #F5F5F5 100%)',
          backgroundSize: '400% 400%'
        }}
      />

      {/* Subtle grid pattern (static) - Made smaller for mobile */}
      <div 
        className="fixed inset-0 -z-20 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #2F3E46 1px, transparent 1px), linear-gradient(to bottom, #2F3E46 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Background leaves (static) */}
      {isMounted && (
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        >
          {LEAF_CONFIG.map((leaf, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${leaf.left}%`,
                top: `${leaf.top}%`,
                width: `${leaf.width * 0.7}px`, // Smaller leaves on mobile
                transform: `rotate(${leaf.rotate}deg)`
              }}
            >
              <svg viewBox="0 0 100 100" style={{ color: '#2F3E46', opacity: 0.15 }}>
                <path d="M50,5 C60,35 90,35 95,50 C90,65 60,65 50,95 C40,65 10,65 5,50 C10,35 40,35 50,5 Z" fill="currentColor"/>
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Floating particles (static) */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {PARTICLES.map(particle => (
            <div
              key={`particle-${particle.id}`}
              className="absolute rounded-full"
              style={{
                backgroundColor: '#D4AF37',
                width: `${particle.size * 0.7}px`, // Smaller particles on mobile
                height: `${particle.size * 0.7}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: particle.opacity
              }}
            />
          ))}
        </div>
      )}

      <div 
        className="min-h-screen py-4 px-4 sm:py-16 sm:px-4 lg:px-8 relative z-10"
        style={{
          backgroundColor: 'rgba(245, 245, 245, 0.85)'
        }}
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <header 
            className="text-center mb-12 sm:mb-20 relative"
          >
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
              style={{ color: '#2F3E46', letterSpacing: '-0.03em' }}
            >
              <span>About </span>
              <span style={{ color: '#D4AF37' }}>Inspire</span>
              <span> Next Global</span>
            </h1>
            <div className="flex justify-center mt-2 mb-6">
              <span className="inline-block w-16 sm:w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37 0%, #2F3E46 100%)' }} />
            </div>
            <p 
              className="text-lg sm:text-2xl font-semibold text-gray-700"
            >
              Growing a brighter future together
            </p>
          </header>

          {/* Main content cards */}
          <main 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20 px-2 sm:px-0"
          >
            {/* Card 1 */}
            <section 
              className="rounded-2xl shadow-xl p-6 sm:p-10 border border-[#D4AF37] bg-white/60 backdrop-blur-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-16 h-16 sm:w-32 sm:h-32 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
              <div className="absolute -left-4 -bottom-4 w-12 h-12 sm:w-24 sm:h-24 rounded-full opacity-10" style={{ backgroundColor: '#2F3E46' }} />
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 mx-auto bg-[#D4AF37]/20">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="#D4AF37">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center" style={{ color: '#2F3E46' }}>
                BRIDGING INNOVATION AND EVERYDAY LIFE
              </h2>
              <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed mb-4">
                <span className="block mb-2 text-lg sm:text-xl font-bold" style={{ color: '#2F3E46' }}>INSPIRE NEXT GLOBAL INC.</span>
                <span className="block mb-2 text-sm sm:text-base" style={{ color: '#D4AF37' }}>BRINGING JAPAN CLOSER TO EVERY FILIPINO HOME AND BUSINESS</span>
                AT INSPIRE NEXT GLOBAL INC., WE BELIEVE THAT INNOVATION SHOULD BE INSPIRING, ATTAINABLE, AND LIFE-ENHANCING. WE EXIST TO BRIDGE THE DISTANCE BETWEEN JAPAN'S CUTTING-EDGE TECHNOLOGIES AND THE EVOLVING NEEDS OF FILIPINO INDIVIDUALS, FAMILIES, AND BUSINESSES.
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
                OUR JOURNEY STARTED WITH A CLEAR VISION: TO SHARE THE EXCELLENCE OF JAPANESE CRAFTSMANSHIP WITH THE PHILIPPINE MARKET. JAPAN IS KNOWN GLOBALLY FOR ITS ATTENTION TO DETAIL, SUPERIOR QUALITY, AND FORWARD-THINKING DESIGN.
              </p>
            </section>

            {/* Card 2 */}
            <section 
              className="rounded-2xl shadow-xl p-6 sm:p-10 border border-[#D4AF37] bg-white/60 backdrop-blur-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -left-4 -top-4 w-16 h-16 sm:w-32 sm:h-32 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
              <div className="absolute -right-4 -bottom-4 w-12 h-12 sm:w-24 sm:h-24 rounded-full opacity-10" style={{ backgroundColor: '#2F3E46' }} />
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 mx-auto bg-[#D4AF37]/20">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="#D4AF37">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center" style={{ color: '#2F3E46' }}>
                WHERE GLOBAL EXCELLENCE MEETS EVERYDAY LIFE
              </h2>
              <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed mb-4">
                WE UNDERSTAND THAT TRUST ISN'T EARNED OVERNIGHT. THAT'S WHY WE GO THE EXTRA MILE TO ENSURE EVERY ITEM WE BRING IN IS NOT ONLY HIGH IN QUALITY BUT ALSO PRICED WITH FAIRNESS IN MIND.
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
                MORE THAN A DISTRIBUTOR, WE SEE OURSELVES AS ENABLERS OF PROGRESS. WE WANT TO HELP FAMILIES FEEL MORE CONFIDENT. WE WANT TO HELP BUSINESSES GROW SMARTER. AND WE WANT EVERY INTERACTION WITH OUR BRAND TO FEEL PERSONAL, AUTHENTIC, AND ROOTED IN CARE.
              </p>
              <p className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 text-center" style={{ color: '#D4AF37' }}>
                BECAUSE FOR US, IT'S NOT JUST ABOUT IMPORTING PRODUCTS—IT'S ABOUT DELIVERING PURPOSE.
              </p>
            </section>
          </main>

          {/* Call to action */}
          <footer 
            className="rounded-2xl p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden bg-[#2F3E46]/95"
          >
            <div className="absolute -left-10 -top-10 w-32 h-32 sm:-left-20 sm:-top-20 sm:w-64 sm:h-64 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
            <div className="absolute -right-10 -bottom-10 w-32 h-32 sm:-right-20 sm:-bottom-20 sm:w-64 sm:h-64 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37' }} />
            <h2 
              className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 relative z-10"
              style={{ color: '#F8F9FA' }}
            >
              YOU WANT TO LEARN MORE ABOUT US?
            </h2>
            <p 
              className="mb-6 sm:mb-8 max-w-2xl mx-auto text-lg sm:text-xl font-semibold relative z-10"
              style={{ color: '#F8F9FA' }}
            >
             Come Meet Our Team
            </p>
            <Link href="/users">
              <button 
                className="font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-full transition-all duration-300 shadow-lg text-base sm:text-xl relative z-10"
                style={{ 
                  background: 'linear-gradient(90deg, #D4AF37 0%, #F8F9FA 100%)',
                  color: '#2F3E46',
                  border: '2px solid #D4AF37'
                }}
              >
                LEARN MORE ABOUT US
              </button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;