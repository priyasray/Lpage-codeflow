import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Features from "./Features";
import { X, Menu } from "lucide-react";

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800" : "bg-slate-950/20 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 pt-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src={Logo} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>
          {/* Nav Links */}

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
          <button
            className="md:hidden items-center p-2 text-gray-300 hover:text-white cursor-pointer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in duration-300 ">
          <div className="flex flex-col gap-5 p-5 sm:py-6">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
