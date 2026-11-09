import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Plane,
  Cpu,
  Database,
  Palette,
  Smartphone,
  Sparkles,
} from 'lucide-react';

interface ErasmusJourneySectionProps {
  lang: 'tr' | 'en';
}

export const ErasmusJourneySection: React.FC<ErasmusJourneySectionProps> = ({ lang }) => {
  const pillars = [
    {
      code: 'LAB // 01',
      title: {
        tr: 'Mobil & Web Entegrasyon Mimarisi',
        en: 'Mobile & Web Integration Architecture',
      },
      desc: {
        tr: "Reeder ve ARTOS projelerinde Flutter mobil uygulamaları ile React/Next.js yönetim panellerini gerçek zamanlı REST API ve Firebase altyapılarıyla tek ekosistemde birleştirdim.",
        en: 'Bridging Flutter cross-platform mobile apps with React/Next.js dashboards via real-time REST APIs and Firebase.'
      },
      icon: Smartphone,
      badge: 'Flutter + React',
      color: '#1D4ED8',
    },
    {
      code: 'LAB // 02',
      title: {
        tr: 'Yapay Zekâ, OCR & Robotik Ar-Ge',
        en: 'AI, OCR & Robotics R&D',
      },
      desc: {
        tr: "Identify Turkey ve Himetech'te kimlik tanıma (KYC), Optik Karakter Tanıma (OCR) ve makine öğrenimi optimizasyonu çalıştım; Van YYÜ'de Yapay Zekâ ve Robotik yüksek lisans yapıyorum.",
        en: 'R&D in Optical Character Recognition (OCR) and ML optimization at Identify Turkey & Himetech; M.Sc. in AI & Robotics at Van YYÜ.'
      },
      icon: Cpu,
      badge: 'Python • ML • OCR',
      color: '#059669',
    },
    {
      code: 'LAB // 03',
      title: {
        tr: 'SQL, Veri Analizi & ERP / İş Zekâsı',
        en: 'SQL, Data Analytics & ERP / BI',
      },
      desc: {
        tr: 'İlişkisel veritabanı tasarımı, karmaşık SQL sorguları, süreç analizi, dokümantasyon ve karar destek / ERP & İş Zekâsı (BI) sistemlerinin mimarisine derin ilgi ve uzmanlık.',
        en: 'Relational database design, complex SQL queries, process documentation, and decision-support ERP & Business Intelligence systems.'
      },
      icon: Database,
      badge: 'SQL • ERP • BI',
      color: '#7C3AED',
    },
    {
      code: 'LAB // 04',
      title: {
        tr: 'UI/UX, İllüstrasyon & Kurumsal Kimlik',
        en: 'UI/UX, Illustration & Brand Identity',
      },
      desc: {
        tr: 'Figma, Adobe Illustrator ve Canva ile kullanıcı odaklı mobil/web arayüzleri, özgün marka logoları ve bu sitede gördüğünüz gibi eskiz/illüstrasyon odaklı görsel dünyalar tasarlıyorum.',
        en: 'Crafting user-centered interfaces, vector logos, and editorial visual systems using Figma, Adobe Illustrator, and Canva.'
      },
      icon: Palette,
      badge: 'Figma • Illustrator',
      color: '#EA580C',
    },
  ];

  const stamps = [
    { city: 'ELAZIĞ', country: 'FIRAT ÜNİV.', year: '2019–25', color: '#1D4ED8' },
    { city: 'PARIS', country: 'FRANCE (ERASMUS)', year: 'EU EXCHANGE', color: '#DC2626' },
    { city: 'BARCELONA', country: 'SPAIN (ERASMUS)', year: 'EU EXCHANGE', color: '#D97706' },
    { city: 'VAN / GEVAŞ', country: 'ARTOS & YYÜ YL', year: '2026+', color: '#059669' },
  ];

  return (
    <section id="journey" className="py-16 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Travel Sketchbook Card (Erasmus France & Spain + European Journey) */}
        <div className="retro-window rounded-2xl overflow-hidden bg-[var(--paper-card)] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: Open Sketchbook Illustration */}
            <div className="lg:col-span-6 relative">
              <div className="scotch-tape w-20 h-6 absolute -top-3 left-8 -rotate-12 z-10" />
              <div className="scotch-tape w-20 h-6 absolute -bottom-3 right-8 -rotate-12 z-10" />

              <div className="rounded-xl overflow-hidden border-3 border-[#141413] shadow-[6px_6px_0px_#141413] bg-[#FBF8F1]">
                <img
                  src="/images/erasmus-journey-sketch.jpg"
                  alt="Erasmus Fransa ve İspanya Eskiz Defteri İllüstrasyonu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 6 Cols: Erasmus Story & Passport Stamps */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981] text-[#141413] border-2 border-[#141413] font-mono-tech text-xs font-bold shadow-[3px_3px_0px_#141413]">
                <Compass className="w-4 h-4" />
                <span>04 // ERASMUS+ & INTERNATIONAL HORIZON</span>
              </div>

              <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[var(--ink)] leading-snug">
                {lang === 'tr'
                  ? "FRANSA, İSPANYA VE AVRUPA'DA ÇOK KÜLTÜRLÜ MÜHENDİSLİK"
                  : 'MULTICULTURAL ENGINEERING ACROSS FRANCE, SPAIN & EUROPE'}
              </h2>

              <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed">
                {lang === 'tr'
                  ? "Fırat Üniversitesi Yazılım Mühendisliği eğitimim sırasında Erasmus+ programı kapsamında Fransa ve İspanya'da eğitim aldım. Bu süreçte Avrupa'daki pek çok ülkeyi gezerek farklı kültürlerden mühendis ve tasarımcılarla uluslararası projelerde takım çalışması, problem çözme ve İngilizce (B1/B2) iletişim becerilerimi geliştirdim."
                  : 'During my Software Engineering degree at Fırat University, I studied in France and Spain through the Erasmus+ exchange program. Traveling extensively across Europe sharpened my adaptability, cross-cultural collaboration, and global product perspective.'}
              </p>

              {/* Passport Stamp Badges */}
              <div className="pt-2">
                <div className="font-mono-tech text-xs font-bold text-[var(--ink-muted)] mb-2.5 flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-[#1D4ED8]" />
                  <span>
                    {lang === 'tr' ? 'PASAPORT & ROTA DAMGALARI:' : 'PASSPORT & ROUTE STAMPS:'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {stamps.map((s, idx) => (
                    <motion.div
                      key={s.city}
                      whileHover={{ rotate: idx % 2 === 0 ? -3 : 3, scale: 1.04 }}
                      className="p-2.5 rounded-lg border-2 border-dashed bg-[#FFFDF9] text-[#141413] text-center shadow-[2px_2px_0px_#141413]"
                      style={{ borderColor: s.color }}
                    >
                      <div
                        className="font-pixel text-xs font-bold"
                        style={{ color: s.color }}
                      >
                        {s.city}
                      </div>
                      <div className="font-mono-tech text-[10px] font-bold mt-0.5">
                        {s.country}
                      </div>
                      <div className="font-mono-tech text-[9px] text-[#57554E] mt-0.5">
                        [{s.year}]
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Engineering & Design Pillars */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[var(--ink)]">
              {lang === 'tr'
                ? 'UZMANLIK ALANLARI & AR-GE ODAKLARI'
                : 'CORE ENGINEERING & DESIGN PILLARS'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.code}
                  className="retro-window rounded-xl p-5 flex flex-col justify-between bg-[var(--paper-card)] hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono-tech text-[11px] font-bold text-[var(--ink-muted)]">
                        {p.code}
                      </span>
                      <div
                        className="w-10 h-10 rounded-lg border-2 border-[#141413] flex items-center justify-center text-white shadow-[2px_2px_0px_#141413]"
                        style={{ backgroundColor: p.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-grotesk text-lg font-extrabold text-[var(--ink)] leading-snug">
                      {p.title[lang]}
                    </h4>

                    <p className="mt-2.5 text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                      {p.desc[lang]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-[var(--border-ink)]/25">
                    <span className="inline-block px-2.5 py-1 bg-[#FEF3C7] text-[#141413] border border-[#141413] font-mono-tech text-[10px] font-bold">
                      {p.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

