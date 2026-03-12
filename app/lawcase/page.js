import Link from "next/link";

export default function Lawcase() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-24 px-10 bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <div className="text-blue-600 text-5xl mb-6">⚖️</div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Lawcase  
              <br />
              Management System
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Amanrow Lawcase is a powerful legal case management
              platform designed for modern law firms. Manage cases,
              documents, clients and legal workflows from a single
              cloud based system.
            </p>

            <div className="flex gap-4">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                Request Demo
              </button>

              <button className="border px-6 py-3 rounded-md hover:bg-gray-100">
                View Features
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

          <h2 className="text-4xl font-bold mb-16">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-3xl mb-4">📊</div>

              <h3 className="font-semibold mb-3">
                Case Tracking
              </h3>

              <p className="text-gray-600">
                Monitor legal cases, activities and progress
                from a centralized dashboard.
              </p>

            </div>


            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-3xl mb-4">📁</div>

              <h3 className="font-semibold mb-3">
                Document Management
              </h3>

              <p className="text-gray-600">
                Store and organize legal documents securely
                with easy access and sharing.
              </p>

            </div>


            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-3xl mb-4">👥</div>

              <h3 className="font-semibold mb-3">
                Client Management
              </h3>

              <p className="text-gray-600">
                Manage client profiles, legal records and
                communication history.
              </p>

            </div>


            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-3xl mb-4">⏱</div>

              <h3 className="font-semibold mb-3">
                Time Tracking
              </h3>

              <p className="text-gray-600">
                Track time spent on cases to improve
                productivity and billing accuracy.
              </p>

            </div>


            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-3xl mb-4">📈</div>

              <h3 className="font-semibold mb-3">
                Analytics
              </h3>

              <p className="text-gray-600">
                Gain insights into case progress,
                performance and legal operations.
              </p>

            </div>


            <div className="p-8 border rounded-xl shadow-sm hover:shadow-xl transition">

              <div className="text-3xl mb-4">☁️</div>

              <h3 className="font-semibold mb-3">
                Cloud Access
              </h3>

              <p className="text-gray-600">
                Access cases and documents securely
                from anywhere in the world.
              </p>

            </div>

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

            <h2 className="text-4xl font-bold mb-8">
              Product Features
            </h2>

            <ul className="space-y-4 text-gray-600">

              <li>✔ Employee details</li>
              <li>✔ Case detail management</li>
              <li>✔ User role permissions</li>
              <li>✔ Case lifecycle management</li>
              <li>✔ Regulations & legislation records</li>
              <li>✔ Client database</li>
              <li>✔ Power of attorney records</li>

            </ul>

          </div>

        </div>

      </section>


{/* PRICING */}
<section className="py-28 px-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">

  {/* background glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-20 blur-3xl rounded-full"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Pricing Plans
    </h2>

    <p className="text-gray-500 mb-16">
      Simple transparent pricing for modern law firms
    </p>


    <div className="flex justify-center">

      {/* pricing card */}
      <div className="relative w-[420px] rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* card */}
        <div className="bg-white backdrop-blur-xl rounded-3xl p-12">

          {/* badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-5 py-1 rounded-full shadow-lg">
            Most Popular
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Lawcase Annual Plan
          </h3>

          <p className="text-gray-500 mb-8">
            Complete legal case management platform
          </p>

          {/* price */}
          <div className="mb-10">

            <span className="text-6xl font-bold text-gray-900">
              350
            </span>

            <span className="text-gray-500 ml-2 text-lg">
              KWD / year
            </span>

          </div>


          {/* features */}
          <ul className="space-y-4 text-gray-600 mb-10 text-left">

            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Unlimited case tracking
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Client management
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Secure document storage
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Legal workflow automation
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Cloud access
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              Advanced analytics dashboard
            </li>

          </ul>


          {/* button */}
          <button className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Buy Now
          </button>

          <p className="text-sm text-gray-400 mt-6">
            *All prices are in Kuwaiti Dinar (KWD)
          </p>

        </div>

      </div>

    </div>

  </div>

</section>



{/* SOCIAL PROOF + CTA */}
<section className="py-24 px-10 bg-gray-50 relative overflow-hidden">

  {/* background glow */}
  <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    <h3 className="text-lg font-semibold text-gray-500 mb-12 uppercase tracking-wider">
      Trusted by Leading Organizations
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center opacity-70 mb-20">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        className="h-8 mx-auto"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        className="h-8 mx-auto"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        className="h-8 mx-auto"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        className="h-8 mx-auto"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        className="h-8 mx-auto"
      />

    </div>


    {/* CTA CARD */}
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-12 border">

      <h2 className="text-3xl font-bold mb-4">
        Simplify Your Legal Case Management
      </h2>

      <p className="text-gray-600 mb-8">
        Manage cases, clients, documents and workflows in one modern ERP platform.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">

        <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-7 py-3 rounded-xl shadow hover:scale-105 transition">
          Request Demo
        </button>

        <Link href="/">
          <button className="border px-7 py-3 rounded-xl hover:bg-gray-100 transition">
            Back to Home
          </button>
        </Link>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}