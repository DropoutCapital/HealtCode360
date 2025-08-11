// import Sidebar from "../../components/Layout/Sidebar";
// import { ArrowUpRight } from "lucide-react";
// import Card1 from "../../images/cards/card1.png";
// import Card2 from "../../images/cards/card2.png";
// import Card3 from "../../images/cards/card3.png";
// import Card4 from "../../images/cards/card4.png";

// const FeatureCard = ({ icon: Icon, title, subtitle, body }) => (
//   <div className="glass-card p-6 sm:p-7 w-full">
//     <div className="mb-4">
//       <img src={icon} alt={title} className="w-8 h-8 opacity-90" />
//     </div>
//     <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
//     {subtitle && (
//       <p className="text-lg font-semibold text-white/90 mb-3">{subtitle}</p>
//     )}
//     <p className="text-slate-200/80 leading-relaxed text-base">{body}</p>
//   </div>
// );

// const Services = () => {
//   return (
//     <div
//       id="services"
//       className="min-h-screen bg-[#0D0D0D] flex flex-col lg:flex-row items-center justify-center px-4 py-8 sm:py-12"
//     >
//       <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-8 sm:py-12 bg-[#111111] backdrop-blur-md rounded-3xl">
//         <div className="hidden lg:flex w-48 justify-center items-center h-full">
//           <Sidebar />
//         </div>

//         <div className="flex-1 flex flex-col justify-center items-center w-full max-w-7xl lg:p-8 mt-8 lg:mt-0">
//           <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 px-2">
//             <p className="text-[#0EFFEB]">Our services</p>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-0 text-center sm:text-left">
//               Wellness for $1
//             </h1>
//             <button className="bg-[#0EFFEB] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-sm flex items-center gap-2 mx-auto sm:mx-0">
//               View my Free coverage
//               <div className="bg-white rounded-full p-1">
//                 <ArrowUpRight className="w-4 h-4 text-black" />
//               </div>
//             </button>
//           </div>

//           <div className="w-full mb-12 px-2">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
//               <h3 className="text-lg sm:text-xl text-gray-700 font-semibold text-center sm:text-left">
//                 Your Personalized Roadmap
//               </h3>
//               <div className="hidden w-[400px] sm:block h-px  bg-gray-300 sm:ml-4" />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             <FeatureCard
//               icon={Card1}
//               title="Most “X” Lab"
//               subtitle="test in America"
//               body="Our network of licensed physicians allows us to serve you almost anywhere in the country."
//             />

//             <FeatureCard
//               icon={Card2}
//               title="Unlimited"
//               subtitle="Telehealt"
//               body="We already have agreements in place that facilitate the process of reimbursing your insurance."
//             />

//             <FeatureCard
//               icon={Card3}
//               title="HyperPersonalized"
//               subtitle="healt plan"
//               body="We operate in compliance with HIPAA and SOC-2 regulations to protect your information."
//             />

//             <FeatureCard
//               icon={Card4}
//               title="Comprehensive"
//               subtitle="health assessment"
//               body="Our platform provides a complete overview of your health, including risk factors and personalized recommendations."
//             />
//           </div>
//         </div>
//       </section>
//       {/* <div className="bg-gradient-to-b from-transparent to-[#0D0D0D]"</> */}
//     </div>
//   );
// };

// export default Services;

import Sidebar from "../../components/Layout/Sidebar";
import { ArrowUpRight } from "lucide-react";

import Card1 from "../../images/cards/card1.png";
import Card2 from "../../images/cards/card2.png";
import Card3 from "../../images/cards/card3.png";
import Card4 from "../../images/cards/card4.png";

const cards = [
  {
    icon: Card1,
    title: "134 Biomarkers",
    body: "America's most comprehensive blood test to understand your health at the cellular level.",
  },
  {
    icon: Card2,
    title: "Telehealth Unlimited",
    body: "One year of access to our medical team to interpret your results and guide you.",
  },
  {
    icon: Card3,
    title: "Hyper-personalized Health Plan",
    body: "Insights and actions tailored to your biology to improve outcomes and sustainability.",
  },
  {
    icon: Card4,
    title: "Comprehensive Assessment",
    body: "A 360° view of your health, risk factors, and prioritized recommendations.",
  },
];

// const FeatureCard = ({ icon, title, body }) => (
//   <div
//     className="
//       bg-[#121212]
//       rounded-[28px]
//       p-6 md:p-8
//       border border-white/5
//       shadow-lg
//       min-h-[260px]

//       flex flex-col justify-between
//       transition-transform duration-200 hover:-translate-y-0.5
//     "
//   >
//     <div>
//       <h4 className="text-[#0EFFEB] text-[20px] md:text-[22px] font-semibold tracking-tight mb-2">
//         {title}
//       </h4>
//       <p className="text-white/90 leading-relaxed text-[15px] md:text-base">
//         {body}
//       </p>
//     </div>

//     <img
//       src={icon}
//       alt={title}
//       className="mt-6 h-44 w-full md:h-28 object-contain self-end pointer-events-none select-none"
//     />
//   </div>
// );

const FeatureCard = ({ icon, title, body }) => (
  <div
    className="
      glass-card
      rounded-[28px]
      p-6 md:p-8
      border border-white/5
      shadow-lg
      min-h-[320px] 
      flex flex-col justify-between
      transition-transform duration-200 hover:-translate-y-0.5
      
    "
  >
    {/* Texto arriba */}
    <div>
      <h4 className="text-[#0EFFEB] text-[20px] md:text-[22px] font-semibold tracking-tight mb-2">
        {title}
      </h4>
      <p className="text-white/90 leading-relaxed text-[15px] md:text-base">
        {body}
      </p>
    </div>

    {/* Imagen abajo alineada */}
    <div className="relative md:absolute bottom-0 w-full flex justify-center">
      <img
        src={icon}
        alt={title}
        className="w-36 h-36 md:w-48 md:h-48 object-contain object-center"
      />
    </div>
  </div>
);

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen bg-[#0D0D0D] flex flex-col lg:flex-row items-stretch justify-center px-4 py-8 sm:py-12"
    >
      <section className="flex w-full max-w-7xl gap-6 bg-[#101010] rounded-3xl border border-white/5 mx-auto p-4 sm:p-6">
        {/* Sidebar en desktop */}
        <aside className="hidden lg:flex w-48 shrink-0 py-4 justify-center items-center h-full">
          <Sidebar />
        </aside>

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="w-full mb-8 mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-9 items-center">
            <div>
              <p className="text-[#0EFFEB] text-sm mb-2">Our services</p>
              <h1 className="text-white font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl">
                Wellness for $1
              </h1>
            </div>
            <button
              className="
                justify-self-start md:justify-self-end
                bg-[#0EFFEB]
                text-black
                px-5 py-3
                rounded-full
                font-medium
                text-sm
                inline-flex items-center gap-2
                hover:opacity-90 active:opacity-80
                transition
                focus:outline-none focus:ring-2 focus:ring-[#0EFFEB]/50
              "
              type="button"
            >
              View my free coverage
              <span className="bg-white rounded-full p-1 grid place-items-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="my-6">
            <div className="h-px w-full bg-white/10" />
          </div>

          {/* Grid de cards */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hidden">
            {cards.map((c, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[320px] xl:min-w-[40px] flex-shrink-0"
              >
                <FeatureCard {...c} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
