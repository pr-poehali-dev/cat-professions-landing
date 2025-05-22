import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  User,
} from "lucide-react";

const CatProfession = ({
  icon: Icon,
  title,
  description,
  imageUrl,
}: {
  icon: any;
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-64 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground p-2 rounded-full">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const catProfessions = [
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

  return (
    <div className="min-h-screen bg-[#F5F0E1] font-rubik">
      {/* Hero Section */}
      ... keep existing code ...
      {/* Котомендации - отзывы от предметов */}
      <section className="py-16 px-4 bg-[#F5F0E1]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat mb-3 text-center">
            <span className="text-[#D35536]">Котомендации</span>
          </h2>
          <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
            Наши клиенты всегда довольны. Ну, почти всегда. Вот что говорят о
            нас те, кто работал с нашими экспертами.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white text-2xl overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/85a4343c-cd5e-40b6-90b7-c72ab22b75e1.png"
                    alt="Диван"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Диван Честерфилд</h3>
                  <p className="text-xs text-gray-500">
                    Работал с Котом-Дизайнером
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-[#D35536]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "До работы с котом-дизайнером я был просто диваном. Теперь я -
                модный арт-объект с художественно размещенной шерстью и
                креативными царапинами. Правда, теперь я принадлежу коту, а не
                хозяину дома."
              </p>
              <div className="mt-4 text-xs text-gray-400 text-right">
                5 месяцев назад
              </div>
            </div>
            {/* Review 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white text-2xl overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/6c94bb18-5dfc-4cf2-8f34-9f5266bbc53b.png"
                    alt="Клавиатура"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Клавиатура Мэханикал</h3>
                  <p className="text-xs text-gray-500">
                    Работала с Котом-Программистом
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-[#D35536]">
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "asdfghjkl;lkjasdfghhhhhhhhhhhhhhhhhhh7777777777
                zzzzzzzzzzzzzzzzz. Простите, это кот. Я хотела сказать, что
                теперь в моих кнопках достаточно шерсти, чтобы сделать еще
                одного кота. Не рекомендую!"
              </p>
              <div className="mt-4 text-xs text-gray-400 text-right">
                2 недели назад
              </div>
            </div>
            {/* Review 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white text-2xl overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/adc5c7a5-57c8-444e-b13a-50c70f89b14b.png"
                    alt="Штора"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Штора Тюлевая</h3>
                  <p className="text-xs text-gray-500">
                    Работала с Котом-Акробатом
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-[#D35536]">
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Я думала, что буду красиво обрамлять окно. Теперь я — тренажер
                для кошачьего альпинизма. За последний месяц кот превратил меня
                из шторы в бахрому. Скоро меня заменят жалюзи."
              </p>
              <div className="mt-4 text-xs text-gray-400 text-right">Вчера</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-[#D35536] hover:bg-[#B73D23]">
              Смотреть все 238 котомендаций
            </Button>
          </div>
        </div>
      </section>
      {/* МЯУскаст - подкасты от котов */}
      ... keep existing code ...
    </div>
  );
};

export default Index;
