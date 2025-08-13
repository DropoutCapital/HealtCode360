import Sidebar from "../../components/Layout/Sidebar";
import { Video, ShieldPlus, Microscope, Heart } from "lucide-react";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  body: string;
};

type BulletProps = {
  children: React.ReactNode;
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
            <div className="mt-4 mb-8">
              <h1 className="text-white font-bold leading-tight tracking-[-0.02em] text-4xl sm:text-6xl lg:text-[64px]">
                Healthcare from your
                <br />
                living room
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <FeatureCard
                icon={Microscope}
                title="Most Advanced Home Test in America"
                //subtitle="test in America"
                body="130+ biomarkers, no clinic visits."
              />

              <FeatureCard
                icon={Video}
                title="Unlimited Telehealth"
                //subtitle="Telehealt"
                body="Answers when you need them."
              />

              <FeatureCard
                icon={ShieldPlus}
                title="Personalized Plan"
                //subtitle="healt plan"
                body="Built from your unique biology."
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
