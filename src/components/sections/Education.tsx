import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800/80 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase block mb-1">
              05 // ACADEMIC FOUNDATION
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              MY JOURNEY
            </h2>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {portfolioData.education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#09090b] border-4 border-white group-hover:scale-125 transition-transform" />

              {/* Content Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-600 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-4">
                {/* Header Row */}
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                      {item.field}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-[#18181b] px-3.5 py-1.5 rounded-full border border-zinc-800">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Institution & Details */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {item.location}
                  </span>
                  {item.score && (
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                      <Award className="w-3.5 h-3.5" />
                      {item.score}
                    </span>
                  )}
                  {item.currentStatus && (
                    <span className="bg-white text-black px-2.5 py-0.5 rounded font-medium">
                      {item.currentStatus}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="pt-2 space-y-2 border-t border-zinc-800">
                  {item.highlights.map((high, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
