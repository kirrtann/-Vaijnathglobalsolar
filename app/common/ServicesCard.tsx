import Link from "next/link";

export function ServiceCard({
  title,
  subtitle,
  icon,
  backgroundImage,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  backgroundImage?: string;
}) {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden rounded-2xl bg-slate-900 cursor-pointer">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(${backgroundImage || "/placeholder.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        {/* Top Icon Area */}
        <div className="flex justify-start">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
            <div className="text-white [&>svg]:w-10 [&>svg]:h-10">{icon}</div>
          </div>
        </div>

        {/* Bottom Text Content */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          {/* Subtitle */}
          <p className="mb-2 text-sm font-bold tracking-wider text-teal-400 uppercase opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
            {subtitle || "Service"}
          </p>

          <h3 className="mb-2 text-3xl font-bold text-white leading-tight">
            {title}
          </h3>

          {/* Read More Link - Reveals on Hover */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-4 text-base font-semibold text-white hover:text-teal-400 transition-colors group/link"
              >
                Read More
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
