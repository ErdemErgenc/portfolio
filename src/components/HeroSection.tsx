import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Compass,
  MapPin,
  Download,
  FolderOpen,
  Code2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  lang: 'tr' | 'en';
  nightMode: boolean;
  setNightMode: (v: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  nightMode,
  setNightMode,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* PART 1: ROBIN-STYLE NOTEBOOK HEADER (Reference 2) */}
        <div className="relative w-full max-w-4xl mx-auto text-center pt-2 pb-10">
          {/* Floating Circular Portrait Badges on Left & Right (like Reference 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex flex-col items-center absolute left-2 top-24 z-10 group"
          >
            <div className="w-16 h-16 rounded-full border-3 border-[#EA580C] bg-[#FFFDF9] p-0.5 shadow-[3px_3px_0px_#141413] overflow-hidden">
              <img
                src="/images/erdem-portrait.png"
                alt="İbrahim Erdem Ergenç"
                className="w-full h-full object-cover rounded-full bg-[#E0F2FE]"
              />
            </div>
            <span className="font-hand text-sm text-[var(--ink-muted)] mt-1 -rotate-6">
              {lang === 'tr' ? 'gerçek ben :)' : 'real me :)'}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex flex-col items-center absolute right-2 top-28 z-10"
          >
            <div className="w-16 h-16 rounded-full border-3 border-[#1D4ED8] bg-[#FFFDF9] p-0.5 shadow-[3px_3px_0px_#141413] overflow-hidden">
              <img
                src="/images/erdem-avatar-illustration.jpg"
                alt="Erdem İllüstrasyon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-hand text-sm text-[var(--ink-muted)] mt-1 rotate-6">
              {lang === 'tr' ? 'eskiz halim ✏️' : 'sketch me ✏️'}
            </span>
          </motion.div>

          {/* Top Callout Pills & "my name is" */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] border-2 border-[#141413] font-mono-tech text-[11px] font-bold shadow-[2px_2px_0px_#141413] -rotate-2">
              {lang === 'tr' ? '38+ DİJİTAL ÜRÜN' : '38+ SHIPPED PRODUCTS'}
            </span>

            <div className="flex flex-col items-center">
              <span className="font-hand text-2xl md:text-3xl text-[var(--ink)]">
                {lang === 'tr' ? 'selam, ben' : 'my name is'}
              </span>
              <svg className="w-16 h-2 text-[#EA580C]" viewBox="0 0 80 8" fill="none">
                <path
                  d="M2 5.5C22 2 58 2 78 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] border-2 border-[#141413] font-mono-tech text-[11px] font-bold shadow-[2px_2px_0px_#141413] rotate-2">
              {lang === 'tr' ? 'DETAYLARA TUTKUN' : 'SWEAT THE DETAILS'}
            </span>
          </div>

          {/* Framed Pixel/Block Name Box (Reference 2: ROBIN box) */}
          <div className="relative inline-block my-2">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative px-6 sm:px-10 py-3 sm:py-4 bg-[var(--paper-card)] border-3 border-[#EA580C] shadow-[6px_6px_0px_#141413] -rotate-1"
            >
              {/* Corner registration ticks */}
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F59E0B] border-2 border-[#141413]" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#1D4ED8] border-2 border-[#141413]" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#10B981] border-2 border-[#141413]" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#EA580C] border-2 border-[#141413]" />

              <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--ink)]">
                ERDEM ERGENÇ
              </h1>
            </motion.div>
          </div>

          {/* Annotated Role & Location Tags Under Box (Reference 2) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-4">
            <div className="px-3 py-1 bg-[#F59E0B] text-[#141413] border-2 border-[#141413] font-hand text-xl font-bold shadow-[2px_2px_0px_#141413] -rotate-2">
              {lang === 'tr' ? 'Yazılım Mühendisi & UI/UX' : 'Software Engineer & UI/UX'}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--paper-card)] border-2 border-[var(--border-ink)] font-mono-tech text-[11px] font-bold text-[var(--ink)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8] animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8] -ml-4" />
              <span>
                {lang === 'tr'
                  ? 'YENİ PROJELERE VE İYİ PROBLEMLERE AÇIK'
                  : 'OPEN TO NEW WORK AND GOOD PROBLEMS'}
              </span>
            </div>

            <div className="px-3 py-1 bg-[#A7F3D0] text-[#141413] border-2 border-[#141413] font-hand text-xl font-bold shadow-[2px_2px_0px_#141413] rotate-2 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#065F46]" />
              <span>Van / Gevaş</span>
            </div>
          </div>

          {/* Main Value Statement with Inline Badges (Reference 2) */}
          <h2 className="mt-6 max-w-2xl mx-auto font-grotesk text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[var(--ink)]">
            {lang === 'tr' ? (
              <>
                Mobil, web ve yapay zekâyı{' '}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#10B981] text-white border-2 border-[#141413] align-middle mx-1 shadow-[2px_2px_0px_#141413]">
                  <Code2 className="w-4 h-4" />
                </span>{' '}
                kullanıcıyı yormayan estetik deneyimlere dönüştürüyorum.{' '}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EC4899] text-white border-2 border-[#141413] align-middle mx-1 shadow-[2px_2px_0px_#141413]">
                  <Sparkles className="w-4 h-4" />
                </span>
              </>
            ) : (
              <>
                I engineer mobile, web & AI software that{' '}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#10B981] text-white border-2 border-[#141413] align-middle mx-1 shadow-[2px_2px_0px_#141413]">
                  <Code2 className="w-4 h-4" />
                </span>{' '}
                gets out of your way and feels effortless.{' '}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EC4899] text-white border-2 border-[#141413] align-middle mx-1 shadow-[2px_2px_0px_#141413]">
                  <Sparkles className="w-4 h-4" />
                </span>
              </>
            )}
          </h2>

          {/* Primary CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="retro-btn px-5 py-2.5 bg-[#141413] text-[#FBF8F1] font-mono-tech text-xs font-bold flex items-center gap-2"
            >
              <span className="w-3.5 h-3.5 bg-[#1D4ED8] inline-block border border-white" />
              <span>{lang === 'tr' ? 'PROJELERİ KEŞFET (10)' : 'EXPLORE PROJECTS (10)'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#F59E0B]" />
            </a>

            <a
              href="#desktop-os"
              className="retro-btn px-5 py-2.5 bg-[#F59E0B] text-[#141413] font-mono-tech text-xs font-bold flex items-center gap-2"
            >
              <FolderOpen className="w-4 h-4" />
              <span>{lang === 'tr' ? 'İNTERAKTİF CV PENCERESİ' : 'INTERACTIVE RESUME OS'}</span>
            </a>

            <a
              href={personalInfo.cvUrl}
              download
              className="retro-btn px-4 py-2.5 bg-[var(--paper-card)] text-[var(--ink)] font-mono-tech text-xs font-bold flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#1D4ED8]" />
              <span>{lang === 'tr' ? 'ÖZGEÇMİŞ İNDİR (PDF)' : 'DOWNLOAD CV (PDF)'}</span>
            </a>
          </div>
        </div>

        {/* PART 2: "WANDER THE HORIZON" ILLUSTRATED SKETCHBOOK SHOWPIECE CARD (Reference 1) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`w-full rounded-2xl border-3 border-[var(--border-ink)] shadow-[10px_10px_0px_var(--border-ink)] overflow-hidden transition-colors duration-500 ${
            nightMode ? 'bg-[#0F172A] text-[#F8FAFC]' : 'bg-[#F8F3E6] text-[#141413]'
          }`}
        >
          {/* Card Top Sketchbook Bar */}
          <div className="px-5 py-3 border-b-2 border-[var(--border-ink)]/20 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[10px] sm:text-[11px] tracking-wider uppercase">
            <div className="flex items-center gap-4">
              <a href="#projects" className="hover:underline font-bold">
                EXPLORE
              </a>
              <span className="opacity-40">|</span>
              <a href="#about" className="hover:underline font-bold">
                JOURNAL
              </a>
              <span className="opacity-40">|</span>
              <a href="#journey" className="hover:underline font-bold">
                PLACES & ERASMUS
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3 text-[var(--ink-muted)]">
              <span>38° 18&apos; N  43° 06&apos; E</span>
              <Compass className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="font-bold text-[var(--ink)]">
                ARTOS MOUNTAIN & LAKE VAN, TURKEY
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="opacity-70">SKETCHBOOK_07</span>
              <button
                onClick={() => setNightMode(!nightMode)}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--border-ink)] font-bold cursor-pointer bg-[var(--paper-card)] text-[var(--ink)]"
              >
                <span>{nightMode ? 'NIGHT MODE' : 'DAY MODE'}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    nightMode ? 'bg-[#FBBF24]' : 'bg-[#1D4ED8]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Main Illustrated Horizon Grid (Exact layout from Reference 1: Wander the Horizon) */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]">
            {/* Left Architectural Display Title & Route Callouts */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10">
              <div>
                <div className="font-mono-tech text-[10px] uppercase tracking-widest text-[#1D4ED8] font-bold mb-2 flex items-center gap-2">
                  <span>// ARCHITECTURAL PORTFOLIO EDITION</span>
                </div>

                {/* Giant Condensed Headline like "WANDER THE HORIZON" */}
                <div className="select-none">
                  <div className="font-display-condensed text-6xl sm:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.88]">
                    {lang === 'tr' ? 'UFUKLARI' : 'WANDER'}
                  </div>
                  <div className="flex items-baseline gap-2.5 mt-1">
                    <span className="font-display-condensed text-3xl sm:text-4xl xl:text-5xl text-[#1D4ED8] uppercase leading-none">
                      {lang === 'tr' ? 'KODLA' : 'THE'}
                    </span>
                    <span className="font-display-condensed text-6xl sm:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.88]">
                      {lang === 'tr' ? 'TASARLA' : 'HORIZON'}
                    </span>
                  </div>
                </div>

                <p className="mt-4 font-mono-tech text-xs leading-relaxed opacity-85 max-w-sm">
                  {lang === 'tr' ? (
                    <>
                      Bazı yollar keşfedilmez, satır satır kodlanır ve çizilir.{' '}
                      <span className="underline decoration-[#F59E0B] decoration-2 font-bold">
                        Fırat Üniversitesi
                      </span>
                      &apos;nden{' '}
                      <span className="underline decoration-[#1D4ED8] decoration-2 font-bold">
                        Fransa & İspanya Erasmus
                      </span>{' '}
                      yolculuğuna,{' '}
                      <span className="font-bold">Reeder</span>&apos;dan{' '}
                      <span className="font-bold">ARTOS Yazılım</span>&apos;a uzanan mühendislik
                      defteri.
                    </>
                  ) : (
                    <>
                      Some paths are meant to be drawn and coded, not just found. From{' '}
                      <span className="underline decoration-[#F59E0B] decoration-2 font-bold">
                        Fırat University
                      </span>{' '}
                      & Erasmus in{' '}
                      <span className="underline decoration-[#1D4ED8] decoration-2 font-bold">
                        France & Spain
                      </span>{' '}
                      to <span className="font-bold">Reeder</span> &{' '}
                      <span className="font-bold">ARTOS Software</span>.
                    </>
                  )}
                </p>
              </div>

              {/* Bottom Left Botanical / Engineering Callout Box + Milestones (Reference 1 bottom-left) */}
              <div className="mt-8 pt-4 border-t border-dashed border-current/25 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-tech text-[10px]">
                {/* Local Roots Box */}
                <div className="border border-current/30 p-3 rounded bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs">
                  <div className="text-[#1D4ED8] font-bold uppercase mb-1">
                    [ MÜHENDİSLİK İMZASI ]
                  </div>
                  <div className="opacity-80 leading-relaxed">
                    FLUTTER • REACT • NEXT.JS
                    <br />
                    MACHINE LEARNING & OCR
                    <br />
                    FIGMA & ILLUSTRATOR CRAFT
                  </div>
                </div>

                {/* Numbered Route Waypoints */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="font-bold text-[#1D4ED8]">01 ───────</div>
                    <div className="font-bold mt-0.5">FIRAT ÜNİV.</div>
                    <div className="opacity-70">YAZILIM MÜH.</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1D4ED8]">02 ───────</div>
                    <div className="font-bold mt-0.5">ERASMUS+</div>
                    <div className="opacity-70">FRANSA & İSPANYA</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1D4ED8]">03 ───────</div>
                    <div className="font-bold mt-0.5">REEDER A.Ş.</div>
                    <div className="opacity-70">FLUTTER & REACT</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#1D4ED8]">04 ───────</div>
                    <div className="font-bold mt-0.5">VAN YYÜ YL</div>
                    <div className="opacity-70">YAPAY ZEKÂ</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Hand-Drawn Architectural Illustration + Interactive Sun & Callouts */}
            <div className="lg:col-span-7 relative flex items-center justify-center overflow-hidden p-4 lg:p-6">
              {/* Illustration Image Container */}
              <div className="relative w-full h-full min-h-[340px] lg:min-h-[440px] rounded-xl overflow-hidden border-2 border-[#141413] shadow-[4px_4px_0px_#141413]">
                <img
                  src="/images/hero-horizon-sketch.jpg"
                  alt="Van Gölü, Akdamar Adası ve Artos Dağı Mimari Eskiz İllüstrasyonu"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    nightMode
                      ? 'brightness-75 contrast-125 hue-rotate-180 invert-[0.88]'
                      : 'brightness-100 contrast-105'
                  }`}
                />

                {/* Interactive Sun / Moon Trigger in the Sky (Exact match to Reference 1!) */}
                <div className="absolute top-5 right-6 sm:right-10 z-20 flex items-center gap-3">
                  <button
                    onClick={() => setNightMode(!nightMode)}
                    aria-label="Toggle Day/Night Scene"
                    className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                  >
                    {/* Dashed rotating sun rays */}
                    <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#D97706] animate-spin [animation-duration:18s]" />
                    <span className="absolute inset-1.5 rounded-full bg-[#F59E0B]/25 group-hover:bg-[#F59E0B]/40 transition-colors" />
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#141413] shadow-[2px_2px_0px_#141413] transition-colors ${
                        nightMode ? 'bg-[#38BDF8]' : 'bg-[#F59E0B]'
                      }`}
                    />
                  </button>

                  <div className="bg-[#FFFDF9]/95 text-[#141413] border-2 border-[#141413] px-2.5 py-1.5 rounded shadow-[2px_2px_0px_#141413] font-mono-tech text-[9px] sm:text-[10px] leading-tight max-w-[165px]">
                    <div className="font-bold text-[#1D4ED8]">
                      {lang === 'tr' ? 'GÜNEŞE TIKLA ☀️' : 'CLICK THE SUN ☀️'}
                    </div>
                    <div>
                      {lang === 'tr'
                        ? 'SAHNEYİ GÜNDÜZ / GECE MODUNA DÖNÜŞTÜR'
                        : 'TRANSFORM THE SCENE FROM DAY TO NIGHT'}
                    </div>
                  </div>
                </div>

                {/* Architectural Note Overlay on Right (Reference 1) */}
                <div className="hidden sm:block absolute top-28 right-6 z-20 bg-[#FFFDF9]/90 text-[#141413] border border-[#141413] p-2.5 rounded font-mono-tech text-[9px] max-w-[190px] backdrop-blur-xs">
                  <div className="font-bold text-[#1D4ED8] mb-0.5">ARCHITECTURAL NOTE</div>
                  <div className="opacity-80">
                    ARTOS MOUNTAIN (3,550M)
                    <br />
                    AKDAMAR ISLAND & LAKE VAN
                    <br />
                    CLEAN CODE ARCHITECTURE
                  </div>
                </div>

                {/* Bottom Right Telemetry / Sea Conditions Card (Reference 1) */}
                <div className="absolute bottom-4 right-4 z-20 bg-[#E0F2FE]/95 text-[#141413] border-2 border-[#141413] px-3.5 py-2.5 rounded shadow-[3px_3px_0px_#141413] font-mono-tech text-[10px]">
                  <div className="font-bold text-[#1D4ED8] border-b border-[#1D4ED8]/30 pb-1 mb-1 flex items-center justify-between gap-4">
                    <span>STACK TELEMETRY</span>
                    <span>+</span>
                  </div>
                  <div>LATENCY: &lt; 1.2s LCP</div>
                  <div>STACK: FLUTTER / REACT / AI</div>
                  <div>STATUS: 38+ PROJECTS LIVE</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

