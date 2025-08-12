import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Sidebar from "../../components/Layout/Sidebar";
import MatrixRain from "../../components/UI/MatrixRain";

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-transparent">
      <div
        id="preAbout"
        className="bg-[url('/background.jpg')]  bg-white/10 backdrop-blur-md rounded-tl-2xl rounded-tr-2xl -mt-6"
      >
        <section className="px-6 lg:px-12 xl:px-20 py-12 lg:py-20 min-h-screen bg-white/40 backdrop-blur-md rounded-tl-2xl rounded-tr-2xl ">
          <div className="w-full h-96 max-w-6xl text-left">
            <h6 className="text-2xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight mb-8">
              HEALTH ACCESS TO EVERYONE
            </h6>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-12">
              <span className="text-teal-600">$1</span> a Day unlocks your
              health
              <br /> accesible prevention, covered by insurance.
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-6 mb-20">
              <button
                onClick={() => navigate("/register")}
                className="bg-[#07C4B4] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-sm flex items-center gap-2 mx-auto sm:mx-0"
              >
                Join our waiting list
                <div className="bg-white rounded-full p-1">
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                </div>
              </button>
              <a
                onClick={() => navigate("/register")}
                className="text-gray-700 hover:text-teal-600 font-medium underline transition-colors"
              >
                Join us today
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-white"></div>
        </section>
      </div>

      <section
        id="about"
        className="relative px-6 lg:px-12 xl:px-20 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white"
      >
        <div className="absolute inset-x-0 top-0 h-40 sm:h-48 lg:h-56 z-0 pointer-events-none">
          <MatrixRain
            height={200}
            color="#00c9a7"
            backgroundFade="rgba(255,255,255,0.15)"
            fontSize={16}
            density={1}
            minSpeed={0.05}
            maxSpeed={0.05}
            showEdgeFades={false}
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-40 sm:h-48 lg:h-56 z-10 pointer-events-none bg-gradient-to-b from-white via-white/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2  z-10 pointer-events-none bg-gradient-to-t from-white via-white to-transparent" />
        <div className="relative z-20 max-w-6xl mx-auto mb-32">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            <aside className="hidden lg:block sticky top-32 self-start">
              <Sidebar />
            </aside>

            {/* Contenido principal */}
            <div className="mb-1 mt-48 lg:mt-32 text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-10">
                The code <span className="text-teal-600">to take</span>
                <span className="block">control. One test.</span>
                <span className="block">Zero guesswork.</span>
              </h2>

              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We decode the signals of your body and turn them into real
                answers, actionable insights and <br /> personalizable support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
