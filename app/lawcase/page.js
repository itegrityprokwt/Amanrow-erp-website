// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";

// const translations = {
//   en: {
//     nav: { home: "Home", login: "Login" },
//     hero: {
//       title1: "Lawcase",
//       title2: "Management System",
//       desc: "Amanrow Lawcase is a powerful legal case management platform designed for modern law firms. Manage cases, documents, clients and legal workflows from a single cloud based system.",
//       demo: "Request Demo",
//       features: "View Features",
//     },
//     keyfeatures: {
//       heading: "Key Features",
//       cards: [
//         { icon: "📊", title: "Case Tracking", desc: "Monitor legal cases, activities and progress from a centralized dashboard." },
//         { icon: "📁", title: "Document Management", desc: "Store and organize legal documents securely with easy access and sharing." },
//         { icon: "👥", title: "Client Management", desc: "Manage client profiles, legal records and communication history." },
//         { icon: "⏱", title: "Time Tracking", desc: "Track time spent on cases to improve productivity and billing accuracy." },
//         { icon: "📈", title: "Analytics", desc: "Gain insights into case progress, performance and legal operations." },
//         { icon: "☁️", title: "Cloud Access", desc: "Access cases and documents securely from anywhere in the world." },
//       ],
//     },
//     productfeatures: {
//       heading: "Product Features",
//       items: [
//         "Employee details",
//         "Case detail management",
//         "User role permissions",
//         "Case lifecycle management",
//         "Regulations & legislation records",
//         "Client database",
//         "Power of attorney records",
//       ],
//     },
//     pricing: {
//       heading: "Pricing Plans",
//       subheading: "Simple transparent pricing for modern law firms",
//       badge: "Most Popular",
//       planName: "Lawcase Annual Plan",
//       planDesc: "Complete legal case management platform",
//       price: "350",
//       currency: "KWD / year",
//       items: [
//         "Unlimited case tracking",
//         "Client management",
//         "Secure document storage",
//         "Legal workflow automation",
//         "Cloud access",
//         "Advanced analytics dashboard",
//       ],
//       buyNow: "Buy Now",
//       note: "*All prices are in Kuwaiti Dinar (KWD)",
//     },
//     cta: {
//       trusted: "Trusted by Leading Organizations",
//       heading: "Simplify Your Legal Case Management",
//       desc: "Manage cases, clients, documents and workflows in one modern ERP platform.",
//       demo: "Request Demo",
//       back: "Back to Home",
//     },
//     footer: "© 2026 Amanrow ERP. All rights reserved.",
//   },
//   ar: {
//     nav: { home: "الرئيسية", login: "تسجيل الدخول" },
//     hero: {
//       title1: "نظام إدارة",
//       title2: "القضايا القانونية",
//       desc: "أمانرو لإدارة القضايا هو منصة قوية لإدارة القضايا القانونية مصممة لمكاتب المحاماة الحديثة. إدارة القضايا والوثائق والعملاء وسير العمل القانوني من نظام سحابي واحد.",
//       demo: "طلب عرض تجريبي",
//       features: "عرض المميزات",
//     },
//     keyfeatures: {
//       heading: "الميزات الرئيسية",
//       cards: [
//         { icon: "📊", title: "تتبع القضايا", desc: "مراقبة القضايا القانونية والأنشطة والتقدم من لوحة تحكم مركزية." },
//         { icon: "📁", title: "إدارة الوثائق", desc: "تخزين وتنظيم الوثائق القانونية بأمان مع سهولة الوصول والمشاركة." },
//         { icon: "👥", title: "إدارة العملاء", desc: "إدارة ملفات تعريف العملاء والسجلات القانونية وتاريخ التواصل." },
//         { icon: "⏱", title: "تتبع الوقت", desc: "تتبع الوقت المستغرق في القضايا لتحسين الإنتاجية ودقة الفواتير." },
//         { icon: "📈", title: "التحليلات", desc: "الحصول على رؤى حول تقدم القضايا والأداء والعمليات القانونية." },
//         { icon: "☁️", title: "الوصول السحابي", desc: "الوصول إلى القضايا والوثائق بأمان من أي مكان في العالم." },
//       ],
//     },
//     productfeatures: {
//       heading: "مميزات المنتج",
//       items: [
//         "تفاصيل الموظفين",
//         "إدارة تفاصيل القضايا",
//         "صلاحيات أدوار المستخدمين",
//         "إدارة دورة حياة القضية",
//         "سجلات الأنظمة والتشريعات",
//         "قاعدة بيانات العملاء",
//         "سجلات التوكيل الرسمي",
//       ],
//     },
//     pricing: {
//       heading: "خطط الأسعار",
//       subheading: "أسعار شفافة وبسيطة لمكاتب المحاماة الحديثة",
//       badge: "الأكثر شعبية",
//       planName: "خطة لوكيس السنوية",
//       planDesc: "منصة إدارة القضايا القانونية الكاملة",
//       price: "350",
//       currency: "د.ك / سنة",
//       items: [
//         "تتبع قضايا غير محدود",
//         "إدارة العملاء",
//         "تخزين آمن للوثائق",
//         "أتمتة سير العمل القانوني",
//         "وصول سحابي",
//         "لوحة تحليلات متقدمة",
//       ],
//       buyNow: "اشتر الآن",
//       note: "*جميع الأسعار بالدينار الكويتي (KWD)",
//     },
//     cta: {
//       trusted: "موثوق به من قِبل المؤسسات الرائدة",
//       heading: "بسّط إدارة قضاياك القانونية",
//       desc: "إدارة القضايا والعملاء والوثائق وسير العمل في منصة ERP حديثة واحدة.",
//       demo: "طلب عرض تجريبي",
//       back: "العودة للرئيسية",
//     },
//     footer: "© 2026 أمانرو ERP. جميع الحقوق محفوظة.",
//   },
// };

