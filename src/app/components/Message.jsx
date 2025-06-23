'use client';

import Image from 'next/image';

export default function TestimonialCard() {
  return (
    <div className="flex flex-col md:flex-row mt-16 mb-16 rounded-2xl overflow-hidden bg-white/60 max-w-6xl mx-auto shadow-2xl border-2 border-[#D4AF37] backdrop-blur-lg transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
      
      {/* Left side: Text Content */}
      <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-between">
        {/* Elegant Quote background */}
        <div className="absolute top-4 left-4 text-[8rem] text-[#D4AF37]/15 leading-none select-none z-0 font-serif">
          &ldquo;
        </div>

        {/* Actual Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2F3E46] mb-2 tracking-tight">
              Message from the <span className="text-[#D4AF37]">President</span>
            </h2>
            <div className="space-y-4">
              <p className="text-[#2F3E46]/90 text-lg md:text-xl leading-relaxed">
                Since 2012, INSPIRE NEXT GLOBAL Inc. has gained favor among prominent conglomerates, engaging in a wide range of activities, including microfinance, real estate development, sales, management, and national infrastructure projects.
              </p>
              <p className="text-[#2F3E46]/90 text-lg md:text-xl leading-relaxed">
                All of this is thanks to everyone, and we never forget to express our gratitude to all our employees. Our company is committed to creating happiness for everyone and contributing to a prosperous life.
              </p>
            </div>
          </div>

          {/* Name and Title */}
          <div className="pt-6">
            <p className="font-bold text-[#2F3E46] text-xl md:text-2xl">Melody Santos</p>
            <p className="text-[#2F3E46]/80 text-lg md:text-xl">President</p>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-96 bg-[#D4AF37]/20 flex-shrink-0 relative">
        <div className="relative w-full h-80 md:h-full">
          <Image
            src="/presi.png"
            alt="President Melody Santos"
            fill
            className="object-cover object-top border-l-4 border-[#D4AF37]"
            style={{ boxShadow: '0 4px 32px 0 rgba(212,175,55,0.10)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
