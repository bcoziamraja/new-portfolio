import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { AIRobotScene } from '../3d/AIRobotScene';
import { FloatingBadges } from '../3d/FloatingBadges';
import { MagneticButton } from '../common/MagneticButton';
import { useCursor } from '../../context/CursorContext';

export const Hero: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center pt-28 pb-16 px-6 sm:px-12 md:px-16 overflow-hidden bg-subtle-grid border-b border-zinc-800 bg-[#09090b]"
    >
      {/* Main Hero Grid: Typography on Left/Center + 3D Visual on Right/Center */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center flex-grow py-4">
        {/* Left Column: Bold Oversized Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md self-start"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
              AI / ML ENGINEER
            </span>
          </motion.div>

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-zinc-400 font-medium"
            >
              Hello, I am
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-1"
            >
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.9] tracking-tighter text-white">
                RAJKUMAR
              </h1>
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.9] tracking-tighter text-white">
                <span className="text-outline hover:text-white transition-colors duration-300">
                  ERUVAKA
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-3 pt-1"
            >
              <div className="h-[2px] w-10 bg-cyan-400" />
              <span className="font-mono text-base sm:text-lg md:text-xl font-bold tracking-wider text-zinc-200 uppercase">
                AI / ML ENGINEER
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-xl leading-relaxed font-outfit font-light"
          >
            {portfolioData.personalInfo.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton>
              <button
                onClick={() => scrollTo('projects')}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="group flex items-center gap-3 px-7 py-4 rounded-full bg-white text-[#09090b] font-mono text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => scrollTo('contact')}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest font-semibold hover:border-white transition-all duration-300 shadow-sm"
              >
                <span>CONTACT ME</span>
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive AI Robot Scene with Floating Badges */}
        <div className="lg:col-span-5 h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px] w-full relative flex items-center justify-center">
          {/* Subtle Ambient Radial Light behind 3D visual */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* Floating Badges */}
          <FloatingBadges />

          {/* 3D Canvas */}
          <AIRobotScene />
        </div>
      </div>
    </section>
  );
};
