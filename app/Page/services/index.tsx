import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="relative w-full min-h-screen bg-slate-900 flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
        {/* Decorative Grid Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="animate-fade-in-up space-y-8 relative">
          {/* Subheading */}
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-12 bg-yellow-500"></div>
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">
              Residential Solar Service
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Transforming Homes with <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
              Clean Solar Energy
            </span>
          </h1>

          {/* Inset Image Pill */}
          {/* <div className="w-48 h-16 rounded-full overflow-hidden border-2 border-slate-700 relative hidden md:block">
            <Image
              src="/asset/about1.jpg"
              alt="Solar installation"
              fill
              className="object-cover"
            />
          </div> */}

          {/* Description */}
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            We understand that every home is unique, and so are its energy
            needs. Our residential solar services are designed to provide
            homeowners with customized solar solutions that maximize energy
            savings while conducting a sustainable lifestyle.
          </p>

          {/* CTA / Action Area */}
          {/* <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20"
            >
              Get a Quote
            </Link>

            <button className="flex items-center gap-3 text-white font-semibold hover:text-yellow-400 transition-colors group">
              <span className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-yellow-500 bg-slate-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Watch Video
            </button>
          </div> */}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto group">
        <Image
          src="/asset/homesolor.jpg"
          alt="Modern Home with Solar Panels"
          fill
          className="object-fill"
          priority
        />

        {/* Overlay for integration */}
        <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>

        {/* Circular About Badge */}
        {/* <div className="absolute left-1/2 top-0 lg:top-1/2 lg:left-0 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative w-32 h-32 md:w-40 md:h-40 group cursor-pointer">
            <div className="absolute inset-0 animate-spin-slow bg-green-500 rounded-full opacity-90 backdrop-blur-sm border-4 border-slate-900 shadow-2xl flex items-center justify-center">
              <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                <path
                  id="textPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[11px] font-bold uppercase tracking-widest fill-white">
                  <textPath href="#textPath" startOffset="0%">
                    • About Company • Renewable Energy
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-white transform rotate-45 group-hover:rotate-90 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
