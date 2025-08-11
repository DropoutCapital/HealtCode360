import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Layout/Sidebar";
import { ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div
      id="contact"
      className="bg-[#0D0D0D] flex flex-col lg:flex-row items-stretch justify-center px-4 py-8 sm:py-12"
    >
      <section className="flex w-full max-w-7xl gap-6 bg-[#101010] rounded-3xl border border-white/5 mx-auto p-4 sm:p-6">
        <div className="hidden lg:flex w-48 justify-center items-center">
          <Sidebar />
        </div>

        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 sm:mb-12 md:mb-16 leading-tight">
              Join the
              <br />
              Prevention
              <br />
              Revolution
            </h1>

            <p className="text-white/90 text-lg mb-8">
              Thousands have already unlocked the code. Health no longer has to
              be
              <br /> expensive, confusing or reactive. <br /> Now it’s simple.
              Covered. Yours.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <button
                onClick={() => navigate("/register")}
                className="bg-[#0EFFEB] text-black cursor-pointer px-6 py-3 sm:px-8 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-lg flex items-center gap-3"
              >
                Join our waiting list
                <div className="bg-white rounded-full p-1">
                  <ArrowUpRight className="w-5 h-5 text-teal-600" />
                </div>
              </button>

              <p className="text-white text-base sm:text-lg">
                A member of our team will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
