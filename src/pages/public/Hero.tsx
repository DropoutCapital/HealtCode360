import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-8 py-16 flex-grow">
      <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-[6rem] xl:text-[5rem] font-extrabold leading-tight tracking-tight text-center text-slate-900 mb-6">
        Precision Medicine,
        <br />
        <span className="text-[#354555]">Paid by Your Insurance.</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-700 mb-16 max-w-3xl mx-auto leading-relaxed">
        Stop guessing and take control of your health, now covered by your
        insurance.
      </p>

      <div className="flex justify-center">
        <button
          className="w-20 h-20 rounded-full border-2 border-teal-600 flex items-center justify-center transition-all duration-300 group"
          onClick={() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="w-6 h-6 text-teal-600 hover:text-white group-hover:translate-y-1 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
