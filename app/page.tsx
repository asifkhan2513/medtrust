import Link from "next/link";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Shield,
  Package,
  Heart,
  Pill,
  Truck,
  Clock,
  Star,
  Quote,
  CheckCircle2,
  Award,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <>
     
      <main>
        <Carousel />

        {/* Stats strip */}
        <section className="border-b border-slate-200 bg-white py-8 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10">
                  <Package className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">500+</p>
                  <p className="text-sm text-slate-600">Products</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10">
                  <Shield className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">100%</p>
                  <p className="text-sm text-slate-600">Authentic</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10">
                  <Truck className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">Fast</p>
                  <p className="text-sm text-slate-600">Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d9488]/10">
                  <Clock className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">24/7</p>
                  <p className="text-sm text-slate-600">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why MedTrust section */}
        <section className="bg-[#f8fafc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
              Why Choose MedTrust
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              We are committed to your health and wellbeing
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
              <div className="rounded-xl  bg-white border-2 p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-[#0d9488]/10 p-3">
                  <Shield className="h-8 w-8 text-[#0d9488]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Trusted Quality</h3>
                <p className="mt-2 text-slate-600">
                  All our products meet strict quality standards. We source from verified suppliers to ensure authenticity.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md border-2 transition-shadow hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-[#0d9488]/10 p-3">
                  <Package className="h-8 w-8 text-[#0d9488]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 ">Wide Selection</h3>
                <p className="mt-2 text-slate-600">
                  From essential medicines to wellness products, we offer a comprehensive range for your healthcare needs.
                </p>
              </div>
              <div className="rounded-xl border-2 bg-white p-6 shadow-md transition-shadow hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex rounded-lg bg-[#0d9488]/10 p-3">
                  <Heart className="h-8 w-8 text-[#0d9488]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Care First</h3>
                <p className="mt-2 text-slate-600">
                  Your health is our priority. Our team is here to support you with reliable information and service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitments */}
        <section className="border-2 px-2 mx-2 rounded-2xl border-black bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
              Our Commitments
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              We stand by these values in everything we do
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: CheckCircle2, text: "Verified & authentic products only" },
                { icon: Award, text: "Certified quality standards" },
                { icon: Shield, text: "Secure and confidential service" },
                { icon: Truck, text: "Safe and timely delivery" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d9488]/10">
                    <item.icon className="h-5 w-5 text-[#0d9488]" />
                  </div>
                  <p className="font-medium text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product categories (informational) */}
        <section className="bg-[#f8fafc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
              What We Offer
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              A wide range of healthcare and wellness products
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Pill, title: "Prescription Medicines", desc: "Essential medications prescribed by healthcare professionals" },
                { icon: Package, title: "Over-the-Counter", desc: "Common medicines for everyday health needs" },
                { icon: Heart, title: "Wellness & Vitamins", desc: "Supplements and vitamins for daily health" },
                { icon: Shield, title: "First Aid & Care", desc: "Bandages, antiseptics, and first aid essentials" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-[#0d9488]/40 hover:shadow-lg"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d9488]/10">
                    <item.icon className="h-7 w-7 text-[#0d9488]" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#0f766e] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-white/90">
              Trusted by thousands of satisfied customers
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { name: "Sarah M.", text: "Reliable and fast. MedTrust has been my go-to for quality medicine.", rating: 5 },
                { name: "James K.", text: "Great selection and excellent customer support. Highly recommend!", rating: 5 },
                { name: "Priya S.", text: "Authentic products at fair prices. Very satisfied with the service.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
                  <Quote className="h-8 w-8 text-white" />
                  <p className="mt-4 text-white">{t.text}</p>
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#5eead4] text-[#5eead4]" />
                    ))}
                  </div>
                  <p className="mt-3 font-semibold text-white">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact strip */}
        <section className="border-y border-slate-200 bg-white py-10 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d9488]/10">
                  <Phone className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Call us anytime</p>
                  <p className="font-semibold text-slate-800">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d9488]/10">
                  <Mail className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email support</p>
                  <p className="font-semibold text-slate-800">support@medtrust.com</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-[#0d9488] bg-white px-6 py-3 font-semibold text-[#0d9488] shadow-sm transition hover:bg-[#0d9488] hover:text-white hover:shadow-md"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Have Questions? We&apos;re Here to Help
            </h2>
            <p className="mt-4 text-slate-600">
              Contact our team for inquiries about our products and services.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-xl bg-[#0d9488] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#0f766e]"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
