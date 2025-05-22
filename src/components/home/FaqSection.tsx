import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  author: string;
  isOpen?: boolean;
}

const FaqSection = () => {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      question: "Как долго ваши коты работают в течение дня?",
      answer:
        "Вопрос некорректный. Мы не 'работаем', мы живем своей жизнью, а вы иногда в ней участвуете.",
      author: "Мистер Пушистик, Кот-Консультант по тайм-менеджменту",
      isOpen: true,
    },
    {
      question: "Можно ли заказать несколько котов для одного проекта?",
      answer:
        "Технически да, практически нет. Мы не умеем работать в команде, если, конечно, командная работа не подразумевает одновременное игнорирование всех ваших просьб.",
      author: "Барсик, HR-менеджер",
      isOpen: false,
    },
    {
      question: "Что включено в стоимость услуг?",
      answer:
        "Всё и ничего одновременно. Вы платите за присутствие кота. Будет ли от этого какая-то польза — это уже философский вопрос. Кстати, филе тунца не включено в базовый тариф, но настоятельно рекомендуется как дополнительная опция.",
      author: "Мурзик, Финансовый директор",
      isOpen: false,
    },
    {
      question: "Что делать, если кот заснул во время важной встречи?",
      answer:
        "Радоваться, что он хотя бы пришел. Кстати, технически это не сон, а медитативное состояние, в котором мы обрабатываем информацию. Не будите, если жизнь дорога.",
      author: "Соня, Кот-Эксперт по производительности",
      isOpen: false,
    },
    {
      question: "Можно ли вернуть деньги, если результат не устроил?",
      answer:
        "Мр-р-р-р... Извините, я вас не слышу, у меня сейчас важное дело — я умываюсь. Повторите вопрос никогда.",
      author: "Васька, Юридический отдел",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqItems(
      faqItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : item.isOpen,
      })),
    );
  };

  return (
    <section className="py-16 px-4 bg-white text-black" id="faq">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold font-montserrat mb-3 text-center">
          <span className="text-[#D35536]">Котоленький</span> FAQ
        </h2>
        <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Ответы на ваши вопросы от наших котов. Если вам не понравится ответ,
          помните: у кота просто был тяжелый день.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F2E8] rounded-md overflow-hidden"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-bold text-gray-900">{item.question}</h3>
                <span className="text-[#D35536]">
                  {item.isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {item.isOpen && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="italic text-gray-700 mb-2">"{item.answer}"</p>
                  <p className="text-sm text-gray-500">— {item.author}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Ответ гарантирован в течение 2-3 бизнес-дремот
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
