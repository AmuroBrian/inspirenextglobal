"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import jsPDF from "jspdf";

// --- JOBS DATA ---
const jobs = [
  {
    id: 1,
    title: "Sales Agent",
    type: "Part-time, Commission-based",
    description: "We're seeking motivated Sales Agents to join our team on a commission-based, part-time basis.",
    details: (
      <div>
        <strong>Key Responsibilities:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Prospect and engage potential clients</li>
          <li>Present service offerings and close deals</li>
          <li>Earn commission on completed projects</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "On-the-Job Trainee (OJT)",
    type: "Internship, Training",
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
          <li>Currently enrolled in a relevant college/university program</li>
          <li>Minimum 2nd year standing</li>
          <li>Willingness to learn and take direction</li>
          <li>Basic computer skills</li>
          <li>Good communication skills</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Sales Associate",
    type: "Full-time,Onsite,Marketing",
    description: "We're offering On-the-Job Training opportunities for students looking to gain real-world experience in a professional setting. This program provides hands-on training in various departments including Admin, Sales & Marketing, Accounting and Information Technology. Trainees will work alongside experienced professionals and receive mentorship while contributing to real projects.",
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
          <li>Willingness to learn and take direction</li>
          <li>Ability to work in a fast-paced environment</li>
          <li>Basic computer proficiency</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: "Admin Assistant",
    type: "Full-time,Onsite,Admin",
    description: "We are seeking a highly organized and proactive Administrative Assistant to provide top-tier support to our executives. In this role, you will ensure seamless office operations by managing schedules, handling compliance documentation (SEC/DTI/BIR), and maintaining efficient systems. As the professional face of our office, your attention to detail and strong communication skills will be key to keeping workflows running smoothly.",
    details: (
      <div>
        <strong>Key Responsibilities:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Manage executive calendars, appointments, and correspondence</li>
          <li>Prepare, organize, and file compliance documents (SEC, DTI, BIR)</li>
          <li>Maintain an efficient filing and documentation system</li>
          <li>Assist in office coordination and administrative tasks</li>
          <li>Serve as a professional liaison for internal and external stakeholders</li>
        </ul>
        <strong>Qualifications:</strong>
        <ul className="list-disc list-inside mb-2">
          <li>Bachelor's degree in Human Resource Management, Office Administration, or related field (preferred)</li>
          <li>Excellent written and verbal communication skills (English and Filipino)</li>
          <li>Proficient in Microsoft Office Suite (Word, Excel, PowerPoint, Teams)</li>
          <li>Knowledgeable in SEC, DTI, and BIR registration processes</li>
          <li>Must be amenable to work on-site in BGC</li>
          <li>Must have own laptop for work use</li>
        </ul>
      </div>
    ),
  },
];

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// --- UI SECTIONS ---
function HeroSection() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-[#f0f9ee] to-[#e0f3e0] text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#3ea96e] mb-6">Join Our Team</h1>
        <p className="text-xl text-gray-700 mb-6">
          Explore our open positions and start your journey with us!
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#3ea96e] to-[#8db249] mx-auto mb-2 rounded-full" />
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-[#e0f3e0] to-[#f0f9ee]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3ea96e] mb-6">Why Join Us?</h2>
        <p className="text-lg text-gray-700 mb-8">
          We believe in a healthy work-life balance, continuous growth, and a supportive environment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0f3e0]">
            <h3 className="text-xl font-semibold text-[#3ea96e] mb-2">Growth Opportunities</h3>
            <p className="text-gray-700">Advance your career with mentorship and real-world experience.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0f3e0]">
            <h3 className="text-xl font-semibold text-[#3ea96e] mb-2">Supportive Team</h3>
            <p className="text-gray-700">Work in a collaborative and friendly environment that values your input.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0f3e0]">
            <h3 className="text-xl font-semibold text-[#3ea96e] mb-2">Flexible Work</h3>
            <p className="text-gray-700">Enjoy flexibility in your work schedule and location (where applicable).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobDetailsModal({ job, open, onClose, onApply }) {
  if (!job) return null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black rounded-xl shadow-lg max-w-lg w-full mx-4 overflow-y-auto max-h-[90vh] p-8 relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-[#3ea96e] text-lg font-bold"
              onClick={onClose}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-[#3ea96e] mb-1">{job.title}</h2>
            <div className="text-[#8db249] text-sm font-semibold mb-3">{job.type}</div>
            <div className="text-gray-700 mb-4">{job.description}</div>
            <div className="mt-2 p-4 bg-[#f5fcf6] rounded-xl border border-[#e0f3e0] text-black">
              {typeof job.details === "string"
                ? job.details.split('\n').map((line, idx) => <div key={idx}>{line}</div>)
                : job.details}
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="px-6 py-2 rounded-full bg-[#3ea96e] text-black font-semibold hover:text-white hover:bg-[#2c774b] transition"
                onClick={() => {
                  onClose();
                  onApply(job);
                }}
              >
                Apply
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function JobCard({ job, onApply, onViewDetails }) {
  return (
    <motion.div
      layout
      className={`relative bg-white text-black rounded-2xl shadow-lg border border-[#e0f3e0] flex flex-col transition-all duration-200 overflow-hidden group hover:shadow-xl`}
      style={{ minHeight: 340 }}
    >
      <div className="h-2 w-full bg-gradient-to-r from-[#3ea96e] to-[#8db249]" />
      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-2xl font-bold text-[#3ea96e] mb-1">{job.title}</h2>
        <div className="text-[#8db249] text-sm font-semibold mb-2">{job.type}</div>
        <div className="text-gray-700 mb-4 min-h-[56px]">{job.description}</div>
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <button
            className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#3ea96e] text-black font-semibold hover:text-white hover:bg-[#2c774b] transition"
            onClick={() => onApply(job)}
          >
            Apply
          </button>
          <button
            className="w-full sm:w-auto px-5 py-2 rounded-full border border-[#3ea96e] text-[#3ea96e] font-semibold hover:bg-[#f0f9ee] hover:text-black transition"
            onClick={() => onViewDetails(job)}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// --- FORM WITH FIREBASE STORAGE + EMAILJS + PDF ---
function ApplicationForm({ job, onClose }) {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
    setResumeUrl("");
  };

  // Upload file to Firebase Storage (returns download URL)
  const uploadFile = async (file) => {
    setUploading(true);
    setError("");
    const storageRef = ref(storage, `resumes/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setUploadProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (err) => {
          setError("Resume upload failed. Please try again.");
          setUploading(false);
          reject(err);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setResumeUrl(url);
          setUploading(false);
          resolve(url);
        }
      );
    });
  };

  // Generate a PDF file from the application data and upload to Storage, returns download URL
  const uploadApplicationPdf = async (data, filename) => {
    // 1. Generate PDF with jsPDF
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Job Application", 10, 15);
    doc.setFontSize(12);
    doc.text(`Position: ${data.position}`, 10, 30);
    doc.text(`Submitted: ${data.time}`, 10, 38);

    doc.setFont("helvetica", "bold");
    doc.text("Applicant Details", 10, 50);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${data.name}`, 10, 58);
    doc.text(`Email: ${data.email}`, 10, 66);
    doc.text(`Phone: ${data.phone}`, 10, 74);

    doc.setFont("helvetica", "bold");
    doc.text("Cover Letter", 10, 90);
    doc.setFont("helvetica", "normal");
    const messageLines = doc.splitTextToSize(data.message || "(none)", 180);
    doc.text(messageLines, 10, 98);

    doc.setFont("helvetica", "bold");
    doc.text("Resume Link", 10, 120 + messageLines.length * 8);
    doc.setFont("helvetica", "normal");
    doc.text(data.resume_link, 10, 128 + messageLines.length * 8);

    // 2. Convert PDF to Blob
    const pdfBlob = doc.output("blob");

    // 3. Upload PDF to Firebase Storage
    const appRef = ref(storage, `applications/${filename}`);
    const uploadTask = uploadBytesResumable(appRef, pdfBlob);
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        err => reject(err),
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(url);
        }
      );
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!resumeFile) {
      setError("Please select a resume file.");
      setLoading(false);
      return;
    }

    let url = resumeUrl;
    if (!resumeUrl) {
      try {
        url = await uploadFile(resumeFile);
      } catch {
        setLoading(false);
        return;
      }
    }

    // --- Ensure resume_link hidden input is always set ---
    let linkField = formRef.current.querySelector('input[name="resume_link"]');
    if (!linkField) {
      linkField = document.createElement("input");
      linkField.type = "hidden";
      linkField.name = "resume_link";
      formRef.current.appendChild(linkField);
    }
    linkField.value = url;
    // --- End resume_link block ---

    // Prepare application data
    const now = new Date();
    const timeString = now.toLocaleString();
    const appData = {
      position: job.title,
      time: timeString,
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      message: formRef.current.message.value,
      resume_link: url,
    };
    const appPdfFilename = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}_${appData.email.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;

    // Upload PDF to Storage and get PDF download link
    let pdfDownloadURL = "";
    try {
      pdfDownloadURL = await uploadApplicationPdf(appData, appPdfFilename);
    } catch (err) {
      setError("Failed to save application PDF to storage.");
      setLoading(false);
      return;
    }

    // Attach PDF download URL as hidden input for EmailJS
    let pdfField = formRef.current.querySelector('input[name="pdf_download_link"]');
    if (!pdfField) {
      pdfField = document.createElement("input");
      pdfField.type = "hidden";
      pdfField.name = "pdf_download_link";
      formRef.current.appendChild(pdfField);
    }
    pdfField.value = pdfDownloadURL;

    // Add/ensure all fields for EmailJS
    let posField = formRef.current.querySelector('input[name="position"]');
    if (!posField) {
      posField = document.createElement("input");
      posField.type = "hidden";
      posField.name = "position";
      posField.value = job.title;
      formRef.current.appendChild(posField);
    }
    let timeField = formRef.current.querySelector('input[name="time"]');
    if (!timeField) {
      timeField = document.createElement("input");
      timeField.type = "hidden";
      timeField.name = "time";
      timeField.value = timeString;
      formRef.current.appendChild(timeField);
    }

    // Send Email via EmailJS with PDF download URL and resume link
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send application via email. Your application is saved in storage.");
      // Optionally log for debugging:
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center text-black">
        <h2 className="text-2xl font-bold text-[#3ea96e] mb-4">Thank you for applying!</h2>
        <p className="text-gray-700 mb-6">We have received your application for <b>{job.title}</b>.</p>
        <button 
          className="px-6 py-2 rounded-full bg-[#3ea96e] text-black font-semibold hover:text-white hover:bg-[#2c774b]" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-5 p-6 text-black"
      autoComplete="off"
    >
      <input type="hidden" name="position" value={job.title} />
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      <h2 className="text-2xl font-bold text-[#3ea96e] mb-4">Apply for {job.title}</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}

      <div>
        <label className="block text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border rounded px-3 py-2 text-black"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded px-3 py-2 text-black"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full border rounded px-3 py-2 text-black"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">
          Upload Resume (PDF, DOC, DOCX) *
        </label>
        <input
          type="file"
          name="resume_file"
          accept=".pdf,.doc,.docx"
          required
          className="w-full border rounded px-3 py-2 text-black"
          onChange={handleFileChange}
          disabled={uploading || loading}
        />
        {uploading && (
          <div className="text-sm text-gray-600 mt-1">
            Uploading... {uploadProgress.toFixed(0)}%
          </div>
        )}
        {resumeUrl && (
          <div className="text-green-600 text-sm mt-1">
            Resume uploaded! <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="underline">View file</a>
          </div>
        )}
        <p className="text-sm text-gray-500 mt-1">
          <strong>Note:</strong> Please wait for the upload to complete before submitting.
        </p>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Cover Letter</label>
        <textarea
          name="message"
          rows={4}
          className="w-full border rounded px-3 py-2 text-black"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-[#3ea96e] text-black font-semibold hover:text-white hover:bg-[#2c774b]"
          disabled={loading || uploading || !resumeFile}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
        <button
          type="button"
          className="px-6 py-2 rounded-full border border-[#3ea96e] text-[#3ea96e] font-semibold hover:bg-[#f0f9ee] hover:text-black"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

// --- MAIN PAGE ---
export default function CareersPage() {
  const [detailsJob, setDetailsJob] = useState(null);
  const [applyingJob, setApplyingJob] = useState(null);

  return (
    <main className="min-h-screen bg-[#f5fcf6] text-black">
      <HeroSection />
      <BenefitsSection />

      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-[#3ea96e] mb-8 text-center">Open Positions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={setApplyingJob}
              onViewDetails={setDetailsJob}
            />
          ))}
        </div>
      </section>

      <JobDetailsModal
        job={detailsJob}
        open={!!detailsJob}
        onClose={() => setDetailsJob(null)}
        onApply={setApplyingJob}
      />

      <AnimatePresence>
        {applyingJob && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-xl shadow-lg max-w-lg w-full mx-4 overflow-y-auto max-h-[90vh]"
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