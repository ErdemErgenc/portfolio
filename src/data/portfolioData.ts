export interface ProjectImage {
  src: string;
  alt: string;
  description?: string;
}

export interface PortfolioProject {
  id: string;
  code: string;
  title: { tr: string; en: string };
  subtitle: { tr: string; en: string };
  description: { tr: string; en: string };
  highlights: { tr: string[]; en: string[] };
  category: 'Mobile App' | 'Web Application' | 'Web Design';
  categoryLabel: { tr: string; en: string };
  year: string;
  tabColor: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  stack: string[];
  metrics: { label: { tr: string; en: string }; value: string }[];
  featured?: boolean;
  images: ProjectImage[];
}

export interface ExperienceItem {
  id: string;
  role: { tr: string; en: string };
  company: string;
  location: string;
  period: { tr: string; en: string };
  type: { tr: string; en: string };
  color: string;
  bullets: { tr: string[]; en: string[] };
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: { tr: string; en: string };
  school: string;
  period: string;
  location: string;
  badge: { tr: string; en: string };
  details: { tr: string; en: string };
}

export interface SkillGroup {
  id: string;
  title: { tr: string; en: string };
  badgeColor: string;
  items: {
    name: string;
    short: string;
    level: number;
    color: string;
    bg: string;
  }[];
}

