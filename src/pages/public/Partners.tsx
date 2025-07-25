import Sidebar from "../../components/Layout/Sidebar";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  return (
    <div
      id="partners"
      className="min-h-screen mb-6 mx-4 sm:mx-6 md:mx-10 lg:mx-[20px] flex flex-col lg:flex-row items-center justify-center bg-white/10 backdrop-blur-md rounded-4xl p-6 sm:p-8"
    >
      <div className="hidden lg:flex items-center justify-center w-48">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-start justify-center lg:gap-6 mt-6 lg:mt-0 w-full max-w-7xl">
        <div className="max-w-xl text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-4 leading-tight">
            One Proof. Zero Conjecture.
            <br />
            Total Clarity.
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            We combine comprehensive biomarker analysis, home convenience,
            telehealth and precision protocols, all under a reimbursement model
            that transforms access and economics.
          </p>

          <ul className="text-gray-800 text-base sm:text-lg space-y-3 text-left inline-block">
            <li className="flex items-start gap-3">
              <span className="text-teal-600">✓</span>
              34 more biomarkers than the competition.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600">✓</span>
              Convenience with home testing.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600">✓</span>
              No hidden costs or additional sales.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600">✓</span>
              Affordable, for only $1 per day.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg w-full max-w-sm text-center">
          <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
            Annual Price
          </h3>
          <p className="text-4xl sm:text-5xl font-bold text-slate-800 mb-2">
            $399
          </p>
          <p className="text-sm text-gray-600 mb-1">
            through your insurance coverage.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            (Normally a cost of more than $4,000)
          </p>

          <div className="flex justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
              View my free coverage
              <div className="bg-white rounded-full p-1">
                <ArrowRight className="w-5 h-5 text-teal-600" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
