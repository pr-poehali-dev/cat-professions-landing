import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Секция найма кота
 */
const HireSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="hire" className="py-16 px-4 bg-[#1A1A1A] text-white">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold font-montserrat mb-3 text-center">
          Хотите нанять <span className="text-[#D35536]">кота?</span>
        </h2>
        <p className="text-center mb-8 text-gray-400">
          Заполните форму, и мы свяжемся с вами, когда проснемся
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-center">
              Докажите, что вы достойны быть нашим клиентом 💅🏻
            </h3>

            <Textarea
              placeholder="Расскажите, почему кот должен обратить на вас внимание..."
              className="bg-gray-700 border-gray-600 mb-4"
              rows={4}
            />

            <div className="flex justify-center mt-6">
              <Button
                className="bg-[#D35536] hover:bg-[#B73D23] w-full"
                onClick={() => setFormSubmitted(!formSubmitted)}
              >
                {formSubmitted
                  ? "Мяу! Рассмотрим вашу кандидатуру"
                  : "Отправить на рассмотрение"}
              </Button>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="max-w-xs">
                <img
                  src="https://cdn.poehali.dev/files/3b9cfecd-4975-4f1f-b926-623b85824d37.png"
                  alt="Кот рассматривает заявки"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              * Коты очень избирательны. Мы не гарантируем, что ваша заявка
              будет рассмотрена.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireSection;
