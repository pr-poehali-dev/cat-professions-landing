import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PodcastCardProps } from "./types";

/**
 * Компонент карточки подкаста
 */
const PodcastCard: React.FC<PodcastCardProps> = ({
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
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {badge && (
          <span
            className="absolute top-2 left-2 text-xs font-bold text-white px-2 py-1 rounded-full"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="bg-[#8B7E66] text-white p-4">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            <Icon size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-xs text-gray-200">Ведущие: {hosts}</p>
          </div>
        </div>

        <div className="flex justify-between text-sm mb-3">
          <span>{duration}</span>
          <span>{listens} прослушиваний</span>
        </div>

        <button
          className="w-full flex items-center justify-between text-sm font-medium py-2 border-t border-white/20"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Последние выпуски</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isExpanded && (
          <div className="mt-2 space-y-2">
            {episodes.map((episode, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-2 rounded flex justify-between text-sm"
              >
                <span className="truncate">{episode.title}</span>
                <span className="flex-shrink-0 ml-2">{episode.duration}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastCard;
