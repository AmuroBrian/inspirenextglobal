"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from 'emailjs-com';
import axios from 'axios';

// Updated job data
const jobs = [
  {
    id: 1,
    title: "Sales Agent",
    type: "Part-time, Commission-based",
    description: "We're seeking motivated Sales Agents to join our team on a commission-based, part-time basis. In this role, you'll help grow our business by connecting clients with our repair services and earning a percentage of each closed project. This is a flexible opportunity—you can work on your own schedule while earning competitive commissions once projects are completed.",
    details: (
      <div>
        <strong>Key Responsibilities:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Prospect and engage potential clients for our repair services</li>
          <li>Present service offerings and close deals with new and existing customers</li>
          <li>Earn a commission percentage upon successful project completion</li>
          <li>Maintain client relationships and follow up to ensure satisfaction</li>
          <li>Collaborate with our operations team to ensure smooth project handoffs</li>
        </ul>
        <strong>Qualifications:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Previous sales experience (any industry, B2B/B2C)</li>
          <li>Strong communication and negotiation skills</li>
          <li>Self-motivated with a results-driven mindset</li>
          <li>Ability to build rapport with clients</li>
          <li>No fixed employment commitment—perfect for freelancers, part-timers, or those seeking extra income</li>
        </ul>
        <strong>Why Join Us?</strong>
        <ul className="list-disc list-inside">
          <li>Lucrative commission structure – Earn a percentage of each project you bring in</li>
          <li>Flexible, part-time work – No fixed hours; work when it suits you</li>
          <li>Performance-driven rewards – The more you sell, the more you earn</li>
          <li>Ongoing support – Access to company resources and leads (as available)</li>
        </ul>
      </div>
    )
  },
  {
    id: 2,
    title: "Sales Associate",
    type: "Full-time",
    description: "Join our dynamic sales team as a Sales Associate where you'll engage with customers, understand their needs, and promote our products/services. This role is perfect for outgoing individuals with a passion for customer service and sales. You'll be the face of our company to many of our customers, helping them find solutions that meet their needs while driving revenue for our business.",
    details: (
      <div>
        <strong>Key Responsibilities:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Build and maintain customer relationships</li>
          <li>Present and demonstrate product features</li>
          <li>Meet and exceed sales targets</li>
          <li>Process sales transactions accurately</li>
          <li>Stay current with product knowledge and promotions</li>
        </ul>
        <strong>Qualifications:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Proven sales experience in retail or similar environment</li>
          <li>Excellent communication and interpersonal skills</li>
          <li>Ability to work in a fast-paced environment</li>
          <li>Basic computer proficiency</li>
          <li>Willingness to work flexible hours including weekends</li>
        </ul>
        <strong>Why Join Us?</strong>
        <ul className="list-disc list-inside">
          <li>Competitive salary with commission structure</li>
          <li>Comprehensive training program</li>
          <li>Career advancement opportunities</li>
          <li>Employee discount program</li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    title: "Admin Assistant",
    type: "Full-time",
    description: "Support daily office operations, manage documents, and assist with administrative tasks.",
    details: (
      <div>
        <strong>Responsibilities:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Organize files, schedule meetings, handle correspondence, and support various departments.</li>
        </ul>
        <strong>Requirements:</strong>
        <ul className="list-disc list-inside">
          <li>Bachelor's degree in Human Resource Management, Office Management, or any related field is preferred.</li>
          <li>Excellent written and verbal communication skills.</li>
          <li>Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint, Teams)</li>
          <li>Knowledgeable in SEC, DTI, and BIR registration</li>
          <li>Amenable to work in BGC and with own laptop</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    title: "On-the-Job Trainee (OJT)",
    type: "Internship / OJT",
    description: "We're offering On-the-Job Training opportunities for students looking to gain real-world experience in a professional setting. This program provides hands-on training in various departments including Admin, Sales & Marketing, Accounting and Information Technology. Trainees will work alongside experienced professionals and receive mentorship while contributing to real projects.",
    details: (
      <div>
        <strong>Key Responsibilities:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Assist with day-to-day operations in assigned department</li>
          <li>Complete assigned projects and tasks</li>
          <li>Participate in training sessions and meetings</li>
          <li>Maintain professional conduct in the workplace</li>
          <li>Submit required reports and documentation</li>
        </ul>
        <strong>Qualifications:</strong>
        <ul className="list-disc list-inside mb-2">
          <li><span style={{ fontWeight: 'bold', color: '#3ea96e' }}>College Courses:</span> Business Administration, Marketing, Accountancy, Information Technology, or related fields</li>
          <li>Currently enrolled in a relevant college/university program</li>
          <li>Minimum 2nd year standing</li>
          <li>Willingness to learn and take direction</li>
          <li>Basic computer skills</li>
          <li>Good communication skills</li>
        </ul>
        <strong>Why Join Us?</strong>
        <ul className="list-disc list-inside">
          <li>Practical work experience</li>
          <li>Exposure to corporate environment</li>
          <li>Potential for future employment</li>
          <li>Certificate of completion</li>
          <li>Mentorship from experienced professionals</li>
        </ul>
      </div>
    )
  }
];

function HeroSection() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-[#f0f9ee] to-[#e0f3e0] text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#3ea96e] mb-6 tracking-tight">
          Join Our Team
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          At Inspire Next Global, we're always looking for talented individuals who are passionate about making a difference. Explore our open positions and start your journey with us!
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#3ea96e] to-[#8db249] mx-auto mb-2 rounded-full" />
      </div>
    </section>
  );
}

