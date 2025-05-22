import { Button } from "@/components/ui/button";

/**
 * Компонент с платформами для подкастов
 */
const PodcastPlatforms = () => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-xl font-bold mb-4">
        Слушайте нас на всех платформах
      </h3>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <Button className="bg-white text-black hover:bg-gray-200 border-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Spotify_logo_without_text.svg"
            alt="Spotify"
            className="w-5 h-5 mr-2"
          />
          Spotify
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200 border-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="YouTube"
            className="w-5 h-5 mr-2"
          />
          YouTube
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200 border-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Apple_Podcasts.svg/640px-Apple_Podcasts.svg.png"
            alt="Apple Podcasts"
            className="w-5 h-5 mr-2"
          />
          Apple Podcasts
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200 border-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Google_Podcasts_icon.svg/1200px-Google_Podcasts_icon.svg.png"
            alt="Google Podcasts"
            className="w-5 h-5 mr-2"
          />
          Google Podcasts
        </Button>
      </div>
    </div>
  );
};

export default PodcastPlatforms;
