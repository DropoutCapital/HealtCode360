import Sidebar from "../../components/Layout/Sidebar";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12"
    >
      <div className="flex items-center justify-center w-48 mx-auto">
        <Sidebar />
      </div>

      <div className="flex-1 p-8">
        <div className="flex justify-between items-start mb-1 m-18">
          <h1 className="text-6xl font-bold text-black">Services</h1>
          <button className="bg-teal-600 text-white cursor-pointer px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-sm flex items-center gap-2">
            Start with my Insurance
            <div className="bg-white rounded-full p-1">
              <ArrowUpRight className="w-4 h-4 text-teal-600" />
            </div>
          </button>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <h3 className="text-xl text-gray-700 font-semibold whitespace-nowrap">
              Your Personalized Roadmap
            </h3>
            <div className="h-px w-[500px] ml-12 bg-gray-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl">
          {/* Service 01 */}
          <div className="border-1 border-gray-50 p-6 rounded-lg shadow-sm">
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
          <div className="border-1 border-gray-50 p-6 rounded-lg shadow-sm">
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
          <div className="border-1 border-gray-50 p-6 rounded-lg shadow-sm">
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
