"use client";
import React, { useState } from "react";

// Data arrays (add your images as needed)
const executiveDirectors = [
  {
    name: "Melody Santos",
    position: "President",
    img: "/pres.png",
    description: "Bob is responsible for leading the creative vision of the company. He specializes in branding and marketing initiatives.",
    contact: {
      email: "bob.brown@company.com",
      phone: "+1 555-0101",
    }
  },
  {
    name: "Rhia Alberto",
    position: "Vice President",
    img: "/3.png",
    description: "Mary oversees all accounting operations and ensures accurate financial reporting for the company.",
    contact: {
      email: "mary.smith@company.com",
      phone: "+1 555-0102"
    }
  },
  {
    name: "Andrei Bergano",
    position: "Executive Director",
    img: "/5.png",
    description: "Nick manages the sales team and is dedicated to expanding the company’s client base and driving revenue growth.",
    contact: {
      email: "nick.dark@company.com",
      phone: "+1 555-0103"
    }
  }
];

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
    description: "Alfredo Reyes ensures the company’s branding is consistent and visually appealing.",
    contact: {
      email: "alfredo.reyes@company.com",
      phone: "+1 555-0105"
    }
  },
  {
    name: "Ronaldo Castillo",
    position: "Non Executive Director",
    img: "/ronaldo.png",
    description: "Ronaldo Castillo is responsible for software development and maintaining the company’s digital infrastructure.",
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

const marketingTeam = [
  {
    name: "Jasmine Cruz",
    position: "Marketing Head",
    img: "/marketing1.png",
    description: "Jasmine leads the marketing strategies and campaigns for the company.",
    contact: {
      email: "jasmine.cruz@company.com",
      phone: "+1 555-0111"
    }
  },
  {
    name: "Marco Rivera",
    position: "Marketing Associate",
    img: "/marketing2.png",
    description: "Marco supports the planning and execution of marketing initiatives.",
    contact: {
      email: "marco.rivera@company.com",
      phone: "+1 555-0112"
    }
  },
  {
    name: "Lara Mendoza",
    position: "Social Media Specialist",
    img: "/marketing3.png",
    description: "Lara manages social media campaigns and engagement.",
    contact: {
      email: "lara.mendoza@company.com",
      phone: "+1 555-0113"
    }
  },
  {
    name: "Daniel Ong",
    position: "Content Creator",
    img: "/marketing4.png",
    description: "Daniel develops creative content for various marketing channels.",
    contact: {
      email: "daniel.ong@company.com",
      phone: "+1 555-0114"
    }
  }
];

const secretaryTeam = [
  {
    name: "Shelah Reynaldo",
    position: "Secretary",
    img: "/17.png",
    description: "Mila handles all corporate secretarial duties and documentation.",
    contact: {
      email: "mila.garcia@company.com",
      phone: "+1 555-0115"
    }
  },
  {
    name: "Joanne Hermosura",
    position: "Secretary",
    img: "/19.png",
    description: "Paolo assists in secretarial tasks and maintains records.",
    contact: {
      email: "paolo.dizon@company.com",
      phone: "+1 555-0116"
    }
  }
];

const auditTeam = [
  {
    name: "Sofia Ramos",
    position: "Internal Auditor",
    img: "/audit1.png",
    description: "Sofia ensures compliance and oversees internal auditing processes.",
    contact: {
      email: "sofia.ramos@company.com",
      phone: "+1 555-0117"
    }
  }
];

const securityTeam = [
  {
    name: "Luis Santiago",
    position: "Chief Security Officer",
    img: "/security.png",
    description: "Luis oversees security protocols and ensures the safety of the organization.",
    contact: {
      email: "luis.santiago@company.com",
      phone: "+1 555-0118"
    }
  }
];

// Card component
function DirectorCard({ member, expanded, onClick }) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-xl flex flex-col items-center transition-all duration-300 cursor-pointer overflow-hidden border-2 border-[#f1f1f1] group hover:border-[#b99a5b] ${
        expanded ? "z-20 scale-105 shadow-2xl border-[#b99a5b]" : ""
      }`}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      style={{ minHeight: 420 }}
    >
      <div
        className="w-full flex items-center justify-center bg-[#f6f6f6]"
        style={{
          height: "340px",
          padding: "0",
          boxSizing: "border-box"
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
            background: "#f6f6f6"
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center px-6 py-5">
        <div className="uppercase text-xs text-[#b99a5b] font-bold tracking-wider mb-1">
          {member.position}
        </div>
        <div className="font-extrabold text-lg text-gray-900 mb-1">
          {member.name}
        </div>
        <div className="flex gap-3 mb-1">
          <a
            href={`mailto:${member.contact.email}`}
            className="text-[#b99a5b] hover:text-[#b18517]"
            title="Email"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 4.84c-.01-.52.49-.89.99-.89h18c.5 0 1 .37.99.89l-.01 14.32c.01.53-.49.89-.99.89h-18c-.5 0-1-.36-.99-.89l.01-14.32zm2.18 1.16l7.81 7.01 7.78-7.01h-15.59zm15.81 1.41l-7.93 7.14a1 1 0 0 1-1.31 0l-7.95-7.14v11.01h17.19v-11.01z" />
            </svg>
          </a>
        </div>
        <div className="text-xs text-gray-400">{member.contact.phone}</div>
        {expanded && (
          <div className="mt-5 w-full bg-[#f6f2e7] p-4 rounded-xl animate-fadeIn border border-[#f5e2c2] shadow-inner">
            <div className="text-gray-700 text-center text-sm">
              {member.description}
            </div>
          </div>
        )}
      </div>
      {expanded && (
        <button
          tabIndex={-1}
          className="absolute top-3 right-3 bg-[#b99a5b] text-white text-xs px-2 py-1 rounded focus:outline-none"
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
  const [expandedMarketing, setExpandedMarketing] = useState(null);
  const [expandedSecretary, setExpandedSecretary] = useState(null);
  const [expandedAudit, setExpandedAudit] = useState(null);
  const [expandedSecurity, setExpandedSecurity] = useState(null);

  return (
    <main className="py-16 px-2 min-h-screen" style={{ background: "linear-gradient(to bottom, #f8f8f9, #f6f2e7 60%, #f8f8f9 100%)" }}>
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-[#b99a5b] mb-2 tracking-wide">Our Board of Directors</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Meet the talented professionals who guide and drive the vision of our organization.
        </p>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Marketing</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingTeam.map((member, i) => (
            <DirectorCard
              key={member.name}
              member={member}
              expanded={expandedMarketing === i}
              onClick={() => setExpandedMarketing(expandedMarketing === i ? null : i)}
            />
          ))}
        </section>
      </div>

      {/* --- Switch Audit and Secretary position --- */}
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

      {/* --- Security Section --- */}
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