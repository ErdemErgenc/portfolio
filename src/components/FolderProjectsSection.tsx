import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Sparkles,
  Images,
  CheckCircle2,
  ExternalLink,
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

  const featuredFolders = filteredProjects.slice(0, 4);
  const archiveFolders = filteredProjects.slice(4);

  const openProjectModal = (project: PortfolioProject, initialIndex = 0) => {
    setSelectedProject(project);
    setModalImageIdx(initialIndex);
  };

  const cyclePreviewImage = (e: React.MouseEvent, project: PortfolioProject, dir: number) => {
    e.stopPropagation();
    const current = previewIdxMap[project.id] || 0;
    const next = (current + dir + project.images.length) % project.images.length;
    setPreviewIdxMap((prev) => ({ ...prev, [project.id]: next }));
  };

  return (
    <section id="projects" className="py-16 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E0B] text-[#141413] border-2 border-[#141413] font-mono-tech text-xs font-bold shadow-[3px_3px_0px_#141413] mb-3">
              <span>03 // CASE STUDIES & ARTOS ARCHIVE</span>
            </div>
            <h2 className="font-pixel text-2xl sm:text-4xl font-bold text-[var(--ink)]">
              {lang === 'tr'
                ? 'SEÇİLİ PROJE DOSYALARI (10 PROJE)'
                : 'SELECTED PROJECT FOLDERS (10 WORKS)'}
            </h2>
            <p className="font-mono-tech text-xs sm:text-sm text-[var(--ink-muted)] mt-1 max-w-2xl">
              {lang === 'tr'
                ? 'CV ve ARTOS Yazılım portföyündeki gerçek ekran görüntüleri, mimari metrikler ve vaka analizleri. Tam ekran galeri için herhangi bir dosyaya tıklayın.'
                : 'Real production screenshots, architectural metrics, and case studies from my CV & ARTOS Software. Click any folder to launch the full-screen gallery.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 font-mono-tech text-xs font-bold border-2 border-[#141413] transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1D4ED8] text-white shadow-[3px_3px_0px_#141413] -translate-y-0.5'
                    : 'bg-[var(--paper-card)] text-[var(--ink)] hover:bg-[#FEF3C7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* PART 1: STACKED MANILA FOLDER SHOWCASE (Directly Inspired by Reference 2 Bottom!) */}
        <div className="space-y-10">
          {featuredFolders.map((project, idx) => {
            const currentImgIdx = previewIdxMap[project.id] || 0;
            const currentImg = project.images[currentImgIdx] || project.images[0];
            const secondImg =
              project.images[(currentImgIdx + 1) % project.images.length] || currentImg;
            const isDarkCard = project.cardBg === '#141413' || project.cardBg === '#1D4ED8' || project.cardBg === '#065F46';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="relative"
              >
                {/* Top Folder Tabs Row (Reference 2: ♦ PROJECT 01 / ♦ PROJECT 02) */}
                <div className="flex items-end gap-1 pl-2 sm:pl-6">
                  <div
                    className="folder-tab px-5 sm:px-7 py-2 font-mono-tech text-xs font-bold border-t-3 border-l-3 border-r-3 border-[#141413] flex items-center gap-2"
                    style={{
                      backgroundColor: project.cardBg,
                      color: project.textColor,
                    }}
                  >
                    <span>✦ {project.code}</span>
                    <span className="opacity-70">// {project.year}</span>
                  </div>

                  <div className="folder-tab px-4 py-1.5 font-mono-tech text-[11px] font-bold bg-[#E5E0D3] text-[#141413] border-t-2 border-l-2 border-r-2 border-[#141413] hidden sm:flex items-center gap-1.5 opacity-85">
                    <span>{project.categoryLabel[lang]}</span>
                  </div>

                  <div className="folder-tab px-4 py-1.5 font-mono-tech text-[11px] font-bold bg-[#FFFDF9] text-[#141413] border-t-2 border-l-2 border-r-2 border-[#141413] hidden md:flex items-center gap-1.5">
                    <Images className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>
                      {project.images.length} {lang === 'tr' ? 'Ekran Görüntüsü' : 'Screens'}
                    </span>
                  </div>
                </div>

                {/* Folder Body Container */}
                <div
                  onClick={() => openProjectModal(project, currentImgIdx)}
                  className="rounded-b-2xl rounded-tr-2xl border-3 border-[#141413] shadow-[8px_8px_0px_#141413] p-6 sm:p-8 lg:p-10 cursor-pointer group transition-transform hover:-translate-y-0.5"
                  style={{
                    backgroundColor: project.cardBg,
                    color: project.textColor,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left 6 Cols: Case Study Details */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs font-bold opacity-85 mb-2">
                          <span>● {project.year}</span>
                          <span>•</span>
                          <span>{project.categoryLabel[lang]}</span>
                        </div>

                        <h3 className="font-grotesk text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                          {project.title[lang]}
                        </h3>

                        <p className="mt-2 font-grotesk text-base sm:text-lg font-medium opacity-90">
                          {project.subtitle[lang]}
                        </p>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed opacity-80">
                          {project.description[lang]}
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5">
                        {project.highlights[lang].map((hl, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-medium">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: project.accentColor }}
                            />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Metrics Row */}
                      <div className="grid grid-cols-3 gap-2.5 pt-2">
                        {project.metrics.map((m, i) => (
                          <div
                            key={i}
                            className={`p-2.5 rounded-lg border-2 border-[#141413] ${
                              isDarkCard
                                ? 'bg-white/10 text-white border-white/25'
                                : 'bg-white/85 text-[#141413]'
                            }`}
                          >
                            <div className="font-mono-tech text-[10px] uppercase opacity-75">
                              {m.label[lang]}
                            </div>
                            <div className="font-pixel text-xs sm:text-sm font-bold mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Stack Pills + VIEW PROJECT Link (Reference 2 style) */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-full font-mono-tech text-[10px] font-bold bg-[#FFFDF9] text-[#141413] border border-[#141413]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openProjectModal(project, currentImgIdx);
                          }}
                          className="inline-flex items-center gap-1.5 font-mono-tech text-xs sm:text-sm font-bold pb-1 border-b-2 border-current group-hover:translate-x-1 transition-transform cursor-pointer"
                        >
                          <span>
                            {lang === 'tr'
                              ? `PROJEYİ & ${project.images.length} EKRANI İNCELE`
                              : `VIEW PROJECT (${project.images.length} SCREENS)`}
                          </span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right 6 Cols: Taped Device Mockup Showcase Frame (Reference 2 right side!) */}
                    <div className="lg:col-span-6 relative">
                      <div className="relative bg-[#1E232A] p-4 sm:p-6 rounded-xl border-3 border-[#FFFDF9] shadow-[6px_6px_0px_#141413]">
                        {/* Masking Tape Strips on Corners (Exact match to Reference 2!) */}
                        <div className="scotch-tape w-20 h-6 absolute -top-3 -left-3 -rotate-25 z-20" />
                        <div className="scotch-tape w-20 h-6 absolute -top-3 -right-3 rotate-25 z-20" />

                        {/* Dual / Single Screen Preview Stage */}
                        <div className="relative h-[280px] sm:h-[340px] flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-3">
                          <img
                            src={currentImg?.src}
                            alt={currentImg?.alt}
                            className="h-full max-w-[55%] object-contain rounded-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105"
                          />
                          {project.images.length > 1 && (
                            <img
                              src={secondImg?.src}
                              alt={secondImg?.alt}
                              className="hidden sm:block h-[88%] max-w-[42%] object-contain rounded-lg opacity-85 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] translate-y-3 group-hover:translate-y-0 transition-all duration-300"
                            />
                          )}

                          {/* Quick Prev / Next Arrows */}
                          {project.images.length > 1 && (
                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-20">
                              <button
                                onClick={(e) => cyclePreviewImage(e, project, -1)}
                                className="w-8 h-8 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] flex items-center justify-center hover:bg-[#F59E0B] cursor-pointer"
                                aria-label="Previous Screen"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <span className="px-2.5 py-1 rounded-full bg-[#141413]/90 text-white font-mono-tech text-[10px] font-bold border border-white/20">
                                {currentImgIdx + 1} / {project.images.length}
                              </span>
                              <button
                                onClick={(e) => cyclePreviewImage(e, project, 1)}
                                className="w-8 h-8 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] flex items-center justify-center hover:bg-[#F59E0B] cursor-pointer"
                                aria-label="Next Screen"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PART 2: MORE SHIPPED PROJECTS ARCHIVE GRID (Remaining Projects) */}
        {archiveFolders.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-pixel text-lg sm:text-2xl font-bold text-[var(--ink)] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#1D4ED8]" />
                <span>
                  {lang === 'tr'
                    ? 'DİĞER PROJE DOSYALARI & KURUMSAL ÇALIŞMALAR'
                    : 'MORE SHIPPED PROJECTS & CLIENT WORK'}
                </span>
              </h3>
              <span className="font-mono-tech text-xs text-[var(--ink-muted)]">
                {lang === 'tr' ? 'Detaylar için karta tıkla' : 'Click any card to inspect'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {archiveFolders.map((proj) => {
                const cover = proj.images[0];
                return (
                  <motion.div
                    key={proj.id}
                    whileHover={{ y: -4 }}
                    onClick={() => openProjectModal(proj, 0)}
                    className="retro-window rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer group bg-[var(--paper-card)]"
                  >
                    <div>
                      {/* Mini Folder Header Bar */}
                      <div
                        className="px-4 py-2 border-b-2 border-[#141413] flex items-center justify-between font-mono-tech text-xs font-bold text-white"
                        style={{ backgroundColor: proj.tabColor }}
                      >
                        <span>{proj.code}</span>
                        <span>
                          {proj.year} • {proj.images.length} {lang === 'tr' ? 'Ekran' : 'Screens'}
                        </span>
                      </div>

                      {/* Image Preview */}
                      <div className="relative h-52 bg-[#141413] p-4 flex items-center justify-center overflow-hidden border-b-2 border-[#141413]">
                        <img
                          src={cover?.src}
                          alt={cover?.alt}
                          className="max-h-full max-w-full object-contain rounded group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute bottom-2 right-2 px-2.5 py-1 bg-[#F59E0B] text-[#141413] border border-[#141413] font-mono-tech text-[10px] font-bold shadow-[2px_2px_0px_#141413]">
                          {lang === 'tr' ? '🔍 Galeriyi Aç' : '🔍 Open Gallery'}
                        </span>
                      </div>

                      {/* Card Text */}
                      <div className="p-5">
                        <div className="font-mono-tech text-[10px] font-bold text-[#1D4ED8] uppercase mb-1">
                          {proj.categoryLabel[lang]}
                        </div>
                        <h4 className="font-grotesk text-lg font-extrabold text-[var(--ink)]">
                          {proj.title[lang]}
                        </h4>
                        <p className="text-xs text-[var(--ink-muted)] mt-2 line-clamp-3 leading-relaxed">
                          {proj.description[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-2 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {proj.stack.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 bg-[var(--paper-secondary)] border border-[var(--border-ink)] font-mono-tech text-[10px] font-bold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono-tech text-xs font-bold text-[#1D4ED8] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {lang === 'tr' ? 'İncele' : 'Inspect'}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* FULL-SCREEN INTERACTIVE PROJECT GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="retro-window w-full max-w-6xl max-h-[92vh] rounded-2xl overflow-hidden flex flex-col bg-[#FFFDF9] text-[#141413]"
            >
              {/* Modal OS Title Bar */}
              <div
                className="px-4 py-3 border-b-3 border-[#141413] flex items-center justify-between text-white"
                style={{ backgroundColor: selectedProject.tabColor }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FDE047]" />
                  <span className="font-pixel text-xs sm:text-sm font-bold">
                    {selectedProject.code} // {selectedProject.title[lang]}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-2.5 py-1 bg-[#EF4444] text-white border-2 border-[#141413] font-mono-tech text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-[#DC2626]"
                >
                  <X className="w-4 h-4" />
                  <span>ESC</span>
                </button>
              </div>

              {/* Modal Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
                {/* Left 8 Cols: Active Screenshot Stage + Thumbnails */}
                <div className="lg:col-span-8 bg-[#0F172A] p-4 sm:p-6 flex flex-col justify-between min-h-[340px] lg:min-h-[520px] relative">
                  <div className="relative flex-1 flex items-center justify-center max-h-[420px]">
                    <img
                      src={selectedProject.images[modalImageIdx]?.src}
                      alt={selectedProject.images[modalImageIdx]?.alt}
                      className="max-h-[400px] max-w-full object-contain rounded-lg"
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
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] flex items-center justify-center shadow-[3px_3px_0px_#141413] hover:bg-[#F59E0B] cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            setModalImageIdx(
                              (prev) => (prev + 1) % selectedProject.images.length
                            )
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] flex items-center justify-center shadow-[3px_3px_0px_#141413] hover:bg-[#F59E0B] cursor-pointer"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {selectedProject.images.length > 1 && (
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 overflow-x-auto pb-1">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setModalImageIdx(i)}
                          className={`w-14 h-14 shrink-0 rounded border-2 overflow-hidden bg-slate-800 p-1 cursor-pointer transition-all ${
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

                {/* Right 4 Cols: Detailed Project Specs */}
                <div className="lg:col-span-4 p-6 flex flex-col justify-between bg-[#FFFDF9] border-t-2 lg:border-t-0 lg:border-l-3 border-[#141413]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-[#FEF3C7] border border-[#141413] font-mono-tech text-xs font-bold">
                        {selectedProject.categoryLabel[lang]}
                      </span>
                      <span className="font-mono-tech text-xs font-bold text-[#57554E]">
                        {modalImageIdx + 1} / {selectedProject.images.length}{' '}
                        {lang === 'tr' ? 'Ekran' : 'Screens'}
                      </span>
                    </div>

                    <h3 className="font-grotesk text-2xl font-extrabold text-[#141413]">
                      {selectedProject.title[lang]}
                    </h3>

                    <p className="text-sm text-[#374151] leading-relaxed">
                      {selectedProject.description[lang]}
                    </p>

                    <div className="pt-2">
                      <div className="font-pixel text-xs font-bold mb-2">
                        {lang === 'tr' ? 'ÖNE ÇIKAN ÖZELLİKLER' : 'KEY DELIVERABLES'}
                      </div>
                      <ul className="space-y-2">
                        {selectedProject.highlights[lang].map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#141413]">
                            <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <div className="font-pixel text-xs font-bold mb-2">TECH STACK</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-[#F3EFE6] border border-[#141413] font-mono-tech text-xs font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-dashed border-[#141413]/20 flex flex-col gap-2">
                    <a
                      href="https://wa.me/905059546404"
                      target="_blank"
                      rel="noreferrer"
                      className="retro-btn w-full py-2.5 bg-[#F59E0B] text-[#141413] font-mono-tech text-xs font-bold text-center"
                    >
                      {lang === 'tr'
                        ? '💬 Benzer Bir Proje İçin İletişime Geç'
                        : '💬 Inquire About a Similar Project'}
                    </a>
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

