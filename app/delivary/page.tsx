"use client";
import React from "react";
import Footer from "../Footer";
import { 
  MessageSquare, 
  Search, 
  UserCheck, 
  CreditCard, 
  Package, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function DeliveryProcessPage() {
  const steps = [
    {
      id: "01",
      title: "Submit Inquiry",
      description: "Submit your requirements through our contact form. We collect your 'Response' and specific medical needs as the first step.",
      icon: <MessageSquare className="h-7 w-7" />,
      color: "border-teal-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      scenario: "Contact Stage"
    },
    {
      id: "02",
      title: "Expert Review",
      description: "Our pharmaceutical experts review your request to ensure we can meet your needs with the highest quality standards.",
      icon: <Search className="h-7 w-7" />,
      color: "border-blue-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      scenario: "Verification Stage"
    },
    {
      id: "03",
      title: "Personal Outreach",
      description: "We reach out to you directly after your form submission to confirm availability, pricing, and specific delivery timeframes.",
      icon: <UserCheck className="h-7 w-7" />,
      color: "border-indigo-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      scenario: "Consultation Stage"
    },
    {
      id: "04",
      title: "Order Process",
      description: "Once we reach out and you confirm, we initiate the delivery process. Your order is moved to our logistics queue.",
      icon: <CreditCard className="h-7 w-7" />,
      color: "border-purple-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      scenario: "Processing Stage"
    },
    {
      id: "05",
      title: "Safe Packaging",
      description: "Your health is our priority. Medicines are packed in temperature-controlled, secure containers for maximum safety.",
      icon: <Package className="h-7 w-7" />,
      color: "border-pink-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      scenario: "Packaging Stage"
    },
    {
      id: "06",
      title: "Swift Delivery",
      description: "Our specialized courier network delivers your products to your doorstep. We ensure every 'Response' leads to a successful delivery.",
      icon: <Truck className="h-7 w-7" />,
      color: "border-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-700",
      scenario: "Final Stage"
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-[#fcfcfd]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#115e59] py-20 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#5eead4] blur-3xl"></div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Delivery Process
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-teal-50">
              Personalized care from the moment you contact us. We handle every 
              step to ensure your medicines arrive safely and on time.
            </p>
          </div>
        </section>

        {/* Core Value Props */}
        <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Secure Handling", text: "Medical-grade packaging protocols" },
              { icon: <Clock className="h-6 w-6" />, title: "Prompt Outreach", text: "Immediate contact after inquiry" },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: "Double Verified", text: "Two-step verification for every order" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border-2 border-white bg-white/90 p-6 shadow-xl backdrop-blur-md">
                <div className="rounded-full bg-teal-100 p-3 text-teal-700">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Step-by-Step Scenario
            </h2>
            <p className="mt-4 text-slate-600">From initial contact to final doorstep delivery.</p>
            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-teal-500"></div>
          </div>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="absolute left-[50%] top-0 hidden h-full w-1 -translate-x-1/2 bg-slate-100 md:block"></div>

            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div key={step.id} className={`relative flex flex-col items-center md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content Container */}
                  <div className="w-full md:w-1/2 md:px-12">
                    <div className={`group relative rounded-3xl border-3 ${step.color} bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1`}>
                      <span className={`absolute -top-4 right-6 rounded-full border-2 ${step.color} bg-white px-4 py-1 text-xs font-black uppercase tracking-widest text-[#115e59]`}>
                        {step.scenario}
                      </span>
                      <div className={`mb-4 inline-flex rounded-2xl ${step.bgColor} p-4 ${step.iconColor} shadow-inner`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{step.id}. {step.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-700">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot on Line */}
                  <div className="z-10 my-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#0d9488] text-white shadow-xl md:absolute md:left-1/2 md:my-0 md:-translate-x-1/2">
                    <div className="h-4 w-4 animate-pulse rounded-full bg-white"></div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden w-1/2 md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios / What to Expect Section */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">What to Expect</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-3xl border-2 border-slate-200 bg-white p-10 hover:border-teal-400 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 underline decoration-teal-500 decoration-3 underline-offset-4">Scenario A: Normal Delivery</h3>
                <p className="mt-4 text-slate-600">Standard process for everyday medicines. We reach out within 24 hours of your inquiry and delivery is processed the same day as confirmation.</p>
              </div>
              <div className="rounded-3xl border-2 border-slate-200 bg-white p-10 hover:border-orange-400 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 underline decoration-orange-500 decoration-3 underline-offset-4">Scenario B: Urgent Requests</h3>
                <p className="mt-4 text-slate-600">For urgent medical needs, we prioritize your contact form response. Our team attempts to reach out within 2-4 hours to expedite the delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border-4 border-dashed border-teal-200 bg-linear-to-br from-teal-50 to-white p-12 text-center shadow-sm">
            <h2 className="text-3xl font-black text-teal-900 sm:text-4xl">
              Have questions? Let's talk.
            </h2>
            <p className="mt-4 text-lg text-teal-800">
              Our experts are ready to assist you. Start by sending us a message.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0d9488] px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:bg-[#0f766e] hover:scale-105 active:scale-95"
              >
                Reach Out Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#0d9488] px-10 py-5 text-xl font-bold text-[#0d9488] transition-all hover:bg-teal-50"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


