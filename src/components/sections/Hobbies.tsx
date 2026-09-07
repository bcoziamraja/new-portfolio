import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { Code2, Sparkles, Gamepad2, Camera, Headphones, Compass, BookOpen, Film, Video, Sliders, Palette } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Sparkles,
  Gamepad2,
  Camera,
  Headphones,
  Compass,
  BookOpen,
  Film,
  Video,
  Sliders,
  Palette,
};

export const Hobbies: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section
      id="hobbies"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800/80 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase block mb-1">
              06 // CREATIVE PURSUITS
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              WHEN I'M NOT CODING
            </h2>
          </div>
        </div>

        {/* Playful Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioData.hobbies.map((hobby, idx) => {
            const IconComponent = iconMap[hobby.icon] || Sparkles;

            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1 : -1 }}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-600 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Floating Accent Blob on Hover */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 group-hover:bg-cyan-500/10 rounded-full blur-2xl transition-colors pointer-events-none" />

                <div>
                  {/* Icon & Tagline */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-3 rounded-2xl bg-[#18181b] border border-zinc-800 text-cyan-400 group-hover:bg-white group-hover:text-black transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#18181b] text-zinc-400 border border-zinc-800">
                      {hobby.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {hobby.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mt-2">
                    {hobby.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-zinc-800/80 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span>PASSION 0{idx + 1}</span>
                  <span className="text-white font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
