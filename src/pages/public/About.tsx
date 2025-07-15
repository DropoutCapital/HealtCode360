import Sidebar from "../../components/Layout/Sidebar";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-auto lg:min-h-screen mb-6 mt-6 flex flex-col lg:flex-row bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="hidden lg:flex items-center justify-center w-48">
        <Sidebar />
      </div>

      <main className="flex-1 flex flex-col justify-center items-center text-center lg:text-left lg:items-start py-16 sm:py-20 lg:py-0 h-screen lg:h-auto">
        <div className="max-w-5xl px-4">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-2">
              Our reason for being:
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Prevention Can't Wait
            </h2>
          </div>

          <section className="max-w-3xl mx-auto lg:mx-0">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
                <h3 className="text-lg sm:text-xl text-gray-700 font-semibold whitespace-nowrap mb-2 sm:mb-0">
                  Our reason
                </h3>
                <div className="h-px w-full bg-gray-300" />
              </div>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify sm:text-left">
              Ninety percent of the $4.5 trillion in annual U.S. healthcare
              spending goes to treating chronic diseases, rather than preventing
              them. Six out of ten adults are already living with at least one
              chronic disease. That's not a health care system, that's
              bankruptcy through a thousand avoidable co-pays.{" "}
              <span className="font-bold"> We are changing it. </span>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
