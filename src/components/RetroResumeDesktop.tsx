import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Crown,
  Award,
  GraduationCap,
  Briefcase,
  Sparkles,
  UserCheck,
  Download,
  Monitor,
  FolderOpen,
  Globe,
  Cpu,
  Volume2,
  ShieldCheck,
  Minimize2,
  FolderKanban,
  ArrowUpRight,
} from 'lucide-react';
import {
  personalInfo,
  experiences,
  educationList,
  skillGroups,
  certificates,
  referencesList,
  portfolioProjects,
} from '../data/portfolioData';

interface RetroResumeDesktopProps {
  lang: 'tr' | 'en';
}

type WindowId = 'about' | 'skills' | 'experience' | 'education' | 'projects';

export const RetroResumeDesktop: React.FC<RetroResumeDesktopProps> = ({ lang }) => {
  const [avatarStyle, setAvatarStyle] = useState<'illustrated' | 'photo'>('illustrated');
  const [selectedSkill, setSelectedSkill] = useState<string>('Flutter & Dart');
  const [activeWindow, setActiveWindow] = useState<WindowId>('about');
  const [maximizedWindow, setMaximizedWindow] = useState<WindowId | null>(null);
  const [collapsedWindows, setCollapsedWindows] = useState<Record<WindowId, boolean>>({
    about: false,
    skills: false,
    experience: false,
    education: false,
    projects: false,
  });
  const [startMenuOpen, setStartMenuOpen] = useState<boolean>(false);

  const toggleCollapse = (id: WindowId) => {
    setCollapsedWindows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMaximize = (id: WindowId) => {
    setMaximizedWindow((prev) => (prev === id ? null : id));
    setCollapsedWindows((prev) => ({ ...prev, [id]: false }));
    setActiveWindow(id);
  };

  const showAllWindows = () => {
    setMaximizedWindow(null);
    setCollapsedWindows({
      about: false,
      skills: false,
      experience: false,
      education: false,
      projects: false,
    });
  };

  const isVisible = (id: WindowId) => maximizedWindow === null || maximizedWindow === id;

  return (
    <section id="desktop-os" className="py-16 px-2 sm:px-5 lg:px-8 relative">
      {/* FULL-SCREEN-LIKE WIDTH CONTAINER */}
      <div className="w-full max-w-[1860px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4 px-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0054E3] text-white border-2 border-[#141413] font-mono-tech text-xs font-bold shadow-[3px_3px_0px_#141413] mb-3">
              <Monitor className="w-4 h-4" />
              <span>02 // WINDOWS XP PROFESSIONAL — RESUME & PROJECTS OS</span>
            </div>
            <h2 className="font-pixel text-2xl sm:text-5xl font-bold text-[var(--ink)]">
              {lang === 'tr' ? 'MY_RESUME.EXE — WINDOWS XP CV' : 'MY_RESUME.EXE — WINDOWS XP CV'}
            </h2>
            <p className="font-mono-tech text-xs sm:text-base text-[var(--ink-muted)] mt-1">
              {lang === 'tr'
                ? '💻 Windows XP pencerelerini tam ekran (□) yapabilir, alt görev çubuğundan veya Başlat menüsünden gezinebilirsin.'
                : '💻 Maximize (□) any Windows XP window, or navigate via the bottom XP Taskbar and Start Menu.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {maximizedWindow && (
              <button
                onClick={showAllWindows}
                className="xp-button px-4 py-2.5 font-mono-tech text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Minimize2 className="w-4 h-4 text-[#0054E3]" />
                <span>{lang === 'tr' ? 'Tüm Pencereleri Göster' : 'Restore All Windows'}</span>
              </button>
            )}
            <a
              href={personalInfo.cvUrl}
              download
              className="retro-btn px-4 py-2.5 bg-[#F59E0B] text-[#141413] font-mono-tech text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'tr' ? 'Özgeçmiş (CV) PDF İndir' : 'Download CV PDF'}</span>
            </a>
          </div>
        </div>

        {/* ============================================================
            OUTER WINDOWS XP EXPLORER / DESKTOP SHELL
           ============================================================ */}
        <div className="xp-window w-full">
          {/* Outer XP Luna Blue Title Bar */}
          <div className="xp-titlebar">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-xs bg-gradient-to-br from-[#F97316] via-[#22C55E] to-[#3B82F6] border border-white flex items-center justify-center shadow-xs">
                <Monitor className="w-3 h-3 text-white" />
              </div>
              <span className="font-sans text-xs sm:text-sm font-bold tracking-wide">
                C:\Users\Erdem_Ergenc\MY_RESUME.EXE — Microsoft Windows XP Professional
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button onClick={showAllWindows} title="Minimize / Restore" className="xp-ctrl-btn">
                _
              </button>
              <button onClick={showAllWindows} title="Maximize" className="xp-ctrl-btn">
                □
              </button>
              <button
                onClick={showAllWindows}
                title="Close"
                className="xp-ctrl-btn xp-ctrl-close"
              >
                ×
              </button>
            </div>
          </div>

          {/* Windows XP Classic File / Edit / View Menu Bar */}
          <div className="xp-menubar flex items-center justify-between">
            <div className="flex items-center gap-4 font-sans text-xs">
              <button
                onClick={showAllWindows}
                className="hover:bg-[#316AC5] hover:text-white px-1.5 py-0.5 rounded-xs cursor-pointer"
              >
                <u>D</u>osya
              </button>
              <button
                onClick={() => toggleMaximize('about')}
                className="hover:bg-[#316AC5] hover:text-white px-1.5 py-0.5 rounded-xs cursor-pointer"
              >
                <u>H</u>akkımda
              </button>
              <button
                onClick={() => toggleMaximize('skills')}
                className="hover:bg-[#316AC5] hover:text-white px-1.5 py-0.5 rounded-xs cursor-pointer"
              >
                <u>Y</u>etenekler
              </button>
              <button
                onClick={() => toggleMaximize('experience')}
                className="hover:bg-[#316AC5] hover:text-white px-1.5 py-0.5 rounded-xs cursor-pointer hidden sm:inline"
              >
                <u>D</u>eneyim
              </button>
              <button
                onClick={() => toggleMaximize('projects')}
                className="hover:bg-[#316AC5] hover:text-white px-1.5 py-0.5 rounded-xs cursor-pointer hidden sm:inline"
              >
                <u>P</u>rojeler (10)
              </button>
              <button
                onClick={() => setStartMenuOpen(!startMenuOpen)}
                className="hover:bg-[#316AC5] hover:text-white px-1.5 py-0.5 rounded-xs cursor-pointer"
              >
                <u>B</u>aşlat Menüsü
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono-tech font-bold text-[#003399]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#369524]" />
              <span>Windows XP SP3 // ARTOS_OS</span>
            </div>
          </div>

          {/* Windows XP Address Bar */}
          <div className="xp-addressbar">
            <span className="text-[#57554E] font-sans font-semibold">
              {lang === 'tr' ? 'Adres:' : 'Address:'}
            </span>
            <div className="flex-1 xp-inset-panel px-2.5 py-1 flex items-center justify-between text-xs font-mono-tech">
              <div className="flex items-center gap-2 truncate">
                <FolderOpen className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span className="truncate">
                  C:\Documents and Settings\Erdem_Ergenc\Desktop\{maximizedWindow ? `${maximizedWindow.toUpperCase()}.EXE` : 'ALL_WINDOWS'}
                </span>
              </div>
              <span className="text-[10px] text-[#059669] font-bold hidden md:inline">
                [READY — 10 PROJECTS & CV LOADED]
              </span>
            </div>
            <button
              onClick={showAllWindows}
              className="xp-button px-3 py-1 text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              <span className="text-[#369524]">→</span>
              <span>{lang === 'tr' ? 'Tümünü Göster' : 'Show All'}</span>
            </button>
          </div>

          {/* ============================================================
              WINDOWS XP BLISS WALLPAPER WORKSPACE AREA
             ============================================================ */}
          <div className="xp-bliss-wallpaper p-4 sm:p-6 lg:p-8 relative min-h-[780px]">
            {/* Desktop Shortcut Icons Strip at Top */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-white/25">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <button
                  onClick={showAllWindows}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-white border transition-colors cursor-pointer text-xs font-bold ${
                    maximizedWindow === null
                      ? 'bg-[#0054E3] border-white shadow-sm'
                      : 'bg-black/25 hover:bg-[#0054E3]/80 border-white/30'
                  }`}
                >
                  <Monitor className="w-4 h-4 text-[#FDE047]" />
                  <span>{lang === 'tr' ? 'Tüm Masaüstü (5 Pencere)' : 'All Windows (5)'}</span>
                </button>

                <button
                  onClick={() => toggleMaximize('about')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-white border transition-colors cursor-pointer text-xs font-bold ${
                    maximizedWindow === 'about'
                      ? 'bg-[#0054E3] border-white'
                      : 'bg-black/20 hover:bg-[#0054E3]/70 border-white/25'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-[#93C5FD]" />
                  <span>WWW.ABOUT.ME</span>
                </button>

                <button
                  onClick={() => toggleMaximize('skills')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-white border transition-colors cursor-pointer text-xs font-bold ${
                    maximizedWindow === 'skills'
                      ? 'bg-[#0054E3] border-white'
                      : 'bg-black/20 hover:bg-[#0054E3]/70 border-white/25'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-[#86EFAC]" />
                  <span>MY_SKILLS.CPL</span>
                </button>

                <button
                  onClick={() => toggleMaximize('experience')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-white border transition-colors cursor-pointer text-xs font-bold ${
                    maximizedWindow === 'experience'
                      ? 'bg-[#0054E3] border-white'
                      : 'bg-black/20 hover:bg-[#0054E3]/70 border-white/25'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#FDE047]" />
                  <span>EXPERIENCE.DOC</span>
                </button>

                <button
                  onClick={() => toggleMaximize('education')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-white border transition-colors cursor-pointer text-xs font-bold ${
                    maximizedWindow === 'education'
                      ? 'bg-[#0054E3] border-white'
                      : 'bg-black/20 hover:bg-[#0054E3]/70 border-white/25'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#FDBA74]" />
                  <span>EDUCATION.EXE</span>
                </button>

                <button
                  onClick={() => toggleMaximize('projects')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-white border transition-colors cursor-pointer text-xs font-bold ${
                    maximizedWindow === 'projects'
                      ? 'bg-[#0054E3] border-white'
                      : 'bg-black/20 hover:bg-[#0054E3]/70 border-white/25'
                  }`}
                >
                  <FolderKanban className="w-3.5 h-3.5 text-[#FDE047]" />
                  <span>PROJECTS_EXPLORER.EXE (10)</span>
                </button>
              </div>

              <a
                href={personalInfo.cvUrl}
                download
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#369524] hover:bg-[#2A7E19] text-white border border-white/50 text-xs font-bold shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Ibrahim_Erdem_CV.pdf</span>
              </a>
            </div>

            {/* ============================================================
                WINDOWS XP SUB-WINDOWS GRID (STATIC, NON-DRAGGABLE, LUNA STYLE)
               ============================================================ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT COLUMN (5 cols or 12 if maximized): ABOUT.ME + MY_SKILLS */}
              {(isVisible('about') || isVisible('skills')) && (
                <div
                  className={`${
                    maximizedWindow === 'about' || maximizedWindow === 'skills'
                      ? 'lg:col-span-12'
                      : 'lg:col-span-5'
                  } flex flex-col gap-6`}
                >
                  {/* XP WINDOW 1: WWW.ABOUT.ME — Internet Explorer 6 XP Style */}
                  {isVisible('about') && (
                    <div
                      onClick={() => setActiveWindow('about')}
                      className="xp-window transition-all"
                    >
                      <div className="xp-titlebar">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-[#93C5FD]" />
                          <span className="font-sans text-xs sm:text-sm font-bold">
                            WWW.ABOUT.ME — Microsoft Internet Explorer
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('about');
                            }}
                            className="xp-ctrl-btn"
                            title={lang === 'tr' ? 'Küçült / Aç' : 'Minimize / Expand'}
                          >
                            _
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMaximize('about');
                            }}
                            className="xp-ctrl-btn"
                            title={lang === 'tr' ? 'Tam Ekran Yap' : 'Maximize'}
                          >
                            □
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('about');
                            }}
                            className="xp-ctrl-btn xp-ctrl-close"
                            title="Close"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      {!collapsedWindows.about && (
                        <div className="p-3 bg-[#ECE9D8]">
                          <div className="xp-inset-panel p-5 sm:p-6 bg-[#2B59C3] text-white rounded-xs">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                              <div className="flex-1">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#F59E0B] text-[#141413] font-pixel text-[10px] font-bold border border-[#141413] mb-2">
                                  <span>👍 YAZILIM MÜHENDİSİ & TASARIMCI</span>
                                </div>
                                <h3 className="font-pixel text-2xl sm:text-3xl font-bold leading-tight text-white">
                                  İBRAHİM ERDEM
                                  <br />
                                  <span className="text-[#FDE047]">ERGENÇ</span>
                                </h3>

                                <div className="mt-3 space-y-1.5 font-mono-tech text-xs sm:text-sm text-white/95">
                                  <a
                                    href={`tel:${personalInfo.phoneRaw}`}
                                    className="flex items-center gap-2 hover:text-[#FDE047]"
                                  >
                                    <Phone className="w-4 h-4 text-[#FDE047] shrink-0" />
                                    <span>{personalInfo.phone}</span>
                                  </a>
                                  <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-2 hover:text-[#FDE047]"
                                  >
                                    <Mail className="w-4 h-4 text-[#FDE047] shrink-0" />
                                    <span>{personalInfo.email}</span>
                                  </a>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[#FDE047] shrink-0" />
                                    <span>{personalInfo.location}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Avatar Box with Crown */}
                              <div className="relative shrink-0 flex flex-col items-center">
                                <Crown className="w-8 h-8 text-[#FDE047] fill-[#FDE047] -mb-2 rotate-12 z-10 drop-shadow-[2px_2px_0px_#141413]" />
                                <div
                                  onClick={() =>
                                    setAvatarStyle(
                                      avatarStyle === 'illustrated' ? 'photo' : 'illustrated'
                                    )
                                  }
                                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg overflow-hidden border-3 border-white shadow-[4px_4px_0px_#141413] bg-[#FBF8F1] cursor-pointer group relative"
                                >
                                  <img
                                    src={
                                      avatarStyle === 'illustrated'
                                        ? '/images/erdem-avatar-illustration.jpg'
                                        : '/images/erdem-portrait.png'
                                    }
                                    alt="Erdem Ergenç Avatar"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  />
                                  <span className="absolute bottom-1 right-1 bg-[#0054E3] text-white border border-white font-mono-tech text-[9px] font-bold px-1.5 py-0.5 rounded-xs">
                                    {avatarStyle === 'illustrated' ? 'FOTOĞRAF' : 'ÇİZİM'}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <p className="mt-4 pt-3 border-t border-white/25 font-mono-tech text-xs sm:text-sm leading-relaxed text-white/95">
                              {lang === 'tr'
                                ? "Fırat Üniversitesi Yazılım Mühendisliği mezunu & Van YYÜ Yapay Zekâ ve Robotik Yüksek Lisans öğrencisi. Reeder'da Flutter/React geliştirici deneyimi, Identify Turkey ve Himetech'te OCR/ML Ar-Ge geçmişi ve ARTOS Yazılım kurucu ortaklığı."
                                : "Software Engineering graduate (Fırat Univ.) & M.Sc. candidate in AI & Robotics (Van YYÜ). Former Flutter/React engineer at Reeder, OCR/ML R&D intern at Identify Turkey & Himetech, and Co-Founder at ARTOS Software."}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* XP WINDOW 2: MY_SKILLS.CPL — Windows XP Control Panel Style */}
                  {isVisible('skills') && (
                    <div
                      onClick={() => setActiveWindow('skills')}
                      className="xp-window transition-all"
                    >
                      <div className="xp-titlebar">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#86EFAC]" />
                          <span className="font-sans text-xs sm:text-sm font-bold">
                            MY_SKILLS.CPL —{' '}
                            {lang === 'tr'
                              ? 'Yetenekler ve Diller Denetim Masası'
                              : 'Skills & Languages Control Panel'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('skills');
                            }}
                            className="xp-ctrl-btn"
                          >
                            _
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMaximize('skills');
                            }}
                            className="xp-ctrl-btn"
                          >
                            □
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('skills');
                            }}
                            className="xp-ctrl-btn xp-ctrl-close"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      {!collapsedWindows.skills && (
                        <div className="p-3 bg-[#ECE9D8] space-y-3">
                          <div className="xp-inset-panel p-4 sm:p-5 space-y-5 bg-white">
                            {skillGroups.map((group) => (
                              <div key={group.id}>
                                <div className="flex items-center justify-between mb-2.5 pb-1 border-b border-[#D4D0C8]">
                                  <span className="font-pixel text-xs font-bold uppercase text-[#003399]">
                                    {group.title[lang]}
                                  </span>
                                  <span
                                    className="w-3 h-3 rounded-full border border-[#141413]"
                                    style={{ backgroundColor: group.badgeColor }}
                                  />
                                </div>

                                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                                  {group.items.map((item) => {
                                    const isSelected = selectedSkill === item.name;
                                    return (
                                      <button
                                        key={item.name}
                                        onClick={() => setSelectedSkill(item.name)}
                                        className={`flex flex-col items-center p-2.5 rounded border transition-all cursor-pointer ${
                                          isSelected
                                            ? 'bg-[#C1D2EE] border-[#316AC5] shadow-xs -translate-y-0.5'
                                            : 'bg-[#F8F7F1] border-[#D4D0C8] hover:bg-[#E8F0FB]'
                                        }`}
                                      >
                                        <div
                                          className="w-11 h-11 rounded-lg border-2 border-[#141413] flex items-center justify-center font-pixel text-xs font-bold shadow-[2px_2px_0px_#141413]"
                                          style={{ backgroundColor: item.bg, color: item.color }}
                                        >
                                          {item.short}
                                        </div>
                                        <span className="font-mono-tech text-[10px] font-bold text-center mt-1.5 leading-tight text-[#141413]">
                                          {item.name}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}

                            {/* XP Green Segmented Progress Bar for Selected Skill */}
                            {selectedSkill && (
                              <div className="p-3 bg-[#ECE9D8] border border-[#919B9C] rounded-xs font-mono-tech text-xs">
                                <div className="flex items-center justify-between font-bold mb-1.5 text-[#141413]">
                                  <span>⚡ {selectedSkill}</span>
                                  <span className="text-[#003399]">
                                    {skillGroups
                                      .flatMap((g) => g.items)
                                      .find((i) => i.name === selectedSkill)?.level || 90}
                                    % YETKİNLİK
                                  </span>
                                </div>
                                <div className="w-full h-4 bg-white border-2 border-[#7F9DB9] p-0.5 rounded-xs overflow-hidden">
                                  <div
                                    className="h-full bg-[repeating-linear-gradient(90deg,#22C55E,#22C55E_8px,#ECE9D8_8px,#ECE9D8_10px)] transition-all duration-300"
                                    style={{
                                      width: `${
                                        skillGroups
                                          .flatMap((g) => g.items)
                                          .find((i) => i.name === selectedSkill)?.level || 90
                                      }%`,
                                    }}
                                  />
                                </div>
                              </div>
                            )}

                            {/* Languages & Likings */}
                            <div className="pt-2 border-t border-[#D4D0C8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#141413]">
                              <div>
                                <div className="font-pixel text-xs font-bold text-[#003399] mb-2">
                                  LANGUAGES
                                </div>
                                <div className="space-y-2 font-mono-tech text-xs">
                                  <div>
                                    <div className="flex justify-between font-bold">
                                      <span>Türkçe</span>
                                      <span>Native ■■■■■</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-[#ECE9D8] border border-[#7F9DB9] mt-0.5">
                                      <div className="w-full h-full bg-[#0054E3]" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex justify-between font-bold">
                                      <span>English (Erasmus)</span>
                                      <span>B1 / B2 ■■■■□</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-[#ECE9D8] border border-[#7F9DB9] mt-0.5">
                                      <div className="w-4/5 h-full bg-[#369524]" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="font-pixel text-xs font-bold text-[#003399] mb-2">
                                  LIKINGS & FOCUS
                                </div>
                                <ul className="space-y-1 font-mono-tech text-xs font-bold">
                                  <li>- #Mobile_&_Web_Craft 💻</li>
                                  <li>- #AI_Robotics_&_OCR 🤖</li>
                                  <li>- #UI_Illustration 🎨</li>
                                  <li>- #Europe_Travel ✈️</li>
                                  <li>- #ERP_&_BI_Systems 📊</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* RIGHT COLUMN (7 cols or 12 if maximized): EXPERIENCE.DOC + EDUCATION.EXE */}
              {(isVisible('experience') || isVisible('education')) && (
                <div
                  className={`${
                    maximizedWindow === 'experience' || maximizedWindow === 'education'
                      ? 'lg:col-span-12'
                      : 'lg:col-span-7'
                  } flex flex-col gap-6`}
                >
                  {/* XP WINDOW 3: EXPERIENCE.DOC — WordPad XP Window */}
                  {isVisible('experience') && (
                    <div
                      onClick={() => setActiveWindow('experience')}
                      className="xp-window transition-all"
                    >
                      <div className="xp-titlebar">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#FDE047]" />
                          <span className="font-sans text-xs sm:text-sm font-bold">
                            EXPERIENCE.DOC —{' '}
                            {lang === 'tr'
                              ? 'İş ve Ar-Ge Deneyimi (WordPad)'
                              : 'Work & R&D Experience (WordPad)'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('experience');
                            }}
                            className="xp-ctrl-btn"
                          >
                            _
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMaximize('experience');
                            }}
                            className="xp-ctrl-btn"
                          >
                            □
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('experience');
                            }}
                            className="xp-ctrl-btn xp-ctrl-close"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      {!collapsedWindows.experience && (
                        <div className="p-3 bg-[#ECE9D8]">
                          <div className="xp-inset-panel p-4 sm:p-5 bg-[#FFFBEB] space-y-4">
                            {experiences.map((exp) => (
                              <div
                                key={exp.id}
                                className="bg-white p-4 rounded border-2 border-[#0054E3]/30 hover:border-[#0054E3] shadow-xs transition-colors"
                              >
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <div>
                                    <span
                                      className="inline-block px-2 py-0.5 text-[10px] font-mono-tech font-bold text-white rounded-xs mb-1"
                                      style={{ backgroundColor: exp.color }}
                                    >
                                      {exp.type[lang]}
                                    </span>
                                    <h4 className="font-grotesk text-base sm:text-lg font-extrabold text-[#141413]">
                                      {exp.role[lang]} —{' '}
                                      <span className="text-[#0054E3] underline decoration-2">
                                        {exp.company}
                                      </span>
                                    </h4>
                                  </div>
                                  <span className="px-2.5 py-1 bg-[#ECE9D8] border border-[#7F9DB9] font-mono-tech text-xs font-bold text-[#141413]">
                                    {exp.period[lang]}
                                  </span>
                                </div>

                                <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-[#374151] list-disc list-inside">
                                  {exp.bullets[lang].map((b, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                      {b}
                                    </li>
                                  ))}
                                </ul>

                                <div className="mt-3 flex flex-wrap gap-1.5">
                                  {exp.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 bg-[#E8F0FB] border border-[#7F9DB9] text-[#003399] font-mono-tech text-[10px] font-bold"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* XP WINDOW 4: EDUCATION, CERTIFICATES & REFERENCES */}
                  {isVisible('education') && (
                    <div
                      onClick={() => setActiveWindow('education')}
                      className="xp-window transition-all"
                    >
                      <div className="xp-titlebar">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-[#FDE047]" />
                          <span className="font-sans text-xs sm:text-sm font-bold">
                            EDUCATION_&_CERTS.EXE —{' '}
                            {lang === 'tr'
                              ? 'Eğitim, Sertifikalar ve Referanslar'
                              : 'Education, Certificates & References'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('education');
                            }}
                            className="xp-ctrl-btn"
                          >
                            _
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMaximize('education');
                            }}
                            className="xp-ctrl-btn"
                          >
                            □
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollapse('education');
                            }}
                            className="xp-ctrl-btn xp-ctrl-close"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      {!collapsedWindows.education && (
                        <div className="p-3 bg-[#ECE9D8]">
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            {/* Left 7 Cols: Education Timeline */}
                            <div className="md:col-span-7 xp-inset-panel p-4 bg-white space-y-3.5 text-[#141413]">
                              <div className="font-pixel text-xs font-bold text-[#003399] border-b border-[#D4D0C8] pb-1.5 flex items-center gap-1.5">
                                <GraduationCap className="w-4 h-4 text-[#0054E3]" />
                                <span>
                                  {lang === 'tr' ? 'AKADEMİK EĞİTİM' : 'ACADEMIC EDUCATION'}
                                </span>
                              </div>

                              {educationList.map((edu) => (
                                <div
                                  key={edu.id}
                                  className="relative pl-4 border-l-3 border-[#0054E3] pb-2 last:pb-0"
                                >
                                  <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#369524] border-2 border-white shadow-xs" />
                                  <div className="flex flex-wrap items-center justify-between gap-1">
                                    <span className="px-2 py-0.5 bg-[#0054E3] text-white font-mono-tech text-[10px] font-bold rounded-xs">
                                      {edu.period}
                                    </span>
                                    <span className="font-mono-tech text-[10px] font-bold text-[#369524]">
                                      {edu.badge[lang]}
                                    </span>
                                  </div>
                                  <h4 className="font-grotesk text-sm sm:text-base font-bold mt-1">
                                    {edu.school}
                                  </h4>
                                  <div className="font-mono-tech text-xs font-bold text-[#0054E3]">
                                    {edu.degree[lang]}
                                  </div>
                                  <p className="text-xs text-[#57554E] mt-1 leading-relaxed">
                                    {edu.details[lang]}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Right 5 Cols: References & Certificates */}
                            <div className="md:col-span-5 xp-inset-panel p-4 bg-white space-y-4 text-[#141413] flex flex-col justify-between">
                              <div className="space-y-4">
                                {/* References */}
                                <div>
                                  <div className="font-pixel text-[11px] font-bold text-[#003399] border-b border-[#D4D0C8] pb-1 mb-2 flex items-center gap-1">
                                    <UserCheck className="w-3.5 h-3.5 text-[#0054E3]" />
                                    <span>{lang === 'tr' ? 'REFERANSLAR' : 'REFERENCES'}</span>
                                  </div>
                                  <div className="space-y-2">
                                    {referencesList.map((ref) => (
                                      <div
                                        key={ref.name}
                                        className="bg-[#F8F7F1] p-2.5 rounded border border-[#7F9DB9]"
                                      >
                                        <div className="font-grotesk text-xs font-bold text-[#141413]">
                                          {ref.name}
                                        </div>
                                        <div className="font-mono-tech text-[10px] text-[#57554E]">
                                          {ref.role[lang]}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Certificates */}
                                <div>
                                  <div className="font-pixel text-[11px] font-bold text-[#003399] border-b border-[#D4D0C8] pb-1 mb-2 flex items-center gap-1">
                                    <Award className="w-3.5 h-3.5 text-[#EA580C]" />
                                    <span>
                                      {lang === 'tr' ? 'SERTİFİKALAR (AKBANK)' : 'CERTIFICATES'}
                                    </span>
                                  </div>
                                  <div className="space-y-1.5">
                                    {certificates.map((c) => (
                                      <div
                                        key={c.title}
                                        className="px-2 py-1 bg-[#F8F7F1] border border-[#D4D0C8] rounded-xs font-mono-tech text-[10px] flex items-center justify-between"
                                      >
                                        <span className="font-bold truncate pr-2">{c.title}</span>
                                        <span className="px-1.5 py-0.2 bg-[#E8F0FB] text-[#003399] font-bold border border-[#7F9DB9]">
                                          {c.year}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noreferrer"
                                className="xp-button py-2 px-3 font-mono-tech text-[11px] font-bold text-center text-[#003399] block"
                              >
                                🌐 github.com/emreDinc23/artos ↗
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* FULL-WIDTH XP WINDOW 5: PROJECTS_EXPLORER.EXE (ALL 10 PROJECTS IN WINDOWS XP EXPLORER!) */}
              {isVisible('projects') && (
                <div
                  onClick={() => setActiveWindow('projects')}
                  className="lg:col-span-12 xp-window transition-all"
                >
                  <div className="xp-titlebar">
                    <div className="flex items-center gap-2">
                      <FolderKanban className="w-4 h-4 text-[#FDE047]" />
                      <span className="font-sans text-xs sm:text-sm font-bold">
                        C:\Users\Erdem_Ergenc\Projects_Explorer.exe —{' '}
                        {lang === 'tr'
                          ? 'Projelerim Gezgini (10 Proje Dosyası)'
                          : 'My Projects Explorer (10 Project Folders)'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCollapse('projects');
                        }}
                        className="xp-ctrl-btn"
                      >
                        _
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMaximize('projects');
                        }}
                        className="xp-ctrl-btn"
                      >
                        □
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCollapse('projects');
                        }}
                        className="xp-ctrl-btn xp-ctrl-close"
                      >
                        ×
                      </button>
                    </div>
                  </div>

                  {!collapsedWindows.projects && (
                    <div className="p-3 sm:p-4 bg-[#ECE9D8]">
                      <div className="xp-inset-panel p-4 sm:p-6 bg-white">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#D4D0C8]">
                          <div className="font-pixel text-xs sm:text-sm font-bold text-[#003399] flex items-center gap-2">
                            <FolderOpen className="w-4 h-4 text-[#D97706]" />
                            <span>
                              {lang === 'tr'
                                ? 'CV VE ARTOS PORTFÖYÜNDEKİ 10 PROJE (TAM EKRAN VİTRİNE GİTMEK İÇİN TIKLA)'
                                : 'ALL 10 PROJECTS IN CV & ARTOS PORTFOLIO'}
                            </span>
                          </div>
                          <a
                            href="#projects"
                            className="xp-button px-3 py-1 font-mono-tech text-xs font-bold text-[#003399] flex items-center gap-1"
                          >
                            <span>{lang === 'tr' ? 'Tam Ekran Proje Vitrinine İn' : 'Jump to Fullscreen Showcase'}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                          {portfolioProjects.map((proj) => (
                            <a
                              key={proj.id}
                              href="#projects"
                              className="group rounded border-2 border-[#7F9DB9] hover:border-[#0054E3] bg-[#F8F7F1] hover:bg-[#E8F0FB] overflow-hidden flex flex-col justify-between transition-all shadow-xs hover:-translate-y-0.5"
                            >
                              <div>
                                <div className="h-36 bg-[#0F172A] p-2.5 flex items-center justify-center border-b border-[#7F9DB9] relative overflow-hidden">
                                  <img
                                    src={proj.images[0]?.src}
                                    alt={proj.title[lang]}
                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                  />
                                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-[#0054E3] text-white font-mono-tech text-[9px] font-bold rounded-xs">
                                    {proj.code}
                                  </span>
                                  <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/75 text-[#FDE047] font-mono-tech text-[9px] font-bold rounded-xs">
                                    {proj.images.length} Ekran
                                  </span>
                                </div>

                                <div className="p-3">
                                  <div className="font-mono-tech text-[10px] font-bold text-[#0054E3] uppercase">
                                    {proj.categoryLabel[lang]}
                                  </div>
                                  <h5 className="font-grotesk text-sm font-extrabold text-[#141413] mt-0.5 line-clamp-1">
                                    {proj.title[lang]}
                                  </h5>
                                  <p className="text-[11px] text-[#57554E] mt-1 line-clamp-2 leading-snug">
                                    {proj.subtitle[lang]}
                                  </p>
                                </div>
                              </div>

                              <div className="px-3 pb-2.5 flex flex-wrap gap-1">
                                {proj.stack.slice(0, 2).map((s) => (
                                  <span
                                    key={s}
                                    className="px-1.5 py-0.5 bg-white border border-[#D4D0C8] font-mono-tech text-[9px] font-bold text-[#141413]"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ============================================================
                WINDOWS XP START MENU POPUP (WHEN 'BAŞLAT' IS CLICKED)
               ============================================================ */}
            {startMenuOpen && (
              <div className="absolute bottom-3 left-3 z-30 w-80 sm:w-96 rounded-t-lg overflow-hidden border-2 border-[#0054E3] shadow-2xl bg-white text-[#141413]">
                {/* Start Menu Top User Header */}
                <div className="xp-titlebar p-3 flex items-center gap-3">
                  <img
                    src="/images/erdem-portrait.png"
                    alt="İbrahim Erdem Ergenç"
                    className="w-12 h-12 rounded border-2 border-white bg-[#E0F2FE] object-cover"
                  />
                  <div>
                    <div className="font-sans text-sm font-bold text-white">
                      İbrahim Erdem Ergenç
                    </div>
                    <div className="font-mono-tech text-[10px] text-[#DBEAFE]">
                      Administrator // Yazılım Mühendisi
                    </div>
                  </div>
                </div>

                {/* Start Menu 2-Column Body */}
                <div className="grid grid-cols-2 border-t border-[#0054E3]">
                  <div className="p-2.5 bg-white space-y-1.5 border-r border-[#D4D0C8]">
                    <button
                      onClick={() => {
                        showAllWindows();
                        setStartMenuOpen(false);
                      }}
                      className="w-full text-left p-2 hover:bg-[#316AC5] hover:text-white rounded-xs flex items-center gap-2 text-xs font-bold cursor-pointer"
                    >
                      <Monitor className="w-4 h-4 text-[#0054E3]" />
                      <span>Tüm Pencereler</span>
                    </button>
                    <button
                      onClick={() => {
                        toggleMaximize('about');
                        setStartMenuOpen(false);
                      }}
                      className="w-full text-left p-2 hover:bg-[#316AC5] hover:text-white rounded-xs flex items-center gap-2 text-xs font-bold cursor-pointer"
                    >
                      <Globe className="w-4 h-4 text-[#0054E3]" />
                      <span>Hakkımda (IE6)</span>
                    </button>
                    <button
                      onClick={() => {
                        toggleMaximize('experience');
                        setStartMenuOpen(false);
                      }}
                      className="w-full text-left p-2 hover:bg-[#316AC5] hover:text-white rounded-xs flex items-center gap-2 text-xs font-bold cursor-pointer"
                    >
                      <Briefcase className="w-4 h-4 text-[#D97706]" />
                      <span>Deneyim (WordPad)</span>
                    </button>
                    <button
                      onClick={() => {
                        toggleMaximize('projects');
                        setStartMenuOpen(false);
                      }}
                      className="w-full text-left p-2 hover:bg-[#316AC5] hover:text-white rounded-xs flex items-center gap-2 text-xs font-bold cursor-pointer"
                    >
                      <FolderKanban className="w-4 h-4 text-[#059669]" />
                      <span>Projeler Gezgini</span>
                    </button>
                  </div>

                  <div className="p-2.5 bg-[#D3E5FA] space-y-1.5 text-xs text-[#001A66]">
                    <a
                      href="#projects"
                      onClick={() => setStartMenuOpen(false)}
                      className="block p-2 hover:bg-[#316AC5] hover:text-white rounded-xs font-bold"
                    >
                      📁 Tam Ekran Projeler
                    </a>
                    <a
                      href={personalInfo.cvUrl}
                      download
                      className="block p-2 hover:bg-[#316AC5] hover:text-white rounded-xs font-bold"
                    >
                      📄 Özgeçmişi İndir
                    </a>
                    <a
                      href={personalInfo.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="block p-2 hover:bg-[#316AC5] hover:text-white rounded-xs font-bold"
                    >
                      💬 WhatsApp İletişim
                    </a>
                    <a
                      href="#contact"
                      onClick={() => setStartMenuOpen(false)}
                      className="block p-2 hover:bg-[#316AC5] hover:text-white rounded-xs font-bold"
                    >
                      ✉️ Mesaj Gönder
                    </a>
                  </div>
                </div>

                {/* Start Menu Footer */}
                <div className="xp-titlebar px-3 py-2 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setStartMenuOpen(false)}
                    className="flex items-center gap-1.5 text-xs font-bold text-white hover:underline cursor-pointer"
                  >
                    <span className="w-5 h-5 rounded-xs bg-[#E0431D] border border-white flex items-center justify-center text-[10px]">
                      ⏻
                    </span>
                    <span>{lang === 'tr' ? 'Menüyü Kapat' : 'Close Menu'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ============================================================
              AUTHENTIC WINDOWS XP BOTTOM TASKBAR
             ============================================================ */}
          <div className="xp-taskbar h-11 flex items-center justify-between select-none">
            {/* Green Shiny 'başlat' (Start) Button + Taskbar Window Tabs */}
            <div className="flex items-center h-full flex-1 min-w-0">
              <button
                onClick={() => setStartMenuOpen(!startMenuOpen)}
                className="xp-start-btn h-full px-4 sm:px-6 flex items-center gap-2 font-sans italic font-extrabold text-sm sm:text-base text-white cursor-pointer shrink-0"
              >
                <Sparkles className="w-4 h-4 text-[#FDE047] not-italic" />
                <span>{lang === 'tr' ? 'başlat' : 'start'}</span>
              </button>

              {/* Taskbar Window Buttons */}
              <div className="flex items-center gap-1.5 px-2 overflow-x-auto">
                {(
                  [
                    { id: 'about', label: 'WWW.ABOUT.ME', icon: Globe },
                    { id: 'skills', label: 'MY_SKILLS.CPL', icon: Cpu },
                    { id: 'experience', label: 'EXPERIENCE.DOC', icon: Briefcase },
                    { id: 'education', label: 'EDUCATION.EXE', icon: GraduationCap },
                    { id: 'projects', label: 'PROJECTS.EXE (10)', icon: FolderKanban },
                  ] as const
                ).map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeWindow === tab.id || maximizedWindow === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveWindow(tab.id);
                        if (maximizedWindow && maximizedWindow !== tab.id) {
                          setMaximizedWindow(tab.id);
                        } else {
                          setCollapsedWindows((prev) => ({ ...prev, [tab.id]: false }));
                        }
                      }}
                      className={`px-3 py-1.5 text-xs font-sans font-bold text-white flex items-center gap-1.5 cursor-pointer truncate max-w-[170px] ${
                        isActive ? 'xp-task-tab-active' : 'xp-task-tab'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* XP System Tray (Right Side Clock & Icons) */}
            <div className="xp-systray h-full px-3 sm:px-4 flex items-center gap-2.5 shrink-0 text-xs font-sans font-semibold text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#86EFAC] hidden sm:inline" />
              <Volume2 className="w-3.5 h-3.5 text-white hidden sm:inline" />
              <span>TR</span>
              <span className="font-mono-tech text-xs">19:32</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
