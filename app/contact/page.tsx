"use client";
import React from "react";
import toast from "react-hot-toast";
import * as countryCodes from "country-codes-list";
import Footer from "../Footer";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  message: string;
};

type CountryOption = {
  label: string;
  value: string;
  countryCode: string;
};

// Generate country options outside the component for performance
const countryOptions = countryCodes.customArray(
  {
    label: "{countryNameEn} (+{countryCallingCode})",
    value: "{countryNameEn}",
    countryCode: "+{countryCallingCode}",
  },
  { sortDataBy: "countryNameEn" },
) as CountryOption[];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const selectedCountry = countryOptions.find(
        (option) => option.value === data.country,
      );

      const payload = {
        ...data,
        countryCode: selectedCountry?.countryCode ?? "",
      };

      // Ensure API URL is correctly handled
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const response = await axios.post(`${apiUrl}/api/v1/response/create`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data?.success) {
        toast.success(
          response.data?.message || "Thank you! We've received your message.",
        );
        reset();
      } else {
        throw new Error(response.data?.message || "Submission failed");
      }
    } catch (error: any) {
      console.error("Contact Form Error:", error);

      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to send message. Please check your connection.";
        toast.error(errorMessage);
      } else {
        toast.error(error.message || "Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>

      <main className="min-h-screen bg-[#f8fafc]">
        {/* Contact Form Section */}
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10 border border-slate-100">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                Contact Us
              </h1>
              <p className="mt-3 text-lg text-slate-600">
                Have a question or inquiry? Fill in your details and we'll get
                back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  disabled={isSubmitting}
                  {...register("name", {
                    required: "Please enter your name",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 80,
                      message: "Name is too long",
                    },
                  })}
                  className={`block w-full rounded-lg border px-4 py-3 text-slate-900 transition-all outline-none
                    ${errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-50"
                      : "border-slate-300 focus:border-[#0d9488] focus:ring-4 focus:ring-teal-50"
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
                    <span>{errors.name.message}</span>
                  </p>
                )}
              </div>

              {/* Email and Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    disabled={isSubmitting}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`block w-full rounded-lg border px-4 py-3 text-slate-900 transition-all outline-none
                      ${errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-50"
                        : "border-slate-300 focus:border-[#0d9488] focus:ring-4 focus:ring-teal-50"
                      }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    disabled={isSubmitting}
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9+\-()\s]{7,20}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className={`block w-full rounded-lg border px-4 py-3 text-slate-900 transition-all outline-none
                      ${errors.phone
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-50"
                        : "border-slate-300 focus:border-[#0d9488] focus:ring-4 focus:ring-teal-50"
                      }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Country and City Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    disabled={isSubmitting}
                    {...register("country")}
                    className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-teal-50 transition-all appearance-none bg-white"
                  >
                    <option value="">Select your country</option>
                    {countryOptions.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    City / State
                  </label>
                  <input
                    id="city"
                    type="text"
                    disabled={isSubmitting}
                    {...register("city", {
                      maxLength: {
                        value: 80,
                        message: "Text is too long",
                      },
                    })}
                    className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#0d9488] focus:ring-4 focus:ring-teal-50 transition-all"
                    placeholder="City or State"
                  />
                  {errors.city && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-1"
                >
                  Message / Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  disabled={isSubmitting}
                  {...register("message", {
                    required: "Please enter your message",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters",
                    },
                    maxLength: {
                      value: 2000,
                      message: "Message is too long (max 2000 chars)",
                    },
                  })}
                  className={`block w-full rounded-lg border px-4 py-3 text-slate-900 transition-all outline-none resize-none
                    ${errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-50"
                      : "border-slate-300 focus:border-[#0d9488] focus:ring-4 focus:ring-teal-50"
                    }`}
                  placeholder="How can we help you today?"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg bg-[#0f766e] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#115e59] hover:shadow-teal-300/40 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
              >
                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
