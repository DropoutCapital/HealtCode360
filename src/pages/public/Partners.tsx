import Sidebar from "../../components/Layout/Sidebar";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  return (
    <div
      id="partners"
      className="min-h-screen mb-6 mx-[20px] flex bg-black/10 backdrop-blur-md rounded-4xl"
    >
      {/* Sidebar */}
      <div className="flex items-center justify-center w-48 mx-auto">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
            One Proof. Zero Conjecture.
            <br />
            Total Clarity.
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We combine comprehensive biomarker analysis, home convenience,
            telehealth and precision protocols, all under a reimbursement model
            that transforms access and economics.
          </p>

          <ul className="text-gray-800 text-lg space-y-3">
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

        {/* Right Pricing Card */}
        <div className="bg-white rounded-3xl p-10 shadow-lg max-w-sm w-full text-center">
          <h3 className="text-xl font-bold text-black mb-2">Annual Price</h3>
          <p className="text-5xl font-bold text-slate-800 mb-2">$399</p>
          <p className="text-sm text-gray-600 mb-1">
            through your insurance coverage.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            (Normally a cost of more than $4,000)
          </p>

          {/* Botón centrado */}
          <div className="flex justify-center">
            <button className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
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
