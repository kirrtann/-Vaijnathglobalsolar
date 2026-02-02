"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const MenuOptions = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About Us", href: "/about" },
  { id: 3, name: "Services", href: "/services" },
  { id: 4, name: "Solar Calculator", href: "/solar-calculator" },
  // { id: 5, name: "Career", href: "/career" },
  // { id: 6, name: "Blog", href: "/blog" },
  { id: 7, name: "Contact Us", href: "/contact", isButton: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-black/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center gap-3 group z-50 relative"
            >
              <div className="relative w-40 h-12 md:w-48 md:h-14 transition-transform group-hover:scale-105">
                <Image
                  src="/asset/logo.png"
                  alt="Vaijnath Global Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {MenuOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.href}
                  className={`${
                    option.isButton
                      ? "bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-bold"
                      : `text-md font-bold transition-colors relative group ${
                          pathname === option.href
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                        }`
                  }`}
                >
                  {option.name}
                  {!option.isButton && (
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                        pathname === option.href ? "w-full" : ""
                      }`}
                    ></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Visible on Mobile */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex flex-col h-full pt-28 px-6 pb-10 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {MenuOptions.map((option, index) => (
              <Link
                key={option.id}
                href={option.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                  option.isButton
                    ? "bg-blue-600 text-white mt-4 shadow-lg active:scale-95"
                    : "hover:bg-white/5 text-gray-300 hover:text-white border border-transparent hover:border-white/10"
                }`}
                style={{
                  transitionDelay: `${isOpen ? index * 50 : 0}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <span
                  className={`text-xl font-medium ${option.isButton ? "font-bold" : ""}`}
                >
                  {option.name}
                </span>
                {!option.isButton && (
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                )}
              </Link>
            ))}
          </div>

          <div
            className="mt-auto pt-8 border-t border-white/10 transition-all duration-500 delay-300"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="text-gray-400 text-sm">
                <p className="mb-2">Contact us directly:</p>
                <a
                  href="tel:+919876543210"
                  className="text-white text-lg font-semibold block hover:text-blue-400 transition-colors"
                >
                  +91 987 654 3210
                </a>
                <a
                  href="mailto:info@vaijnathglobal.com"
                  className="text-white text-lg font-semibold block hover:text-blue-400 transition-colors"
                >
                  info@vaijnathglobal.com
                </a>
              </div>
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Vaijnath Global. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
