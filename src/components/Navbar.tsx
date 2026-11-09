import React, { useState } from 'react';
import {
  Star,
  User,
  FolderKanban,
  Terminal,
  Compass,
  Heart,
  Sun,
  Moon,
  PenTool,
  Menu,
  X,
  FileDown,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import type { ActiveTool } from './IllustratorToolbar';

interface NavbarProps {
  lang: 'tr' | 'en';
  setLang: (l: 'tr' | 'en') => void;
  nightMode: boolean;
  setNightMode: (v: boolean) => void;
  activeTool: ActiveTool;
  setActiveTool: (t: ActiveTool) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  nightMode,
  setNightMode,
  activeTool,
  setActiveTool,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    {
      id: 'hero',
      label: lang === 'tr' ? 'ANA SAYFA' : 'HOME',
      href: '#hero',
      icon: Star,
      highlight: true,
    },
    {
      id: 'about',
      label: lang === 'tr' ? 'HAKKIMDA' : 'ABOUT',
      href: '#about',
      icon: User,
    },
    {
      id: 'desktop-os',
      label: lang === 'tr' ? 'MASAÜSTÜ CV' : 'RESUME OS',
      href: '#desktop-os',
      icon: Terminal,
    },
    {
      id: 'projects',
      label: lang === 'tr' ? 'PROJELER (10)' : 'CASE STUDIES (10)',
      href: '#projects',
      icon: FolderKanban,
    },
    {
      id: 'journey',
      label: lang === 'tr' ? 'ERASMUS & ATÖLYE' : 'JOURNEY & LAB',
      href: '#journey',
      icon: Compass,
    },
  ];

  return (
    <header className="sticky top-[48px] z-40 w-full border-b-2 border-[var(--border-ink)] bg-[var(--paper-bg)]/95 backdrop-blur-md">
      {/* Top Sketchbook Metadata Strip (Reference 1: Wander the Horizon) */}
      <div className="border-b border-[var(--border-ink)]/20 px-4 lg:px-8 py-1.5 flex items-center justify-between text-[11px] font-mono-tech text-[var(--ink-muted)]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold text-[var(--ink)]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            SKETCHBOOK_07 // ERDEM.DEV
          </span>
          <span className="hidden md:inline opacity-40">|</span>
          <span className="hidden md:inline">{personalInfo.coordinates}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">
            {lang === 'tr' ? 'KURUCU ORTAK @ ARTOS YAZILIM' : 'CO-FOUNDER @ ARTOS SOFTWARE'}
          </span>
          <span className="opacity-40">|</span>
          <button
            onClick={() => setNightMode(!nightMode)}
            className="inline-flex items-center gap-1.5 font-bold text-[var(--ink)] hover:text-[var(--cobalt)] cursor-pointer"
          >
            {nightMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>NIGHT BLUEPRINT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>DAY SKETCHBOOK</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Robin-Style Pill Navigation Bar (Reference 2) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left Nav Pills */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 font-mono-tech text-xs font-bold tracking-tight flex items-center gap-1.5 border-2 transition-all ${
                  item.highlight
                    ? 'bg-[#F59E0B] text-[#141413] border-[#141413] shadow-[2px_2px_0px_#141413]'
                    : 'border-transparent hover:border-[var(--border-ink)] hover:bg-[var(--paper-secondary)] text-[var(--ink)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Brand Title */}
        <a href="#hero" className="lg:hidden flex items-center gap-2 font-pixel text-sm font-bold">
          <span className="px-2 py-0.5 bg-[#F59E0B] text-[#141413] border-2 border-[#141413]">
            ERDEM
          </span>
          <span className="text-xs font-mono-tech text-[var(--ink-muted)]">.DEV</span>
        </a>

        {/* Right Controls: Draw Toggle, Lang Switch, CV, Contact Button */}
        <div className="flex items-center gap-2">
          {/* Interactive Sketch Button */}
          <button
            onClick={() => setActiveTool(activeTool === 'draw' ? 'select' : 'draw')}
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono-tech font-bold border-2 border-[#141413] cursor-pointer transition-all ${
              activeTool === 'draw'
                ? 'bg-[#1D4ED8] text-white shadow-[2px_2px_0px_#141413]'
                : 'bg-[#FFFDF9] text-[#141413] hover:bg-[#DBEAFE]'
            }`}
            title={lang === 'tr' ? 'Eskiz Kalemini Aç/Kapat' : 'Toggle Sketch Pen'}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? 'ÇİZİM YAP' : 'SKETCH'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            className="px-2.5 py-1 text-xs font-mono-tech font-bold border-2 border-[var(--border-ink)] bg-[var(--paper-card)] text-[var(--ink)] hover:bg-[#F59E0B] hover:text-[#141413] transition-colors cursor-pointer"
          >
            {lang === 'tr' ? 'TR 🇹🇷 / EN' : 'EN 🇬🇧 / TR'}
          </button>

          {/* CV Download Pill */}
          <a
            href={personalInfo.cvUrl}
            download
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono-tech font-bold border-2 border-[#141413] bg-[#D1FAE5] text-[#141413] shadow-[2px_2px_0px_#141413] hover:translate-y-[-1px] transition-transform"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV.PDF</span>
          </a>

          {/* Contact CTA Pill (Reference 2 top-right button) */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-tech font-bold border-2 border-[var(--border-ink)] bg-[#141413] text-[#FBF8F1] shadow-[3px_3px_0px_#F59E0B] hover:bg-[#1D4ED8] transition-colors"
          >
            <Heart className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
            <span>{lang === 'tr' ? 'İLETİŞİM' : 'CONTACT'}</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 border-2 border-[var(--border-ink)] bg-[var(--paper-card)] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t-2 border-[var(--border-ink)] bg-[var(--paper-card)] px-4 py-4 flex flex-col gap-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 font-mono-tech text-xs font-bold border-2 border-[var(--border-ink)] flex items-center gap-2 bg-[var(--paper-bg)] text-[var(--ink)]"
              >
                <Icon className="w-4 h-4 text-[#1D4ED8]" />
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

