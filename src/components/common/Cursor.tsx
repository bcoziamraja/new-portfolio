import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

export const Cursor: React.FC = () => {
  const { cursorType, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    const checkIsFinePointer = () => {
      const fine = window.matchMedia('(pointer: fine)').matches;
      setIsMobile(!fine);
      if (fine) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    checkIsFinePointer();
    window.addEventListener('resize', checkIsFinePointer);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkIsFinePointer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible || cursorType === 'hidden') return null;

  const isTextCursor = cursorType === 'project' || cursorType === 'certificate';
  const isHover = cursorType === 'hover';

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Outer morphing ring/badge */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isTextCursor ? 88 : isHover ? 54 : 36,
          height: isTextCursor ? 36 : isHover ? 54 : 36,
          borderRadius: isTextCursor ? '9999px' : '50%',
          backgroundColor: isTextCursor
            ? '#ffffff'
            : isHover
            ? 'rgba(255, 255, 255, 0.12)'
            : 'rgba(0, 0, 0, 0)',
          borderColor: isTextCursor ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
          borderWidth: isTextCursor ? '0px' : '1.5px',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {isTextCursor && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[11px] font-mono tracking-widest text-[#09090b] uppercase font-bold"
          >
            {cursorText || (cursorType === 'project' ? 'VIEW' : 'OPEN')}
          </motion.span>
        )}
      </motion.div>

      {/* Inner sharp dot (hidden when badge is active) */}
      {!isTextCursor && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isHover ? 1.5 : 1,
            opacity: 1,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        />
      )}
    </div>
  );
};
