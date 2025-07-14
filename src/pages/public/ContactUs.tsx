import { ArrowUpRight } from "lucide-react";

const ContactUs = () => {
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
          <a
            href="#partners"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Partners
          </a>
          <a
            href="#services"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
          <a href="#contact" className="block text-teal-600 font-medium">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-16 leading-tight">
            We are here to
            <br />
            answer your
            <br />
            questions
          </h1>

          {/* Contact Button and Description */}
          <div className="flex items-center gap-8">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-lg flex items-center gap-3">
              Contact Us
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <p className="text-gray-700 text-lg">
              A member of our team will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
