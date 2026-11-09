import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Crown,
  Move,
  Award,
  GraduationCap,
  Briefcase,
  Sparkles,
  UserCheck,
  RotateCcw,
  Download,
} from 'lucide-react';
import {
  personalInfo,
  experiences,
  educationList,
  skillGroups,
  certificates,
  referencesList,
} from '../data/portfolioData';

interface RetroResumeDesktopProps {
  lang: 'tr' | 'en';
}

export const RetroResumeDesktop: React.FC<RetroResumeDesktopProps> = ({ lang }) => {
  const [avatarStyle, setAvatarStyle] = useState<'illustrated' | 'photo'>('illustrated');
  const [selectedSkill, setSelectedSkill] = useState<string | null>('Flutter & Dart');
  const [resetKey, setResetKey] = useState(0);

  return (
    <section id="desktop-os" className="py-16 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1D4ED8] text-white border-2 border-[#141413] font-mono-tech text-xs font-bold shadow-[3px_3px_0px_#141413] mb-3">
              <span>02 // INTERACTIVE RESUME OS</span>
            </div>
            <h2 className="font-pixel text-2xl sm:text-4xl font-bold text-[var(--ink)]">
              {lang === 'tr' ? 'MY_RESUME.EXE — MASAÜSTÜ CV' : 'MY_RESUME.EXE — DESKTOP CV'}
            </h2>
            <p className="font-mono-tech text-xs sm:text-sm text-[var(--ink-muted)] mt-1">
              {lang === 'tr'
                ? '💡 İpucu: Aşağıdaki pencereleri fareyle tutup sürükleyebilir, yetenek ikonlarına tıklayabilirsin!'
                : '💡 Tip: You can drag the retro OS windows around and click any skill badge to inspect!'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setResetKey((prev) => prev + 1)}
              className="retro-btn px-3 py-2 bg-[var(--paper-card)] text-[var(--ink)] font-mono-tech text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'Pencereleri Sıfırla' : 'Reset Windows'}</span>
            </button>
            <a
              href={personalInfo.cvUrl}
              download
              className="retro-btn px-3.5 py-2 bg-[#F59E0B] text-[#141413] font-mono-tech text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'PDF İndir' : 'Download PDF'}</span>
            </a>
          </div>
        </div>

        {/* OUTER RETRO APPLICATION WINDOW (References 3 & 4) */}
        <div
          key={resetKey}
          className="retro-window rounded-xl overflow-hidden bg-[#ECE7DA] dark:bg-[#0F172A] border-3 border-[#141413]"
        >
          {/* Main Outer OS Title Bar */}
          <div className="bg-[#FFFDF9] text-[#141413] border-b-3 border-[#141413] px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-[#141413]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] border-2 border-[#141413]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#141413]" />
              <span className="ml-3 font-pixel text-xs sm:text-sm font-bold tracking-wider">
                MY RESUME // ERDEM_OS v2.6
              </span>
            </div>

            <div className="hidden md:flex items-center gap-2 px-4 py-1 bg-[#F3EFE6] border-2 border-[#141413] font-mono-tech text-xs font-bold">
              <span>🌐 WWW.ERDEMERGENC.COM.TR</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 border-2 border-[#141413] flex items-center justify-center font-bold text-xs bg-white">
                —
              </span>
              <span className="w-6 h-6 border-2 border-[#141413] flex items-center justify-center font-bold text-xs bg-white">
                □
              </span>
              <span className="w-6 h-6 border-2 border-[#141413] flex items-center justify-center font-bold text-xs bg-[#EF4444] text-white">
                ×
              </span>
            </div>
          </div>

          {/* Inner Desktop Workspace Grid */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 notebook-lines">
            {/* LEFT COLUMN (5 cols): WWW.ABOUT.ME + MY SKILLS & LANGUAGES */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* WINDOW 1: WWW.ABOUT.ME (Blue Retro Card from Reference 3 & 4) */}
              <motion.div
                drag
                dragMomentum={false}
                whileDrag={{ scale: 1.02, zIndex: 30 }}
                className="retro-window rounded-xl overflow-hidden bg-[#2B59C3] text-white cursor-grab active:cursor-grabbing"
              >
                {/* Window Bar */}
                <div className="bg-[#FFFDF9] text-[#141413] px-3.5 py-2 border-b-2 border-[#141413] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] border border-[#141413]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] border border-[#141413]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-[#141413]" />
                  </div>
                  <span className="font-pixel text-xs font-bold">WWW.ABOUT.ME</span>
                  <Move className="w-3.5 h-3.5 opacity-60" />
                </div>

                {/* Blue Card Body */}
                <div className="p-5 relative">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F59E0B] text-[#141413] font-pixel text-[10px] font-bold border border-[#141413] mb-2">
                        <span>👍 YAZILIM MÜHENDİSİ</span>
                      </div>
                      <h3 className="font-pixel text-xl sm:text-2xl font-bold leading-tight text-white">
                        İBRAHİM ERDEM
                        <br />
                        <span className="text-[#FDE047]">ERGENÇ</span>
                      </h3>

                      <div className="mt-3 space-y-1.5 font-mono-tech text-xs text-white/95">
                        <a
                          href={`tel:${personalInfo.phoneRaw}`}
                          className="flex items-center gap-2 hover:text-[#FDE047]"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                          <span>{personalInfo.phone}</span>
                        </a>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="flex items-center gap-2 hover:text-[#FDE047]"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                          <span>{personalInfo.email}</span>
                        </a>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                          <span>{personalInfo.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Cutout / Illustrated Avatar with Crown Doodle (Reference 3 & 4) */}
                    <div className="relative shrink-0 flex flex-col items-center">
                      <Crown className="w-7 h-7 text-[#FDE047] fill-[#FDE047] -mb-2 rotate-12 z-10 drop-shadow-[2px_2px_0px_#141413]" />
                      <div
                        onClick={() =>
                          setAvatarStyle(avatarStyle === 'illustrated' ? 'photo' : 'illustrated')
                        }
                        title={
                          lang === 'tr'
                            ? 'İllüstrasyon / Gerçek Fotoğraf Arasında Geçiş Yap'
                            : 'Switch Illustrated / Real Portrait'
                        }
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-3 border-white shadow-[4px_4px_0px_#141413] bg-[#FBF8F1] cursor-pointer group relative"
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
                        <span className="absolute bottom-1 right-1 bg-[#141413] text-[#FDE047] font-mono-tech text-[8px] px-1.5 py-0.5 rounded">
                          {avatarStyle === 'illustrated' ? 'FOTO' : 'ÇİZİM'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 pt-3 border-t border-white/25 font-mono-tech text-xs leading-relaxed text-white/90">
                    {lang === 'tr'
                      ? "Fırat Üniversitesi Yazılım Mühendisliği mezunu & Van YYÜ Yapay Zekâ ve Robotik Yüksek Lisans öğrencisi. Reeder'da Flutter/React geliştirici deneyimi, Identify Turkey ve Himetech'te OCR/ML Ar-Ge geçmişi ve ARTOS Yazılım kurucu ortaklığı."
                      : "Software Engineering graduate (Fırat Univ.) & M.Sc. candidate in AI & Robotics (Van YYÜ). Former Flutter/React engineer at Reeder, OCR/ML R&D intern at Identify Turkey & Himetech, and Co-Founder at ARTOS Software."}
                  </p>
                </div>
              </motion.div>

              {/* WINDOW 2: MY SKILLS & LANGUAGES (Reference 3 & 4 Circular/Square App Icons) */}
              <motion.div
                drag
                dragMomentum={false}
                whileDrag={{ scale: 1.02, zIndex: 30 }}
                className="retro-window rounded-xl overflow-hidden bg-[#FFFDF9] text-[#141413] cursor-grab active:cursor-grabbing"
              >
                <div className="bg-[#F3EFE6] px-3.5 py-2 border-b-2 border-[#141413] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] border border-[#141413]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] border border-[#141413]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-[#141413]" />
                  </div>
                  <span className="font-pixel text-xs font-bold">MY.SKILLS.AI</span>
                  <Move className="w-3.5 h-3.5 opacity-60" />
                </div>

                <div className="p-5 space-y-5">
                  {skillGroups.map((group) => (
                    <div key={group.id}>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="font-pixel text-xs font-bold uppercase tracking-wide text-[#141413]">
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
                              className={`flex flex-col items-center p-2 rounded-lg border-2 border-[#141413] transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#FEF3C7] shadow-[3px_3px_0px_#141413] -translate-y-0.5'
                                  : 'bg-white hover:bg-[#F3EFE6]'
                              }`}
                            >
                              <div
                                className="w-10 h-10 rounded-lg border-2 border-[#141413] flex items-center justify-center font-pixel text-xs font-bold shadow-[2px_2px_0px_#141413]"
                                style={{ backgroundColor: item.bg, color: item.color }}
                              >
                                {item.short}
                              </div>
                              <span className="font-mono-tech text-[10px] font-bold text-center mt-1.5 leading-tight line-clamp-2">
                                {item.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {/* Selected Skill Proficiency Bar */}
                  {selectedSkill && (
                    <div className="p-3 bg-[#F3EFE6] border-2 border-[#141413] rounded-lg font-mono-tech text-xs">
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span>⚡ {selectedSkill}</span>
                        <span className="text-[#1D4ED8]">
                          {skillGroups
                            .flatMap((g) => g.items)
                            .find((i) => i.name === selectedSkill)?.level || 90}
                          % YETKİNLİK
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-white border border-[#141413] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#1D4ED8] transition-all duration-300"
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

                  {/* Languages & Likings (Reference 3 & 4) */}
                  <div className="pt-3 border-t-2 border-dashed border-[#141413]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="font-pixel text-xs font-bold mb-2">LANGUAGES</div>
                      <div className="space-y-2 font-mono-tech text-xs">
                        <div>
                          <div className="flex justify-between font-bold">
                            <span>Türkçe</span>
                            <span>Native</span>
                          </div>
                          <div className="w-full h-2.5 bg-[#E5E7EB] border border-[#141413] rounded-full mt-0.5 overflow-hidden">
                            <div className="w-full h-full bg-[#1D4ED8]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-bold">
                            <span>English (Erasmus)</span>
                            <span>B1 / B2</span>
                          </div>
                          <div className="w-full h-2.5 bg-[#E5E7EB] border border-[#141413] rounded-full mt-0.5 overflow-hidden">
                            <div className="w-4/5 h-full bg-[#F59E0B]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="font-pixel text-xs font-bold mb-2">LIKINGS & INTERESTS</div>
                      <ul className="space-y-1 font-mono-tech text-xs font-bold text-[#141413]">
                        <li>- #Mobile_&_Web_Craft 💻</li>
                        <li>- #AI_Robotics_&_OCR 🤖</li>
                        <li>- #UI_Illustration 🎨</li>
                        <li>- #Europe_Travel ✈️</li>
                        <li>- #ERP_&_BI_Systems 📊</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN (7 cols): EXPERIENCE (YELLOW WINDOW) + EDUCATION, CERTS & REFERENCES */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* WINDOW 3: EXPERIENCE.LOG (Bright Yellow Retro Window from Reference 4!) */}
              <motion.div
                drag
                dragMomentum={false}
                whileDrag={{ scale: 1.01, zIndex: 30 }}
                className="retro-window rounded-xl overflow-hidden bg-[#FDE047] text-[#141413] cursor-grab active:cursor-grabbing"
              >
                <div className="bg-[#FFFDF9] px-4 py-2 border-b-2 border-[#141413] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#141413]" />
                    <span className="font-pixel text-xs font-bold">
                      EXPERIENCE.EXE // İŞ VE AR-GE DENEYİMİ
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 border border-[#141413] text-[10px] font-bold bg-white">
                      —
                    </span>
                    <span className="px-1.5 py-0.5 border border-[#141413] text-[10px] font-bold bg-[#EF4444] text-white">
                      ×
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-[#FFFDF9] p-4 rounded-lg border-2 border-[#141413] shadow-[4px_4px_0px_#141413]"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <span
                            className="inline-block px-2 py-0.5 text-[10px] font-mono-tech font-bold text-white border border-[#141413] mb-1"
                            style={{ backgroundColor: exp.color }}
                          >
                            {exp.type[lang]}
                          </span>
                          <h4 className="font-grotesk text-base sm:text-lg font-extrabold text-[#141413]">
                            {exp.role[lang]} —{' '}
                            <span className="underline decoration-2 decoration-[#1D4ED8]">
                              {exp.company}
                            </span>
                          </h4>
                        </div>
                        <span className="px-2.5 py-1 bg-[#F3EFE6] border border-[#141413] font-mono-tech text-xs font-bold">
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
                            className="px-2 py-0.5 bg-[#FEF3C7] border border-[#141413] font-mono-tech text-[10px] font-bold"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WINDOW 4: EDUCATION + AKBANK 101 CERTIFICATES + REFERENCES */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Education Window (7 cols) */}
                <motion.div
                  drag
                  dragMomentum={false}
                  whileDrag={{ scale: 1.02, zIndex: 30 }}
                  className="md:col-span-7 retro-window rounded-xl overflow-hidden bg-[#FFFDF9] text-[#141413] cursor-grab active:cursor-grabbing"
                >
                  <div className="bg-[#DBEAFE] px-3.5 py-2 border-b-2 border-[#141413] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#1D4ED8]" />
                      <span className="font-pixel text-xs font-bold">EDUCATION.TIMELINE</span>
                    </div>
                    <Move className="w-3.5 h-3.5 opacity-60" />
                  </div>

                  <div className="p-4 sm:p-5 space-y-3.5">
                    {educationList.map((edu) => (
                      <div
                        key={edu.id}
                        className="relative pl-4 border-l-3 border-[#1D4ED8] pb-2 last:pb-0"
                      >
                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#F59E0B] border-2 border-[#141413]" />
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <span className="px-2 py-0.5 bg-[#141413] text-[#FDE047] font-mono-tech text-[10px] font-bold">
                            {edu.period}
                          </span>
                          <span className="font-mono-tech text-[10px] font-bold text-[#1D4ED8]">
                            {edu.badge[lang]}
                          </span>
                        </div>
                        <h4 className="font-grotesk text-sm sm:text-base font-bold mt-1">
                          {edu.school}
                        </h4>
                        <div className="font-mono-tech text-xs font-bold text-[#059669]">
                          {edu.degree[lang]}
                        </div>
                        <p className="text-xs text-[#57554E] mt-1 leading-relaxed">
                          {edu.details[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Certificates & References Window (5 cols) */}
                <motion.div
                  drag
                  dragMomentum={false}
                  whileDrag={{ scale: 1.02, zIndex: 30 }}
                  className="md:col-span-5 retro-window rounded-xl overflow-hidden bg-[#FFEDD5] text-[#141413] cursor-grab active:cursor-grabbing flex flex-col justify-between"
                >
                  <div>
                    <div className="bg-[#FFFDF9] px-3.5 py-2 border-b-2 border-[#141413] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-[#EA580C]" />
                        <span className="font-pixel text-[11px] font-bold">
                          CERTS_&_REFS.DOC
                        </span>
                      </div>
                      <Move className="w-3.5 h-3.5 opacity-60" />
                    </div>

                    <div className="p-4 space-y-4">
                      {/* References from CV */}
                      <div>
                        <div className="font-pixel text-[11px] font-bold text-[#141413] mb-2 flex items-center gap-1">
                          <UserCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                          <span>{lang === 'tr' ? 'REFERANSLAR' : 'REFERENCES'}</span>
                        </div>
                        <div className="space-y-2">
                          {referencesList.map((ref) => (
                            <div
                              key={ref.name}
                              className="bg-[#FFFDF9] p-2.5 rounded border-2 border-[#141413] shadow-[2px_2px_0px_#141413]"
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

                      {/* Akbank 101 Certificates from Portfolio PDF */}
                      <div>
                        <div className="font-pixel text-[11px] font-bold text-[#141413] mb-2 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                          <span>{lang === 'tr' ? 'SERTİFİKALAR (AKBANK)' : 'CERTIFICATES'}</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1.5">
                          {certificates.map((c) => (
                            <div
                              key={c.title}
                              className="px-2.5 py-1.5 bg-[#FFFDF9] border border-[#141413] rounded font-mono-tech text-[10px] flex items-center justify-between"
                            >
                              <span className="font-bold truncate pr-2">{c.title}</span>
                              <span className="px-1.5 py-0.2 bg-[#FDE047] font-bold border border-[#141413]">
                                {c.year}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Green Pill Strip (like Reference 4: WWW.INSTAGRAM.COM) */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="m-3 mt-0 px-3 py-2 bg-[#86EFAC] hover:bg-[#4ADE80] text-[#141413] border-2 border-[#141413] rounded-full font-pixel text-[10px] font-bold text-center block shadow-[2px_2px_0px_#141413] transition-colors"
                  >
                    GITHUB.COM/EMREDINC23/ARTOS ↗
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
