import React, { useEffect, useRef, useState } from 'react';
import { PenTool, Trash2, Check } from 'lucide-react';
import type { ActiveTool } from './IllustratorToolbar';

interface SketchpadOverlayProps {
  activeTool: ActiveTool;
  setActiveTool: (tool: ActiveTool) => void;
  brushColor: string;
  setBrushColor: (c: string) => void;
  clearSignal: number;
  lang: 'tr' | 'en';
}

export const SketchpadOverlay: React.FC<SketchpadOverlayProps> = ({
  activeTool,
  setActiveTool,
  brushColor,
  setBrushColor,
  clearSignal,
  lang,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const temp = document.createElement('canvas');
      temp.width = canvas.width;
      temp.height = canvas.height;
      const tempCtx = temp.getContext('2d');
      if (tempCtx) tempCtx.drawImage(canvas, 0, 0);

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.drawImage(temp, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [clearSignal]);

  const startDraw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (activeTool !== 'draw') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = 3.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const moveDraw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || activeTool !== 'draw') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const endDraw = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onPointerDown={startDraw}
        onPointerMove={moveDraw}
        onPointerUp={endDraw}
        onPointerLeave={endDraw}
        className={`fixed inset-0 z-30 ${
          activeTool === 'draw' ? 'pointer-events-auto cursor-crosshair' : 'pointer-events-none'
        }`}
      />

      {activeTool === 'draw' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 retro-window px-4 py-2.5 flex items-center gap-3 bg-[#FFFDF9] text-[#141413]">
          <div className="flex items-center gap-2">
            <PenTool className="w-4 h-4 text-[#1D4ED8]" />
            <span className="font-mono-tech text-xs font-bold">
              {lang === 'tr' ? 'ESKİZ MODU AKTİF: Sayfaya çizim yapabilirsin!' : 'SKETCH MODE: Draw anywhere on the page!'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 border-l-2 border-[#141413]/20 pl-3">
            {['#1D4ED8', '#141413', '#F59E0B', '#EA580C', '#059669'].map((c) => (
              <button
                key={c}
                onClick={() => setBrushColor(c)}
                className={`w-5 h-5 rounded-full border-2 border-[#141413] cursor-pointer ${
                  brushColor === c ? 'scale-125 ring-2 ring-[#1D4ED8]' : ''
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <button
            onClick={handleClear}
            className="retro-btn px-2.5 py-1 bg-[#FEE2E2] text-[#DC2626] font-mono-tech text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            {lang === 'tr' ? 'Temizle' : 'Clear'}
          </button>

          <button
            onClick={() => setActiveTool('select')}
            className="retro-btn px-3 py-1 bg-[#F59E0B] text-[#141413] font-mono-tech text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            {lang === 'tr' ? 'Bitti (V)' : 'Done (V)'}
          </button>
        </div>
      )}
    </>
  );
};

