import Sidebar from "../../components/Layout/Sidebar";
import { ShieldPlus, RefreshCw } from "lucide-react";
import RefreshIcon from "../../images/icons/simplifiedIcons-rsinfondo.png";

const Partners = () => {
  return (
    <div
      id="partners"
      className="min-h-screen mb-6 mx-[20px] flex bg-black/10 backdrop-blur-md rounded-4xl"
    >
      <div className="w-48 mt-56 ml-16">
        <Sidebar />
      </div>

      <div className="flex-1 p-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            Backed by a Solid
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Medical Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-6xl font-bold text-black mb-7">48</div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Covered
              <br />
              States
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mt-8">
              Our network of licensed physicians allows us to serve you almost
              anywhere in the country.
            </p>
          </div>

          {/* Simplified Reimbursement */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img
                src={RefreshIcon}
                alt="Simplified Reimbursement Icon"
                className="w-17 h-16"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-8 mt-6">
              Simplified
              <br />
              Reimbursement
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We already have agreements in place that facilitate the process of
              reimbursing your insurance.
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <ShieldPlus className="w-16 h-16 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-8 mt-6">
              Regulatory
              <br />
              Compliance
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We operate in compliance with HIPAA and SOC-2 regulations to
              protect your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
