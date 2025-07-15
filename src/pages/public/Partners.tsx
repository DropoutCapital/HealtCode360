// import Sidebar from "../../components/Layout/Sidebar";
// import { ShieldPlus } from "lucide-react";
// import RefreshIcon from "../../images/icons/simplifiedIcons-rsinfondo.png";

// const Partners = () => {
//   return (
//     <div
//       id="partners"
//       className="min-h-screen mb-6 mx-[20px] flex bg-black/10 backdrop-blur-md rounded-4xl"
//     >
//       <div className="flex items-center justify-center w-48 mx-auto">
//         <Sidebar />
//       </div>

//       <div className="flex-1 p-8">
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
//             Backed by a Solid
//           </h1>
//           <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
//             Medical Infrastructure
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           <div className="text-center">
//             <div className="text-6xl font-bold text-black mb-7">48</div>
//             <h3 className="text-2xl font-bold text-black mb-4">
//               Covered
//               <br />
//               States
//             </h3>
//             <p className="text-gray-700 text-lg leading-relaxed mt-8">
//               Our network of licensed physicians allows us to serve you almost
//               anywhere in the country.
//             </p>
//           </div>

//           {/* Simplified Reimbursement */}
//           <div className="text-center">
//             <div className="flex justify-center mb-2">
//               <img
//                 src={RefreshIcon}
//                 alt="Simplified Reimbursement Icon"
//                 className="w-17 h-16"
//               />
//             </div>
//             <h3 className="text-2xl font-bold text-black mb-8 mt-6">
//               Simplified
//               <br />
//               Reimbursement
//             </h3>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               We already have agreements in place that facilitate the process of
//               reimbursing your insurance.
//             </p>
//           </div>

//           {/* Regulatory Compliance */}
//           <div className="text-center">
//             <div className="flex justify-center mb-6">
//               <ShieldPlus className="w-16 h-16 text-black" />
//             </div>
//             <h3 className="text-2xl font-bold text-black mb-8 mt-6">
//               Regulatory
//               <br />
//               Compliance
//             </h3>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               We operate in compliance with HIPAA and SOC-2 regulations to
//               protect your information.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;

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
