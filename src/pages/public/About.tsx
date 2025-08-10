import { ArrowRight } from "lucide-react";
import Sidebar from "../../components/Layout/Sidebar";
import MatrixEffect from "../../components/UI/MatrixEffect";
import MatrixRain from "../../components/UI/MatrixRain";

const About = () => {
  return (
    <main className="w-full min-h-screen bg-transparent">
      <div className="bg-[url('/background.jpg')]  bg-white/10 backdrop-blur-md rounded-tl-2xl rounded-tr-2xl">
        <section className="px-6 lg:px-12 xl:px-20 py-12 lg:py-20 min-h-screen bg-white/10 backdrop-blur-md rounded-tl-2xl rounded-tr-2xl ">
          <div className="w-full h-96 max-w-6xl text-left">
            <h6 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-8">
              HEALTH ACCESS TO EVERYONE
            </h6>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-12">
              <span className="text-teal-600">$1</span> a Day unlocks your
              health accesible prevention, covered by insurance.
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-6 mb-20">
              <button className="bg-[#07C4B4] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-sm flex items-center gap-2 mx-auto sm:mx-0">
                Join our waiting list
                <div className="bg-white rounded-full p-1">
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                </div>
              </button>
              <a
                href="#"
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
            minSpeed={0.1}
            maxSpeed={0.1}
            showEdgeFades={false}
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-40 sm:h-48 lg:h-56 z-10 pointer-events-none bg-gradient-to-b from-white via-white/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2  z-10 pointer-events-none bg-gradient-to-t from-white via-white to-transparent" />
        <div className="relative z-20 max-w-6xl mx-auto mb-36">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            {/* Sidebar a la izquierda, solo en desktop */}
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

      <section className="relative overflow-hidden w-full -mt-60">
        <MatrixEffect />
      </section>
    </main>
  );
};

export default About;

// <div
//   id="about"
//   className="w-full h-auto lg:min-h-screen mb-6 mt-6 flex flex-col lg:flex-row bg-white px-4 sm:px-6 lg:px-8"
// >
//   <div className="hidden lg:flex items-center justify-center w-48">
//     <Sidebar />
//   </div>

//   <main className="flex-1 flex flex-col justify-center items-center text-center lg:text-left lg:items-start py-16 sm:py-20 lg:py-0 h-screen lg:h-auto">
//     <div className="max-w-5xl px-4">
//       <div className="mb-12">
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-2">
//           Our reason for being:
//         </h1>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
//           Prevention Can't Wait
//         </h2>
//       </div>

//       <section className="max-w-3xl mx-auto lg:mx-0">
//         <div className="mb-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
//             <h3 className="text-lg sm:text-xl text-gray-700 font-semibold whitespace-nowrap mb-2 sm:mb-0">
//               Our reason
//             </h3>
//             <div className="h-px w-full bg-gray-300" />
//           </div>
//         </div>
//         <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify sm:text-left">
//           Ninety percent of the $4.5 trillion in annual U.S. healthcare
//           spending goes to treating chronic diseases, rather than preventing
//           them. Six out of ten adults are already living with at least one
//           chronic disease. That's not a health care system, that's
//           bankruptcy through a thousand avoidable co-pays.{" "}
//           <span className="font-bold"> We are changing it. </span>
//         </p>
//       </section>
//     </div>
//   </main>
//   {/* <div className="hidden lg:block w-full h-full">
//     <Matrix />
//   </div> */}
// </div>
