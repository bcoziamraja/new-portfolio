import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Sparkles, Terminal, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-1">
              01 // BIOGRAPHY & IDENTITY
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              ABOUT
            </h2>
          </div>
        </div>

        {/* Editorial Story Layout with Stylish, Clean & Elegant Typography */}
        <div className="max-w-5xl space-y-10">
          {/* Main Hook Paragraph */}
          <div className="space-y-6">
            <p className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white leading-[1.4] font-medium tracking-tight">
              I’m <span className="font-semibold text-white bg-zinc-800/80 px-2 py-0.5 rounded-lg border border-zinc-700">Rajkumar Eruvaka</span>, an AI / ML Engineer specializing in Artificial Intelligence, Deep Learning, and Creative Technology.
            </p>

            <p className="font-outfit text-lg sm:text-xl md:text-2xl text-zinc-300 leading-[1.7] font-light">
              I enjoy transforming ideas into practical solutions through programming, data-driven thinking, and creative design. I’m constantly exploring emerging technologies, solving challenging problems, and working on projects that strengthen both my technical and creative skills.
            </p>
          </div>

          {/* Core Philosophy / Mission Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 shadow-xl relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-zinc-800 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm border border-zinc-700">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block">
                  MISSION & CORE PHILOSOPHY
                </span>
                <p className="font-outfit text-lg sm:text-xl md:text-2xl text-zinc-200 font-normal leading-relaxed italic">
                  "My goal is to continuously learn, innovate, and build meaningful solutions that create real-world impact."
                </p>
              </div>
            </div>
          </div>

          {/* Concise Creative Pill Tags */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2 font-mono text-xs text-zinc-300">
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#18181b] border border-zinc-800 hover:border-zinc-600 transition-colors">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              <span>PYTHON • DEEP LEARNING</span>
            </span>
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#18181b] border border-zinc-800 hover:border-zinc-600 transition-colors">
              <Compass className="w-3.5 h-3.5 text-zinc-400" />
              <span>DATA-DRIVEN SYSTEMS</span>
            </span>
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#18181b] border border-zinc-800 hover:border-zinc-600 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CREATIVE GRAPHIC DESIGN</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
