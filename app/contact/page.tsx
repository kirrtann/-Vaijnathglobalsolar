"use client";
import IMage from "../common/topimage";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white pb-20 mt-[-98px]">
      <IMage header="Contact Us" headercss="text-4xl font-bold font-sans" />

      <div className="container mx-auto px-4 mt-20 max-w-7xl space-y-20">
        {/* Section 1: Contact Info & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/asset/about1.jpg"
              alt="Customer Service"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-yellow-500"></span>
                <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm">
                  Inquire Now
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Contact Us for <br />
                <span className="text-yellow-500">Energy Revolution</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Join the solar revolution with Vaijnath Global Solar, Gujarat's
                trusted EPC solar provider. Contact us for a consultation and
                discover how we can power your world with the sun.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                  <MapPin className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Head Office</h4>
                  <p className="text-slate-600 leading-relaxed max-w-sm">
                    Halvad - Sara Rd, Halvad, Gujarat 363330
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                  <Mail className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <a
                    href="mailto:Vaijnathglobalsolar@gmail.com"
                    className="text-slate-600 hover:text-yellow-600 transition-colors"
                  >
                    Vaijnathglobalsolar@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                  <Phone className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <div className="flex flex-col text-slate-600">
                    <a
                      href="tel:+918128181651"
                      className="hover:text-yellow-600 transition-colors"
                    >
                      +91 8128181651
                    </a>
                    <a
                      href="tel:+919106991946"
                      className="hover:text-yellow-600 transition-colors"
                    >
                      +91 9106991946
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
          {/* Left: Form */}
          <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl">
            <div className="mb-8">
              <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                Feel free to contact us
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Let's Get in Touch
              </h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 shadow-sm hover:shadow-md transition-all sm:col-span-1"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 shadow-sm hover:shadow-md transition-all sm:col-span-1"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 shadow-sm hover:shadow-md transition-all"
              />
              <textarea
                placeholder="Enter Message"
                className="w-full px-6 py-4 rounded-3xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 shadow-sm hover:shadow-md transition-all min-h-[160px] resize-y"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-slate-900 font-bold py-4 rounded-full text-lg hover:bg-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.37400009677!2d71.18169891111134!3d23.01003617909569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395a2b8c3c26928f%3A0xf30da33d1d689f2d!2sSiddhanath%20Electrical%26solar!5e0!3m2!1sen!2sin!4v1770029432538!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
