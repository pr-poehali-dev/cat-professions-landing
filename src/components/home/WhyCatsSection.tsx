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
            <div className="flex items-center mb-3">
              <span className="text-4xl mr-3">💤</span>
              <h3 className="text-xl font-bold">Всегда на месте</h3>
            </div>
            <p>Мы не уходим с рабочего места. Потому что там удобно спать.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <span className="text-4xl mr-3">📈</span>
              <h3 className="text-xl font-bold">Многозадачность</h3>
            </div>
            <p>Можем одновременно спать, игнорировать вас и думать о еде.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <span className="text-4xl mr-3">🍗</span>
              <h3 className="text-xl font-bold">Строгий режим</h3>
            </div>
            <p>
              Никогда не забудем напомнить, что пора есть. В 5 утра. Каждый
              день.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <span className="text-4xl mr-3">💪🏻</span>
              <h3 className="text-xl font-bold">Креативность</h3>
            </div>
            <p>Находим новые способы сбрасывать вещи со стола каждый день.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCatsSection;
