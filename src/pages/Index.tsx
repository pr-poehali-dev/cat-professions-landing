
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
import { Coffee, Brush, Code, Briefcase, ChefHat, Camera, Stethoscope, User } from "lucide-react";

const CatProfession = ({ 
  icon: Icon, 
  title, 
  description, 
  imageUrl 
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
      description: "Дизайн дизайном, а кушац по расписанию. Пончики и кофе - наша специальность!",
      imageUrl: "https://cdn.poehali.dev/files/e7ddc298-3324-4230-80c0-7bfead6bd9e7.png"
    },
    {
      icon: Code,
      title: "Кот-Программист",
      description: "Делаем код, который работает... иногда. Спим на клавиатуре для повышения производительности.",
      imageUrl: "https://i.imgur.com/P0KLjsE.jpg"
    },
    {
      icon: Brush,
      title: "Кот-Дизайнер",
      description: "Все, что я делаю - копирую. Как еще мне учиться? Вдохновение берем из коробок.",
      imageUrl: "https://cdn.poehali.dev/files/6e41657f-0d26-4ced-a0fa-65ce9894fbf5.png"
    },
    {
      icon: Briefcase,
      title: "Бизнес-Кот",
      description: "Мастер переговоров и ночных пробежек по квартире. Инвестируем в кошачий корм и игрушки.",
      imageUrl: "https://i.imgur.com/YRD2VmK.jpg"
    },
    {
      icon: ChefHat,
      title: "Кот-Шеф",
      description: "Специализируемся на блюдах из рыбы. Главное правило - сначала пробую я, потом гости.",
      imageUrl: "https://i.imgur.com/lFG2o04.jpg"
    },
    {
      icon: Camera,
      title: "Кот-Фотограф",
      description: "Лучшие ракурсы - с высоты холодильника. Портфолио состоит из селфи и случайных лап в кадре.",
      imageUrl: "https://i.imgur.com/1lqITqn.jpg"
    },
    {
      icon: Stethoscope,
      title: "Кот-Доктор",
      description: "Лечим мурчанием и топтанием. Дополнительная услуга - ночное наблюдение у кровати.",
      imageUrl: "https://i.imgur.com/DRELX3i.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E1] font-rubik">
      {/* Hero Section */}
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

      {/* Mobile Carousel for Professions */}
      <section className="py-16 px-4 bg-white md:hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat mb-10 text-center">
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
      <section className="py-16 px-4 bg-white hidden md:block">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat mb-10 text-center">
            Наши <span className="text-[#D35536]">профессионалы</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catProfessions.map((profession, index) => (
              <CatProfession key={index} {...profession} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Cats Section */}
      <section className="py-16 px-4 bg-[#F5F0E1]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat mb-10 text-center">
            Почему коты - <span className="text-[#D35536]">лучшие работники</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Всегда на месте</h3>
              <p>Мы не уходим с рабочего места. Потому что там удобно спать.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Многозадачность</h3>
              <p>Можем одновременно спать, игнорировать вас и думать о еде.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Строгий режим</h3>
              <p>Никогда не забудем напомнить, что пора есть. В 5 утра. Каждый день.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Креативность</h3>
              <p>Находим новые способы сбрасывать вещи со стола каждый день.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hire a Cat Form */}
      <section className="py-16 px-4 bg-[#1A1A1A] text-white">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-bold font-montserrat mb-3 text-center">
            Хотите нанять <span className="text-[#D35536]">кота?</span>
          </h2>
          <p className="text-center mb-8 text-gray-400">
            Заполните форму, и мы свяжемся с вами, когда проснемся
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Ваше имя</label>
                <Input 
                  id="name" 
                  placeholder="Как вас зовут?"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Ваш email"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="profession" className="block mb-2 text-sm">Какой кот вам нужен?</label>
              <select 
                id="profession"
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700"
                required
              >
                <option value="">Выберите профессию</option>
                {catProfessions.map((profession, index) => (
                  <option key={index} value={profession.title}>
                    {profession.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">Сообщение для кота</label>
              <Textarea 
                id="message" 
                placeholder="Опишите, чем будет заниматься кот..."
                className="bg-gray-800 border-gray-700"
                rows={4}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#D35536] hover:bg-[#B73D23]"
            >
              {formSubmitted ? "Мяу! Форма отправлена" : "Нанять кота"}
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              * Все коты работают на фрилансе и приходят когда хотят
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F0E1] py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2025 КотоПрофи · Все права защищены · Оплата только кошачьим кормом
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#D35536]">
              Политика конфиденциальности
            </a>
            <span className="text-gray-600">·</span>
            <a href="#" className="text-gray-600 hover:text-[#D35536]">
              Условия использования
            </a>
            <span className="text-gray-600">·</span>
            <a href="#" className="text-gray-600 hover:text-[#D35536]">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
