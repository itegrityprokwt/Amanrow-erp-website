// export default function DebtCollection() {
//     return (
//       <main className="min-h-screen bg-black text-white px-20 py-20">
  
//         <h1 className="text-5xl font-bold mb-8">
//           Debt Collection Management
//         </h1>
  
//         <p className="text-lg text-gray-300 max-w-3xl mb-10">
//           Our Debt Collection Management system helps financial
//           organizations track and manage debt recovery operations
//           efficiently.
//         </p>
  
//         <ul className="space-y-3 text-gray-300 text-lg">
  
//           <li>• Debt tracking dashboard</li>
//           <li>• Customer payment monitoring</li>
//           <li>• Collection workflow automation</li>
//           <li>• Reports and analytics</li>
  
//         </ul>
  
//       </main>
//     );
//   }



import Link from "next/link";

export default function DebtCollection() {
  return (
    <main className="bg-white text-gray-900">


      {/* HERO */}
      <section className="py-24 px-10 bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <div className="text-orange-500 text-5xl mb-6">💰</div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Debt Collection  
              <br />
              Management Platform
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Amanrow Debt Collection is a powerful digital platform designed
              to help agencies automate recovery workflows, improve collection
              rates, and manage debtor portfolios efficiently from a single system.
            </p>

            <div className="flex gap-4">

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
                Request Demo
              </button>

              <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                View Features
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

          <h2 className="text-4xl font-bold mb-16 text-center">
            Benefits for Collection Agencies
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="benefits"
                className="rounded-2xl shadow-xl"
              />

            </div>


            <div className="space-y-6 text-gray-600 leading-relaxed">

              <p>
                🚀 <b>Higher Recovery Rates</b> — Automated workflows and
                structured follow-ups increase recovery efficiency.
              </p>

              <p>
                🏆 <b>Competitive Advantage</b> — Provide transparent dashboards,
                case tracking, and professional reporting to clients.
              </p>

              <p>
                🔒 <b>Legal & Regulatory Compliance</b> — Maintain records of
                every communication, activity and legal step.
              </p>

              <p>
                📈 <b>Predictable Revenue</b> — Monitor settlements, fees and
                portfolio performance in real time.
              </p>

              <p>
                ⚙️ <b>Operational Efficiency</b> — Automate assignment rules,
                case distribution and follow-up communications.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* USE CASES */}
      <section className="py-24 px-10 bg-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-8">
              Core Use Cases
            </h2>

            <ul className="space-y-4 text-gray-600 text-lg">

              <li>✔ Consumer debt collections</li>
              <li>✔ Banking & financial institutions</li>
              <li>✔ Real estate & leasing recovery</li>
              <li>✔ Healthcare billing recovery</li>
              <li>✔ Government fines & penalties</li>
              <li>✔ B2B commercial debt collection</li>

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

          <h2 className="text-4xl font-bold mb-16 text-center">
            Why Agencies Love This Platform
          </h2>


          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <h3 className="font-semibold mb-3">
                Scalable Platform
              </h3>

              <p className="text-gray-600">
                Handle 100 or 100,000 cases without performance issues.
              </p>

            </div>


            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <h3 className="font-semibold mb-3">
                Complete Audit Trail
              </h3>

              <p className="text-gray-600">
                Every action, communication and settlement is logged securely.
              </p>

            </div>


            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <h3 className="font-semibold mb-3">
                Multi-Client Support
              </h3>

              <p className="text-gray-600">
                Manage multiple portfolios and agencies from one platform.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}
      <section
        className="py-24 px-10 text-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d)",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold mb-4">
            Request a Demo Today
          </h2>

          <p className="text-gray-200 mb-8">
            Discover how Amanrow Debt Collection Platform can improve
            recovery rates and streamline your operations.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white shadow-lg">
            Contact Us
          </button>

        </div>

      </section>


    </main>
  );
}