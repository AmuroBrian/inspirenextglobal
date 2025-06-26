"use client";
import React, { useState } from "react";

// About Section Component
function AboutInspireNextGlobal() {
  return (
    <section className="w-full py-16 px-4 relative overflow-hidden bg-gradient-to-br from-[#f0f9ee] to-[#e0f3e0]">
      <div className="max-w-5xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3ea96e] tracking-tight">
          About <span className="text-[#2c774b]">Inspire Next Global</span> Inc.
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3ea96e] tracking-tight">
        Bringing Japan Closer to  <span className="text-[#2c774b]">Every Filipino Home and Business</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#3ea96e] to-[#8db249] mx-auto mb-8" />
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
        Guided by a visionary Board of Directors, Inspire Next Global Inc. was founded with a clear mission: to bring Japan’s trusted innovation closer to the lives of Filipino families and businesses. Under the board’s strategic leadership, we are driven by a deep belief that innovation should be inspiring, attainable, and life-enhancing.

Our directors uphold a commitment to excellence, ensuring that every product we offer—whether it’s skincare backed by science, digital tools that boost productivity, or energy-saving technologies—is thoughtfully selected to meet the evolving needs of the Philippine market. Each decision reflects Japan’s legacy of precision, simplicity, and durability, while staying grounded in the realities of everyday Filipino life.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
        More than overseeing operations, our board sets the tone for a company culture built on trust, fairness, and purpose. They champion our mission to provide not just products, but solutions that make a difference—empowering individuals to feel confident, enabling businesses to grow smarter, and supporting a more sustainable future for all.

At Inspire Next, premium meets practical. Under the guidance of our board, we continue to deliver purposeful innovation—where Japan’s global excellence finds a meaningful home in the Philippines.


        </p>
      </div>
    </section>
  );
}