// export default function Lawcase() {
//   const [lang, setLang] = useState("en");

//   useEffect(() => {
//     const saved = localStorage.getItem("lang");
//     if (saved) setLang(saved);
//   }, []);

//   const t = translations[lang];
//   const isAr = lang === "ar";
//   const dir = isAr ? "rtl" : "ltr";

//   const toggleLang = () => {
//     const newLang = lang === "en" ? "ar" : "en";
//     setLang(newLang);
//     localStorage.setItem("lang", newLang);
//   };

//   return (
//     <main className="bg-white text-gray-900" dir={dir}>

//       {/* NAVBAR */}
//       <header className="flex justify-between items-center px-10 py-4 border-b bg-white">
//         <div className="flex items-center">
//           <img src="/amanrow-logo.png" alt="Amanrow Logo" className="h-8 w-auto" />
//         </div>
//         <nav className="flex items-center gap-8">
//           <Link href="/" className="text-gray-600 hover:text-black">{t.nav.home}</Link>
//           <button
//             onClick={toggleLang}
//             className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
//           >
//             {lang === "en" ? "العربية" : "English"}
//           </button>
//           <a href="https://app.amanrow.com/" target="_blank" rel="noopener noreferrer">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
//               {t.nav.login}
//             </button>
//           </a>
//         </nav>
//       </header>

