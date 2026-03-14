// import Link from "next/link";

// export default function DebtCollection() {
//   return (
//     <main className="bg-white text-gray-900">


//       {/* HERO */}
//       <section className="py-24 px-10 bg-gradient-to-b from-gray-50 to-white">

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//           <div>

//             <div className="text-orange-500 text-5xl mb-6">💰</div>

//             <h1 className="text-5xl font-bold mb-6 leading-tight">
//               Debt Collection
//               <br />
//               Management Platform
//             </h1>

//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Amanrow Debt Collection is a powerful digital platform designed
//               to help agencies automate recovery workflows, improve collection
//               rates, and manage debtor portfolios efficiently from a single system.
//             </p>

//             <div className="flex gap-4">

//               <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
//                 Request Demo
//               </button>

//               <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
//                 View Features
//               </button>

//             </div>

//           </div>


//           <div>

//             <img
//               src="https://images.unsplash.com/photo-1604594849809-dfedbc827105"
//               alt="Debt Collection"
//               className="rounded-2xl shadow-2xl"
//             />

//           </div>

//         </div>

//       </section>



//       {/* BENEFITS */}
//       <section className="py-24 px-10 bg-white">

//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-4xl font-bold mb-16 text-center">
//             Benefits for Collection Agencies
//           </h2>

//           <div className="grid md:grid-cols-2 gap-14 items-center">

//             <div>

//               <img
//                 src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
//                 alt="benefits"
//                 className="rounded-2xl shadow-xl"
//               />

//             </div>


//             <div className="space-y-6 text-gray-600 leading-relaxed">

//               <p>
//                 🚀 <b>Higher Recovery Rates</b> — Automated workflows and
//                 structured follow-ups increase recovery efficiency.
//               </p>

//               <p>
//                 🏆 <b>Competitive Advantage</b> — Provide transparent dashboards,
//                 case tracking, and professional reporting to clients.
//               </p>

//               <p>
//                 🔒 <b>Legal & Regulatory Compliance</b> — Maintain records of
//                 every communication, activity and legal step.
//               </p>

//               <p>
//                 📈 <b>Predictable Revenue</b> — Monitor settlements, fees and
//                 portfolio performance in real time.
//               </p>

//               <p>
//                 ⚙️ <b>Operational Efficiency</b> — Automate assignment rules,
//                 case distribution and follow-up communications.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>



//       {/* USE CASES */}
//       <section className="py-24 px-10 bg-gray-50">

//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//           <div>

//             <h2 className="text-4xl font-bold mb-8">
//               Core Use Cases
//             </h2>

//             <ul className="space-y-4 text-gray-600 text-lg">

//               <li>✔ Consumer debt collections</li>
//               <li>✔ Banking & financial institutions</li>
//               <li>✔ Real estate & leasing recovery</li>
//               <li>✔ Healthcare billing recovery</li>
//               <li>✔ Government fines & penalties</li>
//               <li>✔ B2B commercial debt collection</li>

//             </ul>

//           </div>


//           <div>

//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               alt="use cases"
//               className="rounded-2xl shadow-xl"
//             />

//           </div>

//         </div>

//       </section>



//       {/* WHY AGENCIES LOVE */}
//       <section className="py-24 px-10 bg-white">

//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-4xl font-bold mb-16 text-center">
//             Why Agencies Love This Platform
//           </h2>


//           <div className="grid md:grid-cols-3 gap-10">

//             <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

//               <h3 className="font-semibold mb-3">
//                 Scalable Platform
//               </h3>

//               <p className="text-gray-600">
//                 Handle 100 or 100,000 cases without performance issues.
//               </p>

//             </div>


//             <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

//               <h3 className="font-semibold mb-3">
//                 Complete Audit Trail
//               </h3>

//               <p className="text-gray-600">
//                 Every action, communication and settlement is logged securely.
//               </p>

//             </div>


//             <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

//               <h3 className="font-semibold mb-3">
//                 Multi-Client Support
//               </h3>

//               <p className="text-gray-600">
//                 Manage multiple portfolios and agencies from one platform.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>



//       {/* CTA */}
//       <section
//         className="py-24 px-10 text-center text-white bg-cover bg-center relative"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d)",
//         }}
//       >

//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative max-w-3xl mx-auto">

//           <h2 className="text-4xl font-bold mb-4">
//             Request a Demo Today
//           </h2>

//           <p className="text-gray-200 mb-8">
//             Discover how Amanrow Debt Collection Platform can improve
//             recovery rates and streamline your operations.
//           </p>

//           <Link href="/#contact">
//             <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white shadow-lg">
//               Contact Us
//             </button>
//           </Link>

//         </div>

