import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 px-6 sm:px-12 md:px-16 bg-[#09090b] border-t border-zinc-800 text-zinc-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Row: Local Time Ticker & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-zinc-300">MANTHANI, TELANGANA (IST):</span>
            <span className="tabular-nums font-semibold text-white">{time || '15:30:00 PM'}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:bg-white hover:text-black transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Branding & Stack */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-zinc-500">
          <div>
            <span className="font-bold text-white">{portfolioData.personalInfo.name}</span>
            <span className="mx-2">•</span>
            <span>B.TECH (AIML) @ JNTU MANTHANI</span>
          </div>

          <div className="flex items-center gap-1">
            <span>ENGINEERED WITH REACT, THREE.JS, & TAILWIND CSS</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
