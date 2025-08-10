import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="w-full px-9 py-8 z-50 relative ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Desktop navbar splitted left / right */}
        <div className="hidden md:flex items-center justify-between flex-1 mx-6">
          {/* Left group */}
          <nav className="flex items-center space-x-10">
            <a
              href="#about"
              className="text-white/80 hover:text-white font-medium"
            >
              Reason for being
            </a>
            <a
              href="#partners"
              className="text-white/80 hover:text-white font-medium"
            >
              How it works
            </a>
            <a
              href="#services"
              className="text-white/80 hover:text-white font-medium"
            >
              Services
            </a>
          </nav>

          {/* Right group */}
          <div className="flex items-center space-x-10">
            <a
              href="#contact"
              className="text-white/80 hover:text-white font-medium"
            >
              Contact us
            </a>
            <Link
              to="/register"
              className="group inline-flex items-center font-semibold text-teal-400 hover:text-teal-300"
            >
              <span className="mr-2 border-b-2 border-teal-400/60 group-hover:border-teal-300">
                Join us today
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-800 z-50 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-center space-y-8 px-8`}
      >
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
        <a
          href="#contact"
          onClick={toggleMenu}
          className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
        >
          Contact us
        </a>
        <Link to="/register">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center border border-teal-700 rounded-full px-5 py-2 text-teal-900 font-bold text-base hover:bg-teal-50 transition-all group w-48"
          >
            Join us
            <div className="ml-3 w-7 h-7 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-800 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