export const personalInfo = {
  fullName: 'İbrahim Erdem Ergenç',
  shortName: 'ERDEM ERGENÇ',
  handle: '@erdemergenc',
  coFounder: 'ARTOS Yazılım (artosyazilim.com)',
  title: {
    tr: 'Yazılım Mühendisi & Ürün Tasarımcısı',
    en: 'Software Engineer & Product Designer',
  },
  tagline: {
    tr: 'Mobil, Web, Yapay Zekâ ve Tasarımı Aynı Eskiz Defterinde Buluşturan Yazılım Mühendisi.',
    en: 'Software Engineer Bridging Mobile, Web, AI & Craft Design in One Sketchbook.',
  },
  subTagline: {
    tr: 'Fırat Üniversitesi Yazılım Mühendisliği mezunu • Van YYÜ Yapay Zekâ ve Robotik Yüksek Lisans • ARTOS Yazılım Kurucu Ortağı',
    en: 'B.Sc. Software Engineering (Fırat Univ.) • M.Sc. AI & Robotics (Van YYÜ) • Co-Founder @ ARTOS Software',
  },
  coordinates: "38° 18' N  43° 06' E — VAN / GEVAŞ",
  phone: '+90 505 954 64 04',
  phoneRaw: '905059546404',
  email: 'erdem0165@gmail.com',
  agencyEmail: 'yazilimartos@gmail.com',
  location: 'Van / Gevaş, Türkiye',
  github: 'https://github.com/emreDinc23/artos',
  website: 'https://artosyazilim.com',
  whatsapp: 'https://wa.me/905059546404',
  instagram: 'https://www.instagram.com/artosyazilim/',
  cvUrl: '/Ibrahim_Erdem_Ergenc_CV.pdf',
  stats: [
    { value: '38+', label: { tr: 'Tamamlanan Proje (ARTOS)', en: 'Delivered Projects (ARTOS)' } },
    { value: '3+', label: { tr: 'Şirket & Ar-Ge Deneyimi', en: 'Company & R&D Roles' } },
    { value: '%98', label: { tr: 'Müşteri Memnuniyeti', en: 'Client Satisfaction' } },
    { value: 'B1/B2', label: { tr: 'İngilizce & Erasmus+', en: 'English & Erasmus+' } },
  ],
  bioParagraphs: {
    tr: [
      "Fırat Üniversitesi Yazılım Mühendisliği bölümünden mezun oldum ve şu anda Van Yüzüncü Yıl Üniversitesi'nde Yapay Zekâ ve Robotik yüksek lisans eğitimime devam ediyorum. Mobil ve web tabanlı uygulama geliştirme, veri odaklı sistemler ve yapay zeka alanlarında hem sektörel hem Ar-Ge deneyimlerim bulunuyor.",
      "Reeder Elektronik A.Ş.'de Flutter ile mobil uygulama geliştirme, React ile web arayüzleri tasarlama ve mobil–web entegrasyonları üzerine çalıştım. Identify Turkey ve Himetech bünyesinde ise yapay zekâ, makine öğrenimi, OCR ve kimlik tanıma sistemleri üzerine Ar-Ge projelerinde aktif görev aldım.",
      "Erasmus+ programı kapsamında Fransa ve İspanya'da eğitim aldım ve Avrupa'daki pek çok ülkeyi gezerek çok kültürlü ekiplerde çalışma pratiği kazandım. Kod yazmanın yanı sıra Adobe Illustrator, Figma ve Canva ile arayüz, illüstrasyon ve kurumsal kimlik tasarımları üretiyor; kurucu ortağı olduğum ARTOS Yazılım çatısı altında uçtan uca dijital ürünler geliştiriyorum."
    ],
    en: [
      "I graduated in Software Engineering from Fırat University and am currently pursuing my Master's degree in Artificial Intelligence & Robotics at Van Yüzüncü Yıl University. My background spans mobile and web engineering, data-centric architectures, and applied AI.",
      "At Reeder Elektronik A.Ş., I built cross-platform mobile apps with Flutter, crafted React admin dashboards and web interfaces, and engineered seamless mobile-to-web integrations. Earlier at Identify Turkey and Himetech, I contributed to R&D systems in computer vision, OCR, identity verification, and machine learning optimization.",
      "Through the Erasmus+ program, I studied in France and Spain while traveling extensively across Europe. Beyond engineering, I love visual craft—working with Figma and Adobe Illustrator to design interfaces, logos, and illustrations, and co-founding ARTOS Software where we have shipped 38+ digital products."
    ]
  },
  stampBadges: [
    { label: { tr: 'Flutter & Mobil Mimari', en: 'Flutter & Mobile Arch' }, color: '#F59E0B', text: '#141413', icon: 'Smartphone' },
    { label: { tr: 'React & Next.js Web', en: 'React & Next.js Web' }, color: '#1D4ED8', text: '#FFFFFF', icon: 'Globe' },
    { label: { tr: 'Yapay Zekâ, ML & OCR', en: 'AI, ML & OCR Systems' }, color: '#10B981', text: '#141413', icon: 'Brain' },
    { label: { tr: 'UI/UX & İllüstrasyon', en: 'UI/UX & Illustration' }, color: '#EC4899', text: '#FFFFFF', icon: 'PenTool' },
    { label: { tr: 'SQL, Veri Analizi & ERP', en: 'SQL, Data & ERP/BI' }, color: '#8B5CF6', text: '#FFFFFF', icon: 'Database' },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    id: 'artos',
    role: { tr: 'Kurucu Ortak — Frontend, Mobil & UI/UX', en: 'Co-Founder — Frontend, Mobile & UI/UX' },
    company: 'ARTOS Yazılım',
    location: 'Van / Elazığ / İstanbul',
    period: { tr: '2023 – Günümüz', en: '2023 – Present' },
    type: { tr: 'Girişim & Yazılım Ajansı', en: 'Venture & Software Studio' },
    color: '#1D4ED8',
    bullets: {
      tr: [
        'Next.js, React, Flutter ve React Native ile 38+ kurumsal web ve mobil uygulama projesinin tasarım ve geliştirme süreçlerini yönettim.',
        'Yanındayım SOS, Hipothesis, Veteriner Randevu ve Burem Rent A Car dahil uçtan uca ürünlerin UI/UX ve frontend mimarisini kurguladım.',
        'Müşteri keşif sprintleri, süreç analizi, dokümantasyon ve Figma/Illustrator tabanlı tasarım sistemleri oluşturdum.'
      ],
      en: [
        'Led frontend, mobile, and UI/UX delivery across 38+ web and mobile products using Next.js, React, Flutter, and React Native.',
        'Architected flagship products including Yanındayım SOS, Hipothesis, Vet Booking App, and corporate web platforms.',
        'Spearheaded product discovery sprints, technical documentation, and Figma/Illustrator design systems.'
      ]
    },
    tags: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Figma', 'Firebase']
  },
  {
    id: 'reeder',
    role: { tr: 'Flutter & React Geliştirici', en: 'Flutter & React Developer' },
    company: 'Reeder Elektronik A.Ş.',
    location: 'Türkiye',
    period: { tr: 'Şubat 2025 – Haziran 2025', en: 'Feb 2025 – Jun 2025' },
    type: { tr: 'Tam Zamanlı / Mühendislik', en: 'Software Engineering' },
    color: '#F59E0B',
    bullets: {
      tr: [
        'Flutter ile yüksek performanslı mobil uygulama geliştirme ve modern arayüz tasarımları gerçekleştirdim.',
        'React ile web tabanlı yönetim panelleri (admin dashboard) ve kurumsal web siteleri geliştirdim.',
        'Mobil ve web platformları arasında gerçek zamanlı veri entegrasyonları ve REST API bağlantıları sağladım.',
        'Performans iyileştirme ve kullanıcı deneyimi (UX) optimizasyonu üzerine aktif rol aldım.'
      ],
      en: [
        'Developed cross-platform mobile applications and custom UI components using Flutter and Dart.',
        'Engineered web-based admin dashboards and responsive corporate interfaces with React.',
        'Built seamless data synchronization and REST API integrations bridging mobile and web platforms.',
        'Optimized rendering performance and refined user experience flows across devices.'
      ]
    },
    tags: ['Flutter', 'Dart', 'React', 'REST API', 'UI/UX', 'Performance']
  },
  {
    id: 'himetech',
    role: { tr: 'Yapay Zekâ & Makine Öğrenimi Stajyeri', en: 'AI & Machine Learning Intern' },
    company: 'Himetech & Yüzüncü Yıl Üniversitesi',
    location: 'Van, Türkiye',
    period: { tr: 'Ağustos 2023 – Eylül 2023', en: 'Aug 2023 – Sep 2023' },
    type: { tr: 'Ar-Ge Stajı', en: 'R&D Internship' },
    color: '#10B981',
    bullets: {
      tr: [
        'Yapay zekâ projelerinde veri işleme (data preprocessing) ve makine öğrenimi model geliştirme süreçlerinde görev aldım.',
        'Algoritma optimizasyonu ve model performans artırma çalışmaları gerçekleştirdim.'
      ],
      en: [
        'Contributed to data preprocessing pipelines and machine learning model training in applied AI projects.',
        'Executed algorithm optimization and inference performance tuning.'
      ]
    },
    tags: ['Python', 'Machine Learning', 'Data Processing', 'Algorithms']
  },
  {
    id: 'identify',
    role: { tr: 'Yazılım Geliştirme & OCR Stajyeri', en: 'Software & OCR R&D Intern' },
    company: 'Identify Turkey',
    location: 'Türkiye',
    period: { tr: 'Ağustos 2022 – Eylül 2022', en: 'Aug 2022 – Sep 2022' },
    type: { tr: 'Ar-Ge Stajı', en: 'R&D Internship' },
    color: '#EC4899',
    bullets: {
      tr: [
        'OCR (Optik Karakter Tanıma) ve dijital kimlik doğrulama / tanıma sistemleri üzerine Ar-Ge projelerinde çalıştım.',
        'Makine öğrenimi ve sinir ağları modelleri ile veri analiz süreçlerine ve sistem verimliliğine katkı sağladım.'
      ],
      en: [
        'Worked on R&D projects focused on Optical Character Recognition (OCR) and automated identity verification.',
        'Applied machine learning and neural network models to data analysis and pipeline efficiency.'
      ]
    },
    tags: ['OCR', 'Computer Vision', 'Neural Networks', 'Python', 'KYC']
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'yyu-msc',
    degree: { tr: 'Yapay Zekâ ve Robotik (Yüksek Lisans)', en: 'M.Sc. in Artificial Intelligence & Robotics' },
    school: 'Van Yüzüncü Yıl Üniversitesi',
    period: '2026 – Devam Ediyor',
    location: 'Van, Türkiye',
    badge: { tr: 'YÜKSEK LİSANS', en: 'MASTER OF SCIENCE' },
    details: {
      tr: 'Derin öğrenme, bilgisayarla görme, otonom sistemler ve veri odaklı karar destek modelleri üzerine ileri düzey araştırmalar.',
      en: 'Advanced graduate research in deep learning, computer vision, autonomous robotics, and intelligent decision-support systems.'
    }
  },
  {
    id: 'firat-bsc',
    degree: { tr: 'Yazılım Mühendisliği (Lisans)', en: 'B.Sc. in Software Engineering' },
    school: 'Fırat Üniversitesi',
    period: '2019 – 2025',
    location: 'Elazığ, Türkiye',
    badge: { tr: 'LİSANS MEZUNU', en: 'BACHELOR DEGREE' },
    details: {
      tr: 'Yazılım mimarisi, nesne yönelimli programlama, veritabanı yönetim sistemleri (SQL), mobil/web mühendisliği ve yapay zekâ temelleri.',
      en: 'Core software architecture, object-oriented programming, relational database design (SQL), mobile/web engineering, and AI foundations.'
    }
  },
  {
    id: 'erasmus',
    degree: { tr: 'Erasmus+ Uluslararası Eğitim & Kültür Programı', en: 'Erasmus+ International Study & Exchange' },
    school: 'Fransa & İspanya (Avrupa Akademik Değişim)',
    period: 'Lisans Dönemi',
    location: 'Fransa • İspanya • Avrupa',
    badge: { tr: 'ERASMUS+ GEZGİNİ', en: 'ERASMUS+ SCHOLAR' },
    details: {
      tr: "Erasmus programı kapsamında Fransa ve İspanya'da eğitim aldım; Avrupa'daki pek çok ülkeyi gezerek uluslararası ekiplerle çalışma deneyimi edindim.",
      en: 'Studied in France and Spain via Erasmus+, traveling across Europe and collaborating in multicultural engineering teams.'
    }
  },
  {
    id: 'lise',
    degree: { tr: 'Lise Eğitimi', en: 'High School Diploma' },
    school: 'İzzeddin Şir Anadolu Lisesi',
    period: '2014 – 2018',
    location: 'Van / Gevaş',
    badge: { tr: 'ANADOLU LİSESİ', en: 'HIGH SCHOOL' },
    details: {
      tr: 'Analitik düşünme ve fen/matematik ağırlıklı lise eğitimi.',
      en: 'Science and mathematics track foundation in Van.'
    }
  }
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'dev',
    title: { tr: 'Programlama & Mobil / Web', en: 'Languages & Mobile / Web' },
    badgeColor: '#1D4ED8',
    items: [
      { name: 'Flutter & Dart', short: 'Fl', level: 95, color: '#0284C7', bg: '#E0F2FE' },
      { name: 'React & Next.js', short: 'Re', level: 92, color: '#2563EB', bg: '#DBEAFE' },
      { name: 'Python', short: 'Py', level: 88, color: '#D97706', bg: '#FEF3C7' },
      { name: 'SQL & DB Design', short: 'Sq', level: 90, color: '#059669', bg: '#D1FAE5' },
      { name: 'Java', short: 'Jv', level: 80, color: '#DC2626', bg: '#FEE2E2' },
      { name: 'C# & .NET', short: 'C#', level: 75, color: '#7C3AED', bg: '#EDE9FE' },
    ]
  },
  {
    id: 'ai-data',
    title: { tr: 'Yapay Zekâ, Veri & Backend', en: 'AI, Data & Cloud Systems' },
    badgeColor: '#10B981',
    items: [
      { name: 'Makine Öğrenmesi', short: 'ML', level: 86, color: '#059669', bg: '#D1FAE5' },
      { name: 'OCR & Kimlik Tanıma', short: 'OC', level: 88, color: '#0D9488', bg: '#CCFBF1' },
      { name: 'Firebase & REST API', short: 'Fb', level: 92, color: '#EA580C', bg: '#FFEDD5' },
      { name: 'Veri Analizi & BI/ERP', short: 'BI', level: 85, color: '#4F46E5', bg: '#E0E7FF' },
    ]
  },
  {
    id: 'design',
    title: { tr: 'Tasarım & Görsel Sanatlar', en: 'Design & Visual Craft' },
    badgeColor: '#EC4899',
    items: [
      { name: 'Figma (UI/UX)', short: 'Fg', level: 94, color: '#DB2777', bg: '#FCE7F3' },
      { name: 'Adobe Illustrator', short: 'Ai', level: 90, color: '#D97706', bg: '#FEF3C7' },
      { name: 'Canva & Kurumsal', short: 'Cv', level: 95, color: '#0891B2', bg: '#CFFAFE' },
      { name: 'Responsive Sistemler', short: 'Ux', level: 96, color: '#141413', bg: '#F3F4F6' },
    ]
  }
];

