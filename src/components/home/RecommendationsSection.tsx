
import { Button } from "@/components/ui/button";

interface Recommendation {
  avatar: string;
  name: string;
  position: string;
  rating: number;
  comment: string;
  date: string;
}

const RecommendationsSection = () => {
  const recommendations: Recommendation[] = [
    {
      avatar: "https://cdn.poehali.dev/files/85a4343c-cd5e-40b6-90b7-c72ab22b75e1.png",
      name: "Диван Честерфилд",
      position: "Работал с Котом-Дизайнером",
      rating: 4,
      comment: "До работы с котом-дизайнером я был просто диваном. Теперь я - модный арт-объект с художественно размещенной шерстью и креативными царапинами. Правда, теперь я принадлежу коту, а не хозяину дома.",
      date: "5 месяцев назад"
    },
    {
      avatar: "https://cdn.poehali.dev/files/6c94bb18-5dfc-4cf2-8f34-9f5266bbc53b.png",
      name: "Клавиатура Мэханикал",
      position: "Работала с Котом-Программистом",
      rating: 2,
      comment: "asdfghjkl;lkjasdfghhhhhhhhhhhhhhhhhhh7777777777 zzzzzzzzzzzzzzzzz. Простите, это кот. Я хотела сказать, что теперь в моих кнопках достаточно шерсти, чтобы сделать еще одного кота. Не рекомендую!",
      date: "2 недели назад"
    },
    {
      avatar: "https://cdn.poehali.dev/files/adc5c7a5-57c8-444e-b13a-50c70f89b14b.png",
      name: "Штора Тюлевая",
      position: "Работала с Котом-Акробатом",
      rating: 1,
      comment: "Я думала, что буду красиво обрамлять окно. Теперь я — тренажер для кошачьего альпинизма. За последний месяц кот превратил меня из шторы в бахрому. Скоро меня заменят жалюзи.",
      date: "Вчера"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#F5F0E1]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-montserrat mb-3 text-center">
          <span className="text-[#D35536]">Котомендации</span>
        </h2>
        <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Наши клиенты всегда довольны. Ну, почти всегда. Вот что говорят о нас те, кто работал с нашими экспертами.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white text-2xl overflow-hidden">
                  <img src={recommendation.avatar} alt={recommendation.name} className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">{recommendation.name}</h3>
                  <p className="text-xs text-gray-500">{recommendation.position}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-[#D35536]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < recommendation.rating ? "" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "{recommendation.comment}"
              </p>
              <div className="mt-4 text-xs text-gray-400 text-right">{recommendation.date}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-[#D35536] hover:bg-[#B73D23]">
            Смотреть все 238 котомендаций
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