//       </section>


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
      title1: "Debt Collection",
      title2: "Management Platform",
      desc: "Amanrow Debt Collection is a powerful digital platform designed to help agencies automate recovery workflows, improve collection rates, and manage debtor portfolios efficiently from a single system.",
      demo: "Request Demo",
      features: "View Features",
    },
    benefits: {
      heading: "Benefits for Collection Agencies",
      items: [
        { icon: "🚀", title: "Higher Recovery Rates", desc: "Automated workflows and structured follow-ups increase recovery efficiency." },
        { icon: "🏆", title: "Competitive Advantage", desc: "Provide transparent dashboards, case tracking, and professional reporting to clients." },
        { icon: "🔒", title: "Legal & Regulatory Compliance", desc: "Maintain records of every communication, activity and legal step." },
        { icon: "📈", title: "Predictable Revenue", desc: "Monitor settlements, fees and portfolio performance in real time." },
        { icon: "⚙️", title: "Operational Efficiency", desc: "Automate assignment rules, case distribution and follow-up communications." },
      ],
    },
    usecases: {
      heading: "Core Use Cases",
      items: [
        "Consumer debt collections",
        "Banking & financial institutions",
        "Real estate & leasing recovery",
        "Healthcare billing recovery",
        "Government fines & penalties",
        "B2B commercial debt collection",
      ],
    },
    why: {
      heading: "Why Agencies Love This Platform",
      cards: [
        { title: "Scalable Platform", desc: "Handle 100 or 100,000 cases without performance issues." },
        { title: "Complete Audit Trail", desc: "Every action, communication and settlement is logged securely." },
        { title: "Multi-Client Support", desc: "Manage multiple portfolios and agencies from one platform." },
      ],
    },
    cta: {
      heading: "Request a Demo Today",
      desc: "Discover how Amanrow Debt Collection Platform can improve recovery rates and streamline your operations.",
      button: "Contact Us",
    },
    footer: "© 2026 Amanrow ERP. All rights reserved.",
  },
  ar: {
    nav: { home: "الرئيسية", login: "تسجيل الدخول" },
    hero: {
      title1: "منصة إدارة",
      title2: "تحصيل الديون",
      desc: "أمانرو لتحصيل الديون هي منصة رقمية قوية مصممة لمساعدة الوكالات على أتمتة سير عمل التحصيل وتحسين معدلات الاسترداد وإدارة محافظ المدينين بكفاءة من نظام واحد.",
      demo: "طلب عرض تجريبي",
      features: "عرض المميزات",
    },
    benefits: {
      heading: "فوائد لوكالات التحصيل",
      items: [
        { icon: "🚀", title: "معدلات استرداد أعلى", desc: "تزيد سير العمل الآلية والمتابعة المنظمة من كفاءة الاسترداد." },
        { icon: "🏆", title: "ميزة تنافسية", desc: "توفير لوحات معلومات شفافة وتتبع القضايا وتقارير احترافية للعملاء." },
        { icon: "🔒", title: "الامتثال القانوني والتنظيمي", desc: "الاحتفاظ بسجلات كل اتصال ونشاط وخطوة قانونية." },
        { icon: "📈", title: "إيرادات قابلة للتنبؤ", desc: "مراقبة التسويات والرسوم وأداء المحفظة في الوقت الفعلي." },
        { icon: "⚙️", title: "الكفاءة التشغيلية", desc: "أتمتة قواعد التعيين وتوزيع القضايا واتصالات المتابعة." },
      ],
    },
    usecases: {
      heading: "حالات الاستخدام الأساسية",
      items: [
        "تحصيل ديون المستهلكين",
        "البنوك والمؤسسات المالية",
        "استرداد العقارات والإيجارات",
        "استرداد فواتير الرعاية الصحية",
        "الغرامات والعقوبات الحكومية",
        "تحصيل الديون التجارية بين الشركات",
      ],
    },
    why: {
      heading: "لماذا تحب الوكالات هذه المنصة",
      cards: [
        { title: "منصة قابلة للتوسع", desc: "التعامل مع 100 أو 100,000 قضية دون مشاكل في الأداء." },
        { title: "مسار تدقيق كامل", desc: "يتم تسجيل كل إجراء واتصال وتسوية بشكل آمن." },
        { title: "دعم متعدد العملاء", desc: "إدارة محافظ ووكالات متعددة من منصة واحدة." },
      ],
    },
    cta: {
      heading: "اطلب عرضاً تجريبياً اليوم",
      desc: "اكتشف كيف يمكن لمنصة أمانرو لتحصيل الديون تحسين معدلات الاسترداد وتبسيط عملياتك.",
      button: "تواصل معنا",
    },
    footer: "© 2026 أمانرو ERP. جميع الحقوق محفوظة.",
  },
};

export default function DebtCollection() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const t = translations[lang];
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
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
            <div className="text-orange-500 text-5xl mb-6">💰</div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {t.hero.title1}<br />{t.hero.title2}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.hero.desc}</p>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
                {t.hero.demo}
              </button>
              <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                {t.hero.features}
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1604594849809-dfedbc827105"
              alt="Debt Collection"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">{t.benefits.heading}</h2>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="benefits"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {t.benefits.items.map((item, i) => (
                <p key={i}>{item.icon} <b>{item.title}</b> — {item.desc}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">{t.usecases.heading}</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              {t.usecases.items.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="use cases"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* WHY AGENCIES LOVE */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">{t.why.heading}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {t.why.cards.map((card, i) => (
              <div key={i} className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">
                <h3 className="font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-10 text-center text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{t.cta.heading}</h2>
          <p className="text-gray-200 mb-8">{t.cta.desc}</p>
          <Link href="/#contact">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white shadow-lg">
              {t.cta.button}
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t text-gray-500">
        {t.footer}
      </footer>

    </main>
  );
}