//       {/* HERO */}
//       <section className="py-24 px-10 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <div className="text-blue-600 text-5xl mb-6">⚖️</div>
//             <h1 className="text-5xl font-bold mb-6 leading-tight">
//               {t.hero.title1}<br />{t.hero.title2}
//             </h1>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t.hero.desc}</p>
//             <div className="flex gap-4">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
//                 {t.hero.demo}
//               </button>
//               <button className="border px-6 py-3 rounded-md hover:bg-gray-100">
//                 {t.hero.features}
//               </button>
//             </div>
//           </div>
//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
//               alt="Lawcase"
//               className="rounded-xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* KEY FEATURES */}
//       <section className="py-24 px-10 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-16">{t.keyfeatures.heading}</h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             {t.keyfeatures.cards.map((card, i) => (
//               <div key={i} className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">
//                 <div className="text-3xl mb-4">{card.icon}</div>
//                 <h3 className="font-semibold mb-3">{card.title}</h3>
//                 <p className="text-gray-600">{card.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRODUCT FEATURES */}
//       <section className="py-24 px-10 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81"
//               alt="law"
//               className="rounded-xl shadow-xl"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl font-bold mb-8">{t.productfeatures.heading}</h2>
//             <ul className="space-y-4 text-gray-600">
//               {t.productfeatures.items.map((item, i) => (
//                 <li key={i}>✔ {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* PRICING */}
//       <section className="py-28 px-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-20 blur-3xl rounded-full"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6">{t.pricing.heading}</h2>
//           <p className="text-gray-500 mb-16">{t.pricing.subheading}</p>
//           <div className="flex justify-center">
//             <div className="relative w-[420px] rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
//               <div className="bg-white backdrop-blur-xl rounded-3xl p-12">
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-5 py-1 rounded-full shadow-lg">
//                   {t.pricing.badge}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{t.pricing.planName}</h3>
//                 <p className="text-gray-500 mb-8">{t.pricing.planDesc}</p>
//                 <div className="mb-10">
//                   <span className="text-6xl font-bold text-gray-900">{t.pricing.price}</span>
//                   <span className="text-gray-500 ml-2 text-lg">{t.pricing.currency}</span>
//                 </div>
//                 <ul className="space-y-4 text-gray-600 mb-10 text-left">
//                   {t.pricing.items.map((item, i) => (
//                     <li key={i} className="flex items-center gap-3">
//                       <span className="text-green-500">✔</span> {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
//                   {t.pricing.buyNow}
//                 </button>
//                 <p className="text-sm text-gray-400 mt-6">{t.pricing.note}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SOCIAL PROOF + CTA */}
//       <section className="py-24 px-10 bg-gray-50 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 blur-3xl"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <h3 className="text-lg font-semibold text-gray-500 mb-12 uppercase tracking-wider">
//             {t.cta.trusted}
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center opacity-70 mb-20">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-8 mx-auto" />
//             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-8 mx-auto" />
//             <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-8 mx-auto" />
//             <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-8 mx-auto" />
//             <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-8 mx-auto" />
//           </div>
//           <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-12 border">
//             <h2 className="text-3xl font-bold mb-4">{t.cta.heading}</h2>
//             <p className="text-gray-600 mb-8">{t.cta.desc}</p>
//             <div className="flex justify-center gap-4 flex-wrap">
//               <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-7 py-3 rounded-xl shadow hover:scale-105 transition">
//                 {t.cta.demo}
//               </button>
//               <Link href="/">
//                 <button className="border px-7 py-3 rounded-xl hover:bg-gray-100 transition">
//                   {t.cta.back}
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="text-center py-6 border-t text-gray-500">
//         {t.footer}
//       </footer>

