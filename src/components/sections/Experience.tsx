import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { InternshipDocument } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import {
  Calendar,
  CheckCircle2,
  ExternalLink,
  FileText,
  ShieldCheck,
  Download,
  X,
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<InternshipDocument | null>(null);
  const { setCursor, resetCursor } = useCursor();
  const internship = portfolioData.internship;

  useEffect(() => {
    if (selectedDoc) {
      resetCursor();
    }
  }, [selectedDoc, resetCursor]);

  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-1">
              02 // INDUSTRY EXPERIENCE
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              INTERNSHIP
            </h2>
          </div>
        </div>

        {/* Main Experience Showcase Card */}
        <div className="rounded-3xl border border-zinc-800 bg-[#121215] p-6 sm:p-10 md:p-12 shadow-xl space-y-8">
          {/* Top Meta Bar */}
          <div className="flex flex-wrap justify-between items-start gap-4 border-b border-zinc-800/80 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-[#09090b] uppercase">
                  {internship.organization}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                  {internship.status}
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white pt-1">
                {internship.role}
              </h3>
              <p className="font-mono text-xs text-zinc-400">
                {internship.program} • Student ID: <span className="font-semibold text-zinc-200">{internship.studentId}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-zinc-300 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>{internship.duration}</span>
            </div>
          </div>

          {/* Overview & Core Responsibilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
                {internship.overview}
              </p>

              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">
                  SKILLS & TOOLS ACQUIRED:
                </span>
                <div className="flex flex-wrap gap-2">
                  {internship.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-zinc-900 text-zinc-200 border border-zinc-800 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-zinc-800 pb-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>OFFICIAL VERIFIED CREDENTIALS</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>ISSUING BODY:</span>
                <span className="font-bold text-white">CodeAlpha Software</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>GOVT. RECOGNITION:</span>
                <span className="font-bold text-white">MSME, Govt. of India</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>ENDPOINTS:</span>
                <span className="font-bold text-white">Certificate + LOR + Offer</span>
              </div>
            </div>
          </div>

          {/* Interactive Document Gallery (Offer Letter, Certificate, Recommendation) */}
          <div className="pt-8 border-t border-zinc-800/80 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                VERIFIED INTERNSHIP DOCUMENTS & LETTERS
              </span>
              <span className="font-mono text-[11px] text-zinc-500 hidden sm:inline">
                CLICK TO EXPAND HIGH-RESOLUTION VIEW
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {internship.documents.map((doc) => (
                <motion.div
                  key={doc.id}
                  whileHover={{ y: -6 }}
                  onMouseEnter={() => setCursor('certificate', 'VIEW')}
                  onMouseLeave={resetCursor}
                  onClick={() => setSelectedDoc(doc)}
                  className="group relative rounded-2xl border border-zinc-800 hover:border-zinc-500 bg-[#18181b] overflow-hidden cursor-pointer shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Document Thumbnail Preview */}
                  <div className="relative w-full h-64 sm:h-72 bg-zinc-950 overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-white text-[#09090b] font-mono text-xs font-bold uppercase shadow-lg">
                        Inspect Document
                      </span>
                    </div>
                  </div>

                  {/* Document Info */}
                  <div className="p-4 bg-[#18181b] border-t border-zinc-800 flex-grow flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                        <span className="uppercase text-cyan-400 font-bold">{doc.type}</span>
                        <span>{doc.date}</span>
                      </div>
                      <h4 className="font-display text-base font-bold text-white group-hover:text-cyan-400 transition-colors mt-0.5">
                        {doc.title}
                      </h4>
                    </div>

                    <div className="flex justify-between items-center text-xs font-mono pt-2 border-t border-zinc-800">
                      <span className="text-emerald-400 text-[11px] font-semibold">VERIFIED</span>
                      <span className="flex items-center gap-1 font-bold text-zinc-300 group-hover:text-white">
                        <span>OPEN</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Document Lightbox Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-[10003] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-4xl bg-[#121215] border border-zinc-700 rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-zinc-800 bg-[#18181b]">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block">
                    CODEALPHA // {selectedDoc.type}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {selectedDoc.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedDoc.image}
                    download={`${selectedDoc.id}.jpg`}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-zinc-700 hover:border-white bg-zinc-800 hover:bg-white hover:text-black text-white transition-colors"
                    title="Download High-Res Copy"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Save Image</span>
                  </a>

                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Full Image Container */}
              <div className="p-4 sm:p-6 bg-black overflow-y-auto flex items-center justify-center flex-grow">
                <img
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-4 sm:p-5 bg-[#18181b] border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs text-zinc-400">
                <span>{selectedDoc.description}</span>
                <span className="font-bold text-white flex-shrink-0">Eruvaka Rajkumar (CA/DF1/90534)</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
