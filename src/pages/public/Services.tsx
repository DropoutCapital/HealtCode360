import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <div className="w-64 p-8">
        <nav className="space-y-4">
          <a
            href="#intro"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Intro
          </a>
          <a
            href="#about"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            About us
          </a>
          <a
            href="#partners"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Partners
          </a>
          <a href="#services" className="block text-teal-600 font-medium">
            Services
          </a>
          <a
            href="#contact"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header with Title and CTA Button */}
        <div className="flex justify-between items-start mb-16">
          <h1 className="text-6xl font-bold text-black">Services</h1>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-sm flex items-center gap-2">
            Start with my Insurance
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subtitle */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-gray-800 mb-8">
            Your Personalized Roadmap
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl">
          {/* Service 01 */}
          <div>
            <div className="text-5xl font-bold text-slate-700 mb-6">01</div>
            <h3 className="text-xl font-bold text-black mb-4">
              134 Biomarkers
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              America's most comprehensive blood test to understand your health
              at the cellular level.
            </p>
          </div>

          {/* Service 02 */}
          <div>
            <div className="text-5xl font-bold text-slate-700 mb-6">02</div>
            <h3 className="text-xl font-bold text-black mb-4">
              Home Extraction
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              No waiting in line. A certified health professional comes to your
              home or office.
            </p>
          </div>

          {/* Service 03 */}
          <div>
            <div className="text-5xl font-bold text-slate-700 mb-6">03</div>
            <h3 className="text-xl font-bold text-black mb-4">
              Telehealth Unlimited
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              One year of access to our medical team to interpret your results
              and guide you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