//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: { home: "Home", login: "Login" },
    hero: {
      title1: "Lawcase",
      title2: "Management System",
      desc: "Amanrow Lawcase is a powerful legal case management platform designed for modern law firms. Manage cases, documents, clients and legal workflows from a single cloud based system.",
      demo: "Request Demo",
      features: "View Features",
    },
    keyfeatures: {
      heading: "Key Features",
      cards: [
        { icon: "📊", title: "Case Tracking", desc: "Monitor legal cases, activities and progress from a centralized dashboard." },
        { icon: "📁", title: "Document Management", desc: "Store and organize legal documents securely with easy access and sharing." },
        { icon: "👥", title: "Client Management", desc: "Manage client profiles, legal records and communication history." },
        { icon: "⏱", title: "Time Tracking", desc: "Track time spent on cases to improve productivity and billing accuracy." },
        { icon: "📈", title: "Analytics", desc: "Gain insights into case progress, performance and legal operations." },
        { icon: "☁️", title: "Cloud Access", desc: "Access cases and documents securely from anywhere in the world." },
      ],
    },
    productfeatures: {
      heading: "Product Features",
      items: [
        "Employee details",
        "Case detail management",
        "User role permissions",
        "Case lifecycle management",
        "Regulations & legislation records",
        "Client database",
        "Power of attorney records",
      ],
    },
    pricing: {
      heading: "Pricing Plans",
      subheading: "Simple transparent pricing for modern law firms",
      badge: "Most Popular",
      planName: "Lawcase Annual Plan",
      planDesc: "Complete legal case management platform",
      currency: "KWD / year",
      items: [
        "Unlimited case tracking",
        "Client management",
        "Secure document storage",
        "Legal workflow automation",
        "Cloud access",
        "Advanced analytics dashboard",
      ],
      buyNow: "Buy Now",
      note: "*All prices are in Kuwaiti Dinar (KWD)",
      loading: "Loading price...",
      error: "Price unavailable",
    },
    cta: {
      trusted: "Trusted by Leading Organizations",
      heading: "Simplify Your Legal Case Management",
      desc: "Manage cases, clients, documents and workflows in one modern ERP platform.",
      demo: "Request Demo",
      back: "Back to Home",
    },
    footer: "© 2026 Amanrow ERP. All rights reserved.",
  },
  ar: {
    nav: { home: "الرئيسية", login: "تسجيل الدخول" },
    hero: {
      title1: "نظام إدارة",
      title2: "القضايا القانونية",
      desc: "أمانرو لإدارة القضايا هو منصة قوية لإدارة القضايا القانونية مصممة لمكاتب المحاماة الحديثة. إدارة القضايا والوثائق والعملاء وسير العمل القانوني من نظام سحابي واحد.",
      demo: "طلب عرض تجريبي",
      features: "عرض المميزات",
    },
    keyfeatures: {
      heading: "الميزات الرئيسية",
      cards: [
        { icon: "📊", title: "تتبع القضايا", desc: "مراقبة القضايا القانونية والأنشطة والتقدم من لوحة تحكم مركزية." },
        { icon: "📁", title: "إدارة الوثائق", desc: "تخزين وتنظيم الوثائق القانونية بأمان مع سهولة الوصول والمشاركة." },
        { icon: "👥", title: "إدارة العملاء", desc: "إدارة ملفات تعريف العملاء والسجلات القانونية وتاريخ التواصل." },
        { icon: "⏱", title: "تتبع الوقت", desc: "تتبع الوقت المستغرق في القضايا لتحسين الإنتاجية ودقة الفواتير." },
        { icon: "📈", title: "التحليلات", desc: "الحصول على رؤى حول تقدم القضايا والأداء والعمليات القانونية." },
        { icon: "☁️", title: "الوصول السحابي", desc: "الوصول إلى القضايا والوثائق بأمان من أي مكان في العالم." },
      ],
    },
    productfeatures: {
      heading: "مميزات المنتج",
      items: [
        "تفاصيل الموظفين",
        "إدارة تفاصيل القضايا",
        "صلاحيات أدوار المستخدمين",
        "إدارة دورة حياة القضية",
        "سجلات الأنظمة والتشريعات",
        "قاعدة بيانات العملاء",
        "سجلات التوكيل الرسمي",
      ],
    },
    pricing: {
      heading: "خطط الأسعار",
      subheading: "أسعار شفافة وبسيطة لمكاتب المحاماة الحديثة",
      badge: "الأكثر شعبية",
      planName: "خطة لوكيس السنوية",
      planDesc: "منصة إدارة القضايا القانونية الكاملة",
      currency: "د.ك / سنة",
      items: [
        "تتبع قضايا غير محدود",
        "إدارة العملاء",
        "تخزين آمن للوثائق",
        "أتمتة سير العمل القانوني",
        "وصول سحابي",
        "لوحة تحليلات متقدمة",
      ],
      buyNow: "اشتر الآن",
      note: "*جميع الأسعار بالدينار الكويتي (KWD)",
      loading: "جارٍ تحميل السعر...",
      error: "السعر غير متاح",
    },
    cta: {
      trusted: "موثوق به من قِبل المؤسسات الرائدة",
      heading: "بسّط إدارة قضاياك القانونية",
      desc: "إدارة القضايا والعملاء والوثائق وسير العمل في منصة ERP حديثة واحدة.",
      demo: "طلب عرض تجريبي",
      back: "العودة للرئيسية",
    },
    footer: "© 2026 أمانرو ERP. جميع الحقوق محفوظة.",
  },
};

