import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { Sparkles, Terminal, Cpu, Globe, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  const categoryIcons = [Terminal, Cpu, Sparkles, Globe, Wrench];

  return (
    <section
      id="skills"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-[#e7e5e4] bg-[#fafaf9]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#e7e5e4] pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#78716c] uppercase block mb-1">
              02 // TECHNICAL ARSENAL
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0c0a09]">
              WHAT I DO
            </h2>
          </div>
          <p className="font-mono text-xs text-[#78716c] max-w-xs text-right">
            HOVER & INTERACT WITH SKILL NODES TO EXPLORE PROFICIENCY MATRIX
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-[#e7e5e4] pb-6">
          {portfolioData.skillsCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 uppercase ${
                  isActive
                    ? 'bg-[#0c0a09] text-[#fafaf9] shadow-md scale-105'
                    : 'bg-white border border-[#e7e5e4] text-[#57534e] hover:border-black/30 hover:text-black'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-[#78716c]'}`} />
                <span>{cat.title}</span>
                <span className="text-[10px] opacity-70">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display with Animated Typography */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Category Description Banner */}
            <div className="p-6 rounded-2xl bg-white border border-[#e7e5e4] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0c0a09]">
                  {portfolioData.skillsCategories[activeCategoryIndex].title}
                </h3>
                <p className="text-sm text-[#78716c] font-sans mt-1">
                  {portfolioData.skillsCategories[activeCategoryIndex].description}
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#f5f5f4] text-[#44403c] border border-[#e7e5e4] flex-shrink-0">
                ACTIVE DOMAIN
              </span>
            </div>

            {/* Interactive Magnetic Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {portfolioData.skillsCategories[activeCategoryIndex].skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="group relative p-6 rounded-2xl bg-white border border-[#e7e5e4] hover:border-[#0c0a09] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Accent Glow on Hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-100/30 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs text-[#a8a29e] group-hover:text-cyan-600 transition-colors">
                        0{idx + 1}
                      </span>
                      {skill.highlight && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                          CORE
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-bold text-[#0c0a09] group-hover:tracking-wide transition-all duration-300">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Micro Proficiency Indicator Bar */}
                  <div className="pt-6 mt-4 border-t border-[#f5f5f4]">
                    <div className="flex justify-between text-[11px] font-mono text-[#78716c] mb-1.5">
                      <span>PROFICIENCY</span>
                      <span className="font-bold text-[#0c0a09]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#f5f5f4] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.1 + idx * 0.05 }}
                        className="h-full bg-gradient-to-r from-[#0c0a09] to-cyan-600 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Categories High-Density Wall (Editorial Overview) */}
        <div className="pt-12 border-t border-[#e7e5e4]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#78716c] block mb-6">
            FULL TECH STACK INDEX
          </span>

          <div className="flex flex-wrap gap-2.5">
            {portfolioData.skillsCategories.flatMap(c => c.skills).map((skill) => (
              <span
                key={skill.name}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="px-4 py-2 rounded-full border border-[#e7e5e4] bg-white text-xs font-mono font-medium text-[#292524] hover:bg-[#0c0a09] hover:text-white hover:border-[#0c0a09] transition-all duration-200 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
