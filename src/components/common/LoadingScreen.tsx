import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const portraitTranslateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  // Handle Mouse Move for 3D Video Perspective Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 750);
  };

  // Wait 6 seconds in glimpse, then automatically transition directly to the home page
  useEffect(() => {
    const timer = setTimeout(() => {
      handleEnter();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation: press any key to skip early if desired
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="first-glimpse"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onClick={handleEnter}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: 'blur(16px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#000000] text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none overflow-hidden cursor-pointer"
          style={{ perspective: 1200 }}
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          </div>

          <div className="w-full flex justify-end">
            <span className="text-xs font-mono text-zinc-500 tracking-wider">
              [TAP TO SKIP]
            </span>
          </div>

          {/* Centerpiece: Original Side-by-Side 3D Portrait & Welcome Layout */}
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 my-auto py-2">
            {/* Left: 3D Holographic Portrait Canvas */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-64 sm:w-72 md:w-80 lg:w-[330px] aspect-[9/16] max-h-[58vh] flex items-center justify-center flex-shrink-0"
            >
              {/* Soft Ambient Aura Behind Photo */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
                className="absolute inset-2 rounded-3xl bg-gradient-to-t from-cyan-500/25 via-cyan-400/15 to-transparent blur-2xl pointer-events-none"
              />

              {/* 3D Glass Container with Portrait */}
              <motion.div
                style={{ translateZ: portraitTranslateZ }}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-800/90 bg-black shadow-2xl shadow-cyan-950/30"
              >
                {/* The Portrait Image */}
                <img
                  src="/rajkumar_portrait.jpg"
                  alt="Rajkumar Eruvaka"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-105"
                />

                {/* Soft Vignette Mask blending edges into black void */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/35 pointer-events-none" />

                {/* 3D Laser Scanning Beam (Video Scan Effect) */}
                <motion.div
                  animate={{
                    top: ['-20%', '120%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none"
                >
                  <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#22d3ee]" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Welcome Portion & Editorial Reveal */}
            <div className="max-w-xl text-center lg:text-left space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-semibold">
                  AI / ML ENGINEER
                </span>
              </motion.div>

              {/* Welcome To Portion */}
              <div className="space-y-1">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase"
                >
                  WELCOME TO THE WORLD OF
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-white"
                >
                  RAJKUMAR
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-white"
                >
                  <span className="text-outline hover:text-white transition-colors duration-300">
                    ERUVAKA
                  </span>
                </motion.h1>
              </div>
            </div>
          </div>

          {/* Bottom 6-Second Auto-Transition Hairline Timer */}
          <div className="relative z-20 w-full max-w-xl mx-auto space-y-2 pb-2">
            <div className="w-full h-[1.5px] bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-cyan-400 via-white to-emerald-400 shadow-[0_0_8px_#22d3ee]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
