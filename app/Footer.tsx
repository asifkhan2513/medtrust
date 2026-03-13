import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/app/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#115e59] bg-[#115e59] text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <span className="inline-flex rounded-full bg-white px-4 py-2.5 shadow-sm">
                <Image
                  src={LOGO}
                  alt="MedTrust Logo"
                  width={110}
                  height={44}
                  className="h-10 w-auto sm:h-11"
                />
              </span>
            </Link>
            <p className="text-sm text-slate-100">
              Trusted medicine for better health. Quality pharmaceutical
              products you can rely on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-100 transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-100 transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-100 transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Policies
            </p>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-100">Terms & Conditions</span>
              </li>
              <li>
                <span className="text-slate-100">Privacy Policy</span>
              </li>
              <li>
                <span className="text-slate-100">Cookie Policy</span>
              </li>
              <li>
                <span className="text-slate-100">Security</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-slate-100 transition hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <span className="text-slate-100">Support</span>
              </li>
              <li>
                <span className="text-slate-100">Help</span>
              </li>
              <li>
                <span className="text-slate-100">FAQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/30 pt-8 text-center text-sm text-slate-100">
          Copyright © 2026 MedTrust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}