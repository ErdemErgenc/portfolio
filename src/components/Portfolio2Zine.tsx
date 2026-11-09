import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Code2,
  Globe,
  FileDown,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Award,
  Sparkles,
} from 'lucide-react';
import {
  personalInfo,
  portfolioProjects,
  experiences,
  educationList,
  certificates,
  referencesList,
  type PortfolioProject,
} from '../data/portfolioData';

interface Portfolio2ZineProps {
  lang: 'tr' | 'en';
  setLang: (lang: 'tr' | 'en') => void;
  onCelebrate?: () => void;
}

/**
 * Custom 4-Point Hand-Drawn Zine Star SVG (matches reference ✦ star)
 */
const FourPointStar: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={`inline-block shrink-0 text-[#1C1917] ${className}`}
    aria-hidden="true"
  >
    <path d="M16 0C17.2 10.4 21.6 14.8 32 16C21.6 17.2 17.2 21.6 16 32C14.8 21.6 10.4 17.2 0 16C10.4 14.8 14.8 10.4 16 0Z" />
  </svg>
);

export const Portfolio2Zine: React.FC<Portfolio2ZineProps> = ({
  lang,
  setLang,
  onCelebrate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [showRealPhoto, setShowRealPhoto] = useState<boolean>(false);
  const [lightbox, setLightbox] = useState<{
    project: PortfolioProject;
    index: number;
  } | null>(null);

  const zineCategories = [
    { id: 'ALL', label: 'UI DESIGN' },
    { id: 'ILLUSTRATION', label: 'ILLUSTRATION' },
    { id: 'Mobile App', label: 'MOBILE FLUTTER' },
    { id: 'Web Application', label: 'WEB & NEXT.JS' },
    { id: 'AI', label: 'AI & OCR' },
    { id: 'Web Design', label: 'KURUMSAL WEB' },
    { id: 'GRAPHISME', label: 'GRAPHISME' },
    { id: 'INTERACTIF', label: 'DESIGN INTERACTIF' },
  ];

  const filteredProjects =
    selectedCategory === 'Mobile App' ||
    selectedCategory === 'Web Application' ||
    selectedCategory === 'Web Design'
      ? portfolioProjects.filter((p) => p.category === selectedCategory)
      : selectedCategory === 'AI'
      ? portfolioProjects.filter((p) =>
          p.stack.some(
            (t) =>
              t.toLowerCase().includes('ocr') ||
              t.toLowerCase().includes('ai') ||
              t.toLowerCase().includes('python') ||
              t.toLowerCase().includes('firebase')
          )
        )
      : portfolioProjects;

  const aptitudesList = [
    'FLUTTER & DART',
    'REACT & NEXT.JS',
    'TYPESCRIPT',
    'PYTHON & ML',
    'OCR & VISION AI',
    'SQL & FIREBASE',
    'FIGMA UI/UX',
    'ILLUSTRATION DIGITALE',
    'REST API & ERP',
    'STORYBOARD & MOTION',
  ];

  const openLightbox = (project: PortfolioProject, index: number) => {
    setLightbox({ project, index });
  };

  const nextImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % lightbox.project.images.length,
    });
  };

  const prevImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index:
        (lightbox.index - 1 + lightbox.project.images.length) %
        lightbox.project.images.length,
    });
  };

  return (
    <div className="min-h-screen zine-paper text-[#1C1917] selection:bg-[#6E6295] selection:text-[#F5F0E6] pb-24 overflow-x-hidden">
      {/* =====================================================================
          1. TOP 3-COLUMN MINIMAL EDITORIAL HEADER (Matches Angèle Bappel Zine)
      ===================================================================== */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[1380px] mx-auto px-5 sm:px-10 md:px-14 pt-8 pb-4"
      >
        <div className="grid grid-cols-3 items-start text-[11px] sm:text-xs md:text-sm tracking-wider uppercase font-zine-display font-bold text-[#1C1917]">
          {/* Top-Left: Portfolio + Name */}
          <div className="leading-snug">
            <div className="font-normal text-[#1C1917]/75">PORTFOLIO</div>
            <div className="font-extrabold tracking-tight">
              {personalInfo.fullName.toUpperCase()}
            </div>
          </div>

          {/* Top-Center: ANNÉE 2026 + Language Toggle */}
          <div className="text-center flex flex-col items-center gap-1.5">
            <div>
              <span className="font-normal text-[#1C1917]/75">ANNÉE </span>
              <span className="font-extrabold">2026</span>
            </div>
            <button
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="zine-pill hover:bg-[#6E6295] hover:text-white transition-colors cursor-pointer text-[10px]"
            >
              {lang === 'tr' ? 'TR / EN' : 'EN / TR'}
            </button>
          </div>

          {/* Top-Right: Art Direction & Engineering Title */}
          <div className="text-right leading-snug">
            <div className="font-normal text-[#1C1917]/75">
              {lang === 'tr' ? 'YAZILIM MÜHENDİSİ' : 'SOFTWARE ENGINEER'}
            </div>
            <div className="font-extrabold">
              {lang === 'tr' ? '& ART DIRECTOR' : '& CREATIVE DIRECTOR'}
            </div>
          </div>
        </div>
      </motion.header>

      {/* =====================================================================
          2. HERO ILLUSTRATION BANNER (Hands Holding "PORTFOLIO" Floral Sign)
      ===================================================================== */}
      <section className="max-w-[1380px] mx-auto px-5 sm:px-10 md:px-14 pt-2 pb-4 relative">
        {/* Decorative floating Framer Motion 4-point stars */}
        <motion.div
          animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:block absolute left-16 top-16 text-[#1C1917]"
        >
          <FourPointStar className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hidden lg:block absolute right-20 bottom-16 text-[#6E6295]"
        >
          <FourPointStar className="w-7 h-7" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, type: 'spring', bounce: 0.25 }}
          className="max-w-[960px] mx-auto relative"
        >
          <img
            src="/images/p2-zine-hands-banner.jpg"
            alt="Portfolio Editorial Illustration - Hands holding floral banner"
            className="w-full h-auto object-contain mx-auto mix-blend-multiply select-none"
          />
        </motion.div>
      </section>

      {/* =====================================================================
          3. FULL-WIDTH CATEGORY STRIP BETWEEN HORIZONTAL HAIRLINES
      ===================================================================== */}
      <div className="border-y-[1.8px] border-[#1C1917] bg-[#F5F0E6]/90 sticky top-[46px] z-30 backdrop-blur-sm">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-10 md:px-14 py-3 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          {zineCategories.map((cat, idx) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (
                    cat.id === 'Mobile App' ||
                    cat.id === 'Web Application' ||
                    cat.id === 'Web Design' ||
                    cat.id === 'AI'
                  ) {
                    document
                      .getElementById('zine-storyboards')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-[11px] sm:text-xs md:text-[13px] font-zine-display tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer px-2 py-0.5 rounded ${
                  isActive
                    ? 'font-extrabold text-[#1C1917] underline decoration-2 underline-offset-4'
                    : idx % 2 === 1
                    ? 'font-bold text-[#1C1917] hover:text-[#6E6295]'
                    : 'font-medium text-[#1C1917]/80 hover:text-[#6E6295]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          4. "✦ HELLO ! ✦" EDITORIAL CHARACTER & BIO SPLIT SECTION
      ===================================================================== */}
      <section className="max-w-[1260px] mx-auto px-5 sm:px-10 md:px-14 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (5 cols): Character Illustration sitting with sneakers */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[430px] mx-auto group">
              <AnimatePresence mode="wait">
                {!showRealPhoto ? (
                  <motion.img
                    key="character-art"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    src="/images/p2-zine-hello-character.jpg"
                    alt="İbrahim Erdem Ergenç Indie Zine Character Illustration"
                    className="w-full h-auto object-contain mix-blend-multiply select-none"
                  />
                ) : (
                  <motion.div
                    key="real-portrait"
                    initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="p-3 bg-white border-2 border-[#1C1917] rounded-2xl shadow-[6px_6px_0px_#1C1917]"
                  >
                    <img
                      src="/images/erdem-portrait.png"
                      alt={personalInfo.fullName}
                      className="w-full h-[380px] object-cover object-top rounded-xl border border-[#1C1917]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toggle pill between Zine Character Illustration & Real Portrait */}
              <div className="mt-3 flex justify-center">
                <button
                  onClick={() => setShowRealPhoto(!showRealPhoto)}
                  className="zine-pill hover:bg-[#1E8E7E] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {showRealPhoto
                      ? lang === 'tr'
                        ? 'İllüstrasyona Dön'
                        : 'Show Zine Illustration'
                      : lang === 'tr'
                      ? 'Gerçek Fotoğrafı Gör'
                      : 'Show Real Photo'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): ✦ HELLO ! ✦ + Lavender Subtitle + Bio + Domain d'intérêt */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Giant ✦ HELLO ! ✦ Title */}
            <div className="relative inline-block">
              <FourPointStar className="w-9 h-9 md:w-12 md:h-12 -mt-6 mr-2 text-[#1C1917]" />
              <h1 className="inline font-zine-art text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1C1917]">
                HELLO !
              </h1>
              <span className="inline-flex items-center ml-2 align-bottom">
                <FourPointStar className="w-6 h-6 text-[#1C1917]" />
                <FourPointStar className="w-4 h-4 -mt-5 text-[#1C1917]" />
              </span>
            </div>

            {/* Lavender-Purple Editorial Subtitle (Matches "Je m'appelle Angèle & je suis DA junior.") */}
            <h2 className="font-zine-display text-2xl sm:text-3xl md:text-[34px] font-medium leading-[1.2] text-[#6E6295]">
              {lang === 'tr' ? (
                <>
                  Ben İbrahim Erdem
                  <br />
                  &amp; Yazılım Mühendisi / Kurucu Ortağım.
                </>
              ) : (
                <>
                  Je m&apos;appelle İbrahim Erdem
                  <br />
                  &amp; I am a Software Engineer / Co-Founder.
                </>
              )}
            </h2>

            {/* Two Editorial Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#1C1917]/90 max-w-2xl font-normal">
              <p>
                {lang === 'tr'
                  ? 'Van ve İstanbul merkezli çalışan, illüstrasyon ve görsel hikâye anlatımına tutkuyla bağlı bir Yazılım Mühendisiyim. Fırat Üniversitesi Yazılım Mühendisliği lisans eğitimimi ve Fransa & İspanya Erasmus+ sürecimi tamamladıktan sonra, Van Yüzüncü Yıl Üniversitesi’nde Yapay Zekâ ve Robotik yüksek lisans araştırmalarıma devam ediyorum.'
                  : 'I am a Software Engineer passionate about visual storytelling, interactive interfaces, and AI systems. After completing my B.Sc. in Software Engineering at Fırat University and my Erasmus+ studies across France and Spain, I am pursuing my M.Sc. in Artificial Intelligence & Robotics at Van Yüzüncü Yıl University.'}
              </p>
              <p>
                {lang === 'tr'
                  ? 'Kurucu ortağı olduğum ARTOS Yazılım bünyesinde; Flutter mobil ekosistemleri, Next.js kurumsal web platformları, OCR destekli yapay zekâ sistemleri ve B2B ERP otomasyonları geliştiriyor, mühendislik mimarisini sanatsal arayüzlerle birleştiriyorum.'
                  : 'As Co-Founder of ARTOS Software, I architect production-grade Flutter mobile apps, Next.js web platforms, OCR & Computer Vision pipelines, and B2B ERP systems—blending engineering precision with bold editorial aesthetics.'}
              </p>
            </div>

            {/* "Domain d'intérêt:" + 3D-offset White Pill Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="font-zine-display font-bold text-sm text-[#1C1917] mr-1">
                {lang === 'tr' ? "Domain d'intérêt / Odak:" : "Domain d'intérêt:"}
              </span>
              <span className="zine-pill">FLUTTER &amp; MOBILE</span>
              <span className="zine-pill">REACT &amp; NEXT.JS</span>
              <span className="zine-pill">YAPAY ZEKÂ &amp; OCR</span>
              <span className="zine-pill">UI/UX &amp; ILLUSTRATION</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          5. 3-COLUMN EDITORIAL RESUME GRID (EXPERIENCES | FORMATIONS+APTITUDES | HOBBIES+CONTACT)
      ===================================================================== */}
      <section className="max-w-[1260px] mx-auto px-5 sm:px-10 md:px-14">
        <div className="border-y-[1.8px] border-[#1C1917] py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {/* ---------------------------------------------------------------
                COLUMN 1: ✦ EXPERIENCES
            --------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <FourPointStar className="w-5 h-5" />
                <h3 className="font-zine-art text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#1C1917]">
                  {lang === 'tr' ? 'EXPERIENCES / DENEYİM' : 'EXPERIENCES'}
                </h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1 text-xs sm:text-[13px] leading-snug">
                    {/* Bold Date */}
                    <div className="font-bold text-[#1C1917]">{exp.period[lang]}</div>
                    {/* Lavender-Purple Uppercase Role */}
                    <div className="font-zine-display font-extrabold uppercase text-[#6E6295] tracking-wide">
                      {exp.role[lang]}
                    </div>
                    {/* Company Name Uppercase */}
                    <div className="font-bold uppercase text-[#1C1917] tracking-wide">
                      {exp.company} — {exp.location}
                    </div>
                    {/* Concise Editorial Bullet Summary */}
                    <p className="text-[#1C1917]/80 pt-0.5 leading-relaxed">
                      {exp.bullets[lang].join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ---------------------------------------------------------------
                COLUMN 2: ✦ FORMATIONS & ✦ APTITUDES
            --------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-10"
            >
              {/* FORMATIONS */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <FourPointStar className="w-5 h-5" />
                  <h3 className="font-zine-art text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#1C1917]">
                    {lang === 'tr' ? 'FORMATIONS / EĞİTİM' : 'FORMATIONS'}
                  </h3>
                </div>

                <div className="space-y-5">
                  {educationList.map((edu) => (
                    <div key={edu.id} className="space-y-1 text-xs sm:text-[13px] leading-snug">
                      <div className="font-bold text-[#1C1917]">{edu.period}</div>
                      <div className="font-zine-display font-extrabold uppercase text-[#6E6295]">
                        {edu.school}
                      </div>
                      <div className="font-medium text-[#1C1917]">{edu.degree[lang]}</div>
                      <div className="text-[#1C1917]/75 text-xs">{edu.details[lang]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* APTITUDES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FourPointStar className="w-5 h-5" />
                  <h3 className="font-zine-art text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#1C1917]">
                    {lang === 'tr' ? 'APTITUDES / YETENEKLER' : 'APTITUDES'}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {aptitudesList.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="zine-pill cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ---------------------------------------------------------------
                COLUMN 3: ✦ HOBBIES & ✦ CONTACT
            --------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="space-y-10"
            >
              {/* HOBBIES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FourPointStar className="w-5 h-5" />
                  <h3 className="font-zine-art text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#1C1917]">
                    {lang === 'tr' ? 'HOBBIES / İLGİ ALANLARI' : 'HOBBIES'}
                  </h3>
                </div>

                {/* Custom Generated 3 Rounded-Square Indie Zine Icons */}
                <div className="pt-1">
                  <img
                    src="/images/p2-zine-hobbies-icons.jpg"
                    alt="Hobbies Icons - Digital Art, AI & Robotics, Skate & Erasmus Travel"
                    className="w-full max-w-[330px] h-auto object-contain mix-blend-multiply select-none"
                  />
                  <div className="grid grid-cols-3 max-w-[330px] text-center text-xs font-zine-display font-bold text-[#1C1917] pt-1">
                    <span>UI &amp; Graff</span>
                    <span>AI &amp; Fantasy</span>
                    <span>Erasmus &amp; Skate</span>
                  </div>
                </div>
              </div>

              {/* CONTACT */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FourPointStar className="w-5 h-5" />
                  <h3 className="font-zine-art text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#1C1917]">
                    {lang === 'tr' ? 'CONTACT / İLETİŞİM' : 'CONTACT'}
                  </h3>
                </div>

                <div className="space-y-3 pt-1">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 group text-xs sm:text-[13px] font-bold text-[#1C1917] hover:text-[#6E6295] transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full border-[1.8px] border-[#1C1917] bg-white shadow-[2px_2px_0px_#1C1917] flex items-center justify-center group-hover:bg-[#6E6295] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span>{personalInfo.email}</span>
                  </a>

                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="flex items-center gap-3 group text-xs sm:text-[13px] font-bold text-[#1C1917] hover:text-[#6E6295] transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full border-[1.8px] border-[#1C1917] bg-white shadow-[2px_2px_0px_#1C1917] flex items-center justify-center group-hover:bg-[#1E8E7E] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span>{personalInfo.phone}</span>
                  </a>

                  <a
                    href="https://github.com/ErdemErgenc"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 group text-xs sm:text-[13px] font-bold text-[#1C1917] hover:text-[#6E6295] transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full border-[1.8px] border-[#1C1917] bg-white shadow-[2px_2px_0px_#1C1917] flex items-center justify-center group-hover:bg-[#1C1917] group-hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" />
                    </span>
                    <span>github.com/ErdemErgenc</span>
                  </a>

                  <a
                    href={personalInfo.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 group text-xs sm:text-[13px] font-bold text-[#1C1917] hover:text-[#6E6295] transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full border-[1.8px] border-[#1C1917] bg-white shadow-[2px_2px_0px_#1C1917] flex items-center justify-center group-hover:bg-[#D96B52] group-hover:text-white transition-colors">
                      <Globe className="w-4 h-4" />
                    </span>
                    <span>artosyazilim.com</span>
                  </a>

                  <a
                    href={personalInfo.cvUrl}
                    download
                    onClick={() => onCelebrate && onCelebrate()}
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full border-[1.8px] border-[#1C1917] bg-[#F3D37A] text-[#1C1917] font-zine-display font-extrabold text-xs uppercase shadow-[3px_3px_0px_#1C1917] hover:translate-y-[-2px] transition-transform"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>
                      {lang === 'tr' ? 'ÖZGEÇMİŞİ İNDİR (PDF)' : 'DOWNLOAD RESUME (PDF)'}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. NUMBERED STORYBOARD PROJECT CASE STUDIES (.01 to .10)
             Matches the bottom of Angèle Bappel reference:
             Left: Framed multi-panel storyboard grid of screens
             Right: Giant quirky ".01", "✦ Project Name", zine pills, & story text
      ===================================================================== */}
      <section
        id="zine-storyboards"
        className="max-w-[1380px] mx-auto px-5 sm:px-10 md:px-14 pt-16 space-y-24"
      >
        {/* Section Intro Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[1.8px] border-[#1C1917] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-zine-display font-bold uppercase tracking-widest text-[#6E6295]">
              <FourPointStar className="w-4 h-4 text-[#6E6295]" />
              <span>
                {lang === 'tr'
                  ? 'STORYBOARD KOLEKSİYONU // 10 GERÇEK PROJE'
                  : 'STORYBOARD ARCHIVE // 10 PRODUCTION PROJECTS'}
              </span>
            </div>
            <h2 className="font-zine-art text-3xl sm:text-5xl font-black text-[#1C1917] tracking-tight mt-1">
              {lang === 'tr' ? 'SEÇKİN PROJELER' : 'SELECTED WORKS'}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ALL', label: lang === 'tr' ? 'TÜMÜ (10)' : 'ALL (10)' },
              { id: 'Mobile App', label: 'FLUTTER MOBILE (2)' },
              { id: 'Web Application', label: 'WEB & ERP (4)' },
              { id: 'Web Design', label: 'KURUMSAL WEB (4)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`zine-pill cursor-pointer transition-all ${
                  selectedCategory === tab.id
                    ? '!bg-[#1C1917] !text-[#F5F0E6] !shadow-[3px_3px_0px_#6E6295]'
                    : 'hover:bg-[#F3D37A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Storyboard Rows */}
        <div className="space-y-24">
          {filteredProjects.map((project, projIdx) => {
            // Take up to 9 images for a 3x3 or 3x2 comic storyboard grid
            const storyboardFrames = project.images.slice(0, 9);
            const isEven = projIdx % 2 === 1;
            const zineNumber = String(projIdx + 1).padStart(2, '0');

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-16 border-b-[1.5px] border-[#1C1917]/25 last:border-b-0"
              >
                {/* STORYBOARD MULTI-PANEL GRID (8 columns) */}
                <div
                  className={`lg:col-span-8 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    className={`grid gap-3 sm:gap-4 ${
                      storyboardFrames.length >= 6
                        ? 'grid-cols-2 sm:grid-cols-3'
                        : 'grid-cols-2'
                    }`}
                  >
                    {storyboardFrames.map((imgObj, frameIdx) => (
                      <motion.div
                        key={imgObj.src}
                        whileHover={{ y: -4, scale: 1.015 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                        onClick={() => openLightbox(project, frameIdx)}
                        className="zine-storyboard-frame group relative aspect-[16/10] cursor-pointer shadow-[3px_3px_0px_#1C1917]"
                      >
                        <img
                          src={imgObj.src}
                          alt={imgObj.alt}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Subtle Storyboard Panel Number Badge */}
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#1C1917]/85 text-[#F5F0E6] font-zine-display font-bold text-[10px] tracking-wider">
                          #{String(frameIdx + 1).padStart(2, '0')}
                        </div>
                        {/* Hover Zoom Overlay */}
                        <div className="absolute inset-0 bg-[#1C1917]/0 group-hover:bg-[#1C1917]/35 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-[#F5F0E6] border-[1.5px] border-[#1C1917] text-[#1C1917] font-zine-display font-bold text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_#1C1917]">
                            <ZoomIn className="w-3.5 h-3.5" />
                            {lang === 'tr' ? 'Büyüt' : 'Inspect'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Storyboard Footer Bar (Total screens count & open gallery button) */}
                  <div className="mt-3 flex items-center justify-between text-xs font-zine-display text-[#1C1917]/75">
                    <span>
                      {lang === 'tr'
                        ? `Toplam ${project.images.length} ekran görüntüsü • Tam ekran incelemek için herhangi bir kareye tıklayın`
                        : `${project.images.length} production screens • Click any storyboard frame to inspect in full resolution`}
                    </span>
                    <button
                      onClick={() => openLightbox(project, 0)}
                      className="font-bold text-[#6E6295] hover:underline cursor-pointer"
                    >
                      {lang === 'tr'
                        ? `Tüm ${project.images.length} Kareyi Aç →`
                        : `View All ${project.images.length} Frames →`}
                    </button>
                  </div>
                </div>

                {/* EDITORIAL NUMBER & NARRATIVE COLUMN (4 columns) */}
                <div
                  className={`lg:col-span-4 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Giant Quirky Number (.01, .02, etc.) */}
                  <div className="font-zine-art text-6xl sm:text-7xl font-black tracking-tighter text-[#1C1917] leading-none select-none">
                    .{zineNumber}
                  </div>

                  {/* ✦ Project Title */}
                  <div className="flex items-start gap-2.5">
                    <FourPointStar className="w-6 h-6 mt-1.5 text-[#1C1917]" />
                    <div>
                      <h3 className="font-zine-art text-2xl sm:text-3xl font-extrabold text-[#1C1917] leading-tight">
                        {project.title[lang]}
                      </h3>
                      <p className="text-xs font-zine-display font-bold uppercase tracking-wider text-[#6E6295] mt-1">
                        {project.subtitle[lang]}
                      </p>
                    </div>
                  </div>

                  {/* 3D-Offset White Pill Tags (Matches "ANIMATION TRADITIONNELLE", "MOTION DESIGN", "NARRATION") */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="zine-pill !bg-[#F3D37A]">
                      {project.categoryLabel[lang].toUpperCase()}
                    </span>
                    {project.stack.map((tech) => (
                      <span key={tech} className="zine-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Narrative Case Study Paragraph */}
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#1C1917]/90">
                    {project.description[lang]}
                  </p>

                  {/* Key Highlights List */}
                  <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#1C1917]/85 border-l-2 border-[#6E6295] pl-3.5">
                    {project.highlights[lang].map((item, i) => (
                      <li key={i} className="leading-snug">
                        • {item}
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => openLightbox(project, 0)}
                      className="px-4 py-2 rounded-full border-[1.8px] border-[#1C1917] bg-[#1C1917] text-[#F5F0E6] font-zine-display font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#6E6295] hover:bg-[#6E6295] transition-colors cursor-pointer"
                    >
                      {lang === 'tr'
                        ? `STORYBOARD GALERİ (${project.images.length})`
                        : `OPEN STORYBOARD (${project.images.length})`}
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          7. CERTIFICATES & ACADEMIC REFERENCES STRIP (Editorial Zine Style)
      ===================================================================== */}
      <section className="max-w-[1260px] mx-auto px-5 sm:px-10 md:px-14 pt-20">
        <div className="border-t-[1.8px] border-[#1C1917] pt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Certificates (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <FourPointStar className="w-5 h-5" />
              <h3 className="font-zine-art text-xl sm:text-2xl font-bold uppercase text-[#1C1917]">
                {lang === 'tr' ? 'CERTIFICATS / SERTİFİKALAR' : 'CERTIFICATES'}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="zine-pill flex items-center gap-1.5 !py-1.5 !px-3.5"
                >
                  <Award className="w-3.5 h-3.5 text-[#6E6295]" />
                  <span>
                    {cert.title} ({cert.issuer}, {cert.year})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* References (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <FourPointStar className="w-5 h-5" />
              <h3 className="font-zine-art text-xl sm:text-2xl font-bold uppercase text-[#1C1917]">
                {lang === 'tr' ? 'RÉFÉRENCES / REFERANSLAR' : 'REFERENCES'}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {referencesList.map((ref) => (
                <div
                  key={ref.name}
                  className="p-3.5 rounded-xl border-[1.8px] border-[#1C1917] bg-white shadow-[3px_3px_0px_#1C1917] space-y-1"
                >
                  <div className="font-zine-display font-extrabold text-xs uppercase text-[#6E6295]">
                    {ref.name}
                  </div>
                  <div className="text-[11px] font-bold text-[#1C1917]">
                    {ref.role[lang]}
                  </div>
                  <div className="text-[11px] text-[#1C1917]/70">{ref.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. STANDALONE ART-ZINE COLOPHON FOOTER
      ===================================================================== */}
      <footer className="max-w-[1260px] mx-auto px-5 sm:px-10 md:px-14 pt-16 mt-16 border-t-[1.8px] border-[#1C1917]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-zine-display font-bold uppercase tracking-wider text-[#1C1917]/80">
          <div className="flex items-center gap-2">
            <FourPointStar className="w-4 h-4 text-[#6E6295]" />
            <span>
              PORTFOLIO II — ÉDITION ART-ZINE // İBRAHİM ERDEM ERGENÇ © 2026
            </span>
          </div>
          <div>
            <span>ARTOS YAZILIM • VAN &amp; İSTANBUL</span>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          9. FRAMER MOTION FULL-SCREEN LIGHTBOX MODAL FOR STORYBOARDS
      ===================================================================== */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1C1917]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#F5F0E6] border-2 border-[#1C1917] rounded-2xl shadow-[8px_8px_0px_#6E6295] overflow-hidden"
            >
              {/* Top Lightbox Header */}
              <div className="px-5 py-3.5 border-b-[1.8px] border-[#1C1917] flex items-center justify-between bg-[#F5F0E6]">
                <div className="flex items-center gap-2.5">
                  <span className="font-zine-art font-black text-sm text-[#6E6295]">
                    {lightbox.project.code}
                  </span>
                  <span className="font-zine-display font-extrabold text-sm uppercase text-[#1C1917]">
                    {lightbox.project.title[lang]}
                  </span>
                  <span className="zine-pill !text-[10px]">
                    {lightbox.index + 1} / {lightbox.project.images.length}
                  </span>
                </div>

                <button
                  onClick={() => setLightbox(null)}
                  className="w-8 h-8 rounded-full border-[1.8px] border-[#1C1917] bg-white flex items-center justify-center hover:bg-[#D96B52] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image Viewer */}
              <div className="relative bg-[#1C1917] flex items-center justify-center h-[60vh] sm:h-[68vh]">
                <img
                  src={lightbox.project.images[lightbox.index].src}
                  alt={lightbox.project.images[lightbox.index].alt}
                  className="max-w-full max-h-full object-contain"
                />

                {lightbox.project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 w-10 h-10 rounded-full border-2 border-[#1C1917] bg-[#F5F0E6] text-[#1C1917] shadow-[3px_3px_0px_#1C1917] flex items-center justify-center hover:bg-[#F3D37A] cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 w-10 h-10 rounded-full border-2 border-[#1C1917] bg-[#F5F0E6] text-[#1C1917] shadow-[3px_3px_0px_#1C1917] flex items-center justify-center hover:bg-[#F3D37A] cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="p-3 bg-[#F5F0E6] border-t-[1.8px] border-[#1C1917] flex items-center gap-2 overflow-x-auto">
                {lightbox.project.images.map((thumb, idx) => (
                  <button
                    key={thumb.src}
                    onClick={() => setLightbox({ ...lightbox, index: idx })}
                    className={`w-16 h-11 rounded border-[1.8px] overflow-hidden shrink-0 cursor-pointer transition-all ${
                      idx === lightbox.index
                        ? 'border-[#6E6295] scale-105 shadow-[2px_2px_0px_#1C1917]'
                        : 'border-[#1C1917]/40 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
