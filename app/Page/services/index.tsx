import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../../common/ScrollReveal";

const serviceList = [
  {
    id: "residential",
    tag: "Residential Solar",
    title: "Eco-Friendly Homes with Clean Energy",
    description:
      "Personalized solar solutions designed for your home's unique energy footprint. Save up to 90% on electricity bills while increasing your property value.",
    image: "/asset/homesolor.jpg",
    features: [
      "Custom System Design",
      "Net Metering Support",
      "25-Year Warranty",
      "Smart Monitoring",
    ],
    reverse: false,
  },
  {
    id: "commercial",
    tag: "Commercial & Industrial",
    title: "Power Your Business Sustainability",
    description:
      "Scale your business with high-capacity solar installations. Reduce operational costs and demonstrate your commitment to environmental responsibility.",
    image: "/asset/about1.jpg",
    features: [
      "Tax Benefits (Section 32)",
      "Zero Operating Costs",
      "Peak Shaving",
      "Rapid ROI",
    ],
    reverse: true,
  },
  {
    id: "maintenance",
    tag: "Operation & Maintenance",
    title: "Elite Care for Your Solar Assets",
    description:
      "Ensure maximum uptime and efficiency with our professional maintenance services. From panel cleaning to inverter health checks, we cover it all.",
    image: "/asset/calculate.jpg",
    features: [
      "Annual Maintenance (AMC)",
      "Robotic Cleaning",
      "Performance Audits",
      "Rapid Fault Repair",
    ],
    reverse: false,
  },
];

const Services = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/asset/home.avif"
            alt="Solar Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive solar solutions tailored for Gujarat's energy needs.
            From consulting to long-term maintenance.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="container mx-auto px-4 py-24 space-y-32">
        {serviceList.map((service, index) => (
          <section
            key={service.id}
            className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}
          >
            {/* Image Side */}
            <ScrollReveal
              direction={service.reverse ? "right" : "left"}
              width="100%"
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-yellow-500/10 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Content Side */}
            <ScrollReveal
              direction={service.reverse ? "left" : "right"}
              width="100%"
              className="w-full lg:w-1/2"
              delay={0.2}
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-0.5 w-10 bg-yellow-500"></span>
                    <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
                      {service.tag}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                    >
                      <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="font-bold text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all group"
                  >
                    Enquire Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>
        ))}
      </div>

      {/* Trust Banner */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up" width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to switch to solar?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" width="100%" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/solar-calculator"
                className="px-10 py-5 bg-yellow-500 text-slate-900 font-black rounded-full hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20"
              >
                Use Solar Calculator
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-slate-900 font-black rounded-full hover:bg-slate-100 transition-all"
              >
                Talk to Expert
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
