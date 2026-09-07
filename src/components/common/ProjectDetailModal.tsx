import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3 } from 'lucide-react';
import { ProjectItem } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { resetCursor } = useCursor();

  useEffect(() => {
    if (project) {
      resetCursor();
    }
  }, [project, resetCursor]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#121215] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-6"
        >
          {/* Header Image with Gradient Overlay */}
          <div className="relative w-full h-56 sm:h-72 bg-black overflow-hidden flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-black/60" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-black backdrop-blur-md border border-zinc-700/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Over-image metadata */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="font-mono text-xs tracking-widest text-cyan-400 font-bold uppercase mb-1 block">
                  SYSTEM {project.number} // {project.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-zinc-700/60 backdrop-blur-md text-white text-xs font-mono">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{project.metrics}</span>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto no-scrollbar font-sans text-zinc-300">
            {/* Problem & Solution */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" /> Architecture & Implementation
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.fullDesc}
              </p>
              <div className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800">
                <span className="text-xs font-mono font-bold text-white uppercase block mb-1">
                  Core Problem Solved:
                </span>
                <p className="text-xs sm:text-sm text-zinc-400">
                  {project.problemSolved}
                </p>
              </div>
            </div>

            {/* Key Engineering Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                Technical Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-3">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-[#18181b] text-white text-xs font-mono font-semibold hover:border-zinc-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
