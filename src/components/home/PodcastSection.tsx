import { Button } from "@/components/ui/button";
import { Coffee, Code } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PodcastCardProps {
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  badge: string;
  badgeColor: string;
  title: string;
  hosts: string;
  duration: string;
  listens: string;
  imageUrl?: string;
  episodes: { title: string; duration: string }[];
}

const PodcastCard = ({
  icon: Icon,
  gradientFrom,
  gradientTo,
  badge,
  badgeColor,
  title,
  hosts,
  duration,
  listens,
  imageUrl,
  episodes,
}: PodcastCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div
        className="relative h-48"
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        )}
        {!imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-16 h-16 text-white opacity-30" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
          <span
            className="px-2 py-1 text-xs rounded-full"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>
          <h3 className="text-xl font-bold mt-2">{title}</h3>
          <p className="text-sm text-gray-300">Ведущие: {hosts}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Button size="sm" variant="ghost" style={{ color: gradientFrom }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Слушать
            </Button>
            <span className="text-sm text-gray-400 ml-2">{duration}</span>
          </div>
          <span className="text-xs text-gray-400">{listens} прослушиваний</span>
        </div>

        <h4 className="font-bold mb-2">Последние эпизоды:</h4>
        <ul className="space-y-2 text-sm">
          {episodes.map((episode, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-700 rounded-md flex justify-between items-center"
            >
              <span>"{episode.title}"</span>
              <span className="text-xs text-gray-400">{episode.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PodcastSection = () => {
  const podcasts = [
    {
      icon: Coffee,
      gradientFrom: "#D35536",
      gradientTo: "#FF9E7D",
      badge: "Новый выпуск",
      badgeColor: "#D35536",
      title: "Пончики и Лапки",
      hosts: "Маркиз и Пушок",
      duration: "32:45",
      listens: "4,802",
      imageUrl:
        "https://cdn.poehali.dev/files/a3762558-353d-4dcd-a3f5-bbba16474f44.png",
      episodes: [
        {
          title: "Идеальная пенка на капучино: наука или мистика?",
          duration: "21:03",
        },
        {
          title: "Почему не надо скидывать чашки со стола: дискуссия",
          duration: "35:17",
        },
        { title: "Пять лучших мест для сна в кофейне", duration: "28:44" },
      ],
    },
    {
      icon: Code,
      gradientFrom: "#6E59A5",
      gradientTo: "#9E8CDE",
      badge: "Популярное",
      badgeColor: "#6E59A5",
      title: "Байты и Когти",
      hosts: "Битик и Персик",
      duration: "45:12",
      listens: "12,345",
      imageUrl:
        "https://cdn.poehali.dev/files/9e621a9f-ffb2-4cf0-9358-6848bd0484a5.png",
      episodes: [
        {
          title: "Как уронить ноутбук и не признаться: гайд",
          duration: "33:18",
        },
        { title: "Топ-10 тёплых мест для сна в офисе", duration: "29:55" },
        {
          title: "Клавиатура: интерактивная игрушка или инструмент?",
          duration: "41:22",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#1A1A1A] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-montserrat mb-3 text-center">
          <span className="text-[#D35536]">МЯУ</span>скаст
        </h2>
        <p className="text-center mb-10 text-gray-400 max-w-2xl mx-auto">
          Слушайте наши еженедельные подкасты, где профессиональные коты делятся
          секретами своего мастерства. Внимание: подкасты содержат много
          мурчания и внезапных пауз на умывание.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcasts.map((podcast, index) => (
            <PodcastCard key={index} {...podcast} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Доступно на всех популярных платформах
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-700 hover:bg-gray-700"
            >
              Spotify
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 hover:bg-gray-700"
            >
              Apple Podcasts
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 hover:bg-gray-700"
            >
              Google Podcasts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
