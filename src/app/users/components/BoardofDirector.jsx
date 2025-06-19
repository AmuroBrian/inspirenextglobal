"use client";
import React, { useState } from "react";

// Eco-friendly/green card backgrounds for Executive Directors
const executiveDirectors = [
  {
    name: "Melody Santos",
    position: "President",
    img: "/president.png",
    description: "Melody Santos is responsible for the overall leadership of the company, ensuring organizational direction and success.",
    contact: {
      email: "melody.santos@company.com",
      phone: "+1 555-0101",
    },
    cardBg: "linear-gradient(135deg, #d7fbe8 60%, #b9e7ce 100%)",
    imgBg: "url('/eco-bg.png'), linear-gradient(135deg, #b5e1c6 60%, #3ea96e 100%)"
  },
  {
    name: "Rhia Alberto",
    position: "Vice President",
    img: "/3.png",
    description: "Rhia Alberto assists in managing the company's strategic operations and supporting executive initiatives.",
    contact: {
      email: "rhia.alberto@company.com",
      phone: "+1 555-0102"
    },
    cardBg: "linear-gradient(135deg, #d7fbe8 60%, #b9e7ce 100%)",
    imgBg: "url('/eco-bg.png'), linear-gradient(135deg, #b5e1c6 60%, #3ea96e 100%)"
  },
  {
    name: "Andrei Bergano",
    position: "Executive Director",
    img: "/5.png",
    description: "Andrei Bergano oversees executive projects and supports the implementation of corporate policies.",
    contact: {
      email: "andrei.bergano@company.com",
      phone: "+1 555-0103"
    },
    cardBg: "linear-gradient(135deg, #d7fbe8 60%, #b9e7ce 100%)",
    imgBg: "url('/eco-bg.png'), linear-gradient(135deg, #b5e1c6 60%, #3ea96e 100%)"
  }
];

// Default greenish background for other cards
const defaultCardBg = "linear-gradient(135deg, #e7fbe7 60%, #e3f7db 100%)";
const defaultImgBg = "repeating-linear-gradient(135deg, #e0f7e9 0 20px, #d4efdf 20px 40px)";

const nonExecutiveDirectors = [
  {
    name: "Atty. Renato Pineda",
    position: "Non Executive Director",
    img: "/atty.png",
    description: "Atty. Renato Pineda is in charge of strategic financial planning and investment decisions for the organization.",
    contact: {
      email: "renato.pineda@company.com",
      phone: "+1 555-0104"
    }
  },
  {
    name: "Alfredo Reyes",
    position: "Non Executive Director",
    img: "/reyes.png",
    description: "Alfredo Reyes advises on company governance and compliance.",
    contact: {
      email: "alfredo.reyes@company.com",
      phone: "+1 555-0105"
    }
  },
  {
    name: "Ronaldo Castillo",
    position: "Non Executive Director",
    img: "/ronaldo.png",
    description: "Ronaldo Castillo provides oversight and guidance on technology and operations.",
    contact: {
      email: "ronaldo.castillo@company.com",
      phone: "+1 555-0106"
    }
  }
];

const corporateOperationOffice = [
  {
    name: "Carlos Perez",
    position: "Corporate Operations Head",
    img: "/13.png",
    description: "Carlos Perez oversees all operational processes and ensures smooth corporate functions.",
    contact: {
      email: "carlos.perez@company.com",
      phone: "+1 555-0107"
    }
  },
  {
    name: "Girlie De Asis",
    position: "HR Administrator",
    img: "/9.png",
    description: "Girlie manages all aspects of human resources, recruitment, and employee relations.",
    contact: {
      email: "girlie.deasis@company.com",
      phone: "+1 555-0108"
    }
  },
  {
    name: "Anne Colinares",
    position: "HR Assistant",
    img: "/11.png",
    description: "Anne is responsible for administrative support and office management.",
    contact: {
      email: "anne.colinares@company.com",
      phone: "+1 555-0109"
    }
  },
  {
    name: "Brian Perez",
    position: "IT Supervisor",
    img: "/7.png",
    description: "Brian supervises all IT operations, infrastructure, and security.",
    contact: {
      email: "brian.perez@company.com",
      phone: "+1 555-0110"
    }
  }
];

const secretaryTeam = [
  {
    name: "Shelah Reynaldo",
    position: "Secretary",
    img: "/17.png",
    description: "Shelah handles all corporate secretarial duties and documentation.",
    contact: {
      email: "shelah.reynaldo@company.com",
      phone: "+1 555-0115"
    }
  },
  {
    name: "Joanne Hermosura",
    position: "Secretary",
    img: "/19.png",
    description: "Joanne assists in secretarial tasks and maintains records.",
    contact: {
      email: "joanne.hermosura@company.com",
      phone: "+1 555-0116"
    }
  }
];

const auditTeam = [
  {
    name: "Raphael Jheremy Reyes",
    position: "Chief Audit Officer",
    img: "/15.png",
    description: "Raphael ensures compliance and oversees internal auditing processes.",
    contact: {
      email: "raphael.reyes@company.com",
      phone: "+1 555-0117"
    }
  }
];

const securityTeam = [
  {
    name: "Neil Brion",
    position: "Security Officer",
    img: "/21.png",
    description: "Neil oversees security protocols and ensures the safety of the organization.",
    contact: {
      email: "neil.brion@company.com",
      phone: "+1 555-0118"
    }
  }
];

