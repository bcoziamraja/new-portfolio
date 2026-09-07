import React, { useState } from 'react';
import { CursorProvider } from './context/CursorContext';
import { Cursor } from './components/common/Cursor';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Education } from './components/sections/Education';
import { Hobbies } from './components/sections/Hobbies';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CursorProvider>
      {/* Custom Desktop Mouse Cursor */}
      <Cursor />

      {/* Cinematic Intro Loader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Website Structure */}
      <div className={`relative min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        {/* Floating Minimal Pill Navbar */}
        <Navbar
          onReplayIntro={() => setIsLoading(true)}
        />

        {/* Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Hobbies />
          <Contact />
        </main>
      </div>
    </CursorProvider>
  );
};

export default App;
