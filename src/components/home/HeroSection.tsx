
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] text-white">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/XQKCxPV.jpg')] bg-repeat opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">
            КотоПрофи<span className="text-[#D35536]">.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Мы не просто милые создания. Мы - профессионалы своего дела.
            <br />
            <span className="italic text-[#D35536]">Мяу.</span>
          </p>
          <Button className="bg-[#D35536] hover:bg-[#B73D23] text-white">
            Познакомиться с нашими котами
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-24 md:h-32 bg-[#D35536] opacity-75 transform -skew-x-12 translate-x-16"></div>
    </section>
  );
};

export default HeroSection;
