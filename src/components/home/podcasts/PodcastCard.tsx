import { LucideIcon } from "lucide-react";
import { PodcastCardProps } from "./types";

/**
 * Карточка подкаста с информацией о последних выпусках
 */
const PodcastCard = ({
  icon: Icon,
  title,
  hosts,
  duration,
  listens,
  badge,
  badgeColor,
  gradientFrom,
  gradientTo,
  imageUrl,
  episodes,
}: PodcastCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#2A2A2A] shadow-lg h-full">
      {/* Изображение подкаста */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {badge && (
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Информация о подкасте */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {Icon && <Icon size={24} />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-300 text-sm">Ведущие: {hosts}</p>
          </div>
        </div>

        <div className="flex justify-between text-gray-300 mb-6">
          <span>{duration}</span>
          <span>{listens} прослушиваний</span>
        </div>

        {/* Список последних выпусков - всегда отображается */}
        <div>
          <div className="flex justify-between items-center py-2 px-1 border-b border-gray-700 mb-2">
            <h4 className="text-white font-medium">Последние выпуски</h4>
          </div>

          <div className="space-y-2">
            {episodes?.map((episode, index) => (
              <div
                key={index}
                className="bg-[#222222] hover:bg-[#333333] transition-colors p-3 rounded-md flex justify-between cursor-pointer"
              >
                <p className="text-white text-sm">{episode.title}</p>
                <span className="text-gray-400 text-sm">
                  {episode.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
