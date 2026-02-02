"use client";
import { IMageProps } from "./type";

const IMage = ({
  header,
  pere,
  detail,
  time,
  location,
  headercss,
}: IMageProps) => {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat bg-[url(/asset/photovoltaic-2138992_1280.jpg)] sm:mt-24 mt-[20] flex justify-center items-center sm:pb-5 max-h-[500px] min-h-[400px] sm:h-[400px] relative overflow-hidden">
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center items-center text-white sm:px-12 px-2 w-full">
          {/* Faded Background Text Effect */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[8rem] lg:text-[10rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none uppercase tracking-widest leading-none">
            {header}
          </h1>

          <h3 className={headercss}>{header}</h3>
          <p className="sm:mt-[20px] font-bold tracking-widest text-yellow-500 mt-2 uppercase text-sm">
            {pere}
          </p>

          {detail && (
            <h4 className="sm:text-2xl sm:mt-[20px] font-light max-w-2xl mx-auto">
              {detail}
            </h4>
          )}

          <div className="flex-none sm:flex justify-center items-center space-y-5 sm:space-y-0 sm:space-x-5 mt-6">
            {time && (
              <p className="border-[#2A356D] mt-2 text-white">
                <span className="border px-5 py-2 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all">
                  {time}
                </span>
              </p>
            )}
            {location && (
              <p className="text-[12px] flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full">
                {location}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMage;
