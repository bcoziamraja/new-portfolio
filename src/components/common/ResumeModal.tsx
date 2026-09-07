import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  FileText,
  LayoutList,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code,
  Briefcase,
  Award,
  Globe,
  Github,
  Linkedin,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'document' | 'interactive'>('document');
  const [showNativePdf, setShowNativePdf] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    if (isOpen) {
      resetCursor();
    }
  }, [isOpen, resetCursor]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#121215] border border-zinc-800 rounded-2xl shadow-2xl p-4 sm:p-7 my-6 z-10 max-h-[92vh] overflow-y-auto no-scrollbar text-zinc-300"
          >
            {/* Top Action Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 mb-5 gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block">
                    Official Resume // ML Engineer
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    JNTU Manthani • CGPA 7.47
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center flex-wrap gap-2">
                {/* Tab Switcher */}
                <div className="flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-800 mr-1">
                  <button
                    onClick={() => setActiveTab('document')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'document'
                        ? 'bg-zinc-800 text-white font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Document</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('interactive')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'interactive'
                        ? 'bg-zinc-800 text-white font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <LayoutList className="w-3.5 h-3.5" />
                    <span>Structured</span>
                  </button>
                </div>

                {/* Direct PDF Download */}
                <a
                  href="/Rajkumar_Eruvaka_Resume.pdf"
                  download="Rajkumar_Eruvaka_Resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white text-[#09090b] hover:bg-zinc-200 transition-colors shadow-sm"
                  title="Download Official Resume PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Open in new tab */}
                <a
                  href="/Rajkumar_Eruvaka_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Tab</span>
                </a>

                {/* Print button */}
                <button
                  onClick={handlePrint}
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 transition-colors"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                {/* Close modal */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors ml-1"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* TAB 1: Real Document View */}
            {activeTab === 'document' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
                  <span>Authentic 1-Page Curriculum Vitae</span>
                  <button
                    onClick={() => setShowNativePdf(!showNativePdf)}
                    className="text-cyan-400 hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>{showNativePdf ? 'Switch to Crisp Image' : 'Switch to Native PDF Frame'}</span>
                  </button>
                </div>

                {showNativePdf ? (
                  <div className="w-full h-[700px] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
                    <iframe
                      src="/Rajkumar_Eruvaka_Resume.pdf#toolbar=1"
                      title="Rajkumar Eruvaka Resume PDF"
                      className="w-full h-full border-none"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-white shadow-2xl">
                    <img
                      src="/Rajkumar_Eruvaka_Resume.png"
                      alt="Rajkumar Eruvaka Resume"
                      className="w-full h-auto object-contain mx-auto select-none"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-zinc-800 text-xs font-mono">
                  <span className="text-zinc-500">
                    Format: Adobe PDF (148 KB) • Verified Profile
                  </span>
                  <a
                    href="/Rajkumar_Eruvaka_Resume.pdf"
                    download="Rajkumar_Eruvaka_Resume.pdf"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold tracking-wider transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD OFFICIAL PDF</span>
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2: Structured Details View */}
            {activeTab === 'interactive' && (
              <div className="space-y-6 font-sans text-zinc-300">
                {/* Header Profile */}
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
                        {portfolioData.personalInfo.name}
                      </h2>
                      <p className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold mt-1">
                        ML ENGINEER
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-400">
                      <a
                        href={`mailto:${portfolioData.personalInfo.email}`}
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{portfolioData.personalInfo.email}</span>
                      </a>
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>(+91) 9959510782</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Manthani, India</span>
                      </span>
                      <a
                        href="https://github.com/bcoziamraja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-zinc-300" />
                        <span>bcoziamraja</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Summary
                  </h3>
                  <div className="p-4 rounded-xl bg-[#18181b] border border-zinc-800 text-sm text-zinc-300 leading-relaxed">
                    Machine learning enthusiast with hands-on experience building and training neural network models and an end-to-end project. Proficient in Python, Machine learning for data preprocessing, model development, and evaluation. Seeking an LLM-focused internship to apply and expand practical ML skills.
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                    <Code className="w-4 h-4 text-cyan-400" />
                    Skills Matrix
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1.5">
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                        Technical Skills
                      </span>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Python, Machine Learning, Neural Networks, Generative AI, Stable Diffusion, Introduction to LLM, MCP models
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1.5">
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                        Tools & Platforms
                      </span>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Jupyter Notebook, Google Colab, Git & GitHub, Canva
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    Projects
                  </h3>
                  <div className="p-4 rounded-xl bg-[#18181b] border border-zinc-800 space-y-2">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h4 className="font-bold text-sm text-white">
                        Designify <span className="text-zinc-500 font-normal">| Code Unnati – Edunet Foundation</span>
                      </h4>
                      <a
                        href="https://go.screenpal.com/watch/cOe0DlnT61W"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>Demo Video</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Built an AI-powered interior design visualization tool that generates design ideas and room images based on user input, submitted as part of the Code Unnati program.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    Education
                  </h3>
                  <div className="p-4 rounded-xl bg-[#18181b] border border-zinc-800 space-y-2">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h4 className="font-bold text-sm text-white">
                        Bachelor of Technology in Computer Science
                      </h4>
                      <span className="font-mono text-xs text-zinc-500">2023–2027</span>
                    </div>
                    <p className="text-xs text-zinc-400">JNTU Manthani, Peddapalli</p>
                    <div className="pt-1">
                      <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                        CGPA — 7.47
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certifications & Languages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400" />
                      Certifications
                    </h3>
                    <div className="p-4 rounded-xl bg-[#18181b] border border-zinc-800">
                      <p className="text-xs font-semibold text-white">
                        Course and project certification
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Code Unnati – Edunet Foundation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      Languages
                    </h3>
                    <div className="p-4 rounded-xl bg-[#18181b] border border-zinc-800 text-xs text-zinc-300 space-y-1">
                      <p className="flex items-center justify-between">
                        <span>English</span>
                        <span className="font-mono text-zinc-500">Fluent</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Telugu</span>
                        <span className="font-mono text-zinc-500">Native</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Hindi</span>
                        <span className="font-mono text-zinc-500">Conversational</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
