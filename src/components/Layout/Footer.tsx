import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-8 py-16 mt-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-700 leading-none">
            healthcode360
          </h1>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Website Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-8">
              Website navigation
            </h3>
            <nav className="space-y-4">
              <a
                href="#intro"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Intro
              </a>
              <a
                href="#about"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                About us
              </a>
              <a
                href="#partners"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Partners
              </a>
              <a
                href="#services"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Services
              </a>
              <a
                href="#contact"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Contact Us
              </a>
            </nav>
          </div>

          {/* Social Networking */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-8">
              Social Networking
            </h3>
            <nav className="space-y-4">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>X
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Facebook
              </a>
            </nav>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-8">Legals</h3>
            <nav className="space-y-4">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Terms & Conditions
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Privacy Policy
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span className="w-8 h-px bg-teal-400 mr-3"></span>
                Informed Medical Consent
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200">
          <div className="text-gray-700 mb-4 md:mb-0">
            <p className="font-medium">2025 HEALTCODE360°</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>

          <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium flex items-center gap-2">
            Start with my Insurance
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
