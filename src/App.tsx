import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Layers, Box } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutScrapbook } from './components/AboutScrapbook';
import { RetroResumeDesktop } from './components/RetroResumeDesktop';
import { FolderProjectsSection } from './components/FolderProjectsSection';
import { ErasmusJourneySection } from './components/ErasmusJourneySection';
import { ContactFooter } from './components/ContactFooter';
import { IllustratorToolbar, type ActiveTool } from './components/IllustratorToolbar';
import { SketchpadOverlay } from './components/SketchpadOverlay';
import { Portfolio2View } from './components/Portfolio2View';

export function App() {
  const [portfolioVersion, setPortfolioVersion] = useState<'p1' | 'p2'>('p1');
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [nightMode, setNightMode] = useState<boolean>(false);
  const [xrayMode, setXrayMode] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<ActiveTool>('select');
  const [brushColor, setBrushColor] = useState<string>('#1D4ED8');
  const [clearSignal, setClearSignal] = useState<number>(0);

  useEffect(() => {
    const root = document.documentElement;
    if (nightMode && portfolioVersion === 'p1') {
      root.classList.add('night-blueprint');
    } else {
      root.classList.remove('night-blueprint');
    }
  }, [nightMode, portfolioVersion]);

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
      } else if (e.key === '1') {
        setPortfolioVersion('p1');
      } else if (e.key === '2') {
        setPortfolioVersion('p2');
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

  const handleVersionSwitch = (ver: 'p1' | 'p2') => {
    if (ver === portfolioVersion) return;
    setPortfolioVersion(ver);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen relative selection:bg-[#F59E0B] selection:text-[#141413] ${
        portfolioVersion === 'p1' ? 'sketchbook-bg' : 'p2-dotted-bg'
      } ${xrayMode && portfolioVersion === 'p1' ? 'blueprint-xray' : ''}`}
    >
      {/* ============================================================
          GLOBAL TOP VERSION SWITCHER BAR (PORTFOLIO 1 <-> PORTFOLIO 2)
         ============================================================ */}
      <div className="sticky top-0 z-50 w-full bg-[#0F172A] text-white border-b-2 border-[#141413] px-3 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2 shadow-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FACC15] animate-pulse" />
          <span className="font-mono-tech text-[11px] sm:text-xs font-bold tracking-wide text-slate-300 hidden sm:inline">
            TASARIM MODU SEÇİCİ //
          </span>

          {/* Animated Segmented Pill Switcher */}
          <div className="inline-flex items-center bg-slate-800/90 p-1 rounded-full border border-slate-700">
            <button
              onClick={() => handleVersionSwitch('p1')}
              className={`relative px-3.5 sm:px-5 py-1 rounded-full font-mono-tech text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                portfolioVersion === 'p1'
                  ? 'bg-[#F59E0B] text-[#141413] shadow-[0_2px_10px_rgba(245,158,11,0.45)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO 1 (Eskiz & Windows XP)</span>
            </button>

            <button
              onClick={() => handleVersionSwitch('p2')}
              className={`relative px-3.5 sm:px-5 py-1 rounded-full font-mono-tech text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                portfolioVersion === 'p2'
                  ? 'bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white shadow-[0_2px_12px_rgba(59,130,246,0.55)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>PORTFOLIO 2 (3D Clay & Lanyard ID)</span>
            </button>
          </div>
        </div>

        {/* Right Quick Controls in Global Bar */}
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline font-mono-tech text-[11px] text-slate-400">
            {lang === 'tr' ? 'Kısayol: [1] veya [2] tuşu' : 'Shortcut: Press [1] or [2]'}
          </span>
          <button
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 font-mono-tech text-[11px] font-bold text-white cursor-pointer"
          >
            {lang === 'tr' ? 'TR 🇹🇷 / EN' : 'EN 🇬🇧 / TR'}
          </button>
        </div>
      </div>

      {/* ============================================================
          SMOOTH ANIMATED TRANSITION BETWEEN PORTFOLIO 1 & PORTFOLIO 2
         ============================================================ */}
      <AnimatePresence mode="wait">
        {portfolioVersion === 'p1' ? (
          <motion.div
            key="portfolio-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
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
              <HeroSection
                lang={lang}
                nightMode={nightMode}
                setNightMode={setNightMode}
              />
              <AboutScrapbook lang={lang} />
              <RetroResumeDesktop lang={lang} />
              <FolderProjectsSection lang={lang} />
              <ErasmusJourneySection lang={lang} />
            </main>

            <div className="xl:pl-12">
              <ContactFooter lang={lang} onCelebrate={triggerConfetti} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="portfolio-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Portfolio2View lang={lang} onCelebrate={triggerConfetti} />
            <ContactFooter lang={lang} onCelebrate={triggerConfetti} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
