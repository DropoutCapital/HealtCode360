import Sidebar from "../../components/Layout/Sidebar";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center px-4 py-8 sm:py-12"
    >
      <div className="hidden lg:flex w-48 justify-center items-center h-full">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full max-w-7xl lg:p-8 mt-8 lg:mt-0">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-0 text-center sm:text-left">
            Services
          </h1>
          <button className="bg-teal-600 text-white cursor-pointer px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-sm flex items-center gap-2 mx-auto sm:mx-0">
            Start with my Insurance
            <div className="bg-white rounded-full p-1">
              <ArrowUpRight className="w-4 h-4 text-teal-600" />
            </div>
          </button>
        </div>

        <div className="w-full mb-12 px-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <h3 className="text-lg sm:text-xl text-gray-700 font-semibold text-center sm:text-left">
              Your Personalized Roadmap
            </h3>
            <div className="hidden w-[400px] sm:block h-px  bg-gray-300 sm:ml-4" />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 px-2">
          <div className="border border-gray-100 p-6 rounded-lg shadow-sm">
            <div className="text-4xl sm:text-5xl font-bold text-slate-700 mb-4">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
              134 Biomarkers
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              America's most comprehensive blood test to understand your health
              at the cellular level.
            </p>
          </div>

          <div className="border border-gray-100 p-6 rounded-lg shadow-sm">
            <div className="text-4xl sm:text-5xl font-bold text-slate-700 mb-4">
              02
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
              Home Extraction
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              No waiting in line. A certified health professional comes to your
              home or office.
            </p>
          </div>

          <div className="border border-gray-100 p-6 rounded-lg shadow-sm">
            <div className="text-4xl sm:text-5xl font-bold text-slate-700 mb-4">
              03
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
              Telehealth Unlimited
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
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
