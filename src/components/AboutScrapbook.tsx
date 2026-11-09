import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Brain,
  PenTool,
  Database,
  RefreshCw,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutScrapbookProps {
  lang: 'tr' | 'en';
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Brain,
  PenTool,
  Database,
};

export const AboutScrapbook: React.FC<AboutScrapbookProps> = ({ lang }) => {
  const [showIllustratedPolaroid, setShowIllustratedPolaroid] = useState(false);

  return (
    <section id="about" className="relative py-16 px-4 lg:px-8 overflow-hidden">
      {/* Curved Hand-Drawn Divider Line (Reference 2) */}
      <div className="max-w-6xl mx-auto mb-10">
        <svg className="w-full h-7 text-[var(--border-ink)]/35" viewBox="0 0 1200 32" fill="none">
          <path
            d="M4 26C320 4 880 4 1196 26"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="pl-4 sm:pl-12 -mt-2">
          <span className="font-hand text-2xl sm:text-3xl font-bold text-[var(--ink)]">
            {lang === 'tr' ? 'hakkımda! ✍️' : 'about me! ✍️'}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Centered Framed Box ("what's up" / "hikayem & vizyonum") */}
        <div className="flex justify-center mb-10">
          <div className="px-5 py-1.5 bg-[var(--paper-card)] border-2 border-[var(--border-ink)] shadow-[4px_4px_0px_var(--border-ink)] font-grotesk text-lg sm:text-xl font-bold">
            {lang === 'tr' ? "what's up // ben kimim?" : "what's up // my story"}
          </div>
        </div>

        {/* 3-Column Scrapbook Grid: Left Polaroid + Center Manifesto + Right Polaroid (Reference 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Polaroid Frame (Erdem's Real Photo + Click to flip to Illustrated Avatar) */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative bg-[#FFFDF9] p-3 pb-5 border-2 border-[#141413] shadow-[6px_6px_0px_#141413] -rotate-3 max-w-[270px] w-full">
              {/* Top Left & Right Scotch Tape Strips */}
              <div className="scotch-tape w-16 h-6 absolute -top-3 -left-3 -rotate-35 z-10" />
              <div className="scotch-tape w-16 h-6 absolute -top-3 -right-3 rotate-35 z-10" />

              <div className="relative aspect-[4/5] overflow-hidden border border-[#141413] bg-[#E0F2FE]">
                <img
                  src={
                    showIllustratedPolaroid
                      ? '/images/erdem-avatar-illustration.jpg'
                      : '/images/erdem-cafe.jpg'
                  }
                  alt="İbrahim Erdem Ergenç"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <button
                  onClick={() => setShowIllustratedPolaroid(!showIllustratedPolaroid)}
                  className="absolute bottom-2 right-2 px-2 py-1 bg-[#FFFDF9]/95 text-[#141413] border border-[#141413] font-mono-tech text-[10px] font-bold flex items-center gap-1 shadow-[2px_2px_0px_#141413] cursor-pointer hover:bg-[#F59E0B]"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{showIllustratedPolaroid ? (lang === 'tr' ? 'Fotoğraf' : 'Photo') : (lang === 'tr' ? 'Çizim' : 'Sketch')}</span>
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="font-hand text-xl font-bold text-[#141413]">
                  İbrahim Erdem Ergenç
                </p>
                <p className="font-mono-tech text-[10px] text-[#57554E]">
                  Fırat Üniv. &apos;25 • Van YYÜ YL &apos;26
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center Editorial Bio + Ticket Stamp Badges */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4">
            {/* Lead Handwritten-feeling Intro */}
            <p className="font-hand text-2xl sm:text-3xl leading-snug text-[var(--ink)] mb-5 max-w-2xl">
              {lang === 'tr' ? (
                <>
                  ✨ Karmaşık mühendislik problemlerini yalın, hızlı ve göze hitap eden ürünlere
                  dönüştürmekten heyecan duyan bir{' '}
                  <span className="px-2 py-0.5 bg-[#FEF3C7] text-[#141413] border border-[#141413] rounded">
                    Yazılım Mühendisi & Tasarımcıyım.
                  </span>{' '}
                  Küçük detayları, kimsenin dikkat etmediği uç senaryoları ve insanların gününü
                  kolaylaştıran yazılımlar üretmeyi seviyorum. 🎨
                </>
              ) : (
                <>
                  ✨ I&apos;m a{' '}
                  <span className="px-2 py-0.5 bg-[#FEF3C7] text-[#141413] border border-[#141413] rounded">
                    Software Engineer & Designer
                  </span>{' '}
                  who gets excited about making complex systems feel simple. I care about small
                  details, edge cases, and shipping mobile, web, and AI products that genuinely make
                  someone&apos;s day easier. 🎨
                </>
              )}
            </p>

            {/* Detailed Bio Paragraphs from CV */}
            <div className="space-y-3 text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed text-left bg-[var(--paper-card)] p-5 border-2 border-[var(--border-ink)] shadow-[4px_4px_0px_var(--border-ink)] mb-7">
              {personalInfo.bioParagraphs[lang].map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Perforated Stamp / Ticket Badges (Exact match to Reference 2 colorful stamps!) */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {personalInfo.stampBadges.map((badge, i) => {
                const IconComponent = iconMap[badge.icon] || Smartphone;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                    className="flex items-stretch stamp-badge overflow-hidden"
                  >
                    <div
                      className="px-4 py-2 font-grotesk text-xs sm:text-sm font-bold flex items-center gap-2"
                      style={{ backgroundColor: badge.color, color: badge.text }}
                    >
                      <span>{badge.label[lang]}</span>
                    </div>
                    <div
                      className="px-2.5 py-2 border-l-2 border-dashed border-[#141413] flex items-center justify-center"
                      style={{ backgroundColor: badge.color, color: badge.text }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Polaroid Frame (Illustrated Workspace Sketch) */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative bg-[#FFFDF9] p-3 pb-5 border-2 border-[#141413] shadow-[6px_6px_0px_#141413] rotate-3 max-w-[270px] w-full">
              {/* Top Scotch Tape Strips */}
              <div className="scotch-tape w-16 h-6 absolute -top-3 -left-3 -rotate-35 z-10" />
              <div className="scotch-tape w-16 h-6 absolute -top-3 -right-3 rotate-35 z-10" />

              <div className="relative aspect-[4/5] overflow-hidden border border-[#141413] bg-[#FBF8F1]">
                <img
                  src="/images/workspace-sketch.jpg"
                  alt="Erdem Çalışma Masası Eskizi"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="font-hand text-xl font-bold text-[#141413]">
                  {lang === 'tr' ? 'çalışma masam 🛠️' : 'my workspace 🛠️'}
                </p>
                <p className="font-mono-tech text-[10px] text-[#57554E]">
                  Flutter • React • Figma • AI
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Key Telemetry Stat Cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.stats.map((st, idx) => (
            <div
              key={idx}
              className="retro-window-sm p-4 text-center bg-[var(--paper-card)] hover:translate-y-[-2px] transition-transform"
            >
              <div className="font-pixel text-2xl sm:text-3xl font-bold text-[var(--cobalt)]">
                {st.value}
              </div>
              <div className="font-mono-tech text-xs font-bold text-[var(--ink-muted)] mt-1">
                {st.label[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