// Card component
function DirectorCard({ member, expanded, onClick }) {
  const cardBg = member.cardBg || defaultCardBg;
  const imgBg = member.imgBg || defaultImgBg;

  return (
    <div
      className={`relative rounded-2xl shadow-xl flex flex-col items-center transition-all duration-300 cursor-pointer overflow-hidden border-2 border-[#ffffff] group hover:border-[#5bbd7a] ${
        expanded ? "z-20 scale-105 shadow-2xl border-[#3ea96e]" : ""
      }`}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      style={{ minHeight: 420, background: cardBg }}
    >
      <div
        className="w-full flex items-center justify-center"
        style={{
          height: "340px",
          padding: "0",
          boxSizing: "border-box",
          background: imgBg,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-contain"
          draggable={false}
          style={{
            objectFit: "contain",
            maxHeight: "340px",
            maxWidth: "100%",
            display: "block",
            margin: "0 auto",
            background: "rgba(215,251,232,0.85)"
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center px-6 py-5">
        <div className="uppercase text-xs text-[#3ea96e] font-bold tracking-wider mb-1">
          {member.position}
        </div>
        <div className="font-extrabold text-lg text-gray-900 mb-1">
          {member.name}
        </div>
        <div className="flex gap-3 mb-1">
          <a
            href={`mailto:${member.contact.email}`}
            className="text-[#3ea96e] hover:text-[#208704]"
            title="Email"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 4.84c-.01-.52.49-.89.99-.89h18c.5 0 1 .37.99.89l-.01 14.32c.01.53-.49.89-.99.89h-18c-.5 0-1-.36-.99-.89l.01-14.32zm2.18 1.16l7.81 7.01 7.78-7.01h-15.59zm15.81 1.41l-7.93 7.14a1 1 0 0 1-1.31 0l-7.95-7.14v11.01h17.19v-11.01z"/>
            </svg>
          </a>
        </div>
        <div className="text-xs text-gray-400">{member.contact.phone}</div>
        {expanded && (
          <div className="mt-5 w-full bg-[#e8f7ed] p-4 rounded-xl animate-fadeIn border border-[#b7e7d1] shadow-inner">
            <div className="text-gray-700 text-center text-sm">
              {member.description}
            </div>
          </div>
        )}
      </div>
      {expanded && (
        <button
          tabIndex={-1}
          className="absolute top-3 right-3 bg-[#3ea96e] text-white text-xs px-2 py-1 rounded focus:outline-none"
          onClick={e => {
            e.stopPropagation();
            onClick();
          }}
        >
          Close
        </button>
      )}
    </div>
  );
}

export default function BoardofDirector() {
  const [expandedExec, setExpandedExec] = useState(null);
  const [expandedNonExec, setExpandedNonExec] = useState(null);
  const [expandedCorpOps, setExpandedCorpOps] = useState(null);
  const [expandedSecretary, setExpandedSecretary] = useState(null);
  const [expandedAudit, setExpandedAudit] = useState(null);
  const [expandedSecurity, setExpandedSecurity] = useState(null);

  return (
    <main className="py-0 px-0 min-h-screen bg-[#ffffff]">
      {/* HERO TITLE SECTION FOR BOARD OF DIRECTORS */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          minHeight: "260px",
          background: "#8db249", // eco-friendly green
        }}
      >
        <div className="w-full max-w-6xl mx-auto text-center pt-12 pb-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight" style={{letterSpacing: "-0.03em"}}>
            Board of Directors
          </h1>
          <div className="w-16 h-1 bg-white mx-auto mb-2 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-10 px-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Executive Directors</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveDirectors.map((member, i) => (
            <DirectorCard
              key={member.name}
              member={member}
              expanded={expandedExec === i}
              onClick={() => setExpandedExec(expandedExec === i ? null : i)}
            />
          ))}
        </section>
      </div>
      <div className="max-w-7xl mx-auto mb-10 px-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Non-Executive Directors</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonExecutiveDirectors.map((member, i) => (
            <DirectorCard
              key={member.name}
              member={member}
              expanded={expandedNonExec === i}
              onClick={() => setExpandedNonExec(expandedNonExec === i ? null : i)}
            />
          ))}
        </section>
      </div>
      <div className="max-w-7xl mx-auto mb-10 px-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Corporate Operation Office</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {corporateOperationOffice.map((member, i) => (
            <DirectorCard
              key={member.name}
              member={member}
              expanded={expandedCorpOps === i}
              onClick={() => setExpandedCorpOps(expandedCorpOps === i ? null : i)}
            />
          ))}
        </section>
      </div>
      <div className="max-w-7xl mx-auto mb-10 px-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Audit</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {auditTeam.map((member, i) => (
            <DirectorCard
              key={member.name}
              member={member}
              expanded={expandedAudit === i}
              onClick={() => setExpandedAudit(expandedAudit === i ? null : i)}
            />
          ))}
        </section>
      </div>
      <div className="max-w-7xl mx-auto mb-10 px-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Secretary</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {secretaryTeam.map((member, i) => (
            <DirectorCard
              key={member.name}
              member={member}
              expanded={expandedSecretary === i}
              onClick={() => setExpandedSecretary(expandedSecretary === i ? null : i)}
            />
          ))}
        </section>
      </div>
      <div className="max-w-7xl mx-auto mb-10 px-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Security</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityTeam.map((member, i) => (
            <DirectorCard
              key={member.name}
              member={member}
              expanded={expandedSecurity === i}
              onClick={() => setExpandedSecurity(expandedSecurity === i ? null : i)}
            />
          ))}
        </section>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px);}
          100% { opacity: 1; transform: none;}
        }
      `}</style>
    </main>
  );
}