// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ArrowRight } from "lucide-react";

// const getEffectiveBackgroundColor = (el: Element | null): string => {
//   let node: Element | null = el;
//   while (node) {
//     const style = window.getComputedStyle(node as Element);
//     const bg = style.backgroundColor;
//     if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
//       return bg;
//     }
//     node = (node.parentElement as Element) || null;
//   }
//   return "rgb(255, 255, 255)";
// };

// const srgbToLinear = (c: number) => {
//   c /= 255;
//   return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
// };
// const relativeLuminance = (r: number, g: number, b: number) => {
//   const R = srgbToLinear(r);
//   const G = srgbToLinear(g);
//   const B = srgbToLinear(b);
//   return 0.2126 * R + 0.7152 * G + 0.0722 * B;
// };
// const contrastRatio = (L1: number, L2: number) => {
//   const light = Math.max(L1, L2);
//   const dark = Math.min(L1, L2);
//   return (light + 0.05) / (dark + 0.05);
// };

// const findNearestSectionId = (el: Element | null): string | null => {
//   let node: Element | null = el;
//   while (node) {
//     if ((node as HTMLElement).id) return (node as HTMLElement).id;
//     node = (node.parentElement as Element) || null;
//   }
//   return null;
// };

// const WHITE_TEXT_SECTIONS = new Set([
//   "hero",
//   "partners",
//   "prevention",
//   "services",
//   "testimonials",
//   "contact",
// ]);
// const BLACK_TEXT_SECTIONS = new Set(["preabout", "about", "footer"]);

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showBrand, setShowBrand] = useState(false);
//   const [isDarkBackground, setIsDarkBackground] = useState(true);

//   const smoothScrollToSelector = (selector: string) => {
//     const target = document.querySelector(selector) as HTMLElement | null;
//     if (!target) return;
//     const header = document.querySelector("header") as HTMLElement | null;
//     const headerH = header ? header.offsetHeight : 0;
//     const y =
//       target.getBoundingClientRect().top + window.scrollY - headerH - 12;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   const onNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const href = e.currentTarget.getAttribute("href") || "";
//     if (href.startsWith("#")) {
//       e.preventDefault();
//       setIsOpen(false);
//       smoothScrollToSelector(href);
//     }
//   };

