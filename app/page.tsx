"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "./common/ServicesCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax-like feel or just simple cover */}
        <div className="absolute inset-0">
          <Image
            src="/asset/home.avif"
            alt="Solar Farm"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white space-y-6 animate-fade-in-up">
            <h5 className="text-yellow-500 font-bold uppercase tracking-widest text-sm md:text-base">
              Sustainable Energy Solutions
            </h5>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Powering a <br />
              <span className="text-yellow-500">Greener Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
              Vaijnath Global Solar is your trusted EPC partner for cutting-edge
              solar energy systems. We transform sunlight into sustainable
              savings.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/30"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div> */}
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/asset/about1.jpg"
                  alt="About Vaijnath Global"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 md:-bottom-12 md:-right-12 bg-yellow-500 p-8 md:p-12 rounded-full shadow-xl z-20 hidden md:block">
                <p className="text-center font-bold text-slate-900">
                  <span className="text-4xl block">10+</span>
                  Years Exp.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h6 className="text-yellow-600 font-bold uppercase tracking-wider mb-2">
                  About Us
                </h6>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  Leading the Solar <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-500">
                    Revolution
                  </span>
                </h2>
                <div className="w-20 h-1 bg-yellow-500" />
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                At Vaijnath Global Solar, we specialize in providing end-to-end
                EPC services for solar energy systems across Gujarat. Whether
                you're a homeowner, business, or industrial entity, we engineer
                solutions that fit your unique energy needs.
              </p>

              <ul className="space-y-4">
                {[
                  "Complete EPC Solutions",
                  "Residential & Industrial Projects",
                  "Sustainable & Cost-Efficient",
                  "Expert Maintenance & Support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-block mt-4 text-slate-900 font-bold border-b-2 border-yellow-500 hover:text-yellow-600 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row  gap-16 my-16">
            <div className="mb-16">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Our Comprehensive Solar Services
                </h2>
              </div>
            </div>
            <div>
              <p className="text-gray-500 max-w-2xl">
                Vaijnath Global Solar offers a complete range of solar EPC
                solutions tailored to meet diverse energy needs. Join the solar
                revolution with Vaijnath Global Solar, Gujarat's trusted EPC
                solar provider. Contact us for a consultation and discover how
                we can power your world with the sun.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Residential Solar"
              backgroundImage="/asset/about1.jpg"
              icon={
                <svg
                  className="w-8 h-8 text-yellow-500"
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
              }
            />
            <ServiceCard
              title="Industrial & Commercial"
              backgroundImage="/asset/about1.jpg"
              icon={
                <svg
                  className="w-8 h-8 text-yellow-500"
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
              }
            />
            <ServiceCard
              title="Ground Mounted"
              backgroundImage="/asset/about1.jpg"
              icon={
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="relative h-[500px] w-full mt-20">
        <Image
          src="/asset/farm.jpg"
          alt="Solar Farm Overlay"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Investing in a Cleaner Tomorrow
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8">
              Join the green revolution. We are committed to building a
              sustainable future through innovative renewable energy solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-yellow-500 hover:text-white transition-all transform hover:-translate-y-1"
            >
              Start Your Solar Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem value="5000+" label="Customers" />
            <StatItem value="10+" label="Years of Experience" />
            <StatItem value="100%" label="Client Satisfaction" />
            <StatItem value="24/7" label="Support" />
          </div>
        </div>
      </section>
    </main>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-4">
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
        {value}
      </div>
      <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">
        {label}
      </div>
    </div>
  );
}
