import Link from "next/link";
import Footer from "../Footer";
export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            About MedTrust
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Your trusted partner in healthcare and quality medicine.
          </p>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
              Our Mission
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              At MedTrust, we believe everyone deserves access to quality medicine and reliable healthcare solutions. Our mission is to provide authentic pharmaceutical products and wellness essentials that meet the highest standards of quality and safety.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
              Our Values
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="text-[#0d9488] font-bold">•</span>
                <span className="text-slate-600">
                  <strong className="text-slate-800">Integrity:</strong> We source and deliver only authentic, verified products.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0d9488] font-bold">•</span>
                <span className="text-slate-600">
                  <strong className="text-slate-800">Quality:</strong> Every product meets strict quality control standards.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0d9488] font-bold">•</span>
                <span className="text-slate-600">
                  <strong className="text-slate-800">Care:</strong> Your health and wellbeing are at the heart of what we do.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0d9488] font-bold">•</span>
                <span className="text-slate-600">
                  <strong className="text-slate-800">Trust:</strong> We build lasting relationships through transparency and reliability.
                </span>
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
              Why Choose MedTrust
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We work with verified suppliers and follow best practices in storage and handling. Our team is dedicated to ensuring you receive products you can trust. Whether you need essential medicines or wellness products, MedTrust is here to support your health journey.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Have questions? We would love to hear from you. Visit our{" "}
              <Link href="/contact" className="font-medium text-[#0d9488] hover:text-[#0f766e] underline">
                Contact page
              </Link>
              {" "}to reach out.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