//   const linkColorClass = isDarkBackground
//     ? "text-white/80 hover:text-white"
//     : "text-black/80 hover:text-black";
//   const activeBrandColor = isDarkBackground ? "text-white" : "text-black";
//   const joinUsColor = isDarkBackground
//     ? "text-teal-400 hover:text-teal-300"
//     : "text-teal-700 hover:text-teal-600";
//   const joinUsBorder = isDarkBackground
//     ? "border-teal-400/60 group-hover:border-teal-300"
//     : "border-teal-700/60 group-hover:border-teal-600";

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const recompute = () => {
//       setShowBrand(window.scrollY > 40);
//       const headerEl = document.querySelector("header");
//       if (headerEl) {
//         const prev = (headerEl as HTMLElement).style.pointerEvents;
//         (headerEl as HTMLElement).style.pointerEvents = "none";
//         const midX = Math.floor(window.innerWidth / 2);
//         const rect = headerEl.getBoundingClientRect();
//         const midY = Math.min(
//           window.innerHeight - 1,
//           Math.max(0, Math.floor(rect.bottom + 1))
//         );
//         let underEl = document.elementFromPoint(midX, midY);
//         (headerEl as HTMLElement).style.pointerEvents = prev;

//         const sectionId = findNearestSectionId(underEl)?.toLowerCase() || null;
//         if (sectionId && WHITE_TEXT_SECTIONS.has(sectionId)) {
//           setIsDarkBackground(true);
//           return;
//         }
//         if (sectionId && BLACK_TEXT_SECTIONS.has(sectionId)) {
//           setIsDarkBackground(false);
//           return;
//         }

//         const bgColor = getEffectiveBackgroundColor(underEl || headerEl);
//         const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];
//         const Lbg = relativeLuminance(rgb[0], rgb[1], rgb[2]);
//         const cWhite = contrastRatio(1, Lbg);
//         const cBlack = contrastRatio(Lbg, 0);
//         const WHITE_BIAS = 1.15;
//         setIsDarkBackground(cWhite * WHITE_BIAS >= cBlack);
//       }
//     };
//     recompute();
//     window.addEventListener("scroll", recompute, { passive: true });
//     window.addEventListener("resize", recompute);
//     return () => {
//       window.removeEventListener("scroll", recompute);
//       window.removeEventListener("resize", recompute);
//     };
//   }, []);

//   return (
//     <header className="w-full px-9 py-8 z-50 relative ">
//       <div className="flex items-center justify-between max-w-7xl mx-auto">
//         <div className="hidden md:flex items-center justify-between flex-1 mx-6">
//           <nav className="flex items-center space-x-5">
//             <a
//               href="#about"
//               onClick={onNavLinkClick}
//               className={`${linkColorClass} font-normal`}
//             >
//               Reason for being
//             </a>
//             <a
//               href="#partners"
//               onClick={onNavLinkClick}
//               className={`${linkColorClass} font-normal`}
//             >
//               How it works
//             </a>
//             <a
//               href="#services"
//               onClick={onNavLinkClick}
//               className={`${linkColorClass} font-normal`}
//             >
//               Services
//             </a>
//           </nav>

//           <Link
//             to="/"
//             className={`font-semibold mr-20 text-6xl tracking-wide ${activeBrandColor}  md:text-3xl transition-all duration-300 ease-out select-none ${
//               showBrand
//                 ? "opacity-100 scale-100"
//                 : "opacity-0 scale-95 pointer-events-none"
//             }`}
//           >
//             healthcode360
//           </Link>

//           <div className="flex items-center space-x-5">
//             <a
//               href="#contact"
//               onClick={onNavLinkClick}
//               className={`${linkColorClass} font-normal`}
//             >
//               Contact us
//             </a>
//             <Link
//               to="/register"
//               className={`group inline-flex items-center font-normal ${joinUsColor}`}
//             >
//               <span className={`mr-2 border-b-2 ${joinUsBorder}`}>
//                 Join us today
//               </span>
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </div>

//         <button
//           onClick={toggleMenu}
//           className={`md:hidden ${
//             isDarkBackground ? "text-teal-600" : "text-black"
//           } z-50 focus:outline-none`}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } flex flex-col items-center justify-center space-y-8 px-8`}
//       >
//         <a
//           href="#hero"
//           onClick={onNavLinkClick}
//           className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
//         >
//           Intro
//         </a>
//         <a
//           href="#about"
//           onClick={onNavLinkClick}
//           className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
//         >
//           Reason for being
//         </a>
//         <a
//           href="#partners"
//           onClick={onNavLinkClick}
//           className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
//         >
//           How it works
//         </a>
//         <a
//           href="#services"
//           onClick={onNavLinkClick}
//           className="text-2xl text-slate-800 font-semibold hover:text-teal-600"
//         >
//           Services
//         </a>
//         <a
//           href="#contact"
//           onClick={onNavLinkClick}
//           className="text-2xl text-whiteß font-semibold hover:text-teal-600"
//         >
//           Contact us
//         </a>
//         <Link to="/register">
//           <button
//             onClick={toggleMenu}
//             className="flex items-center justify-center border border-teal-700 rounded-full px-5 py-2 text-teal-900 font-bold text-base hover:bg-teal-50 transition-all group w-48"
//           >
//             Join us
//             <div className="ml-3 w-7 h-7 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-800 transition-colors">
//               <ArrowRight className="w-4 h-4 text-white" />
//             </div>
//           </button>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const getEffectiveBackgroundColor = (el: Element | null): string => {
  let node: Element | null = el;
  while (node) {
    const style = window.getComputedStyle(node as Element);
    const bg = style.backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      return bg;
    }
    node = (node.parentElement as Element) || null;
  }
  return "rgb(255, 255, 255)";
};

const srgbToLinear = (c: number) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};
const relativeLuminance = (r: number, g: number, b: number) => {
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};
const contrastRatio = (L1: number, L2: number) => {
  const light = Math.max(L1, L2);
  const dark = Math.min(L1, L2);
  return (light + 0.05) / (dark + 0.05);
};

const findNearestSectionId = (el: Element | null): string | null => {
  let node: Element | null = el;
  while (node) {
    if ((node as HTMLElement).id) return (node as HTMLElement).id;
    node = (node.parentElement as Element) || null;
  }
  return null;
};

