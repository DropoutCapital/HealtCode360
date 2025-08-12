import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Layout/Sidebar";
import { ArrowUpRight } from "lucide-react";
import Card1 from "../../images/cards/card1.png";
import Card2 from "../../images/cards/card2.png";
import Card3 from "../../images/cards/card3.png";
import Card4 from "../../images/cards/card4.png";

type FeatureCardProps = {
  icon: string;
  title: string;
  body: string;
  className?: string;
};

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials = [
  {
    quote:
      "En mi opinión, este servicio de biohacking cambia las reglas del juego para cualquiera que desee optimizar su salud y su rendimiento.",
    name: "Nombre de miembro",
    role: "Rubro",
    avatar: "https://i.pravatar.cc/64?img=12",
  },
  {
    quote:
      "Con un enfoque personalizado y el uso de tecnologías de vanguardia, se diferencia claramente de los programas de bienestar convencionales.",
    name: "Nombre de miembro",
    role: "Rubro",
    avatar: "https://i.pravatar.cc/64?img=3",
  },
  {
    quote:
      "Este servicio ofrece una nueva perspectiva para quienes buscan mejorar su salud. El equipo siempre claro y cercano.",
    name: "Nombre de miembro",
    role: "Rubro",
    avatar: "https://i.pravatar.cc/64?img=8",
  },
  {
    quote:
      "Noté cambios en mis niveles de energía y descanso en pocas semanas. Recomendado si buscas impacto real.",
    name: "Nombre de miembro",
    role: "Rubro",
    avatar: "https://i.pravatar.cc/64?img=22",
  },
  {
    quote:
      "Resultados medibles y un plan que se siente hecho a medida. La diferencia con programas tradicionales es enorme.",
    name: "Nombre de miembro",
    role: "Rubro",
    avatar: "https://i.pravatar.cc/64?img=9",
  },
  {
    quote:
      "Me encantó la claridad de los reportes y cómo el equipo interpreta cada biomarcador para acciones concretas.",
    name: "Nombre de miembro",
    role: "Rubro",
    avatar: "https://i.pravatar.cc/64?img=5",
  },
];

const FeatureCard = ({
  icon,
  title,
  body,
  className = "",
}: FeatureCardProps) => (
  <div
    className={[
      "glass-card relative w-full h-full overflow-visible",
      "min-h-[220px] sm:min-h-[240px] md:min-h-[260px]",
      "p-5 sm:p-6",
      className,
    ].join(" ")}
  >
    <div className="pr-2">
      <h4 className="text-[#0EFFEB] text-[18px] sm:text-[20px] md:text-[22px] font-semibold tracking-tight mb-2">
        {title}
      </h4>
      <p className="text-white/90 leading-relaxed text-[14px] sm:text-[15px] md:text-base">
        {body}
      </p>
    </div>

    <div className="relative md:absolute bottom-0 w-full flex justify-center overflow-hidden">
      <img
        src={icon}
        alt={title}
        className="
          w-28 h-28 md:w-44 md:h-44 object-contain object-center max-w-full max-h-full
        "
      />
    </div>
  </div>
);

const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
}: TestimonialCardProps) => (
  <div
    className="
      break-inside-avoid
      rounded-3xl
      glass-card
      border border-white/8
      shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_10px_30px_rgba(0,0,0,0.4)]
      p-5 sm:p-6 mb-6
      text-white/90
      transition-transform duration-200 hover:-translate-y-0.5
    "
  >
    <p className="leading-relaxed text-[15px] sm:text-base">{quote}</p>

    <div className="mt-4 flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="w-9 h-9 rounded-full object-cover"
      />
      <div>
        <p className="text-[13px] font-semibold text-white">{name}</p>
        <p className="text-[12px] text-white/60">{role}</p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div
      id="services"
      className="bg-gradient-to-b from-transparent to-[#0D0D0D] flex flex-col lg:flex-row items-stretch justify-center px-4 py-8 sm:py-12"
    >
      <section className="flex w-full max-w-7xl gap-6 bg-[#101010] rounded-3xl border border-white/5 mx-auto p-4 sm:p-6 relative overflow-visible lg:overflow-hidden">
        <aside className="hidden lg:flex w-48 shrink-0 py-4 justify-center items-center h-full">
          <Sidebar />
        </aside>

        <div className="flex-1 flex flex-col">
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
                bg-[#0EFFEB] text-black px-5 py-3 rounded-full font-medium
                cursor-pointer text-sm inline-flex items-center gap-2
                hover:opacity-90 active:opacity-80 transition
                focus:outline-none focus:ring-2 focus:ring-[#0EFFEB]/50
              "
              onClick={() => navigate("/register")}
              type="button"
            >
              View my free coverage
              <span className="bg-white rounded-full p-1 grid place-items-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="my-6">
            <div className="h-px w-full bg-white/10" />
          </div>

          <div className="w-76 xl:w-[1000px] mx-auto">
            <div
              className="
                flex overflow-x-auto snap-x snap-mandatory
                space-x-12 sm:space-x-6          
                pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6
                scroll-pl-4 last:pr-2            
                overscroll-x-contain
                [&::-webkit-scrollbar]:hidden     
                [-ms-overflow-style:none]         
                [scrollbar-width:none]  
              "
              role="region"
              aria-label="Servicios"
            >
              <div className="relative z-0 shrink-0 w-[85vw] min-w-[300px] sm:w-[70vw] md:w-[360px] lg:w-[380px] snap-center md:snap-start">
                <FeatureCard
                  icon={Card1}
                  title="134 Biomarkers"
                  body="America's most comprehensive blood test to understand your health at the cellular level."
                />
              </div>

              <div className="relative z-0 shrink-0 w-[85vw] min-w-[300px] sm:w-[70vw] md:w-[360px] lg:w-[380px] snap-center md:snap-start">
                <FeatureCard
                  icon={Card2}
                  title="Personal Training"
                  body="Get one-on-one coaching from our expert trainers."
                />
              </div>

              <div className="relative z-0 shrink-0 w-[85vw] min-w-[300px] sm:w-[70vw] md:w-[360px] lg:w-[380px] snap-center md:snap-start">
                <FeatureCard
                  icon={Card3}
                  title="Nutrition Guidance"
                  body="Receive personalized nutrition plans to fuel your fitness journey."
                />
              </div>

              <div className="relative z-0 shrink-0 w-[85vw] min-w-[300px] sm:w-[70vw] md:w-[360px] lg:w-[380px] snap-center md:snap-start">
                <FeatureCard
                  icon={Card4}
                  title="Mental Wellness"
                  body="Access to mental health resources and support."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-[#0D0D0D] px-4 py-8 sm:py-12 mt-0"
    >
      <div className="relative  max-w-7xl  bg-[#101010] rounded-3xl border border-white/5 mx-auto p-4 ">
        <div className="relative text-center max-w-3xl mx-auto">
          <p className="text-[#0EFFEB] text-sm mb-2 m-12">Social Proof</p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Real results, real impact
          </h2>
          <p className="text-white/70 text-base sm:text-lg mt-3">
            This is the opinion of those who choose us
          </p>
        </div>

        <div className="relative mt-20">
          <div
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 relative z-0"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 40%, black 90%, transparent 100%)",
              WebkitMaskComposite: "intersect",
              maskComposite: "intersect",
              WebkitMaskSize: "cover, cover",
              maskSize: "cover, cover",
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <>
      <ServicesSection />
      <Testimonials />
    </>
  );
};

export default Services;
