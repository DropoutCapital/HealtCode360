import ArcCircles from "../../components/UI/Circle";
import MedicalCrossAnimation from "../../components/UI/MedicalCrossAnimation";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen px-8 flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 z-0 hidden lg:block opacity-10">
        <ArcCircles />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-[2] -mt-36">
        <MedicalCrossAnimation
          size={600}
          rows={24}
          cols={24}
          barThickness={9}
          cell={6}
          gap={5}
          baseColor="#00E0B8"
          accentColor="#00FFC8"
          duration={4200}
          stagger={22}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[720px] mx-auto px-4">
        {/* Brand */}
        <div className="mb-6">
          <p className="text-[#00E0B8] text-xl font-semibold tracking-wider">
            HealthCode360
          </p>
        </div>

        {/* H1 - Single line */}
        <h1
          className="text-white font-bold text-5xl leading-none mb-6 whitespace-nowrap"
          style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Elite Prevention. Insured. At Home.
        </h1>

        {/* Subhead */}
        <p
          className="text-gray-200 text-lg leading-relaxed mb-10"
          style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.7)" }}
        >
          Full-body disease screening that catches cancer,<br />
          heart disease, and more—before symptoms appear.
        </p>

        {/* 3 Benefit Bullets */}
        <div className="space-y-4 mb-10 w-full max-w-[600px] mx-auto">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#00E0B8] flex-shrink-0" />
            <p className="text-white text-base text-left">
              <strong>Convenient at-home collection</strong> – no clinic visits required
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#00E0B8] flex-shrink-0" />
            <p className="text-white text-base text-left">
              <strong>Maximum insurance coverage</strong> – save thousands per year
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#00E0B8] flex-shrink-0" />
            <p className="text-white text-base text-left">
              <strong>Early detection saves lives</strong> – catch diseases 5-10 years earlier
            </p>
          </div>
        </div>

        {/* Pricing Band */}
        <div className="bg-gradient-to-r from-[#00E0B8]/20 to-teal-500/20 backdrop-blur-sm border border-[#00E0B8]/40 rounded-lg px-6 py-4 mb-8 w-full max-w-[400px]">
          <p className="text-white text-base">
            <span className="line-through text-gray-400">~$5,000</span> →{" "}
            <span className="text-[#00E0B8] font-bold text-xl">$399/year</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="group inline-flex items-center justify-center bg-[#00E0B8] hover:bg-[#00c9a5] text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#00E0B8]/20"
          >
            Join now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#about"
            className="inline-flex items-center justify-center border-2 border-[#00E0B8] text-[#00E0B8] hover:bg-[#00E0B8]/10 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
