
import { Button } from "@/components/ui/button";

/**
 * Компонент отображения платформ, на которых доступны подкасты
 */
const PodcastPlatforms = () => {
  const platforms = ["Spotify", "Apple Podcasts", "Google Podcasts"];
  
  return (
    <div className="mt-10 text-center">
      <p className="text-sm text-gray-400 mb-4">Доступно на всех популярных платформах</p>
      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map((platform) => (
          <Button 
            key={platform}
            variant="outline" 
            className="border-gray-700 hover:bg-gray-700"
          >
            {platform}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PodcastPlatforms;