export default function Lawcase() {
  const [lang, setLang] = useState("en");
  const [price, setPrice] = useState(null);
  const [priceLoading, setPriceLoading] = useState(true);
  const [priceError, setPriceError] = useState(false);
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    const fetchPrice = async () => {
      setPriceLoading(true);
      setPriceError(false);
      try {
        const response = await fetch("https://iip.amanrow.com/api/Iipsys/get_package_ref", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: {
              actioncode: "get_package_ref",
              system_cd: "Lcc",
            },
          }),
        });

        if (!response.ok)
          throw new Error("Network response was not ok");

        const data = await response.json();

        const packageList = data?.output?.package_ref;
        if (
          data?.result?.rstatus === true &&
          Array.isArray(packageList) &&
          packageList.length > 0
        ) {
          setPrice(packageList[0].price);
          setPackageData(packageList[0]);
        } else {
          throw new Error("Invalid data structure");
        }
      } catch (error) {
        console.error("Failed to fetch price:", error);
        setPriceError(true);
      } finally {
        setPriceLoading(false);
      }
    };

    fetchPrice();
  }, []);

  const t = translations[lang];
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const renderPrice = () => {
    if (priceLoading) {
      return (
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-400 text-lg">{t.pricing.loading}</span>
        </div>
      );
    }
    if (priceError || price === null) {
      return (
        <div className="mb-10">
          <span className="text-red-400 text-lg">{t.pricing.error}</span>
        </div>
      );
    }
    return (
      <div className="mb-10">
        <span className="text-6xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500 ml-2 text-lg">{t.pricing.currency}</span>
      </div>
    );
  };

  return (
    <main className="bg-white text-gray-900" dir={dir}>

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-4 border-b bg-white">
        <div className="flex items-center">
          <img src="/amanrow-logo.png" alt="Amanrow Logo" className="h-8 w-auto" />
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-black">{t.nav.home}</Link>
          <button
            onClick={toggleLang}
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>
          <a href="https://app.amanrow.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
              {t.nav.login}
            </button>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="py-24 px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-blue-600 text-5xl mb-6">⚖️</div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {t.hero.title1}<br />{t.hero.title2}
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t.hero.desc}</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                {t.hero.demo}
              </button>
              <button className="border px-6 py-3 rounded-md hover:bg-gray-100">
                {t.hero.features}
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              alt="Lawcase"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">{t.keyfeatures.heading}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {t.keyfeatures.cards.map((card, i) => (
              <div key={i} className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES */}
      <section className="py-24 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81"
              alt="law"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">{t.productfeatures.heading}</h2>
            <ul className="space-y-4 text-gray-600">
              {t.productfeatures.items.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 px-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.pricing.heading}</h2>
          <p className="text-gray-500 mb-16">{t.pricing.subheading}</p>
          <div className="flex justify-center">
            <div className="relative w-[420px] rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <div className="bg-white backdrop-blur-xl rounded-3xl p-12">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-5 py-1 rounded-full shadow-lg">
                  {t.pricing.badge}
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.pricing.planName}</h3>
                <p className="text-gray-500 mb-8">{t.pricing.planDesc}</p>

                {renderPrice()}

                <ul className="space-y-4 text-gray-600 mb-10 text-left">
                  {t.pricing.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-500">✔</span> {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    if (packageData) {
                      window.open(
                        `https://www.itegritypro.com/register/en?pak=${packageData.package_no}&type=paid&system_cd=${packageData.system_cd}`,
                        "_blank"
                      );
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  {t.pricing.buyNow}
                </button>
                <p className="text-sm text-gray-400 mt-6">{t.pricing.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF + CTA */}
      <section className="py-24 px-10 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-500 mb-12 uppercase tracking-wider">
            {t.cta.trusted}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center opacity-70 mb-20">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-8 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-8 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-8 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-8 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-8 mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-12 border">
            <h2 className="text-3xl font-bold mb-4">{t.cta.heading}</h2>
            <p className="text-gray-600 mb-8">{t.cta.desc}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-7 py-3 rounded-xl shadow hover:scale-105 transition">
                {t.cta.demo}
              </button>
              <Link href="/">
                <button className="border px-7 py-3 rounded-xl hover:bg-gray-100 transition">
                  {t.cta.back}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t text-gray-500">
        {t.footer}
      </footer>

    </main>
  );
}