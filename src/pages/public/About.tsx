const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex mt-6">
      {/* Sidebar Navigation */}
      <div className="w-64 p-8">
        <nav className="space-y-4">
          <a
            href="#intro"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Intro
          </a>
          <a href="#about" className="block text-teal-600 font-medium">
            About us
          </a>
          <a
            href="#partners"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Partners
          </a>
          <a
            href="#services"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
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
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            Our mission:
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            to democratize health
          </h2>
        </div>

        {/* Our Bio Section */}
        <div className="max-w-4xl">
          <div className="mb-8">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Our Bio</h3>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed">
            <p>
              We founded HealthCode360 out of a shared frustration with a
              reactive healthcare system that reserves its best tools for an
              elite few. That's why we pioneered a new model that connects the
              world's most advanced diagnostics with your insurance coverage.
              Our team of clinicians, technologists, and wellness specialists is
              committed to giving you the clarity and tools to take control of
              your health like never before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
