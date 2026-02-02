import Image from "next/image";
import IMage from "../common/topimage";

export default function AboutPage() {
  return (
    <div className="bg-white pb-20">
      <div className="mt-[-98px]">
        <IMage
          header="About Us"
          headercss="text-4xl md:text-6xl font-bold font-sans text-white"
          pere="Pioneering the energy transition through innovation and excellence"
        />
      </div>

      <div className="container mx-auto px-4 mt-24 max-w-7xl">
        {/* Section 1: Hero Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/asset/about1.jpg"
                alt="Solar Panel Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 rounded-2xl text-white shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-yellow-500">10+</p>
              <p className="text-sm font-semibold tracking-wider uppercase">
                Years of Excellence
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-yellow-500"></span>
                <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm">
                  Leading Solar Provider
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1]">
                Empowering India with{" "}
                <span className="text-yellow-500 underline decoration-slate-200 underline-offset-8">
                  Sustainable
                </span>{" "}
                Energy
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              At Vaijnath Global Solar, we are dedicated to revolutionizing the
              way Gujarat and India consume energy. As a leading EPC
              (Engineering, Procurement, and Construction) solar provider, we
              specialize in delivering high-efficiency solar solutions for
              residential, commercial, and industrial clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="bg-yellow-100 p-3 rounded-xl group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 20.944a11.955 11.955 0 01-8.618-3.04A11.952 11.952 0 0012 21.48a11.952 11.952 0 008.618-3.576 11.955 11.955 0 01-8.618 3.04z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Quality Assured</h4>
                  <p className="text-sm text-slate-500">
                    Premium Grade-A modules only
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Smart Design</h4>
                  <p className="text-sm text-slate-500">
                    Maximum energy yield optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Stats */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-900 rounded-[3rem] p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px]"></div>

          <div className="space-y-2 relative z-10">
            <h3 className="text-5xl font-black text-yellow-500">500+</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Projects Completed
            </p>
          </div>
          <div className="space-y-2 relative z-10">
            <h3 className="text-5xl font-black text-yellow-500">2.5MW</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Installed Capacity
            </p>
          </div>
          <div className="space-y-2 relative z-10">
            <h3 className="text-5xl font-black text-yellow-500">100%</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Happy Clients
            </p>
          </div>
          <div className="space-y-2 relative z-10">
            <h3 className="text-5xl font-black text-yellow-500">1.2M</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              CO2 Reduced (Kg)
            </p>
          </div>
        </div>

        {/* Section 3: Vision & Mission */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Our Vision
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the most trusted and innovative renewable energy partner in
              India, driving the global transition toward carbon neutrality
              through cutting-edge solar technology and exceptional service.
            </p>
          </div>

          <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 -rotate-3 group-hover:-rotate-6 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
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
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Our Mission
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our mission is to empower individuals and businesses with
              sustainable energy solutions that are affordable, reliable, and
              expertly installed, fostering a cleaner planet for future
              generations.
            </p>
          </div>
        </div>

        {/* Section 4: Why Us? */}
        <div className="mt-32 text-center">
          <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-16">
            The Core of Vaijnath Solar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-800">
                Integrity First
              </h4>
              <p className="text-slate-500">
                We believe in transparent pricing and honest consultations,
                ensuring every client feels confident in their investment.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-800">
                Technical Excellence
              </h4>
              <p className="text-slate-500">
                Our engineers are certified experts who stay at the forefront of
                solar technology and installation best practices.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-800">
                Client Centric
              </h4>
              <p className="text-slate-500">
                From the initial site visit to lifetime maintenance, we provide
                unmatched support throughout your solar journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