// Section Header Component
function SectionHeader({ title, subtitle, color = "#3ea96e", className = "" }) {
  return (
    <div className={`text-center mb-12 px-4 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight" style={{ color }}>
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="flex justify-center mt-4">
        <div className="w-12 h-1 rounded-full" style={{ background: `linear-gradient(to right, ${color}, ${color}80)` }} />
      </div>
    </div>
  );
}

// Optimized Card Component with Centered Text
function DirectorCard({ member, expanded, onClick }) {
  const accentColor = member.accentColor || "#5bbd7a";

  return (
    <div
      className={`relative rounded-2xl border-2 flex flex-col transition-all duration-300 cursor-pointer overflow-hidden group bg-white ${
        expanded ? "z-20 scale-[1.02] border-[" + accentColor + "]" : "border-[#e0e0e0]"
      } ${member.position === "President" ? "lg:col-span-3" : ""}`}
      onClick={onClick}
      style={{ height: expanded ? 'auto' : '420px' }}
    >
      {/* IMAGE SECTION */}
      <div className="w-full flex items-center justify-center relative aspect-square" style={{ height: "320px", background: "#f0f9ee" }}>
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 m-0 p-0"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(215,251,232,0.85)"
          }}
        />
      </div>
      {/* TEXT SECTION */}
      <div className="w-full flex flex-col items-center justify-center px-4 py-4 text-center">
        <div
          className="uppercase text-xs font-bold tracking-wider mb-1 w-full text-gray-500"
          style={{ color: accentColor }}
        >
          {member.position}
        </div>
        <h3 className="font-extrabold text-lg text-gray-900 w-full mb-2">
          {member.name}
        </h3>
        {expanded && (
          <div
            className="mt-3 w-full p-4 rounded-xl animate-fadeIn shadow-inner bg-gray-50 border border-gray-200"
          >
            <div className="text-gray-700 text-sm text-center">
              {member.description}
            </div>
          </div>
        )}
      </div>
      {expanded && (
        <button
          className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full focus:outline-none transition-colors"
          style={{ backgroundColor: accentColor, color: 'white' }}
          onClick={e => {
            e.stopPropagation();
            onClick();
          }}
        >
          ✕
        </button>
      )}
      {!expanded && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-current transition-all duration-300"
          style={{ color: accentColor }}
        />
      )}
    </div>
  );
}

// Team Section Component
function TeamSection({ title, members, expandedIndex, setExpandedIndex, cols = "3", accentColor }) {
  const gridClasses = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className="max-w-7xl mx-auto mb-16 px-0">
      <h3 
        className="text-2xl font-semibold mb-8 pb-2 border-b text-center"
        style={{ 
          color: accentColor,
          borderColor: `${accentColor}30`
        }}
      >
        {title}
      </h3>
      <div className={`grid ${gridClasses[cols]} gap-4 px-4`}>
        {members.map((member, i) => (
          <div key={member.name} className="h-full">
            <DirectorCard
              member={member}
              expanded={expandedIndex === i}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Data
const president = {
  name: "Melody Santos",
  position: "President",
  img: "/presi.png",
  description: "As President, Melody Santos provides visionary leadership and is responsible for the overall strategic direction, growth, and success of the company. She oversees all organizational operations, fosters innovation, and ensures Inspire Next Global remains aligned with its mission and values.",
  cardBg: "linear-gradient(135deg, rgba(215,251,232,0.9) 0%, rgba(185,231,206,0.95) 100%)",
  imgBg: "url('/eco-bg.png'), linear-gradient(135deg, #b5e1c6 60%, #3ea96e 100%)",
  accentColor: "#3ea96e"
};

const otherExecutives = [
  {
    name: "Rhia Alberto",
    position: "Vice President",
    img: "/3.png",
    description: "As Vice President, Rhia Alberto supports the President in implementing corporate strategies and managing key initiatives. She plays a pivotal role in operational oversight, strategic planning, and cross-departmental coordination to drive organizational success.",
    cardBg: "linear-gradient(135deg, rgba(215,251,232,0.9) 0%, rgba(185,231,206,0.95) 100%)",
    imgBg: "url('/eco-bg.png'), linear-gradient(135deg, #b5e1c6 60%, #3ea96e 100%)",
    accentColor: "#3ea96e"
  },
  {
    name: "Andrei Bergano",
    position: "Executive Director",
    img: "/5.png",
    description: "As Executive Director, Andrei Bergano leads key executive projects, ensures effective implementation of corporate policies, and collaborates with other executives to promote organizational efficiency and performance.",
    cardBg: "linear-gradient(135deg, rgba(215,251,232,0.9) 0%, rgba(185,231,206,0.95) 100%)",
    imgBg: "url('/eco-bg.png'), linear-gradient(135deg, #b5e1c6 60%, #3ea96e 100%)",
    accentColor: "#3ea96e"
  }
];

const nonExecutiveDirectors = [
  {
    name: "Atty. Renato Pineda",
    position: "Non Executive Director",
    img: "/atty.png",
    description: "As Non Executive Director, Atty. Renato Pineda provides independent oversight and guidance on financial strategy, investment decisions, and corporate governance, ensuring the company's long-term sustainability and compliance.",
    accentColor: "#4a8cbf"
  },
  {
    name: "Alfredo Reyes",
    position: "Non Executive Director",
    img: "/reyes.png",
    description: "As Non Executive Director, Alfredo Reyes offers impartial advice on governance and compliance matters, supporting the board in maintaining high standards of accountability and ethical practice.",
    accentColor: "#4a8cbf"
  },
  {
    name: "Ronaldo Castillo",
    position: "Non Executive Director",
    img: "/ronaldo.png",
    description: "As Non Executive Director, Ronaldo Castillo provides expert oversight and independent guidance on technology initiatives and operations, helping to drive innovation and efficiency within the company.",
    accentColor: "#4a8cbf"
  }
];

const corporateOperationOffice = [
  {
    name: "Carlos Perez",
    position: "Chief of Career Track Officer",
    img: "/13.png",
    description: "As Chief of Career Track Officer, Carlos Perez designs, manages, and leads career development programs, ensuring employees have clear pathways for growth and advancement within the organization.",
    accentColor: "#8a6bbd"
  },
  {
    name: "Girlie De Asis",
    position: "HR Administrator",
    img: "/9.png",
    description: "As HR Administrator, Girlie De Asis manages all human resources functions, including recruitment, benefits, employee relations, and compliance, fostering a productive and supportive workplace.",
    accentColor: "#8a6bbd"
  },
  {
    name: "Anne Colinares",
    position: "HR Assistant",
    img: "/11.png",
    description: "As HR Assistant, Anne Colinares provides essential support in HR operations, assisting with records management, employee onboarding, and daily administrative tasks.",
    accentColor: "#8a6bbd"
  },
  {
    name: "Brian Perez",
    position: "Chief of Technology Officer",
    img: "/7.png",
    description: "As Chief of Technology Officer, Brian Perez leads the technology strategy, oversees IT infrastructure, and ensures the secure and effective use of technological resources across the company.",
    accentColor: "#8a6bbd"
  }
];

const secretaryTeam = [
  {
    name: "Shelah Reynaldo",
    position: "Secretary",
    img: "/17.png",
    description: "As Secretary, Shelah Reynaldo manages all corporate secretarial functions, including meeting documentation, legal filings, and effective communication between the board and stakeholders.",
    accentColor: "#d67e5b"
  },
  {
    name: "Joanne Hermosura",
    position: "Secretary",
    img: "/19.png",
    description: "As Secretary, Joanne Hermosura assists in maintaining meticulous records, coordinating meetings, and supporting the organization's administrative needs.",
    accentColor: "#d67e5b"
  }
];

const auditTeam = [
  {
    name: "Raphael Jheremy Reyes",
    position: "Chief Audit Officer",
    img: "/15.png",
    description: "As Chief Audit Officer, Raphael Jheremy Reyes leads the internal audit function, ensuring regulatory compliance, identifying risks, and improving internal controls to support transparency and accountability.",
    accentColor: "#bd5b7a"
  }
];

const securityTeam = [
  {
    name: "Neil Brion",
    position: "Security Officer",
    img: "/21.png",
    description: "As Security Officer, Neil Brion manages and enforces security policies, oversees safety protocols, and ensures a secure environment for all employees and assets across the organization.",
    accentColor: "#5b8cbd"
  }
];

export default function BoardofDirector() {
  const [expandedPresident, setExpandedPresident] = useState(null);
  const [expandedExec, setExpandedExec] = useState(null);
  const [expandedNonExec, setExpandedNonExec] = useState(null);
  const [expandedCorpOps, setExpandedCorpOps] = useState(null);
  const [expandedSecretary, setExpandedSecretary] = useState(null);
  const [expandedAudit, setExpandedAudit] = useState(null);
  const [expandedSecurity, setExpandedSecurity] = useState(null);

  return (
    <main className="min-h-screen bg-[#f5fcf6] bg-[url('/green-texture.png')] bg-fixed bg-cover bg-no-repeat bg-blend-overlay">
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center relative overflow-hidden min-h-[320px] bg-gradient-to-br from-[#3ea96e] to-[#8db249] mb-10">
        <div className="w-full max-w-6xl mx-auto text-center py-16 px-4 relative">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
           Inspire Insights
          </h1>
          <div className="w-24 h-1.5 bg-white/80 mt-10 mx-auto mb-2 rounded-full" />
          <p className="text-xl text-white/90 mt-15 max-w-2xl mx-auto">
            Meet the leadership team driving innovation and excellence
          </p>
        </div>
      </div>

      <AboutInspireNextGlobal />

      <SectionHeader 
        title="Meet Our Leadership Team" 
        subtitle="Dedicated professionals guiding Inspire Next Global to new heights"
        color="#3ea96e"
        className="mt-10"
      />

      {/* President Section */}
      <TeamSection
        title="President"
        members={[president]}
        expandedIndex={expandedPresident}
        setExpandedIndex={setExpandedPresident}
        cols="3"
        accentColor="#3ea96e"
      />

      {/* Executive Leadership */}
      <TeamSection
        title="Executive Leadership"
        members={otherExecutives}
        expandedIndex={expandedExec}
        setExpandedIndex={setExpandedExec}
        accentColor="#3ea96e"
      />

      {/* Other Team Sections */}
      <TeamSection
        title="Non‑Executive Directors"
        members={nonExecutiveDirectors}
        expandedIndex={expandedNonExec}
        setExpandedIndex={setExpandedNonExec}
        accentColor="#4a8cbf"
      />

      <TeamSection
        title="Corporate Operation Office"
        members={corporateOperationOffice}
        expandedIndex={expandedCorpOps}
        setExpandedIndex={setExpandedCorpOps}
        cols="4"
        accentColor="#8a6bbd"
      />

      <TeamSection
        title="Audit"
        members={auditTeam}
        expandedIndex={expandedAudit}
        setExpandedIndex={setExpandedAudit}
        cols="4"
        accentColor="#bd5b7a"
      />

      <TeamSection
        title="Secretary"
        members={secretaryTeam}
        expandedIndex={expandedSecretary}
        setExpandedIndex={setExpandedSecretary}
        cols="4"
        accentColor="#d67e5b"
      />

      <TeamSection
        title="Security"
        members={securityTeam}
        expandedIndex={expandedSecurity}
        setExpandedIndex={setExpandedSecurity}
        cols="4"
        accentColor="#5b8cbd"
      />

      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: none; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </main>
  );
}