"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      products: "Products",
      features: "Features",
      contact: "Contact",
      login: "Login",
    },
    hero: {
      title1: "Amanrow ERP",
      title2: "Cloud Platform",
      desc: "Amanrow ERP is a modern cloud platform that helps organizations streamline legal operations, manage debt collection workflows, and oversee human resource management — all from a single integrated system designed for efficiency, transparency, and scalable growth.",
    },
    solutions: {
      heading: "Our ERP Solutions",
      subheading: "Amanrow ERP Solutions",
      desc: "Powerful enterprise modules designed to streamline legal, financial and human resource operations in one unified ERP platform.",
      lawcase: {
        title: "LawCase",
        desc: "A one stop solution for Law firms providing the best Legal software for clients. Law case module has come a long way in this business and with the advent of digital technology Amanrow has chosen to provide its clients with an easy tool.",
        link: "Learn more",
      },
      debt: {
        title: "Debt Collection Management",
        desc: "The Debt Collection Management Model is a structured workflow for tracking unpaid obligations, communicating with debtors, negotiating settlements, and enforcing repayment. It centralizes debtor information and monitors recovery performance.",
        link: "Learn more",
      },
      hr: {
        title: "Human Resource",
        desc: "Human Resources Management is a key functional area in every organization today and drives the workforce dynamics. An effective management of the workforce paves way for a successful organization.",
        link: "Learn more",
      },
    },
    why: {
      heading: "Why Choose Amanrow ERP",
      desc: "Amanrow ERP provides powerful enterprise tools designed to simplify business operations, improve efficiency and enable organizations to scale faster.",
      cards: [
        { icon: "☁️", title: "Cloud Based Platform", desc: "Access your ERP system securely from anywhere in the world with our reliable cloud infrastructure." },
        { icon: "⚡", title: "Fast & Scalable", desc: "Built with modern technologies designed to handle growing businesses and enterprise workloads." },
        { icon: "🔒", title: "Enterprise Security", desc: "Your business data is protected with advanced enterprise grade security standards." },
        { icon: "📊", title: "Real Time Analytics", desc: "Monitor operations, performance and financial data through powerful dashboards." },
        { icon: "⚙️", title: "Workflow Automation", desc: "Automate repetitive business processes and improve operational efficiency across departments." },
        { icon: "🌍", title: "Multi Business Support", desc: "Manage multiple departments, teams and workflows within one unified ERP system." },
      ],
    },
    about: {
      heading: "About Amanrow ERP",
      p1: "Amanrow ERP is a modern cloud based enterprise platform designed to simplify business operations and improve productivity across organizations.",
      p2: "Our ERP platform enables companies to manage legal operations, debt collection workflows and human resource management through a unified and powerful digital ecosystem.",
      stats: [
        { value: "10+", label: "Enterprise Modules" },
        { value: "100+", label: "Business Workflows" },
        { value: "24/7", label: "Cloud Access" },
        { value: "Secure", label: "Enterprise Security" },
      ],
    },
    contact: {
      heading: "Contact Us",
      desc: "Talk to our experts about Amanrow ERP solutions and discover how our platform can help automate legal operations, debt recovery and human resource management.",
      office: "Office",
      officeVal: "Ibne khaldun Street, AlFouz Complex Floor 1, Office 18 Hawally, Kuwait",
      email: "Email",
      phone: "Phone",
      hours: "Working Hours",
      hoursVal: "Monday – Saturday\n9:00 AM – 6:00 PM",
      formTitle: "Send us a Message",
      name: "Full Name",
      emailPlaceholder: "Email Address",
      company: "Company Name",
      message: "Your Message",
      send: "Send Message",
    },
    footer: "© 2026 Amanrow ERP. All rights reserved.",
  },
  ar: {
    nav: {
      products: "المنتجات",
      features: "المميزات",
      contact: "تواصل معنا",
      login: "تسجيل الدخول",
    },
    hero: {
      title1: "أمانرو ERP",
      title2: "منصة سحابية متكاملة",
      desc: "أمانرو ERP هي منصة سحابية حديثة تساعد المؤسسات على تبسيط العمليات القانونية، وإدارة سير عمل تحصيل الديون، والإشراف على إدارة الموارد البشرية — كل ذلك من نظام متكامل واحد مصمم للكفاءة والشفافية والنمو القابل للتوسع.",
    },
    solutions: {
      heading: "حلول ERP لدينا",
      subheading: "حلول أمانرو ERP",
      desc: "وحدات مؤسسية قوية مصممة لتبسيط العمليات القانونية والمالية وإدارة الموارد البشرية في منصة ERP موحدة.",
      lawcase: {
        title: "إدارة القضايا القانونية",
        desc: "حل متكامل لمكاتب المحاماة يوفر أفضل برامج إدارة القضايا للعملاء. قطع هذا البرنامج شوطاً طويلاً في هذا المجال، وقد اختارت أمانرو تزويد عملائها بأداة سهلة الاستخدام.",
        link: "اعرف المزيد",
      },
      debt: {
        title: "إدارة تحصيل الديون",
        desc: "نموذج إدارة تحصيل الديون هو سير عمل منظم لتتبع الالتزامات غير المسددة، والتواصل مع المدينين، والتفاوض على التسويات، وتنفيذ السداد. يقوم بمركزة معلومات المدينين ومراقبة أداء الاسترداد.",
        link: "اعرف المزيد",
      },
      hr: {
        title: "الموارد البشرية",
        desc: "تعد إدارة الموارد البشرية من المجالات الوظيفية الرئيسية في كل مؤسسة اليوم وتقود ديناميكيات القوى العاملة. تمهد الإدارة الفعالة للقوى العاملة الطريق نحو مؤسسة ناجحة.",
        link: "اعرف المزيد",
      },
    },
    why: {
      heading: "لماذا تختار أمانرو ERP",
      desc: "توفر أمانرو ERP أدوات مؤسسية قوية مصممة لتبسيط عمليات الأعمال وتحسين الكفاءة وتمكين المؤسسات من النمو بشكل أسرع.",
      cards: [
        { icon: "☁️", title: "منصة سحابية", desc: "الوصول إلى نظام ERP الخاص بك بأمان من أي مكان في العالم مع البنية التحتية السحابية الموثوقة لدينا." },
        { icon: "⚡", title: "سريع وقابل للتوسع", desc: "مبني بتقنيات حديثة مصممة للتعامل مع الأعمال المتنامية وأحمال العمل المؤسسية." },
        { icon: "🔒", title: "أمان مؤسسي", desc: "بيانات عملك محمية بمعايير أمان مؤسسية متقدمة." },
        { icon: "📊", title: "تحليلات في الوقت الفعلي", desc: "مراقبة العمليات والأداء والبيانات المالية من خلال لوحات معلومات قوية." },
        { icon: "⚙️", title: "أتمتة سير العمل", desc: "أتمتة العمليات التجارية المتكررة وتحسين الكفاءة التشغيلية عبر الأقسام." },
        { icon: "🌍", title: "دعم متعدد الأعمال", desc: "إدارة أقسام وفرق وسير عمل متعددة ضمن نظام ERP موحد واحد." },
      ],
    },
    about: {
      heading: "عن أمانرو ERP",
      p1: "أمانرو ERP هي منصة مؤسسية سحابية حديثة مصممة لتبسيط عمليات الأعمال وتحسين الإنتاجية عبر المؤسسات.",
      p2: "تمكّن منصة ERP لدينا الشركات من إدارة العمليات القانونية وسير عمل تحصيل الديون وإدارة الموارد البشرية من خلال نظام بيئي رقمي موحد وقوي.",
      stats: [
        { value: "+10", label: "وحدات مؤسسية" },
        { value: "+100", label: "سير عمل تجارية" },
        { value: "24/7", label: "وصول سحابي" },
        { value: "آمن", label: "أمان مؤسسي" },
      ],
    },
    contact: {
      heading: "تواصل معنا",
      desc: "تحدث مع خبرائنا حول حلول أمانرو ERP واكتشف كيف يمكن لمنصتنا المساعدة في أتمتة العمليات القانونية وتحصيل الديون وإدارة الموارد البشرية.",
      office: "المكتب",
      officeVal: "شارع ابن خلدون، مجمع الفوز، الطابق الأول، مكتب 18، حولي، الكويت",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      hours: "ساعات العمل",
      hoursVal: "الاثنين – السبت\n9:00 صباحاً – 6:00 مساءً",
      formTitle: "أرسل لنا رسالة",
      name: "الاسم الكامل",
      emailPlaceholder: "البريد الإلكتروني",
      company: "اسم الشركة",
      message: "رسالتك",
      send: "إرسال الرسالة",
    },
    footer: "© 2026 أمانرو ERP. جميع الحقوق محفوظة.",
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent ✅");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } else {
      alert("Error ❌");
    }
  };

  const t = translations[lang];
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  return (
    <main className="min-h-screen bg-white text-gray-900" dir={dir}>

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-4 border-b bg-white">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/amanrow-logo.png"
            alt="Amanrow Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          <a href="#solutions" className="text-gray-600 hover:text-black">
            {t.nav.products}
          </a>

          <a href="#features" className="text-gray-600 hover:text-black">
            {t.nav.features}
          </a>

          <a href="#contact" className="text-gray-600 hover:text-black">
            {t.nav.contact}
          </a>

          {/* Language Toggle */}
          <button
            // onClick={() => setLang(lang === "en" ? "ar" : "en")}
            onClick={() => {
              const newLang = lang === "en" ? "ar" : "en";
              setLang(newLang);
              localStorage.setItem("lang", newLang);
            }}
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>

          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
            {t.nav.login}
          </button> */}
          <a href="https://app.amanrow.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
              {t.nav.login}
            </button>
          </a>

        </nav>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b px-10 py-4 space-y-4">

          <a href="#solutions" className="block text-gray-600">
            {t.nav.products}
          </a>

          <a href="#features" className="block text-gray-600">
            {t.nav.features}
          </a>

          <a href="#contact" className="block text-gray-600">
            {t.nav.contact}
          </a>

        </div>
      )}

      {/* HERO */}
      <section className="bg-gray-50 py-20 px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

          <div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              {t.hero.title1}
              <br />
              {t.hero.title2}
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              {t.hero.desc}
            </p>

          </div>

          <div>
            <img
              src="/amanrow-dashboard.jpeg"
              alt="Amanrow ERP Dashboard"
              className="rounded-xl shadow-2xl border"
            />
          </div>

        </div>

      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-28 px-10 bg-white text-center">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            {t.solutions.heading}
          </h2>

          <p className="text-orange-500 font-semibold mb-4">
            {t.solutions.subheading}
          </p>

          <p className="text-gray-500 max-w-2xl mx-auto mb-14">
            {t.solutions.desc}
          </p>

          <div className="w-16 h-[2px] bg-gray-300 mx-auto mb-16"></div>

          {/* 3 Columns */}
          <div className="grid md:grid-cols-3 gap-14 text-left">

            {/* Lawcase */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-400 text-orange-500">
                  ⚖️
                </div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {t.solutions.lawcase.title}
                </h3>
              </div>
              <p className="text-gray-500 mb-4 leading-relaxed">
                {t.solutions.lawcase.desc}
              </p>
              <a href="/lawcase" className="text-orange-500 font-medium hover:underline">
                {t.solutions.lawcase.link}
              </a>
            </div>

            {/* Debt Collection */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-400 text-orange-500">
                  💬
                </div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {t.solutions.debt.title}
                </h3>
              </div>
              <p className="text-gray-500 mb-4 leading-relaxed">
                {t.solutions.debt.desc}
              </p>
              <a href="/debt-collection" className="text-orange-500 font-medium hover:underline">
                {t.solutions.debt.link}
              </a>
            </div>

            {/* HR */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-400 text-orange-500">
                  👥
                </div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {t.solutions.hr.title}
                </h3>
              </div>
              <p className="text-gray-500 mb-4 leading-relaxed">
                {t.solutions.hr.desc}
              </p>
              <a href="/hr" className="text-orange-500 font-medium hover:underline">
                {t.solutions.hr.link}
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section id="features" className="py-28 px-10 bg-gray-50">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            {t.why.heading}
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            {t.why.desc}
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {t.why.cards.map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* CONTACT US */}
      <section id="contact" className="py-28 px-10 bg-gray-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              {t.contact.heading}
            </h2>

            <p className="text-gray-600 mb-10">
              {t.contact.desc}
            </p>

            <div className="space-y-8">

              <div>
                <h3 className="font-semibold text-lg">{t.contact.office}</h3>
                <p className="text-gray-600">{t.contact.officeVal}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">{t.contact.email}</h3>
                <p className="text-gray-600">info@itegritypro.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">{t.contact.phone}</h3>
                <p className="text-gray-600">+965 55825532</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">{t.contact.hours}</h3>
                <p className="text-gray-600" style={{ whiteSpace: "pre-line" }}>
                  {t.contact.hoursVal}
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white shadow-xl rounded-xl p-10">

            <h3 className="text-2xl font-semibold mb-6">
              {t.contact.formTitle}
            </h3>

            {/* <form className="space-y-5">

              <input
                type="text"
                placeholder={t.contact.name}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder={t.contact.company}
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                rows="4"
                placeholder={t.contact.message}
                className="w-full border rounded-lg px-4 py-3"
              ></textarea>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">
                {t.contact.send}
              </button>

            </form> */}

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder={t.contact.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <input
                type="text"
                placeholder={t.contact.company}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                rows="4"
                placeholder={t.contact.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
              >
                {t.contact.send}
              </button>

            </form>

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