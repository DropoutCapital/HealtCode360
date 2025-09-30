import Sidebar from "../../components/Layout/Sidebar";

type TeamMemberProps = {
  name: string;
  title: string;
  description: string;
};

const TeamMember = ({ name, title, description }: TeamMemberProps) => (
  <div className="bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#00E0B8]/50 transition-all duration-300">
    <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-2">
      {name}
    </h3>
    <p className="text-[#00E0B8] font-semibold mb-4">{title}</p>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const Team = () => {
  return (
    <>
      {/* Founder Story Section */}
      <section
        id="founder"
        className="bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-0.5 w-12 bg-[#00E0B8]"></div>
            <p className="text-gray-900 font-semibold tracking-wider uppercase text-sm">
              Founder Story
            </p>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 sm:mb-16">
            Fabian Graff — Founder & CEO
          </h2>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Story Text */}
            <div className="flex items-center h-full">
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                Fabian lost both parents to cancer — not because it was
                untreatable, but because it was caught too late. For years, he
                lived in fear of not knowing whether he was healthy, but
                couldn't justify the cost of elite testing. Now, he's made it
                his mission to democratize prevention so others never face the
                same uncertainty.
              </p>
            </div>

            {/* Right: Image & Quote */}
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl p-10 lg:p-12 border border-gray-200 flex items-center justify-center">
              <div className="flex flex-col items-center gap-8 w-full max-w-md">
                {/* Founder image */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#00E0B8]/30 shadow-lg">
                  <img
                    src="/Fabian.png"
                    alt="Fabian Graff, Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote */}
                <blockquote className="text-center">
                  <p className="text-gray-900 text-xl sm:text-2xl font-medium italic mb-4 leading-relaxed">
                    "Testing shouldn't be a luxury. It should be the baseline
                    for a healthy life."
                  </p>
                  <footer className="text-gray-600 text-base">
                    <span className="font-semibold text-gray-900">Fabian Graff</span>, CEO & Founder
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-0.5 w-12 bg-[#00E0B8]"></div>
            <p className="text-gray-900 font-semibold tracking-wider uppercase text-sm">
              Team
            </p>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 sm:mb-16">
            Built by Proven Operators
          </h2>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
