import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutScrapbook } from './components/AboutScrapbook';
import { RetroResumeDesktop } from './components/RetroResumeDesktop';
import { FolderProjectsSection } from './components/FolderProjectsSection';
import { ErasmusJourneySection } from './components/ErasmusJourneySection';
import { ContactFooter } from './components/ContactFooter';
import { IllustratorToolbar, type ActiveTool } from './components/IllustratorToolbar';
import { SketchpadOverlay } from './components/SketchpadOverlay';

export function App() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [nightMode, setNightMode] = useState<boolean>(false);
  const [xrayMode, setXrayMode] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<ActiveTool>('select');
  const [brushColor, setBrushColor] = useState<string>('#1D4ED8');
  const [clearSignal, setClearSignal] = useState<number>(0);

  useEffect(() => {
    const root = document.documentElement;
    if (nightMode) {
      root.classList.add('night-blueprint');
    } else {
      root.classList.remove('night-blueprint');
    }
  }, [nightMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.key.toLowerCase() === 'v') {
        setActiveTool('select');
      } else if (e.key.toLowerCase() === 'p') {
        setActiveTool((prev) => (prev === 'draw' ? 'select' : 'draw'));
      } else if (e.key.toLowerCase() === 'x') {
        setXrayMode((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#1D4ED8', '#F59E0B', '#10B981', '#EA580C', '#EC4899'],
    });
  };

  return (
    <div
      className={`min-h-screen sketchbook-bg relative selection:bg-[#F59E0B] selection:text-[#141413] ${
        xrayMode ? 'blueprint-xray' : ''
      }`}
    >
      {/* Interactive Full-Screen Sketchpad Overlay (Activated by Pen Tool 'P') */}
      <SketchpadOverlay
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        clearSignal={clearSignal}
        lang={lang}
      />

      {/* Left Floating Adobe Illustrator Studio Toolbar (Reference 4) */}
      <IllustratorToolbar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        onClearCanvas={() => setClearSignal((s) => s + 1)}
        xrayMode={xrayMode}
        setXrayMode={setXrayMode}
        nightMode={nightMode}
        setNightMode={setNightMode}
        onCelebrate={triggerConfetti}
        lang={lang}
      />

      {/* Sticky Top Sketchbook & Pill Navigation (References 1 & 2) */}
      <Navbar
        lang={lang}
        setLang={setLang}
        nightMode={nightMode}
        setNightMode={setNightMode}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />

      {/* Main Content Sections */}
      <main className="xl:pl-12">
        {/* 1. Hero Section: Robin Notebook Frame + Wander The Horizon Illustrated Card */}
        <HeroSection
          lang={lang}
          nightMode={nightMode}
          setNightMode={setNightMode}
        />

        {/* 2. About Me Scrapbook: Taped Polaroids + Perforated Ticket Stamps */}
        <AboutScrapbook lang={lang} />

        {/* 3. Interactive Retro OS / Illustrator Resume Desktop (Draggable Windows) */}
        <RetroResumeDesktop lang={lang} />

        {/* 4. Folder-Tab Case Studies & 70+ Screen Interactive Project Gallery */}
        <FolderProjectsSection lang={lang} />

        {/* 5. Erasmus Travel Sketchbook (France & Spain) + Engineering Pillars */}
        <ErasmusJourneySection lang={lang} />
      </main>

      {/* 6. Contact Composer & Retro Footer */}
      <div className="xl:pl-12">
        <ContactFooter lang={lang} onCelebrate={triggerConfetti} />
      </div>
    </div>
  );
}

export default App;
