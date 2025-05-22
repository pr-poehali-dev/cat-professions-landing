
import { Badge } from "@/components/ui/badge";

/**
 * Компонент с платформами для подкастов
 */
const PodcastPlatforms = () => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-xl font-bold mb-4">Слушайте нас на всех платформах</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-6">
        {platformData.map((platform, index) => (
          <PlatformCard key={index} {...platform} />
        ))}
      </div>
    </div>
  );
};

/**
 * Данные о платформах
 */
const platformData = [
  {
    name: "КотоСфера",
    listeners: "8.5K+",
    color: "#D35536",
    emoji: "🐱",
    isNew: true
  },
  {
    name: "МурлыФМ",
    listeners: "12K+",
    color: "#6E59A5",
    emoji: "🎧",
    isNew: false
  },
  {
    name: "WhiskerCast",
    listeners: "5.2K+",
    color: "#2A9D8F",
    emoji: "🐾",
    isNew: false
  },
  {
    name: "PurrPlay",
    listeners: "7.8K+",
    color: "#457B9D",
    emoji: "📱",
    isNew: true
  }
];

/**
 * Карточка платформы для прослушивания подкастов
 */
interface PlatformCardProps {
  name: string;
  listeners: string;
  color: string;
  emoji: string;
  isNew: boolean;
}

const PlatformCard = ({ name, listeners, color, emoji, isNew }: PlatformCardProps) => {
  return (
    <div 
      className="p-4 rounded-lg border-2 transition-all hover:scale-105 cursor-pointer relative overflow-hidden text-left bg-white text-black"
      style={{ borderColor: color }}
    >
      <div className="flex items-center mb-2">
        <span className="text-3xl mr-2">{emoji}</span>
        <h4 className="font-bold">{name}</h4>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-700">{listeners} слушателей</p>
        {isNew && (
          <Badge className="bg-green-500">Новое</Badge>
        )}
      </div>
      
      <div 
        className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full opacity-10"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default PodcastPlatforms;
