"use client";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white relative font-sans">
      {/* Top Contact Bar */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-yellow-500">
                  Vaijnath
                </span>
                <span className="text-3xl font-bold text-white">Global</span>
              </div>
            </div>

            {/* Contact Items */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full xl:w-auto justify-center xl:justify-end">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
                    Phone Number
                  </p>
                  <a
                    href="tel:+918128181651"
                    className="text-lg font-bold hover:text-yellow-500 transition-colors block leading-none"
                  >
                    +91 81281 81651
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
                    Phone Number
                  </p>
                  <a
                    href="tel:+919106991946"
                    className="text-lg font-bold hover:text-yellow-500 transition-colors block leading-none"
                  >
                    +91 91069 91946
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-1">
                    Email Us Here
                  </p>
                  <a
                    href="mailto:Vaijnathglobalsolar@gmail.com"
                    className="text-lg font-bold hover:text-yellow-500 transition-colors block leading-none"
                  >
                    Vaijnathglobalsolar@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Column 1: Address & Socials */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative inline-block">
              Head Office
              <span className="absolute left-0 bottom-[-10px] w-12 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
              Halvad - Sara Rd, Halvad, Gujarat 363330
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-600/20 text-yellow-500 rounded flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-600/20 text-yellow-500 rounded flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-600/20 text-yellow-500 rounded flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative inline-block">
              What We Do
              <span className="absolute left-0 bottom-[-10px] w-12 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Residential",
                "Industrial",
                "Ground Mounted",
                "Off-Grid Solar",
                "Solar Pump",
                "Turnkey Solar Epc Project",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-yellow-500 transition-colors flex items-center gap-3 group"
                  >
                    <ChevronRight
                      size={18}
                      className="text-yellow-500 group-hover:translate-x-1 transition-transform"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative inline-block">
              Useful Links
              <span className="absolute left-0 bottom-[-10px] w-12 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Md's Desk",
                "Benefits of Solar",
                "Career",
                "Blogs",
                "Solar Calculator",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-yellow-500 transition-colors flex items-center gap-3 group"
                  >
                    <ChevronRight
                      size={18}
                      className="text-yellow-500 group-hover:translate-x-1 transition-transform"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800 bg-black/20">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-center items-center text-slate-500 text-sm gap-4">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-yellow-500 font-semibold">
              Vaijnath Global
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={() =>
            window.open(
              "https://wa.me/919106991946?text=Hello! I'm interested in your solar services.",
              "_blank",
            )
          }
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <button
          className="bg-yellow-500 text-slate-900 p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all hover:scale-110 hover:-translate-y-1"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
}
