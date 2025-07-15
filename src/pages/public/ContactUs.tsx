import Sidebar from "../../components/Layout/Sidebar";
import { ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="min-h-screen mx-[20px] mb-6 mt-6 flex bg-black/10 backdrop-blur-md rounded-4xl"
    >
      <div className="flex items-center justify-center w-48 mx-auto">
        <Sidebar />
      </div>

      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-16 leading-tight">
            Join the
            <br />
            Prevention
            <br />
            Revolution
          </h1>

          <div className="flex items-center gap-8">
            <button className="bg-teal-600 text-white cursor-pointer px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-lg flex items-center gap-3">
              Contact Us
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-5 h-5 text-teal-600" />
              </div>
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
