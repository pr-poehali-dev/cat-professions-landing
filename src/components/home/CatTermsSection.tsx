import { Button } from "@/components/ui/button";

const CatTermsSection = () => {
  return (
    <section className="py-16 px-4 bg-[#F5EFE0]" id="cat-terms">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-montserrat mb-3 text-center text-[#1A1A1A]">
          <span className="text-[#D35536]">Котонимы</span>: словарь терминов
        </h2>
        <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Выучите профессиональный язык наших котов, чтобы лучше их понимать.
          Важно: все термины произносятся с обязательным "мяу" в конце.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TermCard
            category="Бизнес"
            term="Мурктинг"
            definition="Маркетинг, но с обязательным мурчанием во время презентаций"
            example="Наш мурктинг-план включает топтание по клавиатуре и случайную отправку писем"
          />
          <TermCard
            category="IT"
            term="Кототайп"
            definition="Прототип, созданный путем случайного хождения по клавиатуре"
            example="Наш новый кототайп получился, когда Барсик заснул на клавиатуре"
          />
          <TermCard
            category="Дизайн"
            term="КотоШоп"
            definition="Фотошоп после того, как кот прошелся по всем слоям"
            example="Клиент не оценил мой КотоШоп и 46 случайных фильтров"
          />
          <TermCard
            category="Кулинария"
            term="Рыбоскоп"
            definition="Особый вид кошачьей интуиции, позволяющий определить, где спрятана рыба"
            example="Мой рыбоскоп показывает, что в холодильнике есть тунец"
          />
          <TermCard
            category="Медицина"
            term="Мурчетерапия"
            definition="Лечение всех болезней путем мурчания на больное место"
            example="После сеанса мурчетерапии клиент наконец-то смог заснуть"
          />
          <TermCard
            category="Фотография"
            term="Лапофокус"
            definition="Эффект размытия, возникающий, когда кот внезапно решает помочь с фотосессией"
            example="Все 200 фотографий со свадьбы имеют профессиональный лапофокус"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 italic">
            * Все термины одобрены Международной Ассоциацией Профессиональных
            Котов (МАПК)
          </p>
        </div>
      </div>
    </section>
  );
};

interface TermCardProps {
  category: string;
  term: string;
  definition: string;
  example: string;
}

const TermCard = ({ category, term, definition, example }: TermCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
      <span className="absolute top-0 right-0 bg-[#D35536] text-white px-3 py-1 text-xs font-bold">
        {category}
      </span>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{term}</h3>
      <p className="text-gray-700">
        <span className="font-bold">Определение:</span> {definition}
      </p>
      <div className="mt-3 text-sm text-gray-500">
        <p>
          <span className="font-bold">Пример:</span> "{example}"
        </p>
      </div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#D35536] opacity-10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
    </div>
  );
};

export default CatTermsSection;
