import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-4 border-b bg-white">

        <div className="flex items-center">
          <img
            src="/amanrow-logo.png"
            alt="Amanrow Logo"
            className="h-8 w-auto"
          />
        </div>

        <nav className="flex items-center gap-8">

          <a href="#solutions" className="text-gray-600 hover:text-black">
            Products
          </a>

          <a href="#features" className="text-gray-600 hover:text-black">
            Features
          </a>

          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
            Login
          </button>

        </nav>

      </header>


      {/* HERO */}
      <section className="bg-gray-50 py-20 px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

          <div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Amanrow ERP
              <br />
              Cloud Platform
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Amanrow ERP helps organizations manage legal operations,
              debt collection workflows and human resource management
              in one powerful cloud platform.
            </p>

            <div className="flex gap-4">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                Explore Solutions
              </button>

              <button className="border px-6 py-3 rounded-md hover:bg-gray-100">
                Request Demo
              </button>

            </div>

          </div>


          <div>

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="ERP dashboard"
              className="rounded-xl shadow-xl"
            />

          </div>

        </div>

      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-28 px-10 bg-white text-center">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our ERP Solutions
          </h2>

          <p className="text-orange-500 font-semibold mb-4">
            Amanrow ERP Solutions
          </p>

          <p className="text-gray-500 max-w-2xl mx-auto mb-14">
            Powerful enterprise modules designed to streamline legal, financial and
            human resource operations in one unified ERP platform.
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
                  LawCase
                </h3>

              </div>

              <p className="text-gray-500 mb-4 leading-relaxed">
                A one stop solution for Law firms providing the best Legal software
                for clients. Law case module has come a long way in this business
                and with the advent of digital technology Amanrow has chosen to
                provide its clients with an easy tool.
              </p>

              <a
                href="/lawcase"
                className="text-orange-500 font-medium hover:underline"
              >
                Learn more
              </a>

            </div>



            {/* Debt Collection */}
            <div>

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-400 text-orange-500">
                  💬
                </div>

                <h3 className="text-lg font-semibold text-gray-700">
                  Debt Collection Management
                </h3>

              </div>

              <p className="text-gray-500 mb-4 leading-relaxed">
                The Debt Collection Management Model is a structured workflow for
                tracking unpaid obligations, communicating with debtors, negotiating
                settlements, and enforcing repayment. It centralizes debtor
                information and monitors recovery performance.
              </p>

              <a
                href="/debt-collection"
                className="text-orange-500 font-medium hover:underline"
              >
                Learn more
              </a>

            </div>



            {/* HR */}
            <div>

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-400 text-orange-500">
                  👥
                </div>

                <h3 className="text-lg font-semibold text-gray-700">
                  Human Resource
                </h3>

              </div>

              <p className="text-gray-500 mb-4 leading-relaxed">
                Human Resources Management is a key functional area in every
                organization today and drives the workforce dynamics. An effective
                management of the workforce paves way for a successful organization.
              </p>

              <a
                href="/hr"
                className="text-orange-500 font-medium hover:underline"
              >
                Learn more
              </a>

            </div>


          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section id="features" className="py-28 px-10 bg-gray-50">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Why Choose Amanrow ERP
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Amanrow ERP provides powerful enterprise tools designed to
            simplify business operations, improve efficiency and enable
            organizations to scale faster.
          </p>


          <div className="grid md:grid-cols-3 gap-10">


            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-4xl mb-4">☁️</div>

              <h3 className="text-lg font-semibold mb-3">
                Cloud Based Platform
              </h3>

              <p className="text-gray-600">
                Access your ERP system securely from anywhere in the
                world with our reliable cloud infrastructure.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-4xl mb-4">⚡</div>

              <h3 className="text-lg font-semibold mb-3">
                Fast & Scalable
              </h3>

              <p className="text-gray-600">
                Built with modern technologies designed to handle
                growing businesses and enterprise workloads.
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-4xl mb-4">🔒</div>

              <h3 className="text-lg font-semibold mb-3">
                Enterprise Security
              </h3>

              <p className="text-gray-600">
                Your business data is protected with advanced
                enterprise grade security standards.
              </p>

            </div>


            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-4xl mb-4">📊</div>

              <h3 className="text-lg font-semibold mb-3">
                Real Time Analytics
              </h3>

              <p className="text-gray-600">
                Monitor operations, performance and financial data
                through powerful dashboards.
              </p>

            </div>


            {/* Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-4xl mb-4">⚙️</div>

              <h3 className="text-lg font-semibold mb-3">
                Workflow Automation
              </h3>

              <p className="text-gray-600">
                Automate repetitive business processes and improve
                operational efficiency across departments.
              </p>

            </div>


            {/* Card 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-lg font-semibold mb-3">
                Multi Business Support
              </h3>

              <p className="text-gray-600">
                Manage multiple departments, teams and workflows
                within one unified ERP system.
              </p>

            </div>


          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-28 px-10 bg-gradient-to-b from-white to-gray-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About Amanrow ERP
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Amanrow ERP is a modern cloud based enterprise platform designed to
              simplify business operations and improve productivity across
              organizations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our ERP platform enables companies to manage legal operations,
              debt collection workflows and human resource management through
              a unified and powerful digital ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600">10+</h3>
                <p className="text-gray-500 text-sm">Enterprise Modules</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-500 text-sm">Business Workflows</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600">24/7</h3>
                <p className="text-gray-500 text-sm">Cloud Access</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600">Secure</h3>
                <p className="text-gray-500 text-sm">Enterprise Security</p>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              className="rounded-xl shadow-xl"
              alt="ERP analytics"
            />

          </div>

        </div>

      </section>


      {/* CONTACT US */}
      <section id="contact" className="py-28 px-10 bg-gray-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Contact Us
            </h2>

            <p className="text-gray-600 mb-10">
              Talk to our experts about Amanrow ERP solutions and discover how
              our platform can help automate legal operations, debt recovery
              and human resource management.
            </p>


            <div className="space-y-8">


              <div>
                <h3 className="font-semibold text-lg">Office</h3>
                <p className="text-gray-600">
                  Ibne khaldun Street, AlFouz Complex
                  Floor 1, Office 18 Hawally, Kuwait
                </p>
              </div>


              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                info@itegritypro.com
                </p>
              </div>


              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">
                  +965 55825532
                </p>
              </div>


              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p className="text-gray-600">
                  Monday – Saturday<br />
                  9:00 AM – 6:00 PM
                </p>
              </div>


            </div>

          </div>



          {/* RIGHT SIDE FORM */}
          <div className="bg-white shadow-xl rounded-xl p-10">

            <h3 className="text-2xl font-semibold mb-6">
              Send us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3"
              ></textarea>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">
                Send Message
              </button>

            </form>

          </div>


        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center py-6 border-t text-gray-500">

        © 2026 Amanrow ERP. All rights reserved.

      </footer>

    </main>
  );
}





// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen text-gray-900 bg-gradient-to-b from-slate-50 via-white to-slate-100">

//       {/* NAVBAR */}
//       <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b">

//         <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

//           <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Amanrow ERP
//           </h1>

//           <nav className="flex items-center gap-8">

//             <a href="#solutions" className="text-gray-600 hover:text-black">
//               Products
//             </a>

//             <a href="#features" className="text-gray-600 hover:text-black">
//               Features
//             </a>

//             <a href="#contact" className="text-gray-600 hover:text-black">
//               Contact
//             </a>

//             <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:opacity-90">
//               Login
//             </button>

//           </nav>

//         </div>

//       </header>



//       {/* HERO */}
//       <section className="relative py-32 px-10 overflow-hidden">

//         {/* background glow */}
//         <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
//         <div className="absolute -bottom-40 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">

//           <div>

//             <h1 className="text-6xl font-bold leading-tight mb-6">

//               Next Generation  
//               <br />

//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Cloud ERP Platform
//               </span>

//             </h1>

//             <p className="text-lg text-gray-600 mb-8 max-w-lg">
//               Amanrow ERP empowers modern organizations to manage legal
//               operations, debt recovery and HR workflows through one
//               powerful enterprise cloud platform.
//             </p>

//             <div className="flex gap-4">

