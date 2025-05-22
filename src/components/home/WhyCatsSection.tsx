
import { Button } from "@/components/ui/button";

const WhyCatsSection = () => {
  const reasons = [
    {
      title: "Всегда на месте",
      description: "Мы не уходим с рабочего места. Потому что там удобно спать.",
    },
    {
      title: "Многозадачность",
      description: "Можем одновременно спать, игнорировать вас и думать о еде.",
    },
    {
      title: "Строгий режим",
      description: "Никогда не забудем напомнить, что пора есть. В 5 утра. Каждый день.",
    },
    {
      title: "Креативность",
      description: "Находим новые способы сбрасывать вещи со стола каждый день.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#F5F0E1]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-montserrat mb-10 text-center">
          Почему коты - <span className="text-[#D35536]">лучшие работники</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCatsSection;
