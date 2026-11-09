import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileDown,
  MessageCircle,
  Copy,
  Check,
  QrCode,
  ArrowUp,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactFooterProps {
  lang: 'tr' | 'en';
  onCelebrate: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang, onCelebrate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Mobil Uygulama (Flutter / RN)');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCelebrate();
    const text = encodeURIComponent(
      `Merhaba Erdem! Ben ${name || 'Ziyaretçi'} (${email}). Konu: ${projectType}. Mesajım: ${message}`
    );
    window.open(`https://wa.me/${personalInfo.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <footer id="contact" className="pt-16 pb-20 px-4 lg:px-8 relative border-t-3 border-[var(--border-ink)] bg-[var(--paper-secondary)]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Retro Contact Window & Channels */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EA580C] text-white border-2 border-[#141413] font-mono-tech text-xs font-bold shadow-[3px_3px_0px_#141413]">
              <span>05 // LET&apos;S BUILD TOGETHER</span>
            </div>

            <h2 className="font-pixel text-2xl sm:text-4xl font-bold text-[var(--ink)] leading-tight">
              {lang === 'tr'
                ? 'YENİ BİR PROJE VEYA EKİP ARKADAŞI MI ARIYORSUNUZ?'
                : 'READY TO SHIP YOUR NEXT PRODUCT OR HIRE AN ENGINEER?'}
            </h2>

            <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed max-w-xl">
              {lang === 'tr'
                ? 'Tam zamanlı Yazılım Mühendisliği (Flutter, React, AI/ML, SQL/ERP) fırsatları veya ARTOS Yazılım çatısı altında uçtan uca web/mobil proje talepleriniz için doğrudan ulaşabilirsiniz.'
                : 'Available for full-time Software Engineering roles (Flutter, React, AI/ML, SQL) and custom product development inquiries via ARTOS Software.'}
            </p>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="retro-window-sm p-4 bg-[var(--paper-card)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] text-[#1D4ED8] border-2 border-[#141413] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono-tech text-[10px] font-bold text-[var(--ink-muted)]">
                      E-POSTA ADRESİ
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono-tech text-xs sm:text-sm font-bold text-[var(--ink)] truncate block hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title={lang === 'tr' ? 'E-postayı Kopyala' : 'Copy Email'}
                  className="p-2 border-2 border-[#141413] bg-[#FEF3C7] text-[#141413] hover:bg-[#F59E0B] cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="retro-window-sm p-4 bg-[var(--paper-card)] flex items-center justify-between gap-3 hover:bg-[#D1FAE5] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D1FAE5] text-[#059669] border-2 border-[#141413] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono-tech text-[10px] font-bold text-[#57554E]">
                      TELEFON & WHATSAPP
                    </div>
                    <div className="font-mono-tech text-xs sm:text-sm font-bold text-[#141413]">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <MessageCircle className="w-5 h-5 text-[#059669]" />
              </a>

              {/* Location Card */}
              <div className="retro-window-sm p-4 bg-[var(--paper-card)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] text-[#D97706] border-2 border-[#141413] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] font-bold text-[var(--ink-muted)]">
                    KONUM & OFİS
                  </div>
                  <div className="font-mono-tech text-xs sm:text-sm font-bold text-[var(--ink)]">
                    Van / Gevaş • Elazığ • İstanbul
                  </div>
                </div>
              </div>

              {/* Download CV Card */}
              <a
                href={personalInfo.cvUrl}
                download
                onClick={onCelebrate}
                className="retro-window-sm p-4 bg-[#F59E0B] text-[#141413] flex items-center justify-between gap-3 hover:bg-[#D97706] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFDF9] text-[#141413] border-2 border-[#141413] flex items-center justify-center shrink-0">
                    <FileDown className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono-tech text-[10px] font-bold">
                      RESMİ ÖZGEÇMİŞ (PDF)
                    </div>
                    <div className="font-pixel text-xs font-bold">
                      CV İNDİR (TR)
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Retro QR Code Stamp Box (Reference 3 bottom-right: PORTFOLIO HERE ↙) */}
            <div className="retro-window-sm p-4 bg-[#FFFDF9] text-[#141413] inline-flex items-center gap-4">
              <div className="p-2 border-2 border-[#141413] bg-white">
                <QrCode className="w-14 h-14 text-[#141413]" />
              </div>
              <div>
                <div className="font-pixel text-xs font-bold text-[#1D4ED8]">
                  QUICK CONNECT // ARTOS
                </div>
                <p className="font-mono-tech text-xs text-[#57554E] mt-0.5">
                  github.com/emreDinc23/artos
                  <br />
                  artosyazilim.com • {personalInfo.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Retro OS Message Composer Window */}
          <div className="lg:col-span-5">
            <div className="retro-window rounded-xl overflow-hidden bg-[#FFFDF9] text-[#141413]">
              {/* Title Bar */}
              <div className="bg-[#141413] text-[#FBF8F1] px-4 py-2.5 border-b-2 border-[#141413] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className="ml-2 font-pixel text-xs">NEW_MESSAGE.MSG</span>
                </div>
                <span className="font-mono-tech text-[10px] text-[#FDE047]">ONLINE ●</span>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
                <div>
                  <label className="block font-mono-tech text-xs font-bold mb-1">
                    {lang === 'tr' ? 'ADINIZ SOYADINIZ' : 'YOUR NAME'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'tr' ? 'Örn: Ahmet Yılmaz' : 'e.g. Alex Morgan'}
                    className="w-full px-3.5 py-2.5 bg-[#FBF8F1] border-2 border-[#141413] font-mono-tech text-xs focus:outline-none focus:bg-[#FEF3C7]"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs font-bold mb-1">
                    {lang === 'tr' ? 'E-POSTA VEYA TELEFON' : 'EMAIL OR PHONE'}
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@sirket.com"
                    className="w-full px-3.5 py-2.5 bg-[#FBF8F1] border-2 border-[#141413] font-mono-tech text-xs focus:outline-none focus:bg-[#FEF3C7]"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs font-bold mb-1">
                    {lang === 'tr' ? 'KONU / İŞ BİRLİĞİ TÜRÜ' : 'TOPIC / COLLABORATION'}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FBF8F1] border-2 border-[#141413] font-mono-tech text-xs font-bold focus:outline-none"
                  >
                    <option value="Yazılım Mühendisi İş Teklifi">
                      {lang === 'tr' ? '💼 Yazılım Mühendisi İş / Ekip Teklifi' : '💼 Software Engineer Role'}
                    </option>
                    <option value="Mobil Uygulama (Flutter / RN)">
                      {lang === 'tr' ? '📱 Mobil Uygulama Geliştirme (Flutter)' : '📱 Mobile App Development (Flutter)'}
                    </option>
                    <option value="Web Platformu (React / Next.js)">
                      {lang === 'tr' ? '🌐 Web Platformu & Yönetim Paneli (React)' : '🌐 Web Platform & Dashboard (React)'}
                    </option>
                    <option value="Yapay Zeka / OCR / Veri Analizi">
                      {lang === 'tr' ? '🤖 Yapay Zekâ, OCR & Veri Analizi' : '🤖 AI, OCR & Data Analytics'}
                    </option>
                    <option value="UI/UX & Kurumsal Kimlik">
                      {lang === 'tr' ? '🎨 UI/UX Tasarım & Kurumsal Kimlik' : '🎨 UI/UX & Brand Design'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-tech text-xs font-bold mb-1">
                    {lang === 'tr' ? 'MESAJINIZ' : 'YOUR MESSAGE'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'tr'
                        ? 'Projenizden veya pozisyondan kısaca bahsedin...'
                        : 'Tell me briefly about your project or role...'
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FBF8F1] border-2 border-[#141413] font-mono-tech text-xs focus:outline-none focus:bg-[#FEF3C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="retro-btn w-full py-3 bg-[#1D4ED8] text-white font-mono-tech text-xs font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-[#1E40AF]"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {lang === 'tr'
                      ? 'MESAJI WHATSAPP İLE HIZLI GÖNDER'
                      : 'SEND INSTANTLY VIA WHATSAPP'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="mt-14 pt-6 border-t-2 border-dashed border-[var(--border-ink)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[var(--ink-muted)]">
          <div>
            © {new Date().getFullYear()} <strong>İbrahim Erdem Ergenç</strong> • Sketchbook &
            Retro OS Edition • ARTOS Yazılım
          </div>

          <a
            href="#hero"
            className="retro-btn px-3 py-1.5 bg-[var(--paper-card)] text-[var(--ink)] font-bold flex items-center gap-1.5"
          >
            <span>{lang === 'tr' ? 'Yukarı Çık' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

