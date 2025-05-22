import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Coffee,
  Brush,
  Code,
  Briefcase,
  ChefHat,
  Camera,
  Stethoscope,
} from "lucide-react";
import CatProfession from "./CatProfession";

/**
 * Данные о профессиях котов
 */
export const catProfessions = [
  {
    icon: Coffee,
    title: "Котэ-Бариста",
    description:
      "Дизайн дизайном, а кушац по расписанию. Пончики и кофе - наша специальность!",
    imageUrl:
      "https://cdn.poehali.dev/files/e7ddc298-3324-4230-80c0-7bfead6bd9e7.png",
  },
  {
    icon: Code,
    title: "Кот-Программист",
    description:
      "Делаем код, который работает... иногда. Спим на клавиатуре для повышения производительности.",
    imageUrl: "https://i.imgur.com/P0KLjsE.jpg",
  },
  {
    icon: Brush,
    title: "Кот-Дизайнер",
    description:
      "Все, что я делаю - копирую. Как еще мне учиться? Вдохновение берем из коробок.",
    imageUrl:
      "https://cdn.poehali.dev/files/6e41657f-0d26-4ced-a0fa-65ce9894fbf5.png",
  },
  {
    icon: Briefcase,
    title: "Бизнес-Кот",
    description:
      "Мастер переговоров и ночных пробежек по квартире. Инвестируем в кошачий корм и игрушки.",
    imageUrl:
      "https://cdn.poehali.dev/files/36a26caf-8f2c-4f56-860d-c58f4a97cc44.png",
  },
  {
    icon: ChefHat,
    title: "Кот-Шеф",
    description:
      "Специализируемся на блюдах из рыбы. Главное правило - сначала пробую я, потом гости.",
    imageUrl:
      "https://cdn.poehali.dev/files/38e1edae-2c03-486a-b0f7-b4493d15353f.png",
  },
  {
    icon: Camera,
    title: "Кот-Фотограф",
    description:
      "Лучшие ракурсы - с высоты холодильника. Портфолио состоит из селфи и случайных лап в кадре.",
    imageUrl:
      "https://cdn.poehali.dev/files/abf974eb-e012-422a-a3bf-f30182fff5d4.png",
  },
  {
    icon: Stethoscope,
    title: "Кот-Доктор",
    description:
      "Лечим мурчанием и топтанием. Дополнительная услуга - ночное наблюдение у кровати.",
    imageUrl:
      "https://cdn.poehali.dev/files/03e06680-2c73-46d7-aa73-cf2f00231110.png",
  },
];

/**
 * Секция с профессиями котов
 */
const ProfessionsSection = () => {
  return (
    <>
      {/* Mobile Carousel for Professions */}
      <section className="py-16 px-4 bg-[#F5EFE0] md:hidden" id="professions">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat mb-10 text-center text-[#1A1A1A]">
            Наши <span className="text-[#D35536]">профессионалы</span>
          </h2>

          <Carousel className="w-full">
            <CarouselContent>
              {catProfessions.map((profession, index) => (
                <CarouselItem key={index}>
                  <CatProfession {...profession} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Desktop Grid for Professions */}
      <section
        className="py-16 px-4 bg-[#F5EFE0] hidden md:block"
        id="professions"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat mb-10 text-center text-[#1A1A1A]">
            Наши <span className="text-[#D35536]">профессионалы</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catProfessions.map((profession, index) => (
              <CatProfession key={index} {...profession} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionsSection;
