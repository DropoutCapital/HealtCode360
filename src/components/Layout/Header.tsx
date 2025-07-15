// const Header = () => {
//   return (
//     <header className="w-full px-8 py-6">
//       <div className="flex items-center justify-between">
//         <div className="text-2xl font-bold text-slate-800">
//           HealtCode<span className="text-teal-600">360</span>
//         </div>

//         <nav className="hidden md:flex items-center space-x-8">
//           <a
//             href="#intro"
//             className="text-slate-700 hover:text-teal-600 font-medium"
//           >
//             Intro
//           </a>
//           <a
//             href="#about"
//             className="text-slate-700 hover:text-teal-600 font-medium"
//           >
//             About us
//           </a>
//           <a
//             href="#why"
//             className="text-slate-700 hover:text-teal-600 font-medium"
//           >
//             Why HC360?
//           </a>
//           <a
//             href="#partners"
//             className="text-slate-700 hover:text-teal-600 font-medium"
//           >
//             Partners
//           </a>
//         </nav>

//         <button className="text-black px-6 py-2 font-medium text-sm hover:bg-teal-100 rounded-md">
//           Start with my Insurance
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 py-4 z-50 relative">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-slate-800 z-50">
          HealtCode<span className="text-teal-600">360</span>
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
            About us
          </a>
          <a
            href="#why"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Why HC360?
          </a>
          <a
            href="#partners"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Partners
          </a>
        </nav>

        {/* Call to Action */}
        <button className="hidden md:inline-block text-black px-6 py-2 font-medium text-sm hover:bg-teal-100 rounded-md">
          Start with my Insurance
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-slate-800 z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
            About us
          </a>
          <a
            href="#why"
            onClick={toggleMenu}
            className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
          >
            Why HC360?
          </a>
          <a
            href="#partners"
            onClick={toggleMenu}
            className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
          >
            Partners
          </a>
          <button
            onClick={toggleMenu}
            className="mt-6 text-black px-6 py-2 font-medium text-base border border-teal-200 rounded-lg hover:bg-teal-100"
          >
            Start with my Insurance
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
