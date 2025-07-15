import { ArrowRight, Users, House, Microscope } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center text-center px-8 py-16 flex-grow"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-[10rem] font-extrabold leading-[1.1] tracking-tight text-center text-slate-900 mb-6">
        One Test. Zero Guesswork.
        <br />
        <span className="text-[#354555]">$1 a Day.</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-12 py-8">
        {/* Item 1 */}
        <div className="flex items-center space-x-2 text-slate-800">
          <Microscope className="w-6 h-6" />
          <span className="text-lg font-medium">134 Biomarkers</span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center space-x-2 text-slate-800">
          <Users className="w-6 h-6" />
          <span className="text-lg font-medium">Personal Health Team</span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center space-x-2 text-slate-800">
          <House className="w-6 h-6" />
          <span className="text-lg font-medium">Home Analysis</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="w-15 h-10 cursor-pointer rounded-full bg-teal-700 flex items-center justify-start px-1 transition-all duration-300"
          onClick={() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="bg-white rounded-full p-1 flex items-center justify-center ml-auto">
            <ArrowRight className="w-5 h-5 text-teal-700" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
