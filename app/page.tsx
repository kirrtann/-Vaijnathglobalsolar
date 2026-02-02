"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "./common/ServicesCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/asset/home.avif"
            alt="Solar Farm"
            fill
            className="object-cover scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-yellow-500"></span>
              <h5 className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm">
                Sustainable Energy Solutions
              </h5>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter">
              Energy for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
                Generations
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl font-medium">
              Vaijnath Global Solar is Gujarat's premier EPC partner. We bridge
              the gap between sunlight and sustainable savings through
              engineering excellence.
            </p>

            <div className="flex flex-wrap gap-5 pt-8">
              <Link
                href="/contact"
                className="px-10 py-5 bg-yellow-500 text-slate-900 font-black rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-2xl shadow-yellow-500/20"
              >
                Start Your Journey
              </Link>
              <Link
                href="/solar-calculator"
                className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-slate-900 transition-all"
              >
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-[2px] h-12 bg-linear-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative group">
              <div className="relative h-[500px] md:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/asset/about1.jpg"
                  alt="Solar Panels"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-slate-900 p-10 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-center font-black text-white">
                  <span className="text-5xl block text-yellow-500 mb-1">
                    10+
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">
                    Years of EPC Expertise
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-20 lg:mt-0 space-y-8">
              <div className="space-y-4">
                <span className="text-yellow-600 font-black uppercase tracking-widest text-sm">
                  About Vaijnath Solar
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                  Building a <span className="text-yellow-500">Cleaner</span>{" "}
                  Gujarat
                </h2>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                We don't just install panels; we engineer long-term energy
                assets. As a certified EPC provider, Vaijnath Global Solar
                handles everything from initial feasibility studies to grid
                synchronization and lifelong maintenance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Turnkey EPC", desc: "Consulting to Connection" },
                  { title: "25yr Support", desc: "Long-term Security" },
                  { title: "Tier-1 Tech", desc: "Highest Efficiency" },
                  { title: "Custom ROI", desc: "Faster Payback" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 border-l-4 border-yellow-500 pl-4 py-1"
                  >
                    <h4 className="font-black text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-slate-900 font-black border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors uppercase tracking-widest text-sm"
                >
                  Learn Our Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-yellow-600 font-black uppercase tracking-widest text-sm">
              Specialized Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Solar Solutions For Every Need
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl font-medium">
              Whether it's a small rooftop or a utility-scale solar farm, we
              have the technical prowess to deliver maximum performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Residential Solar"
              subtitle="Home Energy"
              backgroundImage="/asset/homesolor.jpg"
              icon={<HomeIcon />}
            />
            <ServiceCard
              title="Industrial & Commercial"
              subtitle="Business Scale"
              backgroundImage="/asset/about1.jpg"
              icon={<BusinessIcon />}
            />
            <ServiceCard
              title="Operation & Maintenance"
              subtitle="Asset Management"
              backgroundImage="/asset/calculate.jpg"
              icon={<MaintenanceIcon />}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center mb-20">
          <span className="text-yellow-600 font-black uppercase tracking-widest text-sm">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
            The Way To Go Solar
          </h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
            {/* Decorative Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden lg:block"></div>

            {[
              { step: "01", title: "Consultation", desc: "Expert assessment" },
              { step: "02", title: "Site Audit", desc: "Technical survey" },
              { step: "03", title: "Engineering", desc: "CAD/System design" },
              { step: "04", title: "Installation", desc: "Swift execution" },
              { step: "05", title: "Commission", desc: "Grid connectivity" },
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 flex items-center justify-center rounded-2xl shadow-lg group-hover:border-yellow-500 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 mb-6">
                  <span className="text-2xl font-black">{p.step}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {p.title}
                </h4>
                <p className="text-slate-500 text-sm font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/asset/photovoltaic-2138992_1280.jpg"
            alt="Solar Panels"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Investing in a{" "}
            <span className="text-yellow-500 italic">Cleaner Tomorrow</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-xl mb-12 font-medium">
            Join 500+ happy customers in Gujarat who have switched to
            sustainable, free energy. Start saving today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="px-12 py-5 bg-white text-slate-900 font-black rounded-full hover:bg-yellow-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/solar-calculator"
              className="px-12 py-5 bg-slate-800 text-white font-black rounded-full hover:bg-slate-700 transition-all"
            >
              Try Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <StatItem value="5000+" label="Panel Installs" />
            <StatItem value="2.5MW" label="Total Capacity" />
            <StatItem value="Gujarat" label="Service Area" />
            <StatItem value="24/7" label="Support Reach" />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slow-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </main>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="space-y-1 group">
      <div className="text-5xl font-black text-slate-900 group-hover:text-yellow-600 transition-colors duration-500">
        {value}
      </div>
      <div className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">
        {label}
      </div>
    </div>
  );
}

// Icons
const HomeIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const BusinessIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const MaintenanceIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
