"use client";
import React, { useState } from "react";
import Image from "next/image";
import IMage from "../common/topimage";
import ScrollReveal from "../common/ScrollReveal";

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [roofArea, setRoofArea] = useState<number>(500);
  const [connectionType, setConnectionType] = useState<string>("residential");

  // Calculations
  const avgUnitCost = 8;
  const generationPerKWPerDay = 4;
  const daysInMonth = 30;
  const costPerKW = 65000;

  const unitsConsumed = monthlyBill / avgUnitCost;
  const requiredKW = unitsConsumed / (generationPerKWPerDay * daysInMonth);
  const estimatedCost = requiredKW * costPerKW;
  const monthlySavings = monthlyBill * 0.9; // Assuming 90% offset
  const annualSavings = monthlySavings * 12;
  const paybackYears = estimatedCost / annualSavings;

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mt-[-98px]">
        <IMage
          header="Solar Calculator"
          headercss="text-4xl md:text-6xl font-bold font-sans text-white"
          pere="Empowering your roof for a brighter, sustainable future"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <ScrollReveal direction="up" width="100%">
            <div className="bg-white/95 rounded-4xl shadow-2xl p-8 md:p-12 border border-slate-100 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-10 bg-yellow-500 rounded-full"></div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                  System Estimator
                </h2>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                      Average Monthly Bill
                    </label>
                    <span className="text-2xl font-black text-blue-600">
                      ₹{monthlyBill.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between mt-2 text-xs font-semibold text-slate-400">
                    <span>₹500</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                      Available Roof Area
                    </label>
                    <span className="text-2xl font-black text-blue-600">
                      {roofArea}{" "}
                      <span className="text-sm font-normal text-slate-400">
                        sq. ft
                      </span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={roofArea}
                    onChange={(e) => setRoofArea(Number(e.target.value))}
                    className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between mt-2 text-xs font-semibold text-slate-400">
                    <span>50 sq. ft</span>
                    <span>5000+ sq. ft</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Connection Category
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setConnectionType("residential")}
                      className={`group relative py-6 rounded-2xl font-bold transition-all border-2 overflow-hidden ${connectionType === "residential" ? "border-blue-600 text-blue-600 bg-blue-50" : "bg-white border-slate-100 text-slate-400 hover:border-slate-300"}`}
                    >
                      Residential
                      {connectionType === "residential" && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </button>
                    <button
                      onClick={() => setConnectionType("commercial")}
                      className={`group relative py-6 rounded-2xl font-bold transition-all border-2 overflow-hidden ${connectionType === "commercial" ? "border-blue-600 text-blue-600 bg-blue-50" : "bg-white border-slate-100 text-slate-400 hover:border-slate-300"}`}
                    >
                      Commercial
                      {connectionType === "commercial" && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-blue-100 font-bold text-sm uppercase tracking-widest mb-1">
                    Recommended System Size
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">
                      {requiredKW.toFixed(1)}
                    </span>
                    <span className="text-2xl font-bold opacity-80">kW</span>
                  </div>
                  <p className="mt-4 text-sm text-blue-100/80 leading-relaxed">
                    This system will cover approximately 90% of your energy
                    needs.
                  </p>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-48 w-48"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Results Section */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <ScrollReveal direction="up" width="100%" delay={0.2}>
              <div className="relative h-[350px] w-full rounded-5xl overflow-hidden shadow-2xl group">
                <Image
                  src="/asset/calculate.jpg"
                  alt="Solar Consultation"
                  fill
                  className="object-center rounded-3xl "
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="inline-block px-4 py-1.5 bg-yellow-500 text-slate-900 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                    Why Solar?
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Save Over ₹{(annualSavings * 25).toLocaleString()}{" "}
                  </h3>
                  <p className="text-slate-200">
                    Estimated lifetime savings over 25 years with Vaijnath
                    Solar.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal direction="up" width="100%" delay={0.3}>
                <div className="bg-white border border-slate-100 p-8 rounded-4xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">
                    Est. Investment
                  </p>
                  <p className="text-3xl font-black text-slate-800">
                    ₹{estimatedCost.toLocaleString()}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" width="100%" delay={0.4}>
                <div className="bg-white border border-slate-100 p-8 rounded-4xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">
                    Annual Savings
                  </p>
                  <p className="text-3xl font-black text-slate-800">
                    ₹{annualSavings.toLocaleString()}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal
                direction="up"
                width="100%"
                className="md:col-span-2"
                delay={0.5}
              >
                <div className="bg-slate-900 p-10 rounded-4xl text-white overflow-hidden relative group">
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">
                        Break-even Point
                      </h3>
                      <p className="text-slate-400 text-sm max-w-[250px]">
                        Your system pays for itself entirely in less than{" "}
                        {Math.ceil(paybackYears)} years.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-6xl font-black text-yellow-500">
                        {paybackYears.toFixed(1)}
                      </div>
                      <div className="text-xl font-bold text-slate-500 uppercase tracking-tighter">
                        Years
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 overflow-hidden h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-linear-to-r from-yellow-500 to-yellow-200 transition-all duration-1000 delay-300"
                      style={{
                        width: `${Math.min((paybackYears / 10) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>

                  {/* Decorative background circle */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-700"></div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" width="100%" delay={0.6}>
              <button className="group relative w-full bg-blue-600 text-white py-6 rounded-4xl text-xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Schedule Site Inspection
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-slate-400 text-sm leading-relaxed">
            *This calculator provides an estimate based on standard industry
            constants. Actual values may vary based on your specific location,
            roof orientation, and local utility rates. Connect with our experts
            for a detailed techno-commercial proposal.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default SolarCalculator;