export const certificates = [
  { year: '2023', title: 'Tasarım 101', issuer: 'Akbank Gençlik Akademisi', icon: 'Palette' },
  { year: '2022', title: 'Makine Öğrenmesi Operasyonları (MLOps) 101', issuer: 'Akbank Gençlik Akademisi', icon: 'Cpu' },
  { year: '2022', title: 'Analitik 101', issuer: 'Akbank Gençlik Akademisi', icon: 'BarChart3' },
  { year: '2022', title: 'Oyunlaştırma (Gamification) 101', issuer: 'Akbank Gençlik Akademisi', icon: 'Gamepad2' },
  { year: '2022', title: 'Dijital İletişim 101', issuer: 'Akbank Gençlik Akademisi', icon: 'MessageSquare' },
  { year: '2022', title: 'İklim Krizi ve Sürdürülebilirlik 101', issuer: 'Akbank Gençlik Akademisi', icon: 'Leaf' },
];

export const referencesList = [
  {
    name: 'Ali Haydar Ünal',
    role: { tr: 'Identify Turkey Müdürü', en: 'Director at Identify Turkey' },
    company: 'Identify Turkey',
    badge: 'OCR & KYC Ar-Ge'
  },
  {
    name: 'Ömer Şirin',
    role: { tr: 'Arçelik Proje Yöneticisi / TOG Mütevelli Heyeti Üyesi', en: 'Project Manager at Arçelik / TOG Board Member' },
    company: 'Arçelik / TOG',
    badge: 'Proje & Liderlik'
  },
  {
    name: 'Muhammet Salcı',
    role: { tr: 'Yazılım Mühendisi', en: 'Software Engineer at Reeder' },
    company: 'Reeder Elektronik A.Ş.',
    badge: 'Flutter & React'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'yanindayim-app',
    code: 'PROJECT 01',
    title: {
      tr: 'Yanındayım — Acil Durum SOS Uygulaması',
      en: 'Yanındayım — Emergency SOS Mobile App'
    },
    subtitle: {
      tr: 'Acil durumda tek dokunuşla canlı konum, mesaj ve arama ileten güvenlik platformu.',
      en: 'KADES-inspired personal safety app broadcasting real-time GPS, SMS & alerts with one tap.'
    },
    description: {
      tr: 'KADES benzeri SOS butonu ile acil durumda belirlenen kişilere anlık konum, acil durum mesajı ve arama gönderen güvenlik odaklı mobil uygulama. Gerçek zamanlı konum paylaşımı, güvenli çember yönetimi ve anlık bildirim altyapısı sıfırdan kuruldu.',
      en: 'A personal safety mobile application featuring a one-tap SOS trigger that immediately dispatches live GPS coordinates, emergency alerts, and calls to trusted contacts, backed by real-time Firebase location streaming.'
    },
    highlights: {
      tr: [
        'KADES benzeri tek dokunuşlu SOS acil durum tetikleyicisi',
        'Gerçek zamanlı GPS konum akışı ve bildirim (Push Notification) altyapısı',
        '12 ekranlık yüksek kontrastlı, panik anında kolay kullanılabilir UI/UX tasarımı'
      ],
      en: [
        'One-tap SOS emergency broadcast protocol inspired by KADES',
        'Real-time GPS coordinate streaming and instant push notification architecture',
        '12 high-contrast screens engineered for zero-friction accessibility under stress'
      ]
    },
    category: 'Mobile App',
    categoryLabel: { tr: 'Mobil Uygulama (SOS)', en: 'Mobile App (Safety)' },
    year: '2025',
    tabColor: '#141413',
    cardBg: '#141413',
    textColor: '#FBF8F1',
    accentColor: '#3B82F6',
    stack: ['Flutter / React Native', 'Firebase', 'Google Maps API', 'Push Notifications', 'Real-time GPS'],
    metrics: [
      { label: { tr: 'Ekran Tasarımı', en: 'UI Screens' }, value: '12 Ekran' },
      { label: { tr: 'Platform', en: 'Platform' }, value: 'iOS & Android' },
      { label: { tr: 'Konum İletimi', en: 'Location Sync' }, value: '< 1 sn' },
    ],
    featured: true,
    images: Array.from({ length: 12 }, (_, i) => ({
      src: `/gallery/yanindayim_app/${i + 1}.svg`,
      alt: `Yanındayım SOS App - Ekran ${i + 1}`,
      description: `Yanındayım Acil Durum Mobil Uygulaması — Arayüz Ekranı ${i + 1}`
    })),
  },
  {
    id: 'hipothesis',
    code: 'PROJECT 02',
    title: {
      tr: 'Hipothesis — Eğitim & Akademik Danışmanlık',
      en: 'Hipothesis — Academic & Online Consulting Platform'
    },
    subtitle: {
      tr: 'Tez, ders, proje ve video eğitim süreçlerini tek çatı altında buluşturan web & mobil platform.',
      en: 'Comprehensive web & mobile ecosystem for academic mentorship, video courses, and live consulting.'
    },
    description: {
      tr: 'Kullanıcıların tez, ders, ödev ve projeler hakkında uzman danışmanlardan birebir destek alabildikleri; video içerik yönetimi, kullanıcı kayıt ve kategori filtreleme sistemleriyle donatılmış web ve mobil uyumlu eğitim & danışmanlık platformu.',
      en: 'An end-to-end web and mobile platform connecting students and researchers with vetted mentors for theses, courses, and projects, complete with video content management, user onboarding, and multi-criteria filtering.'
    },
    highlights: {
      tr: [
        'Web ve mobil uyumlu çok katmanlı eğitim & canlı danışmanlık mimarisi',
        'Video içerik yönetimi, eğitmen eşleştirme ve kategori filtreleme modülleri',
        '10 detaylı arayüz ekranı ve ölçeklenebilir veritabanı tasarımı'
      ],
      en: [
        'Cross-platform web and mobile architecture for live academic mentorship',
        'Video course management, mentor matching, and category filtering engine',
        '10 high-craft interface views backed by a relational PostgreSQL schema'
      ]
    },
    category: 'Web Application',
    categoryLabel: { tr: 'Web & Mobil Platform', en: 'Web & Mobile Platform' },
    year: '2025',
    tabColor: '#F59E0B',
    cardBg: '#F59E0B',
    textColor: '#141413',
    accentColor: '#141413',
    stack: ['React', 'Next.js', 'Flutter', 'PostgreSQL', 'Video API', 'Figma'],
    metrics: [
      { label: { tr: 'Kapsam', en: 'Scope' }, value: 'Web + Mobil' },
      { label: { tr: 'Arayüz Modülü', en: 'UI Modules' }, value: '10 Ekran' },
      { label: { tr: 'Mimari', en: 'Architecture' }, value: 'Full-Stack' },
    ],
    featured: true,
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `/gallery/hipothesis/${i + 1}.svg`,
      alt: `Hipothesis Platform - Ekran ${i + 1}`,
      description: `Hipothesis Online Eğitim & Danışmanlık Platformu — Ekran ${i + 1}`
    })),
  },
  {
    id: 'veteriner-mobile-app',
    code: 'PROJECT 03',
    title: {
      tr: 'Veteriner Randevu & Klinik Mobil Uygulaması',
      en: 'Veterinary Clinic & Pet Care Mobile App'
    },
    subtitle: {
      tr: 'Evcil hayvan sahiplerinin klinik randevularını ve sağlık karnelerini yönettiği mobil uygulama.',
      en: 'Mobile experience for pet owners to schedule clinic visits, track vaccinations, and message vets.'
    },
    description: {
      tr: 'Evcil hayvan sahiplerinin veteriner randevularını kolayca yönetebildiği, evcil hayvan profili oluşturma, aşı/muayene takvimi planlama, klinik detaylarını inceleme ve veteriner hekimle doğrudan iletişim kurma özellikleri sunan mobil uygulama.',
      en: 'Designed and developed a mobile application enabling pet owners to manage veterinary appointments, create pet health profiles, browse clinic specialties, and communicate directly with veterinarians.'
    },
    highlights: {
      tr: [
        'Randevu planlama takvimi ve anlık klinik müsaitlik kontrolü',
        'Evcil hayvan sağlık profili ve veterinerle doğrudan mesajlaşma modülü',
        'Sıcak, kullanıcı dostu mobil UI/UX ve bildirim entegrasyonu'
      ],
      en: [
        'Interactive appointment booking calendar with real-time clinic availability',
        'Pet health passport profiles and direct veterinarian messaging channel',
        'Warm, accessible mobile UI/UX with automated reminder notifications'
      ]
    },
    category: 'Mobile App',
    categoryLabel: { tr: 'Mobil Uygulama', en: 'Mobile Application' },
    year: '2025',
    tabColor: '#1D4ED8',
    cardBg: '#1D4ED8',
    textColor: '#FFFFFF',
    accentColor: '#FDE047',
    stack: ['Flutter', 'Dart', 'Firebase', 'Booking Engine', 'Push Notifications'],
    metrics: [
      { label: { tr: 'Teslim Süresi', en: 'Delivery' }, value: '6 Hafta' },
      { label: { tr: 'Platform', en: 'Platform' }, value: 'iOS & Android' },
      { label: { tr: 'Ekranlar', en: 'Screens' }, value: '6 Ana Modül' },
    ],
    featured: true,
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `/gallery/veteriner_mobile_app/${i + 1}.png`,
      alt: `Veteriner Randevu Mobil Uygulaması - Ekran ${i + 1}`,
      description: `Veteriner Randevu ve Klinik Yönetim Uygulaması — Ekran ${i + 1}`
    })),
  },
  {
    id: 'online-egitim-platformu',
    code: 'PROJECT 04',
    title: {
      tr: 'Online Workshop & Video Eğitim Platformu',
      en: 'Online Workshop & Video Learning Platform'
    },
    subtitle: {
      tr: 'Video önizleme, kurs ilerleme takibi ve kategori bazlı filtreleme sunan eğitim portalı.',
      en: 'Modern e-learning portal with video previews, progress analytics, and instructor hubs.'
    },
    description: {
      tr: 'Kullanıcıların çeşitli online eğitimleri ve atölyeleri keşfetmesini, kaydolmasını ve ders ilerlemelerini adım adım takip etmesini sağlayan; video önizleme, eğitmen profilleri, blog ve kategori bazlı filtreleme özellikleri sunan modern web uygulaması.',
      en: 'A full-featured e-learning web application allowing learners to discover workshops, preview video lessons, track module completion percentages, and filter courses by skill domain.'
    },
    highlights: {
      tr: [
        'İnteraktif kurs detay, video oynatıcı ve kişisel ilerleme takip paneli',
        'Kategori bazlı dinamik filtreleme ve eğitmen değerlendirme sistemi',
        'Masaüstü ve mobil tarayıcılarla tam uyumlu (Responsive) arayüz'
      ],
      en: [
        'Interactive course player and personalized student progress dashboard',
        'Dynamic category filtering, blog engine, and instructor rating system',
        'Fully responsive layout optimized for both desktop and mobile learning'
      ]
    },
    category: 'Web Application',
    categoryLabel: { tr: 'Web Uygulaması (EdTech)', en: 'Web Application (EdTech)' },
    year: '2025',
    tabColor: '#059669',
    cardBg: '#065F46',
    textColor: '#FBF8F1',
    accentColor: '#6EE7B7',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Video Streaming', 'REST API'],
    metrics: [
      { label: { tr: 'Modüller', en: 'Modules' }, value: '6 Sayfa' },
      { label: { tr: 'Performans', en: 'LCP Speed' }, value: '< 1.2 sn' },
      { label: { tr: 'Uyumluluk', en: 'Responsive' }, value: '%100 Web/Mobil' },
    ],
    featured: true,
    images: [
      { src: '/gallery/egitim/1.png', alt: 'Online Eğitim Platformu - Ana Sayfa', description: 'Platform ana sayfa görünümü' },
      { src: '/gallery/egitim/2 (2).png', alt: 'Online Eğitim Platformu - Kurs Detay', description: 'Kurs detay ve müfredat sayfası' },
      { src: '/gallery/egitim/3.png', alt: 'Online Eğitim Platformu - Kategoriler', description: 'Kategori filtreleme sayfası' },
      { src: '/gallery/egitim/4.png', alt: 'Online Eğitim Platformu - İlerleme', description: 'Öğrenci kurs ilerleme takip sayfası' },
      { src: '/gallery/egitim/5.png', alt: 'Online Eğitim Platformu - Blog', description: 'Eğitim blog ve içerik sayfası' },
      { src: '/gallery/egitim/6.png', alt: 'Online Eğitim Platformu - Profil', description: 'Kullanıcı profili ve sertifikalar' },
    ],
  },
  {
    id: 'alisveris-mobile-app',
    code: 'PROJECT 05',
    title: {
      tr: 'Akıllı Alışveriş & Bütçe Takip Uygulaması',
      en: 'Smart Grocery & Budget Tracker Mobile App'
    },
    subtitle: {
      tr: 'Barkod tarama, bütçe yönetimi ve kişiselleştirilmiş fırsat önerileri sunan mobil uygulama.',
      en: 'Mobile companion for smart shopping lists, barcode scanning, and real-time expense analytics.'
    },
    description: {
      tr: 'Kullanıcıların market alışverişlerini planlamasını, aylık bütçelerini yönetmesini ve indirim fırsatlarını takip etmesini sağlayan; barkod ile hızlı ürün ekleme, harcama grafikleri ve akıllı öneriler sunan mobil uygulama.',
      en: 'Helps users plan grocery trips, manage monthly budgets, scan product barcodes for instant price comparison, and visualize spending habits with interactive charts.'
    },
    highlights: {
      tr: [
        'Barkod okuyucu entegrasyonu ile saniyeler içinde listeye ürün ekleme',
        'Kategori bazlı harcama analitiği ve bütçe aşım bildirimleri',
        '7 ekranlık akıcı ve sezgisel mobil kullanıcı deneyimi'
      ],
      en: [
        'Integrated barcode scanner for instant product lookup and list creation',
        'Category-level expense analytics and budget threshold alerts',
        '7-screen fluid mobile interface with personalized deal recommendations'
      ]
    },
    category: 'Mobile App',
    categoryLabel: { tr: 'Mobil Uygulama (FinTech/Retail)', en: 'Mobile App (Retail)' },
    year: '2025',
    tabColor: '#EA580C',
    cardBg: '#FFF7ED',
    textColor: '#141413',
    accentColor: '#EA580C',
    stack: ['Flutter', 'Barcode Scanner', 'Firebase', 'Chart Analytics', 'UI/UX'],
    metrics: [
      { label: { tr: 'Ekran Sayısı', en: 'Screens' }, value: '7 Ekran' },
      { label: { tr: 'Teslim Süresi', en: 'Delivery' }, value: '6 Hafta' },
      { label: { tr: 'Özellik', en: 'Key Feature' }, value: 'Barkod + Bütçe' },
    ],
    images: Array.from({ length: 7 }, (_, i) => ({
      src: `/gallery/alisveris_mobile_app/${i + 1}.png`,
      alt: `Akıllı Alışveriş Uygulaması - Ekran ${i + 1}`,
      description: `Akıllı Alışveriş ve Bütçe Yönetimi — Ekran ${i + 1}`
    })),
  },
  {
    id: 'fitness-mobile-app',
    code: 'PROJECT 06',
    title: {
      tr: 'Fitness & Sağlıklı Yaşam Mobil Uygulaması',
      en: 'Fitness & Holistic Wellness Mobile App'
    },
    subtitle: {
      tr: 'Günlük egzersiz, su tüketimi, kalori ve performans grafiklerini birleştiren sağlık asistanı.',
      en: 'All-in-one workout tracker, hydration monitor, nutrition log, and performance analytics app.'
    },
    description: {
      tr: 'Kullanıcıların günlük aktivitelerini, antrenman programlarını, su tüketimini ve beslenme rutinlerini takip ederek sağlıklı yaşam alışkanlıkları kazanmalarını sağlayan, performans grafikleri ve oyunlaştırılmış motivasyon rozetleri sunan mobil uygulama.',
      en: 'Empowers users to build sustainable health habits by tracking daily workouts, hydration, and macro nutrition, complete with visual progress charts and gamified streak milestones.'
    },
    highlights: {
      tr: [
        'Kişiselleştirilmiş antrenman takvimi, su ve kalori takip widgetları',
        'Haftalık/aylık gelişim grafikleri ve oyunlaştırılmış hedefler',
        '6 ekranlık enerjik ve modern mobil arayüz tasarımı'
      ],
      en: [
        'Personalized workout routines, hydration rings, and calorie tracking widgets',
        'Weekly/monthly biometric progress charts and gamified achievement streaks',
        '6 vibrant mobile screens crafted for quick single-handed logging'
      ]
    },
    category: 'Mobile App',
    categoryLabel: { tr: 'Mobil Uygulama (Health)', en: 'Mobile App (Health)' },
    year: '2025',
    tabColor: '#7C3AED',
    cardBg: '#F5F3FF',
    textColor: '#141413',
    accentColor: '#7C3AED',
    stack: ['Flutter / React Native', 'Health API', 'Interactive Charts', 'Gamification'],
    metrics: [
      { label: { tr: 'Ekran Sayısı', en: 'Screens' }, value: '6 Ekran' },
      { label: { tr: 'Teslim Süresi', en: 'Delivery' }, value: '7 Hafta' },
      { label: { tr: 'Odak', en: 'Focus' }, value: 'Sağlık & Grafik' },
    ],
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `/gallery/fitness_mobile_app/${i + 1}.png`,
      alt: `Fitness Uygulaması - Ekran ${i + 1}`,
      description: `Fitness ve Sağlıklı Yaşam Uygulaması — Ekran ${i + 1}`
    })),
  },
  {
    id: 'burem',
    code: 'PROJECT 07',
    title: {
      tr: 'Burem Rent A Car — Kurumsal Web Platformu',
      en: 'Burem Rent A Car — Corporate Fleet Web Platform'
    },
    subtitle: {
      tr: 'Detaylı araç portföyü, filtreleme ve hızlı rezervasyon akışı sunan kurumsal web sitesi.',
      en: 'High-conversion corporate car rental website featuring fleet filtering and instant booking inquiries.'
    },
    description: {
      tr: 'Burem Rent A Car için tasarlanan, modern araç kiralama hizmetlerini ve geniş filo portföyünü sergileyen kurumsal web sitesi. SEO uyumlu mimari, hızlı filtreleme ve mobil uyumlu rezervasyon deneyimi ile Google ilk sayfa sıralaması elde edildi.',
      en: 'Corporate web platform built for Burem Rent A Car showcasing their vehicle fleet with technical specs, daily pricing tiers, SEO-first architecture, and mobile-friendly reservation flows.'
    },
    highlights: {
      tr: [
        'Araç segmenti, vites ve yakıt tipine göre hızlı filo filtreleme',
        'SEO odaklı Next.js mimarisi ile Google aramalarında ilk sayfa başarısı',
        '9 farklı sayfa/bölüm görünümü ve yüksek dönüşümlü iletişim akışı'
      ],
      en: [
        'Fleet filtering by vehicle segment, transmission, and fuel specs',
        'SEO-first Next.js architecture achieving first-page Google rankings',
        '9 responsive showcase views designed for rapid booking conversion'
      ]
    },
    category: 'Web Design',
    categoryLabel: { tr: 'Kurumsal Web Sitesi', en: 'Corporate Web Platform' },
    year: '2025',
    tabColor: '#0284C7',
    cardBg: '#F0F9FF',
    textColor: '#141413',
    accentColor: '#0284C7',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'SEO Optimization', 'Responsive UI'],
    metrics: [
      { label: { tr: 'Teslim Süresi', en: 'Delivery' }, value: '4 Hafta' },
      { label: { tr: 'SEO Başarısı', en: 'SEO Rank' }, value: '1. Sayfa' },
      { label: { tr: 'Görseller', en: 'Gallery' }, value: '9 Ekran' },
    ],
    images: Array.from({ length: 9 }, (_, i) => ({
      src: `/gallery/burem/burem-${i + 1}.png`,
      alt: `Burem Rent A Car - Görsel ${i + 1}`,
      description: `Burem Rent A Car Kurumsal Web Sitesi — Görünüm ${i + 1}`
    })),
  },
  {
    id: 'tekin-tercume',
    code: 'PROJECT 08',
    title: {
      tr: 'Tekin Tercüme — Çok Dilli Kurumsal Web Sitesi',
      en: 'Tekin Translation — Multilingual Corporate Website'
    },
    subtitle: {
      tr: "Elazığ'da faaliyet gösteren yeminli tercüme bürosu için Türkçe/İngilizce kurumsal platform.",
      en: 'Bilingual corporate web portal for a sworn translation agency in Elazığ with instant quote forms.'
    },
    description: {
      tr: "Elazığ'da faaliyet gösteren Tekin Yeminli Tercüme Bürosu için geliştirilen çok dilli (Türkçe & İngilizce) kurumsal web sitesi. Hizmetler, uzmanlık alanları, dil seçenekleri, hızlı online teklif alma formu ve doğrudan iletişim modülleri responsive prensiplerle tasarlandı.",
      en: 'Developed a bilingual (Turkish & English) corporate web platform for Tekin Sworn Translation Office in Elazığ, featuring service catalogs, language pair selectors, online document quote forms, and responsive desktop/mobile layouts.'
    },
    highlights: {
      tr: [
        'Türkçe ve İngilizce (i18n) çok dilli içerik ve kullanıcı dostu arayüz',
        'Hizmetler, dil çiftleri, online teklif alma formu ve hızlı iletişim modülleri',
        'Masaüstü ve mobil cihazlarla %100 uyumlu kurumsal tasarım'
      ],
      en: [
        'Seamless Turkish & English (i18n) bilingual routing and content architecture',
        'Interactive service catalog, language pair matrix, and quote request workflow',
        'Responsive corporate typography and mobile-first accessibility'
      ]
    },
    category: 'Web Design',
    categoryLabel: { tr: 'Çok Dilli Web Sitesi', en: 'Multilingual Website' },
    year: '2025',
    tabColor: '#1E293B',
    cardBg: '#F8FAFC',
    textColor: '#141413',
    accentColor: '#1D4ED8',
    stack: ['React', 'Next.js', 'i18n (TR/EN)', 'Tailwind CSS', 'Quote Form'],
    metrics: [
      { label: { tr: 'Dil Desteği', en: 'Languages' }, value: 'TR & EN' },
      { label: { tr: 'Lokasyon', en: 'Client City' }, value: 'Elazığ' },
      { label: { tr: 'Tasarım', en: 'Design' }, value: 'Responsive' },
    ],
    images: [
      { src: '/gallery/egitim/1.png', alt: 'Kurumsal Web Mimari Görünümü', description: 'Modern kurumsal web arayüz mimarisi' },
      { src: '/gallery/burem/burem-2.png', alt: 'Hizmet ve Teklif Modülü', description: 'Hizmet kartları ve kurumsal modüller' }
    ],
  },
  {
    id: 'neslihan-guzellik-merkezi',
    code: 'PROJECT 09',
    title: {
      tr: 'Neslihan Güzellik Merkezi — Dijital Platform',
      en: 'Neslihan Beauty Center — Booking & Showcase Web'
    },
    subtitle: {
      tr: 'Online randevu, hizmet galerisi ve kurumsal tanıtım sunan estetik web platformu.',
      en: 'Elegant web platform integrating service galleries, online booking, and client showcase.'
    },
    description: {
      tr: 'Neslihan Güzellik Merkezi için hazırlanan şık ve modern tanıtım & randevu web sitesi. Hizmet paketleri, dinamik görsel galeri, müşteri yorumları ve online iletişim modüllerinin profesyonelce sunulduğu kapsamlı platform.',
      en: 'Crafted an editorial, modern web presence for Neslihan Beauty Center featuring service packages, dynamic visual galleries, online appointment requests, and client testimonials.'
    },
    highlights: {
      tr: [
        'Online randevu ve hizmet inceleme akışı',
        'Estetik tipografi ve dinamik görsel galeri yönetimi',
        '%98 müşteri memnuniyeti ile tamamlanan anahtar teslim dijital kimlik'
      ],
      en: [
        'Streamlined online appointment scheduling and treatment catalog',
        'Editorial typography paired with a high-resolution dynamic gallery',
        'Turnkey digital identity achieving 98% client satisfaction'
      ]
    },
    category: 'Web Design',
    categoryLabel: { tr: 'Kurumsal Web & Randevu', en: 'Web & Booking' },
    year: '2025',
    tabColor: '#DB2777',
    cardBg: '#FDF2F8',
    textColor: '#141413',
    accentColor: '#DB2777',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Booking System', 'Gallery UI'],
    metrics: [
      { label: { tr: 'Memnuniyet', en: 'Satisfaction' }, value: '%98' },
      { label: { tr: 'Sayfalar', en: 'Screens' }, value: '7 Görünüm' },
      { label: { tr: 'Modül', en: 'Feature' }, value: 'Online Randevu' },
    ],
    images: Array.from({ length: 7 }, (_, i) => ({
      src: `/gallery/neslihan-güzellik merkezi/neslihan-güzellik merkezi-${i + 1}.png`,
      alt: `Neslihan Güzellik Merkezi - Görsel ${i + 1}`,
      description: `Neslihan Güzellik Merkezi Web Platformu — Ekran ${i + 1}`
    })),
  },
  {
    id: 'dr-sayfa',
    code: 'PROJECT 10',
    title: {
      tr: 'Dr. Klinik & Uzman Hekim Tanıtım Platformu',
      en: 'Dr. Medical Specialist & Clinic Web Portal'
    },
    subtitle: {
      tr: 'Sağlık profesyoneli için tasarlanan, uzmanlık alanları ve hasta bilgilendirme odaklı web sitesi.',
      en: 'Dedicated medical portfolio and patient information portal for a healthcare specialist.'
    },
    description: {
      tr: 'Sağlık profesyoneli için özel olarak tasarlanan modern, güven veren ve kullanıcı dostu tanıtım web sayfası. Tedavi alanları, akademik özgeçmiş, hasta bilgilendirme rehberleri ve hızlı randevu/iletişim modüllerini içerir.',
      en: 'A trustworthy, accessible web portal tailored for a medical specialist, organizing clinical specialties, academic credentials, patient guides, and direct appointment channels.'
    },
    highlights: {
      tr: [
        'Yüksek erişilebilirlik ve güven odaklı medikal UI/UX tasarımı',
        'Tedavi modülleri, soru-cevap ve hızlı WhatsApp/klinik randevu entegrasyonu',
        '15 ekranlık detaylı masaüstü ve mobil arayüz dokümantasyonu'
      ],
      en: [
        'High-accessibility, trust-centered medical UI/UX design system',
        'Treatment guides, FAQ modules, and direct clinic appointment integration',
        '15 documented interface views across desktop and mobile breakpoints'
      ]
    },
    category: 'Web Design',
    categoryLabel: { tr: 'Medikal Web Tasarım', en: 'Medical Web Design' },
    year: '2025',
    tabColor: '#0D9488',
    cardBg: '#F0FDFA',
    textColor: '#141413',
    accentColor: '#0D9488',
    stack: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'Medical UI/UX', 'SEO'],
    metrics: [
      { label: { tr: 'Görünüm', en: 'Views' }, value: '15 Ekran' },
      { label: { tr: 'Erişilebilirlik', en: 'Accessibility' }, value: 'Yüksek' },
      { label: { tr: 'Kategori', en: 'Sector' }, value: 'Sağlık / Klinik' },
    ],
    images: [
      { src: '/gallery/dr/dr1.jpeg', alt: 'Dr. Tanıtım Sayfası - Ana Görünüm', description: 'Uzman hekim ana sayfa karşılama ekranı' },
      { src: '/gallery/dr/dr2.jpeg', alt: 'Dr. Tanıtım Sayfası - Uzmanlıklar', description: 'Tedavi ve uzmanlık alanları modülü' },
      { src: '/gallery/dr/dr3.jpeg', alt: 'Dr. Tanıtım Sayfası - İletişim', description: 'Randevu ve klinik iletişim ekranı' },
      ...Array.from({ length: 11 }, (_, i) => ({
        src: `/gallery/dr/WhatsApp Image 2025-10-17 at 11.59.30 (${i + 1}).jpeg`,
        alt: `Dr. Tanıtım Sayfası - Detay ${i + 1}`,
        description: `Medikal web platformu detay görünümü ${i + 1}`,
      })),
    ],
  },
];