function JobCard({ job, onApply, expanded, onExpand }) {
  return (
    <motion.div
      layout
      className={`relative bg-white rounded-2xl shadow-lg border border-[#e0f3e0] flex flex-col transition-all duration-200 overflow-hidden group ${expanded ? "z-20 scale-[1.01] border-[#3ea96e]" : "hover:shadow-xl"}`}
      style={{ minHeight: 340 }}
    >
      {/* Accent Bar */}
      <div className="h-2 w-full bg-gradient-to-r from-[#3ea96e] to-[#8db249]" />
      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-2xl font-bold text-[#3ea96e] mb-1">{job.title}</h2>
        <div className="text-[#8db249] text-sm font-semibold mb-2">{job.type}</div>
        <div className="text-gray-700 mb-4 min-h-[56px]">{job.description}</div>
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <button
            className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#3ea96e] text-white font-semibold hover:bg-[#2c774b] transition"
            onClick={() => onApply(job)}
          >
            Apply
          </button>
          <button
            className="w-full sm:w-auto px-5 py-2 rounded-full border border-[#3ea96e] text-[#3ea96e] font-semibold hover:bg-[#f0f9ee] transition"
            onClick={onExpand}
          >
            {expanded ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden px-6 pb-6 text-gray-800"
          >
            <div className="mt-4 p-4 bg-[#f5fcf6] rounded-xl border border-[#e0f3e0]">
              {typeof job.details === 'string' ? (
                job.details.split('\n').map((line, idx) => <div key={idx}>{line}</div>)
              ) : (
                job.details
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ApplicationForm({ job, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", pdf_link: "", cover: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const templateParams = {
      name: form.name,
      time: new Date().toLocaleString(),
      position: job.title,
      email: form.email,
      phone: form.phone,
      message: form.cover,
      pdf_link: '' // No file upload
    };
    emailjs.send(
      'service_q8c3lqb',
      'template_2rqgc1o',
      templateParams,
      '8nV8GppQ82RWajpEo'
    ).then(
      (response) => {
        setSubmitted(true);
        setLoading(false);
      },
      (err) => {
        console.error('EmailJS send error:', err);
        setError("Failed to send application.");
        setLoading(false);
      }
    );
  }

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-[#3ea96e] mb-4">Thank you for applying!</h2>
        <p className="text-gray-700 mb-6">We have received your application for <b>{job.title}</b>. Our team will review your submission and get back to you soon.</p>
        <button className="px-6 py-2 rounded-full bg-[#3ea96e] text-white font-semibold" onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <form className="space-y-5 p-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-[#3ea96e] mb-4">Apply for {job.title}</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <div>
        <label className="block text-gray-700 mb-1">Full Name</label>
        <input type="text" name="name" required className="w-full border rounded px-3 py-2" value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input type="email" name="email" required className="w-full border rounded px-3 py-2" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Phone</label>
        <input type="tel" name="phone" className="w-full border rounded px-3 py-2" value={form.phone} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Cover Letter</label>
        <textarea name="cover" rows={4} className="w-full border rounded px-3 py-2" value={form.cover} onChange={handleChange} />
      </div>
      <div className="flex gap-3">
        <button type="submit" className="px-6 py-2 rounded-full bg-[#3ea96e] text-white font-semibold" disabled={loading}>{loading ? "Submitting..." : "Submit Application"}</button>
        <button type="button" className="px-6 py-2 rounded-full border border-[#3ea96e] text-[#3ea96e] font-semibold" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

export default function Apply() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [applyingJob, setApplyingJob] = useState(null);

  return (
    <main className="min-h-screen bg-[#f5fcf6] bg-[url('/green-texture.png')] bg-fixed bg-cover bg-no-repeat bg-blend-overlay">
      <HeroSection />
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-[#3ea96e] mb-8 text-center">Open Positions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {jobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              expanded={expandedJob === job.id}
              onExpand={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
              onApply={setApplyingJob}
            />
          ))}
        </div>
        {jobs.length === 0 && (
          <div className="text-center text-gray-500">No open positions at this time. Please check back later!</div>
        )}
      </section>
      <AnimatePresence>
        {applyingJob && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-lg w-full mx-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <ApplicationForm job={applyingJob} onClose={() => setApplyingJob(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}