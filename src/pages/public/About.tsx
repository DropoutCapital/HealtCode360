import Sidebar from "../../components/Layout/Sidebar";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen mb-6 mt-6 bg-white flex items-center justify-center px-8 py-20"
    >
      <div className="flex items-center justify-center w-48 mx-auto">
        <Sidebar />
      </div>

      <main className="flex-1 flex flex-col items-start pl-12">
        <div className="mb-20">
          <h1 className="text-6xl font-bold text-black leading-tight">
            Our reason for being:
          </h1>
          <h2 className="text-6xl font-bold text-black leading-tight">
            Prevention Can't Wait
          </h2>
        </div>

        <section className="max-w-3xl">
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <h3 className="text-xl text-gray-700 font-semibold whitespace-nowrap">
                Our reason
              </h3>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            Ninety percent of the $4.5 trillion in annual U.S. healthcare
            spending goes to treating chronic diseases, rather than preventing
            them. Six out of ten adults are already living with at least one
            chronic disease. That's not a health care system, that's bankruptcy
            through a thousand avoidable co-pays.{" "}
            <span className="font-bold"> We are changing it. </span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
