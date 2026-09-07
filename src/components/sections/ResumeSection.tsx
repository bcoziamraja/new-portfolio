import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { MagneticButton } from '../common/MagneticButton';
import { useCursor } from '../../context/CursorContext';

interface ResumeSectionProps {
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section
      id="resume"
      className="py-24 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#0c0c0e] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                07 // CURRICULUM VITAE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              OFFICIAL RESUME
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton>
              <a
                href="/Rajkumar_Eruvaka_Resume.pdf"
                download="Rajkumar_Eruvaka_Resume.pdf"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#09090b] font-mono text-xs uppercase tracking-wider font-bold hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenModal}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-mono text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>VIEW FULLSCREEN</span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Resume Document Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#121215] shadow-2xl p-2 sm:p-3 transition-transform duration-500 group-hover:scale-[1.01] group-hover:border-zinc-700">
              {/* Document Paper Container */}
              <div
                onClick={onOpenModal}
                className="relative cursor-pointer rounded-xl overflow-hidden bg-white shadow-inner"
              >
                <img
                  src="/Rajkumar_Eruvaka_Resume.png"
                  alt="Rajkumar Eruvaka Resume Preview"
                  className="w-full h-auto object-contain select-none"
                  loading="lazy"
                />

                {/* Hover overlay with action indicator */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                  <div className="px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold shadow-xl flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Click to Expand</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-300">
                    Official 1-Page ML Engineer Resume
                  </span>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-zinc-400 mt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Verified • 2023–2027
                </span>
                <span className="text-[11px] text-zinc-500">
                  PDF 148 KB // Single Page
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Resume Highlights & Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Candidate Card */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#121215] space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    CANDIDATE SNAPSHOT
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {portfolioData.personalInfo.name}
                  </h3>
                  <p className="text-sm font-mono text-zinc-400 mt-0.5">
                    {portfolioData.personalInfo.role} • {portfolioData.personalInfo.location}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Available
                </span>
              </div>

              {/* Summary quote */}
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                &ldquo;Machine learning enthusiast with hands-on experience building and training neural network models and an end-to-end project. Proficient in Python, Machine learning for data preprocessing, model development, and evaluation. Seeking an LLM-focused internship to apply and expand practical ML skills.&rdquo;
              </div>

              {/* Key Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Education</span>
                  <p className="text-xs font-bold text-white mt-0.5">B.Tech in CSE (2023–2027)</p>
                  <p className="text-[11px] text-zinc-400">JNTU Manthani • <span className="text-emerald-400 font-mono">CGPA 7.47</span></p>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Featured Project</span>
                  <p className="text-xs font-bold text-white mt-0.5">Designify AI</p>
                  <p className="text-[11px] text-zinc-400">Code Unnati – Edunet Foundation</p>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Primary Stack</span>
                  <p className="text-xs font-bold text-white mt-0.5">Python & Machine Learning</p>
                  <p className="text-[11px] text-zinc-400">Neural Networks, GenAI, LLMs</p>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Contact & Location</span>
                  <p className="text-xs font-bold text-white mt-0.5">+91 9959510782</p>
                  <p className="text-[11px] text-zinc-400 truncate">rajkumareruvaka.e26@gmail.com</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/Rajkumar_Eruvaka_Resume.pdf"
                  download="Rajkumar_Eruvaka_Resume.pdf"
                  className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold tracking-wider transition-colors shadow-lg shadow-cyan-400/10"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>

                <a
                  href="/Rajkumar_Eruvaka_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-medium tracking-wider transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>OPEN IN TAB</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
