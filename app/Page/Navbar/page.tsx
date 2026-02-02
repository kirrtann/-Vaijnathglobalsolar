"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-48  h-14   transition-transform group-hover:scale-105">
              <Image
                src="/asset/logo.png"
                alt="Vaijnath Global Logo"
                fill
                className="object-contain rounded-xl"
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
                    ? "bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-bold"
                    : `text-md font-bold  transition-colors hover:text-white ${
                        pathname === option.href
                          ? "text-white"
                          : "text-yellow-600 hover:text-white"
                      }`
                }`}
              >
                {option.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-yellow-600 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0" }}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          {/* Close button inside overlay for clarity */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-8 h-8 text-gray-900" />
          </button>

          <div className="flex flex-col space-y-6">
            {MenuOptions.map((option) => (
              <Link
                key={option.id}
                href={option.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold transition-colors ${
                  option.isButton
                    ? "text-blue-600"
                    : pathname === option.href
                      ? "text-blue-600"
                      : "text-white hover:text-blue-600"
                }`}
              >
                {option.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vaijnath Global
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
