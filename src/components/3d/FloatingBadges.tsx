import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Lightbulb, Brain } from 'lucide-react';

interface FloatingBadgesProps {
  className?: string;
}

export const FloatingBadges: React.FC<FloatingBadgesProps> = ({ className = '' }) => {
  const badges = [
    {
      text: 'AI / ML',
      icon: Brain,
      position: 'top-8 left-4 sm:left-8 md:top-12 md:left-4',
      delay: 0,
      glow: 'text-cyan-400',
    },
    {
      text: 'DEVELOPER',
      icon: Terminal,
      position: 'top-16 right-4 sm:right-8 md:top-20 md:right-8',
      delay: 0.2,
      glow: 'text-emerald-400',
    },
    {
      text: 'PROBLEM SOLVER',
      icon: Lightbulb,
      position: 'bottom-20 left-6 sm:left-12 md:bottom-24 md:left-8',
      delay: 0.4,
      glow: 'text-amber-400',
    },
    {
      text: 'CREATIVE THINKER',
      icon: Sparkles,
      position: 'bottom-12 right-6 sm:right-12 md:bottom-16 md:right-10',
      delay: 0.6,
      glow: 'text-purple-400',
    },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none z-20 ${className}`}>
      {badges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.text}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { delay: 0.5 + badge.delay, duration: 0.6 },
              scale: { delay: 0.5 + badge.delay, duration: 0.6 },
              y: {
                repeat: Infinity,
                duration: 4 + idx,
                ease: 'easeInOut',
                delay: idx * 0.7,
              },
            }}
            className={`absolute ${badge.position} pointer-events-auto select-none`}
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill shadow-lg border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300">
              <Icon className={`w-3.5 h-3.5 ${badge.glow}`} />
              <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                {badge.text}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
