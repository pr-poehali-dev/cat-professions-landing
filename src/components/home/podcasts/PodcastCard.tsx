
import { Button } from "@/components/ui/button";
import { PodcastCardProps } from "./types";

/**
 * Компонент карточки подкаста
 */
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
  episodes 
}: PodcastCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div 
        className="relative h-48" 
        style={{ background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
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
          <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: badgeColor }}>{badge}</span>
          <h3 className="text-xl font-bold mt-2">{title}</h3>
          <p className="text-sm text-gray-300">Ведущие: {hosts}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Button size="sm" variant="ghost" style={{ color: gradientFrom }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Слушать
            </Button>
            <span className="text-sm text-gray-400 ml-2">{duration}</span>
          </div>
          <span className="text-xs text-gray-400">{listens} прослушиваний</span>
        </div>
        
        <h4 className="font-bold mb-2">Последние эпизоды:</h4>
        <ul className="space-y-2 text-sm">
          {episodes.map((episode, index) => (
            <li key={index} className="p-2 hover:bg-gray-700 rounded-md flex justify-between items-center">
              <span>"{episode.title}"</span>
              <span className="text-xs text-gray-400">{episode.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PodcastCard;