//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-lg shadow-lg hover:scale-105 transition">
//                 Explore Solutions
//               </button>

//               <button className="border px-7 py-3 rounded-lg hover:bg-gray-100">
//                 Request Demo
//               </button>

//             </div>

//           </div>


//           <div>

//             <img
//               src="https://images.unsplash.com/photo-1551434678-e076c223a692"
//               className="rounded-2xl shadow-2xl border"
//             />

//           </div>

//         </div>

//       </section>



//       {/* SOLUTIONS */}
//       <section id="solutions" className="py-32 px-10 bg-gradient-to-b from-white to-slate-50">

//         <div className="max-w-7xl mx-auto text-center">

//           <h2 className="text-4xl font-bold mb-3">
//             Amanrow ERP Solutions
//           </h2>

//           <p className="text-gray-500 max-w-2xl mx-auto mb-20">
//             Enterprise modules designed to manage legal, financial
//             and workforce operations seamlessly.
//           </p>



//           <div className="grid md:grid-cols-3 gap-10 text-left">


//             <div className="p-8 rounded-2xl bg-white/70 backdrop-blur shadow-lg hover:shadow-2xl transition">

//               <div className="text-4xl mb-5">⚖️</div>

//               <h3 className="text-xl font-semibold mb-3">
//                 LawCase Management
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Manage legal cases, track court updates
//                 and organize legal documents efficiently.
//               </p>

//               <a href="#" className="text-blue-600 hover:underline">
//                 Learn more
//               </a>

//             </div>



//             <div className="p-8 rounded-2xl bg-white/70 backdrop-blur shadow-lg hover:shadow-2xl transition">

//               <div className="text-4xl mb-5">💬</div>

//               <h3 className="text-xl font-semibold mb-3">
//                 Debt Collection
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Track debt recovery progress and automate
//                 collection workflows.
//               </p>

//               <a href="#" className="text-blue-600 hover:underline">
//                 Learn more
//               </a>

//             </div>



//             <div className="p-8 rounded-2xl bg-white/70 backdrop-blur shadow-lg hover:shadow-2xl transition">

//               <div className="text-4xl mb-5">👥</div>

//               <h3 className="text-xl font-semibold mb-3">
//                 Human Resources
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Manage employee records, payroll
//                 and workforce operations.
//               </p>

//               <a href="#" className="text-blue-600 hover:underline">
//                 Learn more
//               </a>

//             </div>


//           </div>

//         </div>

//       </section>



//       {/* FEATURES */}
//       <section id="features" className="py-32 px-10 bg-gradient-to-b from-slate-50 to-white">

//         <div className="max-w-7xl mx-auto text-center">

//           <h2 className="text-4xl font-bold mb-3">
//             Why Choose Amanrow ERP
//           </h2>

//           <p className="text-gray-500 max-w-2xl mx-auto mb-20">
//             Built for enterprise scale, security and performance.
//           </p>



//           <div className="grid md:grid-cols-3 gap-10">


//             {[
//               ["☁️","Cloud Platform"],
//               ["⚡","Fast Performance"],
//               ["🔒","Enterprise Security"],
//               ["📊","Real Time Analytics"],
//               ["⚙️","Automation"],
//               ["🌍","Scalable Architecture"]
//             ].map((f,i)=>(
//               <div key={i} className="p-8 rounded-2xl bg-white shadow hover:shadow-2xl transition">

//                 <div className="text-4xl mb-4">{f[0]}</div>

//                 <h3 className="font-semibold mb-2">
//                   {f[1]}
//                 </h3>

//                 <p className="text-gray-600">
//                   Powerful infrastructure designed
//                   for modern businesses.
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>



//       {/* ABOUT */}
//       <section className="py-32 px-10 bg-gradient-to-b from-white to-slate-50">

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//           <div>

//             <h2 className="text-4xl font-bold mb-6">
//               About Amanrow ERP
//             </h2>

//             <p className="text-gray-600 leading-relaxed mb-6">
//               Amanrow ERP is a cloud based enterprise
//               platform designed to simplify complex
//               business operations.
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               Our system enables organizations to manage
//               legal cases, debt recovery and HR workflows
//               in one unified platform.
//             </p>

