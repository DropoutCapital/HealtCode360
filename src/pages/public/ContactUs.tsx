import Sidebar from "../../components/Layout/Sidebar";
import { ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="min-h-screen mx-4 sm:mx-6 md:mx-10 lg:mx-[20px] mb-6 mt-6 flex flex-col lg:flex-row bg-white/10 backdrop-blur-md rounded-3xl"
    >
      <div className="hidden lg:flex w-48 justify-center items-center">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-10 sm:mb-12 md:mb-16 leading-tight">
            Join the
            <br />
            Prevention
            <br />
            Revolution
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <button className="bg-teal-600 text-white cursor-pointer px-6 py-3 sm:px-8 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-lg flex items-center gap-3">
              Contact Us
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-5 h-5 text-teal-600" />
              </div>
            </button>

            <p className="text-gray-700 text-base sm:text-lg">
              A member of our team will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