const WHITE_TEXT_SECTIONS = new Set([
  "hero",
  "partners",
  "prevention",
  "services",
  "testimonials",
  "contact",
]);
const BLACK_TEXT_SECTIONS = new Set(["preabout", "about", "footer"]);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const smoothScrollToSelector = (selector: string) => {
    const target = document.querySelector(selector) as HTMLElement | null;
    if (!target) return;
    const header = document.querySelector("header") as HTMLElement | null;
    const headerH = header ? header.offsetHeight : 0;
    const y =
      target.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      smoothScrollToSelector(href);
    }
  };

  const linkColorClass = isDarkBackground || !hasScrolled
    ? "text-white/90 hover:text-white"
    : "text-black/90 hover:text-black";
  const activeBrandColor = isDarkBackground ? "text-white" : "text-black";
  const joinUsColor = isDarkBackground
    ? "text-teal-400 hover:text-teal-300"
    : "text-teal-700 hover:text-teal-600";
  const joinUsBorder = isDarkBackground
    ? "border-teal-400/60 group-hover:border-teal-300"
    : "border-teal-700/60 group-hover:border-teal-600";

  // Clases para el fondo difuminado
  const headerBackgroundClass = hasScrolled
    ? isDarkBackground
      ? "bg-black/20 backdrop-blur-md border-b border-white/10"
      : "bg-white/20 backdrop-blur-md border-b border-black/10"
    : "bg-transparent";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const recompute = () => {
      const scrollY = window.scrollY;
      setShowBrand(scrollY > 40);
      setHasScrolled(scrollY > 20);

      const headerEl = document.querySelector("header");
      if (headerEl) {
        const prev = (headerEl as HTMLElement).style.pointerEvents;
        (headerEl as HTMLElement).style.pointerEvents = "none";
        const midX = Math.floor(window.innerWidth / 2);
        const rect = headerEl.getBoundingClientRect();
        const midY = Math.min(
          window.innerHeight - 1,
          Math.max(0, Math.floor(rect.bottom + 1))
        );
        let underEl = document.elementFromPoint(midX, midY);
        (headerEl as HTMLElement).style.pointerEvents = prev;

        const sectionId = findNearestSectionId(underEl)?.toLowerCase() || null;
        if (sectionId && WHITE_TEXT_SECTIONS.has(sectionId)) {
          setIsDarkBackground(true);
          return;
        }
        if (sectionId && BLACK_TEXT_SECTIONS.has(sectionId)) {
          setIsDarkBackground(false);
          return;
        }

        const bgColor = getEffectiveBackgroundColor(underEl || headerEl);
        const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];
        const Lbg = relativeLuminance(rgb[0], rgb[1], rgb[2]);
        const cWhite = contrastRatio(1, Lbg);
        const cBlack = contrastRatio(Lbg, 0);
        const WHITE_BIAS = 1.15;
        setIsDarkBackground(cWhite * WHITE_BIAS >= cBlack);
      }
    };
    recompute();
    window.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      window.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full px-9 py-6 z-50 transition-all duration-300 ease-out ${headerBackgroundClass}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="hidden md:flex items-center justify-between flex-1 mx-6">
          <nav className="flex items-center space-x-6">
            {/* <a
              href="#about"
              onClick={onNavLinkClick}
              className={`${linkColorClass} font-normal transition-colors duration-200`}
            >
              Reason for being
            </a>
            <a
              href="#partners"
              onClick={onNavLinkClick}
              className={`${linkColorClass} font-normal transition-colors duration-200`}
            >
              How it works
            </a>
            <a
              href="#services"
              onClick={onNavLinkClick}
              className={`${linkColorClass} font-normal transition-colors duration-200`}
            >
              Services
            </a> */}
          </nav>
          {/* 
          <Link
            to="/"
            className={`font-semibold mr-20 text-6xl tracking-wide ${activeBrandColor} md:text-3xl transition-all duration-300 ease-out select-none ${
              showBrand
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            healthcode360
          </Link> */}

          <div className="flex items-center space-x-6">
            <a
              href="#contact"
              onClick={onNavLinkClick}
              className={`${linkColorClass} font-normal transition-colors duration-200`}
            >
              Contact us
            </a>
            <Link
              to="/register"
              className={`group inline-flex items-center font-normal ${joinUsColor} transition-colors duration-200`}
            >
              <span
                className={`mr-2 border-b-2 ${joinUsBorder} transition-all duration-200`}
              >
                Join us today
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className={`md:hidden ${
            isDarkBackground ? "text-white" : "text-black"
          } z-50 focus:outline-none transition-colors duration-200`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-center space-y-8 px-8`}
      >
        <a
          href="#hero"
          onClick={onNavLinkClick}
          className="text-2xl text-slate-800 font-semibold hover:text-teal-600 transition-colors duration-200"
        >
          Intro
        </a>
        <a
          href="#about"
          onClick={onNavLinkClick}
          className="text-2xl text-slate-800 font-semibold hover:text-teal-600 transition-colors duration-200"
        >
          Reason for being
        </a>
        <a
          href="#partners"
          onClick={onNavLinkClick}
          className="text-2xl text-slate-800 font-semibold hover:text-teal-600 transition-colors duration-200"
        >
          How it works
        </a>
        <a
          href="#services"
          onClick={onNavLinkClick}
          className="text-2xl text-slate-800 font-semibold hover:text-teal-600 transition-colors duration-200"
        >
          Services
        </a>
        <a
          href="#contact"
          onClick={onNavLinkClick}
          className="text-2xl text-slate-800 font-semibold hover:text-teal-600 transition-colors duration-200"
        >
          Contact us
        </a>
        <Link to="/register">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center border border-teal-700 rounded-full px-6 py-3 text-teal-900 font-bold text-base hover:bg-teal-50 transition-all group w-48"
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
