import MedicalCrossAnimation from "../../components/UI/MedicalCrossAnimation";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-120px)] px-8 flex items-center justify-center ">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <MedicalCrossAnimation
          size={460}
          rows={24}
          cols={24}
          barThickness={7}
          cell={6}
          gap={5}
          baseColor="#93fbfb"
          accentColor="#00FF88"
          duration={4200}
          stagger={22}
        />
        <div className="pointer-events-none absolute inset-0  opacity-60"></div>
      </div>

      {/* Texto por encima de la cruz */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1
          style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}
          className="text-white font-bold tracking-tight mb-6 text-6xl md:text-8xl lg:text-[180px]"
        >
          healthcode360
        </h1>

        <h2
          style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}
          className="text-teal-300 uppercase font-semibold tracking-[0.25em] text-3xl md:text-4xl lg:text-5xl"
        >
          HEALTH ACCESS TO EVERYONE
        </h2>
      </div>
    </div>
  );
};

export default Hero;
