import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Layers } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutScrapbook } from './components/AboutScrapbook';
import { RetroResumeDesktop } from './components/RetroResumeDesktop';
import { FolderProjectsSection } from './components/FolderProjectsSection';
import { ErasmusJourneySection } from './components/ErasmusJourneySection';
import { ContactFooter } from './components/ContactFooter';
import { IllustratorToolbar, type ActiveTool } from './components/IllustratorToolbar';
import { SketchpadOverlay } from './components/SketchpadOverlay';
import { Portfolio2Zine } from './components/Portfolio2Zine';

export function App() {
  const [portfolioVersion, setPortfolioVersion] = useState<'v1' | 'v2'>('v2');
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [nightMode, setNightMode] = useState<boolean>(false);
  const [xrayMode, setXrayMode] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<ActiveTool>('select');
  const [brushColor, setBrushColor] = useState<string>('#1D4ED8');
  const [clearSignal, setClearSignal] = useState<number>(0);

  useEffect(() => {
    const root = document.documentElement;
    if (nightMode && portfolioVersion === 'v1') {
      root.classList.add('night-blueprint');
    } else {
      root.classList.remove('night-blueprint');
    }
  }, [nightMode, portfolioVersion]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (portfolioVersion !== 'v1') return;
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
  }, [portfolioVersion]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#6E6295', '#1E8E7E', '#D96B52', '#F3D37A', '#1D4ED8'],
    });
  };

  const handleSwitchVersion = (version: 'v1' | 'v2') => {
    if (version === portfolioVersion) return;
    setActiveTool('select');
    setPortfolioVersion(version);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* =====================================================================
          TOP GLOBAL VERSION SWITCHER BAR (PORTFOLIO 1 <-> PORTFOLIO 2)
      ===================================================================== */}
      <div className="sticky top-0 z-50 h-[46px] w-full bg-[#1C1917] text-[#F5F0E6] border-b border-[#F5F0E6]/15 px-4 lg:px-8 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2 text-xs font-mono-tech">
          <Layers className="w-3.5 h-3.5 text-[#F3D37A]" />
          <span className="font-bold tracking-wider uppercase hidden sm:inline">
            İBRAHİM ERDEM ERGENÇ // TASARIM MODU:
          </span>
          <span className="font-bold tracking-wider uppercase sm:hidden">
            MOD:
          </span>
        </div>

        {/* Version Switch Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSwitchVersion('v1')}
            className={`relative px-3.5 py-1 rounded-full text-xs font-mono-tech font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              portfolioVersion === 'v1'
                ? 'bg-[#F59E0B] text-[#141413] shadow-[2px_2px_0px_#FFF]'
                : 'bg-[#292524] text-[#F5F0E6]/75 hover:text-white hover:bg-[#3F3A36]'
            }`}
          >
            <span>PORTFOLIO 1</span>
            <span className="hidden md:inline text-[10px] opacity-80">
              (Sketchbook &amp; WinXP)
            </span>
          </button>

          <button
            onClick={() => handleSwitchVersion('v2')}
            className={`relative px-3.5 py-1 rounded-full text-xs font-zine-display font-extrabold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              portfolioVersion === 'v2'
                ? 'bg-[#6E6295] text-white border border-[#F5F0E6] shadow-[2px_2px_0px_#F3D37A]'
                : 'bg-[#292524] text-[#F5F0E6]/75 hover:text-white hover:bg-[#3F3A36]'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#F3D37A]" />
            <span>PORTFOLIO 2</span>
            <span className="hidden md:inline text-[10px] opacity-90">
              (Art-Zine Edition)
            </span>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono-tech text-[#F5F0E6]/70">
          <span>
            {portfolioVersion === 'v1'
              ? 'Aktif: Wander Sketchbook + WinXP'
              : 'Aktif: French Editorial Art-Zine'}
          </span>
        </div>
      </div>

      {/* =====================================================================
          ANIMATED VIEWPORT SWITCHER (Completely Separate Portfolios)
      ===================================================================== */}
      <AnimatePresence mode="wait">
        {portfolioVersion === 'v1' ? (
          <motion.div
            key="portfolio-v1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
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

            {/* Left Floating Adobe Illustrator Studio Toolbar */}
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

            {/* Sticky Top Sketchbook & Pill Navigation */}
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
            key="portfolio-v2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Portfolio2Zine
              lang={lang}
              setLang={setLang}
              onCelebrate={triggerConfetti}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
