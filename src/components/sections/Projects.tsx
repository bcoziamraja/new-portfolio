import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, ProjectItem } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight, Github, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectDetailModal } from '../common/ProjectDetailModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const { setCursor, resetCursor } = useCursor();

  const categories = ['ALL', ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

  const filteredProjects = activeFilter === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800/80 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-800 pb-8">
          <div>
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase block mb-1">
              03 // PORTFOLIO ARCHITECTURE
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              SELECTED WORK
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 uppercase ${
                  activeFilter === cat
                    ? 'bg-white text-black shadow-md shadow-white/10'
                    : 'bg-[#121215] border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive Projects List */}
        <div className="space-y-16 sm:space-y-24">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isHovered = hoveredProjectId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  onMouseEnter={() => {
                    setHoveredProjectId(project.id);
                    setCursor('project', 'VIEW');
                  }}
                  onMouseLeave={() => {
                    setHoveredProjectId(null);
                    resetCursor();
                  }}
                  className="group relative rounded-3xl border border-zinc-800 bg-[#121215] p-6 sm:p-10 md:p-12 shadow-xl hover:shadow-2xl hover:border-zinc-700 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Background Glow when hovered */}
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                    {/* Left Column: Project Details */}
                    <div className="lg:col-span-7 space-y-6">
                      {/* Project Header Row */}
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-3xl sm:text-4xl font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors">
                          {project.number}
                        </span>
                        <span className="w-8 h-[1px] bg-zinc-800" />
                        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                          {project.category}
                        </span>
                        <span className="ml-auto font-mono text-xs px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 hidden sm:inline-block">
                          {project.metrics}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight group-hover:text-cyan-300 group-hover:translate-x-2 transition-all duration-300 cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      {/* Description & Problem Solved */}
                      <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-sans">
                        {project.shortDesc}
                      </p>

                      {/* Key Features Preview */}
                      <div className="space-y-1.5 pt-1">
                        {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Badges */}
                      <div className="pt-2">
                        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-2">
                          TECH:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#18181b] text-zinc-300 border border-zinc-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                          <span>VIEW PROJECT</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>

                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-700 bg-[#18181b] text-zinc-200 font-mono text-xs font-semibold hover:border-zinc-500 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                          <span>LIVE DEMO</span>
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 rounded-full border border-zinc-700 bg-[#18181b] text-zinc-200 font-mono text-xs font-semibold hover:border-zinc-500 hover:text-white transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Interactive Image Preview Showcase */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden cursor-pointer group/img border border-zinc-800 bg-black"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 group-hover/img:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                      {/* Floating Indicator */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs font-mono">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-zinc-800 backdrop-blur-md">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>TAP TO INSPECT</span>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                          {project.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Full Detailed Project Architecture Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
