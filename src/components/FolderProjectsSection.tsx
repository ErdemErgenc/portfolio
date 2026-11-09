import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Images,
  CheckCircle2,
  Maximize2,
  Monitor,
} from 'lucide-react';
import { portfolioProjects, type PortfolioProject } from '../data/portfolioData';

interface FolderProjectsSectionProps {
  lang: 'tr' | 'en';
}

export const FolderProjectsSection: React.FC<FolderProjectsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState<number>(0);
  const [previewIdxMap, setPreviewIdxMap] = useState<Record<string, number>>({});

  const categories = [
    { id: 'ALL', label: lang === 'tr' ? 'TÜM PROJELER (10)' : 'ALL PROJECTS (10)' },
    { id: 'Mobile App', label: lang === 'tr' ? 'MOBİL UYGULAMALAR (4)' : 'MOBILE APPS (4)' },
    { id: 'Web Application', label: lang === 'tr' ? 'WEB PLATFORMLARI (2)' : 'WEB APPS (2)' },
    { id: 'Web Design', label: lang === 'tr' ? 'KURUMSAL WEB (4)' : 'CORPORATE WEB (4)' },
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const openProjectModal = (project: PortfolioProject, initialIndex = 0) => {
    setSelectedProject(project);
    setModalImageIdx(initialIndex);
  };

  const setProjectPreviewIdx = (projectId: string, idx: number) => {
    setPreviewIdxMap((prev) => ({ ...prev, [projectId]: idx }));
  };

  const cyclePreviewImage = (e: React.MouseEvent, project: PortfolioProject, dir: number) => {
    e.stopPropagation();
    const current = previewIdxMap[project.id] || 0;
    const next = (current + dir + project.images.length) % project.images.length;
    setPreviewIdxMap((prev) => ({ ...prev, [project.id]: next }));
  };

  return (
    <section id="projects" className="py-16 px-2 sm:px-5 lg:px-8 relative">
      {/* FULL-BLEED / NEAR FULL-SCREEN CONTAINER */}
      <div className="w-full max-w-[1860px] mx-auto">
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 px-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F59E0B] text-[#141413] border-2 border-[#141413] font-mono-tech text-xs font-bold shadow-[3px_3px_0px_#141413] mb-3">
              <Monitor className="w-4 h-4" />
              <span>03 // FULL-SCREEN CASE STUDIES & ARTOS ARCHIVE</span>
            </div>
            <h2 className="font-pixel text-3xl sm:text-5xl font-bold text-[var(--ink)]">
              {lang === 'tr'
                ? 'TÜM PROJELERİM (10 TAM EKRAN DOSYA)'
                : 'ALL SHIPPED PROJECTS (10 FULL-SCREEN FOLDERS)'}
            </h2>
            <p className="font-mono-tech text-xs sm:text-base text-[var(--ink-muted)] mt-2 max-w-3xl">
              {lang === 'tr'
                ? 'Her proje kartı tam ekran genişliğinde tasarlandı. Sağdaki dev vitrin ekranlarından veya alt küçük resim şeridinden 70+ gerçek ekran görüntüsü arasında doğrudan geçiş yapabilirsiniz.'
                : 'Every project folder spans full viewport width. Browse 70+ real screens directly inside each giant showcase stage or launch the full-screen zoom modal.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 font-mono-tech text-xs sm:text-sm font-bold border-2 border-[#141413] transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0054E3] text-white shadow-[4px_4px_0px_#141413] -translate-y-0.5'
                    : 'bg-[var(--paper-card)] text-[var(--ink)] hover:bg-[#FEF3C7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================
            ALL 10 PROJECTS AS MONUMENTAL, FULL-VIEWPORT-WIDTH SHOWCASES
           ============================================================ */}
        <div className="space-y-14">
          {filteredProjects.map((project, idx) => {
            const currentImgIdx = previewIdxMap[project.id] || 0;
            const currentImg = project.images[currentImgIdx] || project.images[0];
            const secondImg =
              project.images[(currentImgIdx + 1) % project.images.length] || currentImg;
            const thirdImg =
              project.images[(currentImgIdx + 2) % project.images.length] || currentImg;
            const isMobileCategory = project.category === 'Mobile App';
            const isDarkCard =
              project.cardBg === '#141413' ||
              project.cardBg === '#1D4ED8' ||
              project.cardBg === '#065F46';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.2) }}
                className="relative w-full"
              >
                {/* Top Folder Tabs Row (Reference 2: ♦ PROJECT 01 / ♦ PROJECT 02) */}
                <div className="flex items-end gap-1.5 pl-2 sm:pl-8">
                  <div
                    className="folder-tab px-6 sm:px-9 py-2.5 sm:py-3 font-mono-tech text-xs sm:text-sm font-bold border-t-3 border-l-3 border-r-3 border-[#141413] flex items-center gap-2.5"
                    style={{
                      backgroundColor: project.cardBg,
                      color: project.textColor,
                    }}
                  >
                    <span>✦ {project.code}</span>
                    <span className="opacity-75">// {project.year}</span>
                  </div>

                  <div className="folder-tab px-5 py-2 font-mono-tech text-xs font-bold bg-[#E5E0D3] text-[#141413] border-t-2 border-l-2 border-r-2 border-[#141413] hidden sm:flex items-center gap-1.5">
                    <span>{project.categoryLabel[lang]}</span>
                  </div>

                  <div className="folder-tab px-5 py-2 font-mono-tech text-xs font-bold bg-[#FFFDF9] text-[#141413] border-t-2 border-l-2 border-r-2 border-[#141413] hidden md:flex items-center gap-1.5">
                    <Images className="w-4 h-4 text-[#0054E3]" />
                    <span>
                      {project.images.length} {lang === 'tr' ? 'Gerçek Ekran' : 'Real Screens'}
                    </span>
                  </div>
                </div>

                {/* Giant Full-Width Folder Body Container */}
                <div
                  className="w-full rounded-b-3xl rounded-tr-3xl border-3 border-[#141413] shadow-[10px_10px_0px_#141413] p-6 sm:p-10 lg:p-12 xl:p-14 transition-transform"
                  style={{
                    backgroundColor: project.cardBg,
                    color: project.textColor,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left 5 Cols: Monumental Case Study Typography & Specs */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 font-mono-tech text-xs sm:text-sm font-bold opacity-85 mb-3">
                          <span className="px-2.5 py-0.5 rounded bg-black/15 border border-current/20">
                            ● {project.year}
                          </span>
                          <span>•</span>
                          <span>{project.categoryLabel[lang]}</span>
                        </div>

                        <h3 className="font-grotesk text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.08]">
                          {project.title[lang]}
                        </h3>

                        <p className="mt-3 font-grotesk text-lg sm:text-xl font-semibold opacity-95 leading-snug">
                          {project.subtitle[lang]}
                        </p>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-85">
                          {project.description[lang]}
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5">
                        {project.highlights[lang].map((hl, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm sm:text-base font-medium"
                          >
                            <CheckCircle2
                              className="w-5 h-5 shrink-0 mt-0.5"
                              style={{ color: project.accentColor }}
                            />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Metrics Row */}
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        {project.metrics.map((m, i) => (
                          <div
                            key={i}
                            className={`p-3.5 rounded-xl border-2 border-[#141413] ${
                              isDarkCard
                                ? 'bg-white/10 text-white border-white/25'
                                : 'bg-white/90 text-[#141413]'
                            }`}
                          >
                            <div className="font-mono-tech text-[11px] uppercase opacity-75">
                              {m.label[lang]}
                            </div>
                            <div className="font-pixel text-sm sm:text-base font-bold mt-1">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills + Fullscreen Button */}
                      <div className="pt-2 space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full font-mono-tech text-xs font-bold bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] shadow-[2px_2px_0px_#141413]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => openProjectModal(project, currentImgIdx)}
                          className="retro-btn px-6 py-3.5 bg-[#F59E0B] text-[#141413] font-mono-tech text-xs sm:text-sm font-bold inline-flex items-center gap-2.5 cursor-pointer"
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span>
                            {lang === 'tr'
                              ? `TAM EKRAN BÜYÜT (${project.images.length} GÖRSEL)`
                              : `FULLSCREEN LIGHTBOX (${project.images.length} SCREENS)`}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Right 7 Cols: HUGE, NEAR-FULLSCREEN DEVICE SHOWCASE STAGE */}
                    <div className="lg:col-span-7 relative">
                      <div className="relative bg-[#111827] p-4 sm:p-6 lg:p-8 rounded-2xl border-3 border-[#FFFDF9] shadow-[8px_8px_0px_#141413]">
                        {/* Masking Tape Strips on Corners (Exact match to Reference 2!) */}
                        <div className="scotch-tape w-24 h-7 absolute -top-3.5 -left-3.5 -rotate-20 z-20" />
                        <div className="scotch-tape w-24 h-7 absolute -top-3.5 -right-3.5 rotate-20 z-20" />

                        {/* Top Bar inside Showcase Frame */}
                        <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/15 text-white/80 font-mono-tech text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                            <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                            <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                            <span className="ml-2 font-bold text-white">
                              {project.title[lang]} — Ekran {currentImgIdx + 1}/
                              {project.images.length}
                            </span>
                          </div>

                          <button
                            onClick={() => openProjectModal(project, currentImgIdx)}
                            className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#0054E3] text-white text-[11px] font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{lang === 'tr' ? 'Tam Ekran' : 'Fullscreen'}</span>
                          </button>
                        </div>

                        {/* Giant Screenshot Stage (420px to 580px tall!) */}
                        <div
                          onClick={() => openProjectModal(project, currentImgIdx)}
                          className="relative h-[380px] sm:h-[480px] xl:h-[560px] flex items-center justify-center gap-4 sm:gap-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1120] p-3 sm:p-6 cursor-pointer group/stage"
                        >
                          {isMobileCategory ? (
                            /* For Mobile Apps: Show 2 or 3 large mobile screens side-by-side! */
                            <>
                              <img
                                src={currentImg?.src}
                                alt={currentImg?.alt}
                                className="h-full max-w-[46%] sm:max-w-[36%] object-contain rounded-xl drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover/stage:scale-105"
                              />
                              {project.images.length > 1 && (
                                <img
                                  src={secondImg?.src}
                                  alt={secondImg?.alt}
                                  className="h-[92%] max-w-[44%] sm:max-w-[32%] object-contain rounded-xl opacity-95 drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover/stage:scale-105"
                                />
                              )}
                              {project.images.length > 2 && (
                                <img
                                  src={thirdImg?.src}
                                  alt={thirdImg?.alt}
                                  className="hidden xl:block h-[86%] max-w-[28%] object-contain rounded-xl opacity-85 drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover/stage:scale-105"
                                />
                              )}
                            </>
                          ) : (
                            /* For Web Apps / Websites: Show 1 huge primary screen + 1 secondary screen */
                            <>
                              <img
                                src={currentImg?.src}
                                alt={currentImg?.alt}
                                className="h-full w-full object-contain rounded-xl drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover/stage:scale-[1.03]"
                              />
                            </>
                          )}

                          {/* Prev / Next Floating Controls */}
                          {project.images.length > 1 && (
                            <>
                              <button
                                onClick={(e) => cyclePreviewImage(e, project, -1)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] shadow-[3px_3px_0px_#141413] flex items-center justify-center hover:bg-[#F59E0B] cursor-pointer z-20"
                                aria-label="Previous Screen"
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                onClick={(e) => cyclePreviewImage(e, project, 1)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] shadow-[3px_3px_0px_#141413] flex items-center justify-center hover:bg-[#F59E0B] cursor-pointer z-20"
                                aria-label="Next Screen"
                              >
                                <ChevronRight className="w-6 h-6" />
                              </button>
                            </>
                          )}
                        </div>

                        {/* Interactive Thumbnail Strip Right Inside Each Card */}
                        {project.images.length > 1 && (
                          <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2.5 overflow-x-auto pb-1">
                            {project.images.map((img, i) => (
                              <button
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setProjectPreviewIdx(project.id, i);
                                }}
                                className={`w-16 h-16 sm:w-20 sm:h-16 shrink-0 rounded-lg border-2 overflow-hidden bg-slate-800/90 p-1 cursor-pointer transition-all ${
                                  i === currentImgIdx
                                    ? 'border-[#F59E0B] scale-105 ring-2 ring-[#F59E0B]'
                                    : 'border-white/20 opacity-60 hover:opacity-100'
                                }`}
                              >
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="w-full h-full object-contain"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN INTERACTIVE PROJECT GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-2 sm:p-5 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="xp-window w-full max-w-[1720px] h-[92vh] flex flex-col bg-[#ECE9D8] text-[#141413]"
            >
              {/* Windows XP Style Modal Title Bar */}
              <div className="xp-titlebar">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FDE047]" />
                  <span className="font-sans text-xs sm:text-sm font-bold">
                    {selectedProject.code} // {selectedProject.title[lang]} — Image Viewer.exe
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="xp-ctrl-btn xp-ctrl-close"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
                {/* Left 9 Cols: Giant Active Screenshot Stage + Thumbnails */}
                <div className="lg:col-span-9 bg-[#0B1120] p-4 sm:p-6 flex flex-col justify-between h-full overflow-hidden relative">
                  <div className="relative flex-1 flex items-center justify-center min-h-0">
                    <img
                      src={selectedProject.images[modalImageIdx]?.src}
                      alt={selectedProject.images[modalImageIdx]?.alt}
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setModalImageIdx(
                              (prev) =>
                                (prev - 1 + selectedProject.images.length) %
                                selectedProject.images.length
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] flex items-center justify-center shadow-[3px_3px_0px_#141413] hover:bg-[#F59E0B] cursor-pointer"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() =>
                            setModalImageIdx(
                              (prev) => (prev + 1) % selectedProject.images.length
                            )
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] flex items-center justify-center shadow-[3px_3px_0px_#141413] hover:bg-[#F59E0B] cursor-pointer"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {selectedProject.images.length > 1 && (
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2.5 overflow-x-auto pb-1 shrink-0">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setModalImageIdx(i)}
                          className={`w-16 h-16 shrink-0 rounded border-2 overflow-hidden bg-slate-800 p-1 cursor-pointer transition-all ${
                            i === modalImageIdx
                              ? 'border-[#F59E0B] scale-105 ring-2 ring-[#F59E0B]'
                              : 'border-white/20 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right 3 Cols: Detailed Project Specs */}
                <div className="lg:col-span-3 p-6 flex flex-col justify-between bg-[#ECE9D8] border-t-2 lg:border-t-0 lg:border-l-2 border-[#0054E3] overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-[#0054E3] text-white font-mono-tech text-xs font-bold rounded-xs">
                        {selectedProject.categoryLabel[lang]}
                      </span>
                      <span className="font-mono-tech text-xs font-bold text-[#141413]">
                        {modalImageIdx + 1} / {selectedProject.images.length}
                      </span>
                    </div>

                    <h3 className="font-grotesk text-2xl font-extrabold text-[#141413]">
                      {selectedProject.title[lang]}
                    </h3>

                    <p className="text-sm text-[#374151] leading-relaxed bg-white p-3 border border-[#7F9DB9]">
                      {selectedProject.description[lang]}
                    </p>

                    <div className="pt-1">
                      <div className="font-pixel text-xs font-bold text-[#003399] mb-2">
                        {lang === 'tr' ? 'ÖNE ÇIKAN ÖZELLİKLER' : 'KEY DELIVERABLES'}
                      </div>
                      <ul className="space-y-2 bg-white p-3 border border-[#7F9DB9]">
                        {selectedProject.highlights[lang].map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#141413]">
                            <CheckCircle2 className="w-4 h-4 text-[#369524] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-1">
                      <div className="font-pixel text-xs font-bold text-[#003399] mb-2">
                        TECH STACK
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-white border border-[#7F9DB9] font-mono-tech text-xs font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#919B9C] flex flex-col gap-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="xp-button w-full py-2.5 font-mono-tech text-xs font-bold text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <X className="w-4 h-4 text-[#E0431D]" />
                      <span>{lang === 'tr' ? 'Pencereyi Kapat (ESC)' : 'Close Window (ESC)'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
