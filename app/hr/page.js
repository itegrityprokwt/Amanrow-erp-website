import Link from "next/link";

export default function HRPage() {
  return (
    <main className="bg-white text-gray-800">


{/* HERO */}
<section className="py-24 px-10 bg-gray-50">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div>

<h1 className="text-4xl font-bold mb-6">
Human Resources Management
</h1>

<p className="text-gray-600 mb-6 leading-relaxed">
Human Resources Management is a key functional area in every organization
today and drives the workforce dynamics. Effective management of employees
helps organizations improve productivity, maintain compliance and build
strong teams.
</p>

<p className="text-gray-600 leading-relaxed">
The Amanrow HRMS module is designed to streamline recruitment, payroll,
attendance, performance management and employee records in one centralized
cloud system.
</p>

</div>

<div>

<img
src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
alt="HR management"
className="rounded-xl shadow-xl"
/>

</div>

</div>

</section>



{/* HR FEATURES */}
<section className="py-24 px-10">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div>

<img
src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
alt="HR system"
className="rounded-xl shadow-xl"
/>

</div>


<div>

<h2 className="text-3xl font-bold mb-8">
HR Module Features
</h2>

<ul className="space-y-5 text-gray-600">

<li>⭐ Payroll and attendance management</li>

<li>⭐ Recruitment and onboarding system</li>

<li>⭐ Training and employee development</li>

<li>⭐ Employee database management</li>

<li>⭐ Leave and shift management</li>

<li>⭐ HR analytics and reports</li>

</ul>

</div>

</div>

</section>



{/* HR BENEFITS */}
<section className="py-24 px-10 bg-gray-50">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-3xl font-bold mb-6">
Why Organizations Choose Amanrow HR
</h2>

<p className="text-gray-600 mb-6 leading-relaxed">
The HR module helps organizations automate human resource operations,
reduce paperwork and improve workforce efficiency.
</p>

<ul className="space-y-4 text-gray-600">

<li>✔ Centralized employee management</li>

<li>✔ Automated payroll processing</li>

<li>✔ Performance tracking and reviews</li>

<li>✔ Workforce analytics dashboard</li>

<li>✔ Secure cloud-based HR system</li>

</ul>

</div>


<div>

<img
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
alt="HR team"
className="rounded-xl shadow-xl"
/>

</div>

</div>

</section>



{/* DEMO VIEW */}
<section className="py-24 px-10">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-3xl font-bold mb-14">
Demo View
</h2>

<div className="grid md:grid-cols-3 gap-10">

<img
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
className="rounded-lg shadow-md"
/>

<img
src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
className="rounded-lg shadow-md"
/>

<img
src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
className="rounded-lg shadow-md"
/>

<img
src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
className="rounded-lg shadow-md"
/>

<img
src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
className="rounded-lg shadow-md"
/>

<img
src="https://images.unsplash.com/photo-1551434678-e076c223a692"
className="rounded-lg shadow-md"
/>

</div>

</div>

</section>



{/* CTA */}
<section className="py-24 px-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white text-center">

<h2 className="text-4xl font-bold mb-4">
Request a Demo Today
</h2>

<p className="text-blue-100 mb-8">
Our consultants will show you how Amanrow HRMS can streamline
your workforce management.
</p>

<div className="flex justify-center gap-4 flex-wrap">

<button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
Request Demo
</button>

<Link href="/">
<button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
Back to Home
</button>
</Link>

</div>

</section>


</main>
  );
}