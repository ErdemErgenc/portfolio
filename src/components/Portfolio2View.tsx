import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  QrCode,
  Sparkles,
  Download,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';
import {
  personalInfo,
  experiences,
  educationList,
  portfolioProjects,
  referencesList,
  type PortfolioProject,
} from '../data/portfolioData';

interface Portfolio2ViewProps {
  lang: 'tr' | 'en';
  onCelebrate: () => void;
}

export const Portfolio2View: React.FC<Portfolio2ViewProps> = ({ lang, onCelebrate }) => {
  const [useSketchAvatar, setUseSketchAvatar] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [previewIdxMap, setPreviewIdxMap] = useState<Record<string, number>>({});
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState<number>(0);

  const skillPills =
    lang === 'tr'
      ? [
          'Mobil Mimari (Flutter)',
          'React & Next.js Web',
          'Makine Öğrenmesi & OCR',
          'SQL & Veritabanı Tasarımı',
          'UI/UX & İllüstrasyon',
          'ERP & İş Zekâsı (BI)',
          'Takım Çalışması',
          'Süreç & Dokümantasyon',
        ]
      : [
          'Mobile Arch (Flutter)',
          'React & Next.js Web',
          'Machine Learning & OCR',
          'SQL & Database Design',
          'UI/UX & Illustration',
          'ERP & Business Intelligence',
          'Teamwork & Agile',
          'Process Documentation',
        ];

  const softwareIcons = [
    {
      code: 'Fl',
      name: 'Flutter',
      bg: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
      text: '#FFFFFF',
    },
    {
      code: 'Re',
      name: 'React / Next',
      bg: 'linear-gradient(135deg, #60A5FA 0%, #1D4ED8 100%)',
      text: '#FFFFFF',
    },
    {
      code: 'Py',
      name: 'Python & ML',
      bg: 'linear-gradient(135deg, #4ADE80 0%, #15803D 100%)',
      text: '#FFFFFF',
    },
    {
      code: 'Ai',
      name: 'Illustrator',
      bg: 'linear-gradient(135deg, #FB923C 0%, #C2410C 100%)',
      text: '#FFFFFF',
    },
    {
      code: 'Fg',
      name: 'Figma',
      bg: 'linear-gradient(135deg, #F472B6 0%, #BE185D 100%)',
      text: '#FFFFFF',
    },
    {
      code: 'Sq',
      name: 'SQL Server',
      bg: 'linear-gradient(135deg, #A78BFA 0%, #5B21B6 100%)',
      text: '#FFFFFF',
    },
    {
      code: 'Fb',
      name: 'Firebase',
      bg: 'linear-gradient(135deg, #FBBF24 0%, #D97706 100%)',
      text: '#141413',
    },
    {
      code: 'Ps',
      name: 'Design Suite',
      bg: 'linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)',
      text: '#FFFFFF',
    },
  ];

  const achievements = [
    {
      date: '08/2022 – 09/2023',
      title: lang === 'tr' ? 'YAPAY ZEKÂ, ML & OCR AR-GE PROJELERİ' : 'AI, ML & OCR R&D SYSTEMS',
      sub: lang === 'tr' ? '"IDENTIFY TURKEY & HİMETECH YYÜ"' : '"IDENTIFY TURKEY & HIMETECH"',
      org: lang === 'tr' ? 'Kimlik Tanıma & Model Optimizasyonu' : 'Identity Verification & ML Optimization',
    },
    {
      date: '2022 – 2023',
      title: lang === 'tr' ? '6× AKBANK 101 YETKİNLİK SERTİFİKASI' : '6× AKBANK 101 CERTIFICATES',
      sub: '"TASARIM, MLOPS, ANALİTİK, OYUNLAŞTIRMA"',
      org: 'Akbank Gençlik Akademisi & Erasmus+ (Fransa/İspanya)',
    },
    {
      date: '2025 – 2026',
      title: lang === 'tr' ? '38+ TAMAMLANAN WEB & MOBİL PROJE' : '38+ DELIVERED DIGITAL PRODUCTS',
      sub: '"REEDER A.Ş. & ARTOS YAZILIM KURUCU ORTAK"',
      org: 'Van Yüzüncü Yıl Üniversitesi Yapay Zekâ ve Robotik YL',
    },
  ];

  const categories = [
    { id: 'ALL', key: 'Ctrl+A', label: lang === 'tr' ? 'TÜM PROJELER (10)' : 'ALL PROJECTS (10)' },
    { id: 'Mobile App', key: 'Ctrl+M', label: lang === 'tr' ? 'MOBİL UYGULAMA (4)' : 'MOBILE APPS (4)' },
    { id: 'Web Application', key: 'Ctrl+W', label: lang === 'tr' ? 'WEB PLATFORMU (2)' : 'WEB APPS (2)' },
    { id: 'Web Design', key: 'Ctrl+D', label: lang === 'tr' ? 'KURUMSAL WEB (4)' : 'CORPORATE WEB (4)' },
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const cyclePreviewImage = (e: React.MouseEvent, project: PortfolioProject, dir: number) => {
    e.stopPropagation();
    const current = previewIdxMap[project.id] || 0;
    const next = (current + dir + project.images.length) % project.images.length;
    setPreviewIdxMap((prev) => ({ ...prev, [project.id]: next }));
  };

  return (
    <div className="min-h-screen p2-dotted-bg text-[#0F172A] py-8 sm:py-12 px-2 sm:px-6 lg:px-10">
      <div className="max-w-[1640px] mx-auto space-y-12">
        {/* ============================================================
            CARD 1: 3D CLAY RETRO MONITOR & FLOATING KEYCAPS HERO
            (Directly modeled after Top Card of Reference Image)
           ============================================================ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p2-studio-card relative overflow-hidden p-4 sm:p-8 lg:p-10 bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0]"
        >
          <div className="relative rounded-[28px] overflow-hidden bg-[#EEF3F9] border-2 border-white shadow-inner flex flex-col items-center justify-center">
            {/* High-Resolution 3D Clay Monitor Render */}
            <div className="relative w-full max-w-5xl mx-auto">
              <img
                src="/images/portfolio2-3d-hero.jpg"
                alt="3D Clay Portfolio Retro Monitor"
                className="w-full h-auto max-h-[580px] object-contain mx-auto select-none"
              />

              {/* Yellow Sticky Note Text Overlay on Top-Right of Monitor */}
              <div className="hidden sm:flex flex-col items-center justify-center absolute top-[21%] right-[35.5%] rotate-6 pointer-events-none">
                <span className="font-hand text-sm md:text-lg font-extrabold text-[#78350F] leading-none text-center">
                  Software
                  <br />
                  Engineer
                </span>
              </div>

              {/* Glossy Blue Nameplate Badge on White Grid Pedestal (like "ZiiZii" in Reference!) */}
              <div className="absolute bottom-5 right-6 sm:bottom-10 sm:right-16 z-20">
                <div className="px-5 py-2 rounded-2xl bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] text-white border-3 border-white shadow-[0_10px_25px_rgba(29,78,216,0.35)] font-grotesk text-lg sm:text-2xl font-black tracking-tight">
                  Erdem // ARTOS
                </div>
              </div>

              {/* Left Triangle Play Badge on Pedestal */}
              <a
                href="#p2-projects"
                className="hidden sm:flex items-center gap-2 absolute bottom-6 left-6 sm:bottom-10 sm:left-14 z-20 px-4 py-2.5 rounded-2xl bg-gradient-to-b from-[#2563EB] to-[#1E40AF] text-white border-3 border-white shadow-[0_10px_25px_rgba(29,78,216,0.3)] font-grotesk text-xs sm:text-sm font-extrabold hover:scale-105 transition-transform"
              >
                <span>▶ 10 PROJEYİ GÖR</span>
              </a>
            </div>

            {/* Interactive 3D Mechanical Keycaps Dock Below Monitor */}
            <div className="w-full bg-white/85 backdrop-blur-md border-t-2 border-white px-4 py-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#p2-resume"
                className="p2-keycap px-4 py-2.5 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] border-[#B45309] text-[#141413] font-grotesk text-xs sm:text-sm font-extrabold flex items-center gap-2"
              >
                <span className="px-1.5 py-0.5 rounded bg-black/10 font-mono-tech text-[10px]">
                  Ctrl
                </span>
                <span>{lang === 'tr' ? 'Hakkımda & Kimlik Kartı' : 'About & ID Badge'}</span>
              </a>

              <a
                href="#p2-projects"
                className="p2-keycap px-4 py-2.5 bg-gradient-to-b from-[#60A5FA] to-[#2563EB] border-[#1E40AF] text-white font-grotesk text-xs sm:text-sm font-extrabold flex items-center gap-2"
              >
                <span className="px-1.5 py-0.5 rounded bg-white/20 font-mono-tech text-[10px]">
                  Z
                </span>
                <span>{lang === 'tr' ? 'Projeler Vitrini (10)' : 'Projects Showcase (10)'}</span>
              </a>

              <a
                href={personalInfo.cvUrl}
                download
                onClick={onCelebrate}
                className="p2-keycap px-4 py-2.5 bg-gradient-to-b from-[#2DD4BF] to-[#0D9488] border-[#115E59] text-white font-grotesk text-xs sm:text-sm font-extrabold flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'tr' ? 'CV Yazdır / İndir (PDF)' : 'Print / Download CV'}</span>
              </a>

              <button
                onClick={onCelebrate}
                className="p2-keycap px-4 py-2.5 bg-gradient-to-b from-[#FFFFFF] to-[#E2E8F0] border-[#94A3B8] text-[#0F172A] font-grotesk text-xs sm:text-sm font-extrabold flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span>{lang === 'tr' ? 'Konfeti' : 'Celebrate'}</span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* ============================================================
            CARD 2: "BEHIND THE VISUALS" + HANGING RED LANYARD ID CARD
            + EDUCATION + EXPERIENCE + SKILLS + SOFTWARE + ACHIEVEMENT
            (Exact Layout of Bottom Card in Reference Image!)
           ============================================================ */}
        <motion.section
          id="p2-resume"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="p2-studio-card p-6 sm:p-10 lg:p-14 xl:p-16 relative overflow-hidden"
        >
          {/* TOP ROW: BEHIND THE VISUALS + LET'S CONNECT (LEFT) & HANGING LANYARD ID CARD (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-14 border-b-2 border-slate-200/80">
            {/* Left 6 Cols: Behind the Visuals + Let's Connect */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A] mb-5">
                  {lang === 'tr' ? 'Behind the Visuals' : 'Behind the Visuals'}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#334155] font-medium leading-relaxed">
                  <p>
                    {lang === 'tr'
                      ? "Fırat Üniversitesi Yazılım Mühendisliği mezunu ve Van Yüzüncü Yıl Üniversitesi Yapay Zekâ ve Robotik Yüksek Lisans öğrencisiyim. Geliştirdiğim 38'den fazla web ve mobil projede edindiğim deneyim, her yeni üründe sınırları zorlamamı ve mühendislik ile tasarımı kusursuzca birleştirmemi sağladı."
                      : "I'm a Software Engineer & UI/UX Designer (B.Sc. at Fırat University, M.Sc. in AI & Robotics at Van YYÜ). Through 38+ shipped web, mobile, and AI projects, my experience has helped me stay persistent, eager to learn, and continuously refine every digital product I build."}
                  </p>
                  <p>
                    {lang === 'tr'
                      ? "En güçlü yönüm; Flutter ile mobil uygulama mimarisi, React/Next.js ile modern web arayüzleri, makine öğrenimi/OCR sistemleri ve Adobe Illustrator & Figma ile görsel tasarımı tek çatı altında hızlı ve esnek biçimde hayata geçirebilmektir."
                      : 'My strengths lie in full-lifecycle flexibility, quick adaptability across Flutter, React, Python/ML, and SQL, and the ability to handle complex engineering and visual design requirements.'}
                  </p>
                </div>
              </div>

              {/* Let's Connect (Exact Circular 3D Glossy Icons from Reference!) */}
              <div>
                <h3 className="font-grotesk text-2xl sm:text-3xl font-black text-[#0F172A] mb-4">
                  {lang === 'tr' ? "Let's Connect" : "Let's Connect"}
                </h3>

                <div className="space-y-3.5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FBBF24] to-[#EA580C] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(234,88,12,0.35)] border-2 border-white shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-grotesk text-sm sm:text-base font-bold text-[#1E293B]">
                      {personalInfo.location} (Erasmus+: France & Spain)
                    </span>
                  </div>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#F87171] to-[#DC2626] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(220,38,38,0.35)] border-2 border-white shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-grotesk text-sm sm:text-base font-bold text-[#1E293B] group-hover:text-[#2563EB]">
                      {personalInfo.email}
                    </span>
                  </a>

                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#60A5FA] to-[#1D4ED8] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(29,78,216,0.35)] border-2 border-white shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-grotesk text-sm sm:text-base font-bold text-[#1E293B] group-hover:text-[#2563EB]">
                      {personalInfo.phone} • github.com/ErdemErgenc
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: 3D HANGING RED ID CARD WITH ROYAL-BLUE 'PROFILE' LANYARD STRAP */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[430px]">
              {/* Yellow Burst Star Behind Top-Left of ID Card (Exact match to Reference!) */}
              <svg
                className="w-32 h-32 text-[#FACC15] absolute top-6 left-[14%] sm:left-[20%] -rotate-12 z-0 drop-shadow-sm"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <polygon points="50,0 63,25 90,15 78,42 100,60 72,68 75,96 50,78 25,96 28,68 0,60 22,42 10,15 37,25" />
              </svg>

              {/* Royal Blue Lanyard Ribbons (SVG Top Loop + Bottom Flowing Straps) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                viewBox="0 0 500 460"
                fill="none"
              >
                <defs>
                  <linearGradient id="lanyardBlue" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                  <linearGradient id="lanyardDark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#172554" />
                  </linearGradient>
                </defs>

                {/* Back Lanyard Loop */}
                <path
                  d="M275 8 C340 -20, 420 60, 405 180 C390 290, 445 360, 390 410 C340 450, 290 380, 260 350"
                  stroke="url(#lanyardDark)"
                  strokeWidth="34"
                  strokeLinecap="round"
                />

                {/* Left Flowing Lanyard Tail ("PROFILE • PROFILE") */}
                <path
                  d="M175 315 C115 355, 65 405, 95 430 C125 450, 210 385, 255 345"
                  stroke="url(#lanyardBlue)"
                  strokeWidth="32"
                  strokeLinecap="round"
                />

                {/* Top Main Lanyard Strap Holding the Clip */}
                <path
                  d="M265 95 C270 40, 305 -5, 345 10 C385 25, 395 110, 380 210"
                  stroke="url(#lanyardBlue)"
                  strokeWidth="34"
                  strokeLinecap="round"
                />

                {/* Printed Text along Lanyard Straps */}
                <text
                  x="110"
                  y="388"
                  fill="rgba(255,255,255,0.75)"
                  fontSize="11"
                  fontWeight="800"
                  letterSpacing="2"
                  transform="rotate(-32 110 388)"
                >
                  PROFILE • ERDEM •
                </text>
                <text
                  x="368"
                  y="145"
                  fill="rgba(255,255,255,0.75)"
                  fontSize="11"
                  fontWeight="800"
                  letterSpacing="2"
                  transform="rotate(76 368 145)"
                >
                  • PROFILE • ARTOS •
                </text>
              </svg>

              {/* Interactive Tilted Red ID Card */}
              <motion.div
                whileHover={{ rotate: -2, scale: 1.03 }}
                onClick={() => setUseSketchAvatar(!useSketchAvatar)}
                className="p2-id-card relative z-20 w-[285px] sm:w-[310px] p-5 pt-7 text-white -rotate-6 cursor-pointer select-none"
                title={
                  lang === 'tr'
                    ? 'Fotoğraf / Çizim Avatar Arasında Geçiş Yapmak İçin Tıkla!'
                    : 'Click to toggle Photo / Sketch Avatar!'
                }
              >
                {/* Blue Plastic Lanyard Clip at Top Center */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-9 h-11 rounded-md bg-gradient-to-b from-[#60A5FA] to-[#2563EB] border-2 border-white shadow-md" />
                  <div className="w-12 h-3.5 rounded-full bg-[#1E3A8A] -mt-1 border border-white/50" />
                </div>

                {/* Slot Hole */}
                <div className="w-14 h-2.5 rounded-full bg-black/35 mx-auto mb-3 shadow-inner" />

                {/* Top Row: Sparkle/Paw Icon + Switch Hint */}
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/25 text-[10px] font-mono-tech font-bold flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" />
                    <span>{useSketchAvatar ? 'SKETCH ID' : 'PHOTO ID'}</span>
                  </span>
                </div>

                {/* Portrait Inside Organic Cloud/Blob Frame */}
                <div className="relative w-52 h-52 mx-auto my-2 rounded-[38%_62%_55%_45%/48%_42%_58%_52%] bg-gradient-to-br from-[#F1F5F9] to-[#CBD5E1] border-4 border-white shadow-inner overflow-hidden flex items-end justify-center">
                  <img
                    src={
                      useSketchAvatar
                        ? '/images/erdem-avatar-illustration.jpg'
                        : '/images/erdem-portrait.png'
                    }
                    alt="İbrahim Erdem Ergenç ID"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom ID Card Text + Mini QR Code */}
                <div className="mt-4 flex items-end justify-between gap-2 pt-2 border-t border-white/25">
                  <div>
                    <div className="font-grotesk text-lg sm:text-xl font-black tracking-tight uppercase leading-none">
                      İBRAHİM ERDEM ERGENÇ
                    </div>
                    <div className="font-mono-tech text-[11px] font-bold text-white/85 mt-1">
                      ID: ENG-2026 // ARTOS
                    </div>
                  </div>

                  <div className="p-1.5 bg-white rounded-lg text-[#0F172A] shrink-0 shadow">
                    <QrCode className="w-9 h-9" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ============================================================
              MIDDLE ROW: 2-COLUMN TIMELINE (EDUCATION + SKILLS + SOFTWARE ON LEFT, EXPERIENCE ON RIGHT)
              (Exact Structure of Reference Image!)
             ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 border-b-2 border-slate-200/80">
            {/* LEFT 5 COLS: EDUCATION + SKILLS + SOFTWARE */}
            <div className="lg:col-span-5 space-y-10">
              {/* Education Section */}
              <div>
                <h3 className="font-grotesk text-2xl sm:text-3xl font-black text-[#0F172A] mb-6">
                  {lang === 'tr' ? 'Education' : 'Education'}
                </h3>

                <div className="space-y-6">
                  {educationList.map((edu) => (
                    <div key={edu.id} className="grid grid-cols-12 gap-3 items-start">
                      <div className="col-span-4 font-grotesk text-xs sm:text-sm font-black text-[#0F172A] pt-0.5">
                        {edu.period}
                      </div>
                      <div className="col-span-8 relative pl-5 border-l-2 border-slate-300 pb-2">
                        <span className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#0F172A]" />
                        <h4 className="font-grotesk text-sm sm:text-base font-black text-[#0F172A] uppercase">
                          {edu.school}
                        </h4>
                        <div className="text-xs sm:text-sm font-bold text-[#2563EB] mt-0.5">
                          {edu.degree[lang]}
                        </div>
                        <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                          {edu.details[lang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Pill Badges Section (Exact match to Reference!) */}
              <div>
                <h3 className="font-grotesk text-2xl sm:text-3xl font-black text-[#0F172A] mb-4">
                  {lang === 'tr' ? 'Skills' : 'Skills'}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skillPills.map((sk) => (
                    <span
                      key={sk}
                      className="p2-skill-pill px-4 py-2 font-grotesk text-xs sm:text-sm font-bold text-[#1E293B]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software 3D Glossy Beveled Icons Section (Exact match to Reference!) */}
              <div>
                <h3 className="font-grotesk text-2xl sm:text-3xl font-black text-[#0F172A] mb-4">
                  {lang === 'tr' ? 'Software & Stack' : 'Software & Stack'}
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-3">
                  {softwareIcons.map((sw) => (
                    <div key={sw.code} className="flex flex-col items-center gap-1.5">
                      <div
                        className="p2-software-bevel w-14 h-14 flex items-center justify-center font-grotesk text-xl font-black"
                        style={{ background: sw.bg, color: sw.text }}
                        title={sw.name}
                      >
                        {sw.code}
                      </div>
                      <span className="font-mono-tech text-[10px] font-bold text-[#475569] text-center">
                        {sw.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT 7 COLS: EXPERIENCE TIMELINE */}
            <div className="lg:col-span-7">
              <h3 className="font-grotesk text-2xl sm:text-3xl font-black text-[#0F172A] mb-6">
                {lang === 'tr' ? 'Experience' : 'Experience'}
              </h3>

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-3 sm:col-span-3 font-grotesk text-xs sm:text-sm font-black text-[#0F172A] pt-0.5">
                      {exp.period[lang]}
                    </div>

                    <div className="col-span-9 sm:col-span-9 relative pl-6 border-l-2 border-slate-300 pb-2">
                      <span className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#0F172A]" />

                      <h4 className="font-grotesk text-base sm:text-lg font-black text-[#0F172A] uppercase">
                        {exp.company}
                      </h4>
                      <div className="text-xs sm:text-sm font-extrabold text-[#2563EB] mt-0.5">
                        Role: {exp.role[lang]}
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-[#0F172A] mt-2">
                        Description:
                      </div>
                      <ul className="mt-1 space-y-1.5 text-xs sm:text-sm text-[#334155] font-medium">
                        {exp.bullets[lang].map((b, i) => (
                          <li key={i} className="leading-relaxed">
                            • {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-300 font-mono-tech text-[10px] font-bold text-[#334155]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============================================================
              BOTTOM ROW: ACHIEVEMENT & REFERENCES HORIZONTAL TIMELINE
              (Exact Match to Bottom of Reference Image!)
             ============================================================ */}
          <div className="pt-10">
            <h3 className="font-grotesk text-2xl sm:text-3xl font-black text-[#0F172A] mb-8">
              {lang === 'tr' ? 'Achievement & References' : 'Achievement & References'}
            </h3>

            {/* Horizontal Timeline Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Horizontal Line on Desktop */}
              <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-300 z-0" />

              {achievements.map((ach, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="font-grotesk text-sm font-black text-[#0F172A] mb-2">
                    {ach.date}
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0F172A] mb-4 shadow-xs" />
                  <h4 className="font-grotesk text-sm sm:text-base font-black text-[#0F172A] uppercase">
                    {ach.title}
                  </h4>
                  <div className="font-grotesk text-xs sm:text-sm font-extrabold text-[#2563EB] mt-0.5">
                    {ach.sub}
                  </div>
                  <div className="text-xs font-medium text-[#64748B] mt-1">{ach.org}</div>
                </div>
              ))}
            </div>

            {/* References Pills Row */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {referencesList.map((ref) => (
                <div
                  key={ref.name}
                  className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs flex items-center justify-between"
                >
                  <div>
                    <div className="font-mono-tech text-[10px] font-bold text-[#2563EB] uppercase">
                      {lang === 'tr' ? 'REFERANS' : 'REFERENCE'} // {ref.badge}
                    </div>
                    <div className="font-grotesk text-base font-black text-[#0F172A] mt-0.5">
                      {ref.name}
                    </div>
                    <div className="text-xs text-[#475569] font-medium">{ref.role[lang]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ============================================================
            CARD 3: FULL-SCREEN-WIDTH 3D CLAY PROJECT SHOWCASE (ALL 10 PROJECTS)
           ============================================================ */}
        <section id="p2-projects" className="space-y-8 pt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-2">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#DBEAFE] text-[#1D4ED8] font-grotesk text-xs font-black uppercase tracking-wider mb-2">
                3D STUDIO SHOWCASE // 10 PROJECTS
              </span>
              <h2 className="font-grotesk text-3xl sm:text-5xl font-black text-[#0F172A]">
                {lang === 'tr'
                  ? 'Featured Projects & Case Studies'
                  : 'Featured Projects & Case Studies'}
              </h2>
            </div>

            {/* 3D Keycap Filter Buttons */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p2-keycap px-4 py-2.5 font-grotesk text-xs sm:text-sm font-extrabold flex items-center gap-2 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8] border-[#1E3A8A] text-white'
                      : 'bg-white border-slate-300 text-[#0F172A]'
                  }`}
                >
                  <span className="px-1.5 py-0.5 rounded bg-black/10 font-mono-tech text-[10px]">
                    {cat.key}
                  </span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Monumental 3D Studio Cards for All 10 Projects */}
          <div className="space-y-10">
            {filteredProjects.map((project) => {
              const currentImgIdx = previewIdxMap[project.id] || 0;
              const currentImg = project.images[currentImgIdx] || project.images[0];
              const secondImg =
                project.images[(currentImgIdx + 1) % project.images.length] || currentImg;
              const isMobile = project.category === 'Mobile App';

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="p2-studio-card p-6 sm:p-10 lg:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left 5 Cols: Project Story & Specs */}
                    <div className="lg:col-span-5 space-y-5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="px-3.5 py-1 rounded-full text-xs font-grotesk font-black text-white shadow-xs"
                          style={{ backgroundColor: project.tabColor }}
                        >
                          {project.code}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 font-mono-tech text-xs font-bold text-[#334155]">
                          {project.categoryLabel[lang]} • {project.year}
                        </span>
                      </div>

                      <h3 className="font-grotesk text-2xl sm:text-4xl font-black text-[#0F172A] leading-tight">
                        {project.title[lang]}
                      </h3>

                      <p className="font-grotesk text-base sm:text-lg font-bold text-[#2563EB]">
                        {project.subtitle[lang]}
                      </p>

                      <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                        {project.description[lang]}
                      </p>

                      <ul className="space-y-2">
                        {project.highlights[lang].map((hl, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="p2-skill-pill px-3.5 py-1 font-mono-tech text-xs font-bold text-[#0F172A]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setModalImageIdx(currentImgIdx);
                          }}
                          className="p2-keycap px-5 py-3 bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8] border-[#1E3A8A] text-white font-grotesk text-xs sm:text-sm font-black inline-flex items-center gap-2 cursor-pointer"
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span>
                            {lang === 'tr'
                              ? `Tam Ekran İncele (${project.images.length} Ekran)`
                              : `Fullscreen View (${project.images.length} Screens)`}
                          </span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right 7 Cols: Giant 3D Clay Showcase Stage */}
                    <div className="lg:col-span-7">
                      <div className="rounded-[28px] bg-[#0F172A] p-4 sm:p-6 border-4 border-white shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
                        <div
                          onClick={() => {
                            setSelectedProject(project);
                            setModalImageIdx(currentImgIdx);
                          }}
                          className="relative h-[360px] sm:h-[460px] xl:h-[520px] rounded-2xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] flex items-center justify-center gap-4 p-4 overflow-hidden cursor-pointer group"
                        >
                          {isMobile ? (
                            <>
                              <img
                                src={currentImg?.src}
                                alt={currentImg?.alt}
                                className="h-full max-w-[46%] object-contain rounded-xl drop-shadow-2xl group-hover:scale-105 transition-transform"
                              />
                              {project.images.length > 1 && (
                                <img
                                  src={secondImg?.src}
                                  alt={secondImg?.alt}
                                  className="h-[90%] max-w-[44%] object-contain rounded-xl opacity-90 drop-shadow-2xl group-hover:scale-105 transition-transform"
                                />
                              )}
                            </>
                          ) : (
                            <img
                              src={currentImg?.src}
                              alt={currentImg?.alt}
                              className="h-full w-full object-contain rounded-xl drop-shadow-2xl group-hover:scale-[1.02] transition-transform"
                            />
                          )}

                          {project.images.length > 1 && (
                            <>
                              <button
                                onClick={(e) => cyclePreviewImage(e, project, -1)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#0F172A] shadow-lg flex items-center justify-center hover:bg-[#3B82F6] hover:text-white cursor-pointer"
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                onClick={(e) => cyclePreviewImage(e, project, 1)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#0F172A] shadow-lg flex items-center justify-center hover:bg-[#3B82F6] hover:text-white cursor-pointer"
                              >
                                <ChevronRight className="w-6 h-6" />
                              </button>
                            </>
                          )}
                        </div>

                        {/* Thumbnail Strip */}
                        {project.images.length > 1 && (
                          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
                            {project.images.map((img, i) => (
                              <button
                                key={i}
                                onClick={() =>
                                  setPreviewIdxMap((prev) => ({ ...prev, [project.id]: i }))
                                }
                                className={`w-16 h-14 shrink-0 rounded-xl border-2 overflow-hidden bg-slate-800 p-1 cursor-pointer transition-all ${
                                  i === currentImgIdx
                                    ? 'border-[#38BDF8] scale-105 ring-2 ring-[#38BDF8]'
                                    : 'border-white/15 opacity-60 hover:opacity-100'
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
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL FOR PORTFOLIO 2 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="p2-studio-card w-full max-w-[1640px] h-[90vh] overflow-hidden flex flex-col bg-white"
            >
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <div className="font-grotesk text-lg font-black text-[#0F172A]">
                  {selectedProject.code} — {selectedProject.title[lang]} (
                  {modalImageIdx + 1}/{selectedProject.images.length})
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p2-keycap px-3.5 py-1.5 bg-red-500 border-red-700 text-white font-grotesk text-xs font-black flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  <span>ESC</span>
                </button>
              </div>

              <div className="flex-1 bg-[#0F172A] p-6 flex flex-col justify-between overflow-hidden relative">
                <div className="relative flex-1 flex items-center justify-center min-h-0">
                  <img
                    src={selectedProject.images[modalImageIdx]?.src}
                    alt={selectedProject.images[modalImageIdx]?.alt}
                    className="max-h-full max-w-full object-contain rounded-xl"
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#0F172A] flex items-center justify-center shadow-xl hover:bg-[#2563EB] hover:text-white cursor-pointer"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() =>
                          setModalImageIdx(
                            (prev) => (prev + 1) % selectedProject.images.length
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#0F172A] flex items-center justify-center shadow-xl hover:bg-[#2563EB] hover:text-white cursor-pointer"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2.5 overflow-x-auto pb-1 shrink-0">
                    {selectedProject.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setModalImageIdx(i)}
                        className={`w-16 h-16 shrink-0 rounded-xl border-2 overflow-hidden bg-slate-800 p-1 cursor-pointer ${
                          i === modalImageIdx
                            ? 'border-[#38BDF8] scale-105'
                            : 'border-white/20 opacity-60'
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
