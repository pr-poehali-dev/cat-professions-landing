/**
 * Секция с преимуществами котов как работников
 */
const WhyCatsSection = () => {
  return (
    <section id="why-cats" className="py-16 px-4 bg-[#1A1A1A] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-montserrat mb-10 text-center">
          Почему коты - <span className="text-[#D35536]">лучшие работники</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Всегда на месте</h3>
            <p>Мы не уходим с рабочего места. Потому что там удобно спать.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Многозадачность</h3>
            <p>Можем одновременно спать, игнорировать вас и думать о еде.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Строгий режим</h3>
            <p>
              Никогда не забудем напомнить, что пора есть. В 5 утра. Каждый
              день.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Креативность</h3>
            <p>Находим новые способы сбрасывать вещи со стола каждый день.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCatsSection;
