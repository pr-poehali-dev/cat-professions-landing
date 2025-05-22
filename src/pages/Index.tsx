import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import ProfessionsSection from "@/components/home/ProfessionsSection";
import WhyCatsSection from "@/components/home/WhyCatsSection";
import CatTermsSection from "@/components/home/CatTermsSection";
import PodcastSection from "@/components/home/PodcastSection";
import PetTheCat from "@/components/home/PetTheCat";
import FaqSection from "@/components/home/FaqSection";
import HireSection from "@/components/home/HireSection";
import Footer from "@/components/home/Footer";

/**
 * Главная страница сайта
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] font-rubik text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="pt-16">
        <HeroSection />
      </div>

      {/* Professions Section */}
      <ProfessionsSection />

      {/* Why Cats Section */}
      <WhyCatsSection />

      {/* Cat Terms Section */}
      <CatTermsSection />

      {/* Podcasts Section */}
      <PodcastSection />

      {/* Pet The Cat Interactive Section */}
      <PetTheCat />

      {/* FAQ Section */}
      <FaqSection />

      {/* Hire a Cat Form */}
      <HireSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
