import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../../context/CursorContext';

interface NavbarProps {
  onResumeClick?: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect current active section
      const sections = portfolioData.navLinks.map((l) => l.href.replace('#', ''));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Floating Pill Header Container */}
      <header className="fixed top-0 left-0 right-0 z-[9990] flex justify-center items-center p-4 sm:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 sm:py-3 rounded-full transition-all duration-300 backdrop-blur-xl border ${
            isScrolled
              ? 'bg-[#09090b]/85 border-zinc-700/80 shadow-2xl shadow-black/50'
              : 'bg-[#09090b]/60 border-zinc-800/60 shadow-lg'
          } max-w-5xl w-full mx-auto`}
        >
          {/* Logo / Initials */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 pl-2 pr-2 sm:pr-3 py-1 text-xs font-mono font-bold tracking-widest text-white uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{portfolioData.personalInfo.name}</span>
          </a>

          {/* Desktop Nav Links (Pill Tabs) */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-mono text-zinc-300">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <MagneticButton key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 uppercase font-medium ${
                      isActive
                        ? 'bg-white text-[#09090b] shadow-md font-bold'
                        : 'hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                </MagneticButton>
              );
            })}
          </div>

          {/* Actions: Replay Glimpse & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {onReplayIntro && (
              <MagneticButton>
                <button
                  onClick={onReplayIntro}
                  title="Watch 3D Animated Glimpse Intro"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-zinc-700 bg-zinc-900/60 hover:bg-white hover:text-black text-zinc-300 transition-colors shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">GLIMPSE</span>
                </button>
              </MagneticButton>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9989] bg-[#09090b] text-white p-6 pt-28 flex flex-col justify-between lg:hidden border-b border-zinc-800"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase block mb-4">
                NAVIGATION DIRECTORY
              </span>
              <div className="flex flex-col space-y-2">
                {portfolioData.navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-display text-3xl font-extrabold text-white hover:text-zinc-400 transition-colors flex items-baseline justify-between border-b border-zinc-800 pb-2"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-zinc-500">0{idx + 1}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                <span>{portfolioData.personalInfo.college}</span>
                <span>{portfolioData.personalInfo.specialization}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
