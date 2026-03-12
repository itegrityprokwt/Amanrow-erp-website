import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-5 border-b bg-white">

        <h1 className="text-2xl font-bold">Amanrow ERP</h1>

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
<section className="py-28 px-10 bg-white text-center">

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




      {/* FEATURES */}
      <section
        id="features"
        className="py-20 px-10 bg-gray-50"
      >

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">
            Why Choose Amanrow ERP
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <div className="text-4xl mb-4">☁️</div>

              <h3 className="font-bold mb-2">
                Cloud Platform
              </h3>

              <p className="text-gray-600">
                Access your ERP system anytime from anywhere
                using our secure cloud infrastructure.
              </p>

            </div>


            <div>

              <div className="text-4xl mb-4">⚡</div>

              <h3 className="font-bold mb-2">
                Fast & Scalable
              </h3>

              <p className="text-gray-600">
                Built with modern technologies designed
                to scale with your growing business.
              </p>

            </div>


            <div>

              <div className="text-4xl mb-4">🔒</div>

              <h3 className="font-bold mb-2">
                Secure
              </h3>

              <p className="text-gray-600">
                Enterprise grade security to protect
                your business data and operations.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ABOUT */}
      <section className="py-20 px-10 text-center">

        <h2 className="text-3xl font-bold mb-6">
          About Amanrow ERP
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600">
          Amanrow ERP is a cloud based enterprise platform
          designed to simplify business operations. Our system
          helps organizations manage legal cases, debt
          collection processes and human resource workflows
          through modern digital tools.
        </p>

      </section>



      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-10 bg-gray-50 text-center"
      >

        <h2 className="text-3xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-2">
          Email: contact@amanrow.com
        </p>

        <p className="text-gray-600">
          Phone: +91 XXXXXXXX
        </p>

      </section>



      {/* FOOTER */}
      <footer className="text-center py-6 border-t text-gray-500">

        © 2026 Amanrow ERP. All rights reserved.

      </footer>

    </main>
  );
}