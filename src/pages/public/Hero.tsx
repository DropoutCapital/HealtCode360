import MedicalCrossAnimation from "../../components/UI/MedicalCrossAnimation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen px-8 flex items-center justify-center "
    >
      <div className="absolute inset-0 flex items-center justify-center z-0 -mt-36">
        <MedicalCrossAnimation
          size={600}
          rows={24}
          cols={24}
          barThickness={9}
          cell={6}
          gap={5}
          baseColor="#93fbfb"
          accentColor="#00FF88"
          duration={4200}
          stagger={22}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center -mt-80">
        <h1
          style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}
          className="text-white font-bold tracking-tight mb-6 text-5xl md:text-8xl lg:text-[145px] xl:text-[170px] 2xl:text-[200px] leading-tight"
        >
          healthcode360
        </h1>
        <h2
          style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}
          className="text-teal-300 uppercase font-semibold tracking-[0.25em] text-2xl md:text-3xl lg:text-4xl"
        >
          HEALTH ACCESS TO EVERYONE
        </h2>
      </div>
    </div>
  );
};

export default Hero;
