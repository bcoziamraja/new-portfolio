import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { NeuralSphereScene } from '../3d/NeuralSphereScene';
import { useCursor } from '../../context/CursorContext';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personalInfo.email}&su=Portfolio%20Inquiry%20-%20Rajkumar%20Eruvaka`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="relative w-full pt-24 pb-32 sm:pt-32 sm:pb-40 px-6 sm:px-12 md:px-16 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Overhead */}
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            07 // DIRECT TRANSMISSION
          </span>
          <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Big Editorial Headline */}
        <div className="space-y-1">
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white">
            LET'S BUILD
          </h2>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-outline hover:text-white transition-colors duration-300">
            SOMETHING
          </h2>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white">
            TOGETHER.
          </h2>
        </div>

        {/* Two-Column Grid: Contact Channels on Left, 3D Neural Sphere on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-sans">
              Have an innovative project in mind, an AI research collaboration, or looking for an enthusiastic engineer to join your team? Reach out directly through any of the channels below.
            </p>

            <div className="space-y-4 pt-2">
              {/* 1. Email Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 shadow-xl transition-all duration-300 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#18181b] border border-zinc-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
                        PRIMARY EMAIL INBOX
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-white break-all">
                        {portfolioData.personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ACTIVE
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2 border-t border-zinc-800">
                  <button
                    onClick={handleOpenGmail}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="flex-1 min-w-[140px] py-2.5 px-4 rounded-full bg-white text-black hover:bg-zinc-200 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-500" />
                    <span>OPEN IN GMAIL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="py-2.5 px-4 rounded-full border border-zinc-700 bg-[#18181b] hover:border-zinc-500 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>MAIL CLIENT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="py-2.5 px-4 rounded-full border border-zinc-700 bg-[#18181b] hover:border-zinc-500 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 2. LinkedIn Card */}
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="group block p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
                        PROFESSIONAL NETWORK
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-blue-400 transition-colors">
                        LinkedIn Profile
                      </span>
                      <span className="font-mono text-xs text-zinc-400 block">
                        Rajkumar Eruvaka
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 group-hover:border-white group-hover:bg-white group-hover:text-black text-xs font-mono font-semibold transition-all flex-shrink-0">
                    <span>CONNECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>

              {/* 3. GitHub Card */}
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="group block p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#18181b] border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors flex-shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
                        CODE REPOSITORIES & PROJECTS
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg text-white">
                        github.com/bcoziamraja
                      </span>
                      <span className="font-mono text-xs text-zinc-400 block">
                        @bcoziamraja
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 group-hover:border-white group-hover:bg-white group-hover:text-black text-xs font-mono font-semibold transition-all flex-shrink-0">
                    <span>FOLLOW</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Neural Sphere */}
          <div className="lg:col-span-5 h-full">
            <div className="h-[440px] sm:h-[480px] lg:h-full min-h-[440px] w-full rounded-3xl bg-[#121215] border border-zinc-800 p-4 flex flex-col justify-between relative shadow-xl overflow-hidden">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500 px-3 pt-2">
                <span>NEURAL VISUALIZER</span>
                <span>R3F // PARTICLES</span>
              </div>

              {/* 3D Canvas */}
              <div className="flex-grow">
                <NeuralSphereScene />
              </div>

              <div className="text-center font-mono text-[11px] text-zinc-500 pb-2">
                INTERACTIVE THREE.JS NEURAL KERNEL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
