import Sidebar from "../../components/Layout/Sidebar";
import { Video, ShieldPlus, Microscope, Heart, ClipboardCheck, CreditCard, Home, FlaskConical, FileText, Target } from "lucide-react";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  body: string;
};

type BulletProps = {
  children: React.ReactNode;
};

type StepCardProps = {
  icon: React.ElementType;
  stepNumber: number;
  title: string;
  description: string;
  isLast?: boolean;
};

const FeatureCard = ({
  icon: Icon,
  title,
  subtitle,
  body,
}: FeatureCardProps) => (
  <div className="glass-card p-6 sm:p-7 w-full">
    <div className="mb-4">
      <Icon className="w-8 h-8 opacity-90 text-white" />
    </div>
    <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
    {subtitle && (
      <p className="text-lg font-semibold text-white/90 mb-3">{subtitle}</p>
    )}
    <p className="text-slate-200/80 leading-relaxed text-base">{body}</p>
  </div>
);

const StepCard = ({
  icon: Icon,
  stepNumber,
  title,
  description,
  isLast = false,
}: StepCardProps) => (
  <div className="relative flex gap-6 group">
    {/* Icon and Number Container */}
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#00E0B8]/20 to-teal-500/20 border border-[#00E0B8]/40 backdrop-blur-sm">
        <Icon className="w-7 h-7 text-[#00E0B8]" />
        <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#00E0B8] text-gray-900 text-xs font-bold">
          {stepNumber}
        </div>
      </div>
      {/* Connector Line */}
      {!isLast && (
        <div className="w-0.5 h-full min-h-[60px] bg-gradient-to-b from-[#00E0B8]/40 to-[#00E0B8]/10 mt-2" />
      )}
    </div>

    {/* Content */}
    <div className="flex-1 pb-8">
      <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-[#00E0B8] transition-colors">
        {title}
      </h3>
      <p className="text-slate-200/80 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Bullet = ({ children }: BulletProps) => (
  <div className="glass-pill px-5 sm:px-7 py-4 sm:py-5 text-slate-100/95  sm:w-auto">
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/30">
        <Heart className="w-4 h-4 text-[#0EFFEB]" />
      </span>
      <p className="text-sm sm:text-base leading-relaxed">{children}</p>
    </div>
  </div>
);

const InitialPartnership = () => {
  return (
    <>
      <div className="app-hero-noise" />
      <div className="screen-frame" />

      <div id="partners" className="min-h-screen px-4 sm:px-6 md:px-10 py-10">
        <div className="glass-surface min-h-[70vh] w-full mx-auto p-6 sm:p-10 lg:p-12 flex gap-8">
          <div className="hidden lg:flex items-center justify-center w-48">
            <Sidebar />
          </div>

          <div className="flex-1 flex flex-col">
            <div className="mt-4 mb-12">
              <h1 className="text-white font-bold leading-tight tracking-[-0.02em] text-4xl sm:text-6xl lg:text-[64px]">
                How it works
              </h1>
            </div>

            <div className="max-w-3xl">
              <StepCard
                icon={ClipboardCheck}
                stepNumber={1}
                title="Submit & Verify"
                description="Upload insurance, get approved"
              />

              <StepCard
                icon={CreditCard}
                stepNumber={2}
                title="Pay"
                description="Typically $399 if we can fully use insurance"
              />

              <StepCard
                icon={Home}
                stepNumber={3}
                title="Home Collection"
                description="Certified phlebotomist visits you"
              />

              <StepCard
                icon={FlaskConical}
                stepNumber={4}
                title="Analysis"
                description="Advanced lab testing of your sample"
              />

              <StepCard
                icon={Target}
                stepNumber={5}
                title="Results & Implementation"
                description="Comprehensive health report with personalized plan and guided support to execute your prevention strategy"
                isLast={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PreventionSection = () => {
  return (
    <section
      id="prevention"
      className="px-4 sm:px-6 md:px-10 py-14 sm:py-16 lg:py-20 "
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-white font-bold tracking-[-0.02em] leading-tight text-4xl sm:text-5xl lg:text-6xl">
          Prevention Can’t Wait
        </h2>

        <p className="mt-6 text-lg sm:text-2xl text-slate-100/90 leading-relaxed">
          90% of U.S. healthcare spending treats chronic disease.
          <br className="hidden sm:block" />
          We help you{" "}
          <span className="text-[#0EFFEB] font-semibold">prevent it </span>{" "}
          before it starts.
        </p>

        {/* <div className="mt-10 sm:mt-12 space-y-4">
          <Bullet>
            Detect health risks with our panel of 134 biomarkers before they
            become problems.
          </Bullet>

          <Bullet>
            Receive AI-driven health insights and wellness protocols tailored to
            your unique body chemistry.
          </Bullet>

          <Bullet>
            Follow your progress with regular updates and ongoing support from
            our licensed medical team.
          </Bullet>
        </div> */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center">
          <div className="w-full max-w-4xl space-y-4">
            <Bullet>
              Detect health risks with our panel of 134 biomarkers before they
              become problems.
            </Bullet>

            <Bullet>
              Receive AI-driven health insights and wellness protocols tailored
              to your unique body chemistry.
            </Bullet>

            <Bullet>
              Follow your progress with regular updates and ongoing support from
              our licensed medical team.
            </Bullet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Partners() {
  return (
    <>
      <InitialPartnership />
      <PreventionSection />
    </>
  );
}