//           </div>


//           <div>

//             <img
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
//               className="rounded-2xl shadow-2xl"
//             />

//           </div>

//         </div>

//       </section>



//       {/* CONTACT */}
//       {/* <section id="contact" className="py-32 px-10 bg-gradient-to-b from-slate-50 to-white">

//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-4xl font-bold mb-6">
//             Contact Us
//           </h2>

//           <p className="text-gray-600 mb-16">
//             Get in touch with our team to learn more
//             about Amanrow ERP.
//           </p>


//           <div className="grid md:grid-cols-3 gap-10">


//             <div className="p-8 rounded-2xl bg-white shadow hover:shadow-xl transition">
//               <div className="text-4xl mb-4">📧</div>
//               <p className="font-semibold">Email</p>
//               <p className="text-gray-600">contact@amanrow.com</p>
//             </div>


//             <div className="p-8 rounded-2xl bg-white shadow hover:shadow-xl transition">
//               <div className="text-4xl mb-4">📞</div>
//               <p className="font-semibold">Phone</p>
//               <p className="text-gray-600">+91 XXXXXXXX</p>
//             </div>


//             <div className="p-8 rounded-2xl bg-white shadow hover:shadow-xl transition">
//               <div className="text-4xl mb-4">📍</div>
//               <p className="font-semibold">Office</p>
//               <p className="text-gray-600">Amanrow Technologies</p>
//             </div>

//           </div>

//         </div>

//       </section> */}


//       {/* CONTACT */}
// <section
//   id="contact"
//   className="relative py-32 px-10 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden"
// >

//   {/* background glow */}
//   <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 blur-3xl rounded-full opacity-40"></div>
//   <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 blur-3xl rounded-full opacity-40"></div>


//   <div className="max-w-7xl mx-auto relative">

//     <div className="text-center mb-16">

//       <h2 className="text-4xl font-bold mb-4">
//         Contact Amanrow ERP
//       </h2>

//       <p className="text-gray-600 max-w-xl mx-auto">
//         Have questions about our ERP platform or want to request a demo?
//         Our team will be happy to assist you.
//       </p>

//     </div>



//     <div className="grid md:grid-cols-2 gap-16 items-start">

//       {/* LEFT CONTACT FORM */}
//       <div className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl shadow-xl">

//         <h3 className="text-2xl font-semibold mb-6">
//           Send us a message
//         </h3>

//         <form className="space-y-6">

//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="text"
//             placeholder="Company Name"
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <textarea
//             rows="4"
//             placeholder="Your Message"
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>

//           <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:opacity-90">
//             Send Message
//           </button>

//         </form>

//       </div>



//       {/* RIGHT CONTACT INFO */}
//       <div className="space-y-6">

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

//           <div className="text-3xl mb-3">📧</div>

//           <h4 className="font-semibold mb-1">
//             Email
//           </h4>

//           <p className="text-gray-600">
//             contact@amanrow.com
//           </p>

//         </div>



//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

//           <div className="text-3xl mb-3">📞</div>

//           <h4 className="font-semibold mb-1">
//             Phone
//           </h4>

//           <p className="text-gray-600">
//             +91 XXXXXXXX
//           </p>

//         </div>



//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">

//           <div className="text-3xl mb-3">📍</div>

//           <h4 className="font-semibold mb-1">
//             Office
//           </h4>

//           <p className="text-gray-600">
//             Amanrow Technologies  
//             Business Solutions
//           </p>

//         </div>



//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">

//           <h4 className="font-semibold mb-2">
//             Request ERP Demo
//           </h4>

//           <p className="text-sm opacity-90 mb-4">
//             Schedule a live demo of Amanrow ERP with our
//             product specialists.
//           </p>

//           <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">
//             Book Demo
//           </button>

//         </div>

//       </div>

//     </div>

//   </div>

// </section>



//       {/* FOOTER */}
//       <footer className="py-8 text-center border-t text-gray-500">
//         © 2026 Amanrow ERP. All rights reserved.
//       </footer>

//     </main>
//   );
// }