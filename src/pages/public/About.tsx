import Sidebar from "../../components/Layout/Sidebar";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-white flex px-8 py-20">
      <div className="w-48 mt-56 ml-16">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-start pl-12">
        {/* Mission Statement */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold text-black leading-tight">
            Our mission:
          </h1>
          <h2 className="text-6xl font-bold text-black leading-tight">
            to democratize health
          </h2>
        </div>

        {/* Our Bio Section */}
        <section className="max-w-3xl">
          <div className="mb-6">
            <h3 className="text-xl text-gray-700 font-semibold mb-2">
              Our Bio
            </h3>
            <div className="w-full h-px bg-gray-300" />
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            We founded HealthCode360 out of a shared frustration with a reactive
            healthcare system that reserves its best tools for an elite few.
            That's why we pioneered a new model that connects the world's most
            advanced diagnostics with your insurance coverage. Our team of
            clinicians, technologists, and wellness specialists is committed to
            giving you the clarity and tools to take control of your health like
            never before.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
