import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * Интерактивный компонент для поглаживания кота
 */
const PetTheCat = () => {
  const [petCount, setPetCount] = useState(0);
  const [catMood, setCatMood] = useState("neutral");
  const [catSound, setCatSound] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Изображения кота в разных настроениях
  const catImages = {
    angry:
      "https://cdn.poehali.dev/files/0ba2bb7d-8eaa-4281-924a-29ab6cd6631e.png",
    neutral:
      "https://cdn.poehali.dev/files/a3762558-353d-4dcd-a3f5-bbba16474f44.png",
    happy:
      "https://cdn.poehali.dev/files/9e621a9f-ffb2-4cf0-9358-6848bd0484a5.png",
    veryHappy:
      "https://cdn.poehali.dev/files/38e1edae-2c03-486a-b0f7-b4493d15353f.png",
  };

  // Обновление настроения кота в зависимости от количества поглаживаний
  useEffect(() => {
    if (petCount < 3) {
      setCatMood("neutral");
    } else if (petCount < 8) {
      setCatMood("happy");
    } else if (petCount < 15) {
      setCatMood("veryHappy");
    } else {
      setCatMood("angry");
      setCatSound("Достаточно поглаживаний на сегодня!");
      setTimeout(() => setCatSound(""), 3000);
      setTimeout(() => {
        setPetCount(0);
        setCatMood("neutral");
      }, 5000);
    }
  }, [petCount]);

  // Функция поглаживания кота
  const petTheCat = () => {
    setPetCount(petCount + 1);
    setIsAnimating(true);

    // Звуки кота
    if (petCount < 15) {
      const sounds = ["Мурррр...", "Мяу!", "Прррр...", "Мур-мяу!"];
      setCatSound(sounds[Math.floor(Math.random() * sounds.length)]);
      setTimeout(() => setCatSound(""), 2000);
    }

    // Анимация поглаживания
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-16 px-4 bg-[#121212]" id="pet-the-cat">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold font-montserrat mb-3 text-center text-white">
          Погладь <span className="text-[#D35536]">Кота</span>
        </h2>
        <p className="text-center mb-10 text-gray-400 max-w-lg mx-auto">
          Интерактивный кот ждет ваших поглаживаний. Но помните: все коты
          непредсказуемы!
        </p>

        <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <div
              className={`relative w-64 h-64 mb-6 transition-transform duration-300 ${
                isAnimating ? "scale-95" : "scale-100"
              } cursor-pointer hover:scale-105`}
              onClick={petTheCat}
              title="Нажмите, чтобы погладить кота"
            >
              <img
                src={catImages[catMood]}
                alt="Интерактивный кот"
                className="w-full h-full object-contain rounded-full"
              />

              {catSound && (
                <div className="absolute -top-10 right-0 bg-white text-black px-4 py-2 rounded-lg speech-bubble">
                  {catSound}
                </div>
              )}
            </div>

            <div className="text-center mb-4">
              <p className="text-gray-300 mb-2">
                {petCount === 0 && "Кот смотрит на вас с ожиданием..."}
                {petCount > 0 && petCount < 3 && "Кот присматривается к вам"}
                {petCount >= 3 && petCount < 8 && "Кот начинает мурчать"}
                {petCount >= 8 &&
                  petCount < 15 &&
                  "Кот в восторге от ваших поглаживаний!"}
                {petCount >= 15 &&
                  "Кот перевозбуждён и требует личного пространства!"}
              </p>
              <p className="text-gray-400 text-sm">
                Поглаживаний:{" "}
                <span className="text-[#D35536] font-bold">{petCount}</span>
              </p>
            </div>

            <Button
              onClick={petTheCat}
              className={`px-6 py-3 ${
                petCount >= 15
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#D35536] hover:bg-[#B73D23]"
              }`}
              disabled={petCount >= 15}
            >
              {petCount >= 15 ? "Кот отдыхает..." : "Погладить кота"}
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 italic">
              * Все поглаживания осуществляются с согласия кота. Компания не
              несет ответственности за последствия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetTheCat;
