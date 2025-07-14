import { MapPin, RefreshCw, Shield } from "lucide-react";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Navigation */}
      <div className="w-64 p-8">
        <nav className="space-y-4">
          <a
            href="#intro"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Intro
          </a>
          <a
            href="#about"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            About us
          </a>
          <a href="#partners" className="block text-teal-600 font-medium">
            Partners
          </a>
          <a
            href="#services"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            Backed by a Solid
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Medical Infrastructure
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* 48 Covered States */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <MapPin className="w-16 h-16 text-black" />
            </div>
            <div className="text-6xl font-bold text-black mb-4">48</div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Covered
              <br />
              States
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our network of licensed physicians allows us to serve you almost
              anywhere in the country.
            </p>
          </div>

          {/* Simplified Reimbursement */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <RefreshCw className="w-16 h-16 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-8 mt-12">
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
              <Shield className="w-16 h-16 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-8 mt-12">
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
