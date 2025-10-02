import Sidebar from "../../components/Layout/Sidebar";

type TeamMemberProps = {
  name: string;
  title: string;
  description: string;
};

const TeamMember = ({ name, title, description }: TeamMemberProps) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#00E0B8]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
    <div className="mb-6">
      <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-2 leading-tight">
        {name}
      </h3>
      <div className="inline-block">
        <p className="text-[#00E0B8] font-semibold text-sm uppercase tracking-wide bg-[#00E0B8]/10 px-3 py-1 rounded-full">
          {title}
        </p>
      </div>
    </div>
    <p className="text-gray-600 text-base leading-relaxed flex-grow">{description}</p>
  </div>
);

const Team = () => {
  return (
    <>
      {/* Founder Story Section */}
      <section
        id="founder"
        className="bg-white px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 pl-6 lg:pl-12">
            <div className="h-0.5 w-12 bg-[#00E0B8]"></div>
            <p className="text-gray-500 font-semibold tracking-wider uppercase text-xs">
              Founder Story
            </p>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 lg:mb-12 leading-tight pl-6 lg:pl-12">
            Fabian Graff — Founder & CEO
          </h2>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-4 lg:gap-3 items-center">
            {/* Left: Image */}
            <div className="flex justify-center lg:justify-start pl-6 lg:pl-12">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                  <img
                    src="/Fabian.png"
                    alt="Fabian Graff, Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Accent decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00E0B8]/10 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Right: Story & Quote */}
            <div className="space-y-8 pr-6 lg:pr-12">
              {/* Story Text */}
              <div className="space-y-6">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
                  Fabian lost both parents to cancer — not because it was
                  untreatable, but because it was caught too late. For years, he
                  lived in fear of not knowing whether he was healthy, but
                  couldn't justify the cost of elite testing.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
                  Now, he's made it his mission to democratize prevention so others never face the
                  same uncertainty.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-[#00E0B8] pl-6 py-2">
                <p className="text-gray-800 text-lg sm:text-xl font-medium italic mb-3 leading-relaxed">
                  "Testing shouldn't be a luxury.<br />
                  It should be the baseline for a healthy life."
                </p>
                <footer className="text-gray-500 text-sm">
                  <span className="font-semibold text-gray-700">Fabian Graff</span>
                  <span className="mx-1">·</span>
                  <span>CEO & Founder</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="bg-gray-50 px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-[#00E0B8]"></div>
            <p className="text-gray-500 font-semibold tracking-wider uppercase text-xs">
              Team
            </p>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 lg:mb-20 leading-tight">
            Built by Proven Operators
          </h2>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <TeamMember
              name="Kent McNeal"
              title="COO"
              description="30+ years in healthcare operations. Expert in payer contracting and medical technology. Built and scaled systems for patient outcomes — now powering the insurance engine of HealthCode360."
            />

            <TeamMember
              name="Ian Lee"
              title="CTO"
              description="Thiel Fellow. Ex-founder of Examedi (YC S21). Built Latin America's fastest telehealth platform to help his own father avoid hospitals. Engineering innovation for access, simplicity, and scale."
            />

            <TeamMember
              name="Chris Johnston"
              title="Applied AI"
              description="15+ years building scalable AI systems. MIT-certified in Applied Generative AI. Founder of PostScarcity AI, pioneering 'vibe coding' — fusing emotional resonance with generative AI for human-centered healthcare innovation."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
