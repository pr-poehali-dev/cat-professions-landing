
import { podcasts } from "./podcasts/data";
import PodcastCard from "./podcasts/PodcastCard";
import PodcastPlatforms from "./podcasts/PodcastPlatforms";

/**
 * Раздел с подкастами на главной странице
 */
const PodcastSection = () => {
  return (
    <section className="py-16 px-4 bg-[#1A1A1A] text-white">
      <div className="container mx-auto">
        <SectionHeader />
        <PodcastGrid />
        <PodcastPlatforms />
      </div>
    </section>
  );
};

/**
 * Заголовок раздела с подкастами
 */
const SectionHeader = () => (
  <>
    <h2 className="text-3xl font-bold font-montserrat mb-3 text-center">
      <span className="text-[#D35536]">МЯУ</span>скаст
    </h2>
    <p className="text-center mb-10 text-gray-400 max-w-2xl mx-auto">
      Слушайте наши еженедельные подкасты, где профессиональные коты делятся секретами своего мастерства.
      Внимание: подкасты содержат много мурчания и внезапных пауз на умывание.
    </p>
  </>
);

/**
 * Сетка с карточками подкастов
 */
const PodcastGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {podcasts.map((podcast, index) => (
      <PodcastCard key={index} {...podcast} />
    ))}
  </div>
);

export default PodcastSection;
