import ArcCircles from "../../components/UI/Circle";
import MedicalCrossAnimation from "../../components/UI/MedicalCrossAnimation";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center bg-transparent"
    >
      <div className="absolute inset-0 z-0 hidden lg:block opacity-10">
        <ArcCircles />
      </div>
      <div className="absolute right-0 top-[40%] -translate-y-1/2 z-[2] flex items-center justify-center">
        <MedicalCrossAnimation
          size={552}
          rows={24}
          cols={24}
          ess={9}
          cell={6}
          gap={5}
          baseColor="#00E0B8"
          accentColor="#00FFC8"
          duration={4200}
          stagger={22}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="w-full max-w-7xl mx-auto px-12 lg:px-20">
          <div className="max-w-[600px]">
            {/* H1 */}
            <h1
              className="text-white font-bold text-5xl lg:text-6xl leading-tight mb-6"
              style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.8)" }}
            >
              Elite Prevention.<br />
              Insured. At Home.
            </h1>

            {/* 3 Benefit Bullets */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E0B8] flex-shrink-0" />
                <p className="text-white text-base">
                  <strong>Convenient at-home collection</strong> – no clinic visits required
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E0B8] flex-shrink-0" />
                <p className="text-white text-base">
                  <strong>Maximum insurance coverage</strong> – save thousands per year
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E0B8] flex-shrink-0" />
                <p className="text-white text-base">
                  <strong>Early detection saves lives</strong> – catch diseases 5-10 years earlier
                </p>
              </div>
            </div>

            {/* Pricing Band */}
            <div className="inline-block bg-gradient-to-r from-[#00E0B8]/20 to-teal-500/20 backdrop-blur-sm border border-[#00E0B8]/40 rounded-full px-5 py-3 mb-8">
              <p className="text-white text-base">
                Normally $5,000+, now <span className="text-[#00E0B8] font-bold text-xl">$399/year</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center bg-[#00E0B8] hover:bg-[#00c9a5] text-gray-900 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#00E0B8]/20"
              >
                Join now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center border-2 border-[#00E0B8] text-[#00E0B8] hover:bg-[#00E0B8]/10 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;