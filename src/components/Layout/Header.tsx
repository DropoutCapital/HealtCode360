import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, RotateCcw } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 py-4 z-50 relative">
      <div className="flex items-center justify-between">
        <div className="text-4xl font-bold text-slate-800 flex items-center space-x-1 z-50">
          <span>HealthCode</span>
          <span className="text-teal-600 flex items-center space-x-0.5 font-bold">
            <span>36</span>
            <RotateCcw className="w-7 h-9 rotate-180" strokeWidth={3} />
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#intro"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Intro
          </a>
          <a
            href="#about"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Reason for being
          </a>
          <a
            href="#partners"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            How it works
          </a>
          <a
            href="#services"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Services
          </a>
        </nav>
        {/* Call to Action */}
        <Link to="/register">
          <button className="hidden cursor-pointer md:flex items-center justify-between border border-teal-700 rounded-full px-6 py-2 text-teal-900 font-bold hover:bg-teal-50 transition-all group">
            Join us today
            <div className="ml-4 w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-800 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </Link>
        {/* Mobile Menu Button */}
        <Link to="/register">
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-800 z-50 cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Link>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 px-8">
          <a
            href="#intro"
            onClick={toggleMenu}
            className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
          >
            Intro
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
          >
            Reason for being
          </a>
          <a
            href="#partners"
            onClick={toggleMenu}
            className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
          >
            How it works
          </a>
          <a
            href="#services"
            onClick={toggleMenu}
            className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
          >
            Services
          </a>
          <button className="md:hidden flex items-center justify-center border border-teal-700 rounded-full px-4 py-2 text-teal-900 font-bold text-sm hover:bg-teal-50 transition-all group w-48 max-w-xs mx-auto">
            Join us
            <div className="ml-3 w-7 h-7 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-800 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
