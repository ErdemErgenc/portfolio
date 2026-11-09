import React from 'react';
import {
  MousePointer,
  PenTool,
  Ruler,
  Sun,
  Moon,
  Trash2,
  Sparkles,
  FileDown,
} from 'lucide-react';

export type ActiveTool = 'select' | 'draw';

interface IllustratorToolbarProps {
  activeTool: ActiveTool;
  setActiveTool: (tool: ActiveTool) => void;
  brushColor: string;
  setBrushColor: (color: string) => void;
  onClearCanvas: () => void;
  xrayMode: boolean;
  setXrayMode: (v: boolean) => void;
  nightMode: boolean;
  setNightMode: (v: boolean) => void;
  onCelebrate: () => void;
  lang: 'tr' | 'en';
}

const SWATCHES = [
  { color: '#1D4ED8', name: 'Cobalt Ink' },
  { color: '#141413', name: 'Charcoal Ink' },
  { color: '#F59E0B', name: 'Amber Marker' },
  { color: '#EA580C', name: 'Terracotta' },
  { color: '#059669', name: 'Emerald' },
];

export const IllustratorToolbar: React.FC<IllustratorToolbarProps> = ({
  activeTool,
  setActiveTool,
  brushColor,
  setBrushColor,
  onClearCanvas,
  xrayMode,
  setXrayMode,
  nightMode,
  setNightMode,
  onCelebrate,
  lang,
}) => {
  return (
    <aside
      aria-label="Illustrator Studio Toolbar"
      className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col retro-window-sm w-14 select-none overflow-hidden"
    >
      {/* Mini OS Title Bar */}
      <div className="bg-[#141413] text-[#FBF8F1] px-1.5 py-1 flex items-center justify-between border-b-2 border-[#141413]">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
        </div>
        <span className="font-mono-tech text-[9px] tracking-tighter opacity-80">AI.26</span>
      </div>

      {/* Tool Buttons Grid */}
      <div className="p-1.5 flex flex-col gap-1.5 items-center">
        {/* Selection Tool */}
        <button
          onClick={() => setActiveTool('select')}
          title={lang === 'tr' ? 'Seçim Aracı (V) — Gezin & Pencereleri Sürükle' : 'Selection Tool (V) — Browse & Drag Windows'}
          className={`w-10 h-10 flex flex-col items-center justify-center border-2 border-[#141413] transition-all cursor-pointer ${
            activeTool === 'select'
              ? 'bg-[#F59E0B] text-[#141413] shadow-[2px_2px_0px_#141413]'
              : 'bg-white/80 text-[#141413] hover:bg-[#F3EFE6]'
          }`}
        >
          <MousePointer className="w-4 h-4" />
          <span className="font-mono-tech text-[9px] font-bold mt-0.5">V</span>
        </button>

        {/* Pen / Sketch Tool */}
        <button
          onClick={() => setActiveTool(activeTool === 'draw' ? 'select' : 'draw')}
          title={lang === 'tr' ? 'Eskiz Kalemi (P) — Sayfanın Üzerine Çizim Yap!' : 'Sketch Pen (P) — Draw Directly on the Page!'}
          className={`w-10 h-10 flex flex-col items-center justify-center border-2 border-[#141413] transition-all cursor-pointer ${
            activeTool === 'draw'
              ? 'bg-[#1D4ED8] text-white shadow-[2px_2px_0px_#141413]'
              : 'bg-white/80 text-[#141413] hover:bg-[#F3EFE6]'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span className="font-mono-tech text-[9px] font-bold mt-0.5">P</span>
        </button>

        {/* Blueprint X-Ray Mode */}
        <button
          onClick={() => setXrayMode(!xrayMode)}
          title={lang === 'tr' ? 'Mimari Blueprint / X-Ray Izgarası (X)' : 'Architectural Blueprint / X-Ray Grid (X)'}
          className={`w-10 h-10 flex flex-col items-center justify-center border-2 border-[#141413] transition-all cursor-pointer ${
            xrayMode
              ? 'bg-[#059669] text-white shadow-[2px_2px_0px_#141413]'
              : 'bg-white/80 text-[#141413] hover:bg-[#F3EFE6]'
          }`}
        >
          <Ruler className="w-4 h-4" />
          <span className="font-mono-tech text-[9px] font-bold mt-0.5">X</span>
        </button>

        {/* Day / Night Scene Transform */}
        <button
          onClick={() => setNightMode(!nightMode)}
          title={lang === 'tr' ? 'Gündüz Eskiz / Gece Blueprint Modu' : 'Toggle Day Sketchbook / Night Blueprint'}
          className={`w-10 h-10 flex flex-col items-center justify-center border-2 border-[#141413] transition-all cursor-pointer ${
            nightMode
              ? 'bg-[#0B132B] text-[#FBBF24] shadow-[2px_2px_0px_#38BDF8]'
              : 'bg-white/80 text-[#141413] hover:bg-[#F3EFE6]'
          }`}
        >
          {nightMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span className="font-mono-tech text-[9px] font-bold mt-0.5">{nightMode ? 'DAY' : 'NGT'}</span>
        </button>

        {/* Celebrate / Sparkle */}
        <button
          onClick={onCelebrate}
          title={lang === 'tr' ? 'Konfeti Patlat!' : 'Launch Confetti!'}
          className="w-10 h-10 flex flex-col items-center justify-center border-2 border-[#141413] bg-white/80 text-[#141413] hover:bg-[#FCE7F3] transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#DB2777]" />
          <span className="font-mono-tech text-[9px] font-bold mt-0.5">★</span>
        </button>

        <div className="w-full border-t-2 border-dashed border-[#141413]/30 my-0.5" />

        {/* Illustrator Fill/Stroke Swatch Box */}
        <div className="flex flex-col items-center gap-1 py-1">
          <div className="relative w-8 h-8" title={lang === 'tr' ? 'Kalem Rengi Seç' : 'Select Ink Color'}>
            <div
              className="w-5 h-5 border-2 border-[#141413] absolute top-0 left-0 z-10"
              style={{ backgroundColor: brushColor }}
            />
            <div className="w-5 h-5 border-2 border-[#141413] bg-white absolute bottom-0 right-0" />
          </div>

          <div className="grid grid-cols-2 gap-1 mt-1">
            {SWATCHES.map((s) => (
              <button
                key={s.color}
                onClick={() => {
                  setBrushColor(s.color);
                  setActiveTool('draw');
                }}
                title={s.name}
                className={`w-4 h-4 border border-[#141413] cursor-pointer transition-transform ${
                  brushColor === s.color ? 'scale-125 ring-1 ring-[#141413]' : 'hover:scale-110'
                }`}
                style={{ backgroundColor: s.color }}
              />
            ))}
            <button
              onClick={onClearCanvas}
              title={lang === 'tr' ? 'Çizimleri Temizle' : 'Clear Drawings'}
              className="w-4 h-4 border border-[#141413] bg-white flex items-center justify-center text-[#DC2626] hover:bg-[#FEE2E2] cursor-pointer"
            >
              <Trash2 className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        <div className="w-full border-t-2 border-dashed border-[#141413]/30 my-0.5" />

        {/* Download CV Shortcut */}
        <a
          href="/Ibrahim_Erdem_Ergenc_CV.pdf"
          download
          title={lang === 'tr' ? 'Özgeçmiş (CV) PDF İndir' : 'Download Resume PDF'}
          className="w-10 h-10 flex flex-col items-center justify-center border-2 border-[#141413] bg-[#F59E0B] text-[#141413] hover:bg-[#D97706] transition-all"
        >
          <FileDown className="w-4 h-4" />
          <span className="font-mono-tech text-[8px] font-bold">CV</span>
        </a>
      </div>
    </aside>
  );
};

